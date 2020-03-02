import MobxReactForm from 'mobx-react-form'
import yup from 'mobx-react-form/lib/validators/YUP';
import * as Yup from 'yup';

import fields from './fields'
import recordShema from './validation'

const plugins = {
  // yup: yup({
  //   package: Yup,
  //   schema: recordShema,
  //   extend: ({ validator, form }) => {
  //    // access yup validator and form instances
  //   },
  // })
  }

const hooks = {
  onSuccess(form) {
    alert("Form is valid! Send the request here.");
    // get field values
    console.log("Form Values!", form.values());
  },
  onError(form) {
    alert("Form has errors!");
    // get all form errors
    console.log("All form errors", form.errors());
  }
};

const RecordForm = new MobxReactForm({ fields }, { plugins, hooks });

export default RecordForm;