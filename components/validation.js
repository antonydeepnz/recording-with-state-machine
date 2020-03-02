import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string().min(3).max(35).required('needed')
})