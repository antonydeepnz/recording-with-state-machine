import { t } from 'i18next'

export default [{
  name: 'name',
  label: 'Name',//t('name'),
  // placeholder: 'Insert Email',
  error: 'dfsdfdf',//t('name.error')
  rules: "required|number|between:5,25",
},
{
  name: 'telephone',
  label: 'Tel',//t('telephone'),
  // placeholder: 'Insert Email',
  error: '111111',//t('name.error')
  rules: "required|string|between:5,25",
},
{
  name: 'email',
  label: t('email'),
  placeholder: 'Insert Email',
},
{
  name: 'email1',
  label: t('email'),
  placeholder: 'Insert Email',
},
{
  name: 'email2',
  label: t('email'),
  placeholder: 'Insert Email',
},
];