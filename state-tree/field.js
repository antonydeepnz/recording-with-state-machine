import React from 'react'
import { observer } from 'mobx-react'
import { types } from 'mobx-state-tree'

const field = types.model({
  name: types.string,
  value: '',
  isPristine: true,
  touched: false
})
.actions(self => ({
  setValue(text){self.value = text}
}))

export default observer(({ name }) => {
  const self = field.create({
    name: name
  })
  const handleChange = (e) => {
    self.setValue(e.target.value)
  }
  return(
    <>
      <input value={self.value}
          onChange={handleChange}/>
    </>
  )
})