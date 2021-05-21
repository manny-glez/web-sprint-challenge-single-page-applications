import React, { useState } from 'react'

import { Link } from 'react-router-dom'


const initialFormValues = {
  else: ""
}

function Form(props) {
  const { items } = props

  return (
    <div className='form-wrapper'>

    <nav>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>

      <h2 id="build">Build Your Own Pizza</h2>

      <form id="pizza-form" /*onSubmit={submit}*/>

      <div id="buyerName">
      <h3>Your name</h3>
      <label htmlFor='your name'></label>
      <input type="text" id="name-input" name="name" placeholder="First, Last"></input>
      </div>


        <div className="selectSize">
          <h3>Choice of Size</h3><p>Required.</p>
          <label htmlFor='size'></label>
            <select id='size-dropdown' name='size'>
              <option value='1'>Small</option>
              <option value='2'>Medium</option>
              <option vlaue='3'>Large</option>
            </select>
        </div>

        <div className="selectSauce">
          <h3>Choice of sauce</h3> <p>Required.</p>
          <label htmlFor='sauce'></label>
          <p>original Red</p>
          <input type="radio" id="originalRed" name="sauce" value="originalRed"/>
          <p>garlic Ranch</p>
          <input type="radio" id="garlicRanch" name="sauce" value="garlicRanch"/>
          <p>bbq Sauce</p>
          <input type="radio" id="bbqSauce" name="sauce" value="bbqSauce"/>
          <p>spinach alfredo</p>
          <input type="radio" id="spinachAlf" name="sauce" value="SpinachAlf"/>
        </div>

        <div className="Toppings">
          <h3>Add Toppings</h3> <p>Required</p>
          <label htmlFor='toppings'></label>
          <p>pepperoni</p>
          <input type="checkbox" id="pepperoni" name="topping" value="pepperoni"/>
          <p>sausage</p>
          <input type="checkbox" id="sausage" name="topping" value="sausage"/>
          <p>bacon</p>
          <input type="checkbox" id="bacon" name="topping" value="bacon"/>
          <p>onions</p>
          <input type="checkbox" id="onions" name="topping" value="onions"/>
        </div>

        <div className="instructions">
          <h3>Special instructions</h3>
          <label htmlFor='instructions'></label>
          <input type="text" id="special-text" name="instructions" placeholder="anything esle?"/>
        </div>


      </form>

    </div>
  )
}

export default Form