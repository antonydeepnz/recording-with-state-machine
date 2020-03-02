import React, { useRef } from 'react'
import { observer } from 'mobx-react'
import { types } from 'mobx-state-tree'

export const field = types.model({
  name: types.string,
  value: types.string,
  isPristine: true,
  touched: false
})
.actions(self => ({
  setValue(text){return self.value = text},
  setTouched: () => {self.touched = true}
}))
.views(self => ({
  get setvalue(){return self.value}
}))

export default observer(({ name }) => {
  const ref = useRef(null)

  const self = field.create({
    name: name
  })
  const handleChange = (e) => {
    self.setValue(e.target.value)
  }

  const handleFocus = () => {
    self.setTouched()
 
  }
  return(
    <>
      <input ref={ref}
          onFocus={handleFocus}
          onChange={handleChange}/>
      <p>{self.setvalue}</p>   
      { self.touched && <p>{self.setvalue}</p> }
    </>
  )
})