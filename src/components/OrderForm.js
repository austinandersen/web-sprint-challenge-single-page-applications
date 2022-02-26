import React, {useEffect} from 'react';
import {Switch, Link, Route} from 'react-router-dom'
import Summary from "./OrderSummary";




const OrderForm = (props) => {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props
  

  const handleChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    submit()
    
  }

  useEffect(() => {
    console.log(values)
  }, [values])


   return (
    <form id='pizza-form'className='order-pizza' onSubmit={handleSubmit}>
      <div className='form inputs'> 
      <label id='name-input'>Input your Name
        <input  
          value={values.name}
          onChange={handleChange}
          name='name'
          type='text'
        />
      </label>

      <label id='size-dropdown'>Choose Pizza Size
        <select  
          onChange={handleChange}
          value={values.size}
          name='size'
          type="dropdown"
        >
          <option value=''>- Select an option -</option>
          <option value='Large'>Large</option>
          <option value='Medium'>Medium</option>
          <option value='Small'>Small</option>
        </select>
      </label>
      </div>
      
    <div className='toppings checkboxes'>
        <h4>Select Toppings</h4>
        <label>Pepperoni
          <input
          type='checkbox'
          name='pepperoni'
          checked={values.pepperoni}
          onChange={handleChange}
          />
        </label>

        <label>Olives
          <input
            type='checkbox'
            name='olives'
            checked={values.olives}
            onChange={handleChange}
          />
        </label>

        <label>Jalapeno
          <input
            type='checkbox'
            name='jalapeno'
            checked={values.jalapeno}
            onChange={handleChange}
          />
        </label>

        <label>Bacon
          <input
            type='checkbox'
            name='bacon'
            checked={values.bacon}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className='notes'> 
      <label>Special Instrutions
        <input id='special-text'
          value={values.notes}
          onChange={handleChange}
          name='notes'
          type='text'
        />
      </label>
      </div>

      <div className='form-submit'>
        <h2>Add to Order</h2>
        <button disabled={disabled}>submit</button>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.toppings}</div>
        </div>
      </div>

      <div className='form-submit'> 
      <Link to="/pizza">
        <button disabled={disabled}>Add to Order</button>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.toppings}</div>
        </div>
      </Link>
      <Switch>
        <Route path="/pizza">
          <Summary
          />
        </Route>
      </Switch>
      </div>
    </form>
    
  )
}


export default OrderForm;