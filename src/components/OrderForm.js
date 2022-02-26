import React, {useEffect} from 'react';




const OrderForm = (props) => {
  const {
    values,
    submit,
    change,
    //disabled,
    //errors,
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
    <form className='order-pizza' onSubmit={handleSubmit}>
      <div className='form inputs'> 
      <label>Input your Name
        <input
          value={values.name}
          onChange={handleChange}
          name='name'
          type='text'
        />
      </label>

      <label>Choose Pizza Size
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

      <div className='special-text'> 
      <label>Special Instrutions
        <input
          value={values.notes}
          onChange={handleChange}
          name='notes'
          type='text'
        />
      </label>
      </div>


    </form>
  )
}


export default OrderForm;