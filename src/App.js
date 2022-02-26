import React, { useState, useEffect } from "react";
import {Switch, Route, Link} from 'react-router-dom'
import OrderForm from './components/OrderForm'

import * as yup from "yup";
import formSchema from "./validation/formSchema";




const initialFormValues = {
  name: "",
  size: "",
  toppings: "",
  notes: "",
  pepperoni: false,
  olives: false,
  jalapeno: false,
  bacon: false,
}
const initialFormErrors = {
  name: '',
  size: '',
  toppings: '',
}
const initialDisabled = true

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value  
    })
  }

    useEffect(() => {
      formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])
    
  
  return (
    <div className="container">
      <header>
        <h1>Lambda Eats</h1>
      </header>
      <Link id='order-pizza' to="/pizza">
        <button type="button"  >
          Want Pizza?
        </button>
      </Link>
      <Switch>
        <Route path="/">
          <OrderForm
            values={formValues}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
