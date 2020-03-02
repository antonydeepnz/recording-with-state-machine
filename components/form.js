import MobxReactForm from 'mobx-react-form'

import fields from './fields'

const plugins = {}

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