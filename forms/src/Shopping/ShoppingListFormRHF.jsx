import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ShoppingListForm.css';

export default function ShoppingListFormRHF({ submitFunc }) {
  const [formData, setFormData] = useState({
    product: null,
    quantity: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitOptions = {
    product: { required: 'Please enter the product' },
    quantity: { required: 'Please enter the quantity' },
  };

  return (
    <form className='ShoppingListForm' onSubmit={handleSubmit(submitFunc)}>
      <p>
        <label htmlFor='product'>Product: </label>
        <input
          id='product'
          type='text'
          name='product'
          placeholder='apple'
          value={formData.product}
          {...register('product', submitOptions.product)}
        />
      </p>
      {errors.product && <p style={{ color: 'orangered' }}>{errors.product.message}</p>}
      <p>
        <label htmlFor='quantity'>Quantity: </label>
        <input
          id='quantity'
          type='number'
          name='quantity'
          placeholder='69'
          value={formData.quantity}
          {...register('quantity', submitOptions.quantity)}
        />
      </p>
      {errors.quantity && <p style={{ color: 'orangered' }}>{errors.quantity.message}</p>}
      <button>Confirm</button>
    </form>
  );
}
