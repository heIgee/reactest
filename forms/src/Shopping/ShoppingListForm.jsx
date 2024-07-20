import { useState } from 'react';
import './ShoppingListForm.css';

export default function ShoppingListForm({ submitFunc }) {
  const [formData, setFormData] = useState({
    product: null,
    quantity: null,
  });

  const [validation, setValidation] = useState({
    isValid: true,
    field: null,
    message: null,
  });
  console.log(validation);

  const handleChange = (ev) => {
    setFormData((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const validateForm = () => {
    if (!formData.product) {
      setValidation({
        isValid: false,
        field: 'product',
        message: 'Please enter the product',
      });
      return;
    }
    if (!formData.quantity) {
      setValidation({
        isValid: false,
        field: 'quantity',
        message: 'Please enter the quantity',
      });
      return;
    }
    setValidation({ isValid: true });
    submitFunc(formData);
  };

  return (
    <form className='ShoppingListForm'>
      <p
        style={
          !validation.isValid && validation.field === 'product'
            ? { color: 'orangered' }
            : {}
        }
      >
        <label htmlFor='product'>Product: </label>
        <input
          id='product'
          type='text'
          name='product'
          placeholder='apple'
          value={formData.product}
          onChange={(ev) => handleChange(ev)}
        />
      </p>
      {!validation.isValid && validation.field === 'product' && (
        <p style={{ color: 'orangered' }}>{validation.message}</p>
      )}
      <p
        style={
          !validation.isValid && validation.field === 'quantity'
            ? { color: 'orangered' }
            : {}
        }
      >
        <label htmlFor='quantity'>Quantity: </label>
        <input
          id='quantity'
          type='number'
          name='quantity'
          placeholder='69'
          value={formData.quantity}
          onChange={(ev) => handleChange(ev)}
        />
      </p>
      {!validation.isValid && validation.field === 'quantity' && (
        <p style={{ color: 'orangered' }}>{validation.message}</p>
      )}
      <button type='button' onClick={validateForm}>
        Confirm
      </button>
    </form>
  );
}
