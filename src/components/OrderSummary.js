import React from 'react';

function Summary ({ details }) {
  if (!details) {
    return <h3>Working fetching your order summary...</h3>
  }

  return (
    <div className='pizza-form'>
      <p>Name: {details.name}</p>
      <p>Size: {details.size}</p>
      <p>Toppings: {details.toppings}</p>
      <p>Notes: {details.notes}</p>
    </div>
  )
}

export default Summary