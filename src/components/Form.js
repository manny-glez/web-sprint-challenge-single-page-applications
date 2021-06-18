import React, { useState, useEffect } from 'react'
import formSchema from "../validation/formSchema"
import * as yup from 'yup'
import axios from 'axios'

function Form() {
  const [form, setForm] = useState({name: '', size: '', sauce: '', pepperoni: false, sausage: false,  bacon: false, chicken: false, specialInstruction: '',})
  const [errors, setErrors] = useState({name: '', size: '', sauce: '', pepperoni: '', sausage: '',  bacon: '', chicken: '', specialInstruction: '',})
  const [disabled, setDisabled] = useState(true)
  
  const setFormErrors = (name, value) => {
    yup.reach(formSchema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const change = event => {
    const { checked, name, value, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setForm({ ...form, [name]: valueToUse })
  }

  const submit = event => {
    event.preventDefault()
    const newOrder = { name: form.name.trim(), size:form.size, sauce:form.sauce, pepperoni:form.pepperoni, sausage:form.sausage, bacon:form.bacon, chicken: form.chicken,  specialInstruction: form.specialInstruction }
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setForm({name: '', size: '', sauce: '', pepperoni: false, sausage: false,  bacon: false, chicken: false, specialInstruction: '',})
      })
      .catch(err => {
        console.log(err)
      })
  }

    useEffect(() => {
      formSchema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

  return (
    <>
      <div className="form-hero">
        <div className="form-hero-text">
          <h2>Make an order</h2>
        </div>
      </div>

      <div className="form-container">
        <h2 id="Build-pizza">Build your own pizza</h2>

        <form onSubmit={submit} id="pizza-form">

          <div className="input-class">
            <h3>Your name</h3>
            <label htmlFor="your name"></label>
            <input onChange={change} id="name-input" type="text" name="name" placeholder="Your Name" value={form.name} ></input>
          </div>
          <div style={{ color: 'red' }}>{errors.name}</div>

          <div className="input-class">
            <h3>Choice of size</h3>
            <label htmlFor="size of pizza"></label>
            <select onChange={change} value={form.size} id="size-dropdown" name="size">
              <option value="">--Slelect Size--</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div className="input-class">
            <h3>Choice of Sauce</h3>
              <label htmlFor="sauce choice"></label>
              <p>Original Red</p>
              <input onChange={change} checked={form.sauce === "originalRed"} type="radio" id="originalRed" name="sauce" value="originalRed"/>

              <p>Garlic Ranch</p>
              <input onChange={change} checked={form.sauce === "garlicRanch"}  type="radio" id="garlicRanch" name="sauce" value="garlicRanch" />

              <p>bbq sauce</p>
              <input onChange={change} checked={form.sauce === "BBQ"} type="radio" id="BBQ" name="sauce" value="BBQ" />

              <p>Spinach Alfredo</p>
              <input onChange={change} checked={form.sauce === "spinachAlfredo"} type="radio" id="spinachAlfredo" name="sauce" value="spinachAlfredo" />
          </div>

          <div className="input-class">
            <h3>Add Toppings</h3>
            <label htmlFor="toppings"></label>
            <p>Pepperoni</p>
            <input onChange={change} checked={form.pepperoni} type="checkbox" id="pepperoni" name="pepperoni" value="pepperoni" />

            <p>Sausage</p>
            <input onChange={change} checked={form.sausage} type="checkbox" id="sausage" name="sausage" value="sausage" />

            <p>Canadian Bacon</p>
            <input onChange={change} checked={form.bacon} type="checkbox" id="bacon" name="bacon" value="bacon" />

            <p>Grilled Chiken</p>
            <input onChange={change} checked={form.chicken} type="checkbox" id="chiken" name="chicken" value="chicken" />
          </div>

          <div className="input-class">
            <h3>Special Instructions</h3>
            <label htmlFor="instructions"></label>
            <input onChange={change} id="special-text" name="specialInstruction" type="text" placeholder="Anything Else?" value={form.specialInstruction}></input>
            <div style={{ color: '#b08f23' }}>{errors.specialInstruction}</div>
          </div>

          <div className="add-to-order">
            <button disabled={disabled}>Add to Order</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Form;