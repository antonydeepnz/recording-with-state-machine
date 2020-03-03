import React, { useEffect } from 'react'
import { render } from 'react-dom'
import './style.css'
import i18next from 'i18next'
import axios from 'axios'

import Hello from './components/hellostage'

import Form from './components/hellostage' 
import form from './components/form'

import Field, {f} from './state-tree/field'

const getData = async () => {
    const data = await axios.get(`http://www.omdbapi.com/?apikey=2e8a9edb&t=avengers`)
    await console.log(data)
  }


const App = () => {
  useEffect(() => (getData()),[])

  return(
    <div className={''}>
      <Form form={form} />
    </div>
  )
}

render(
    <App i18next={i18next} />, document.getElementById('root'))
