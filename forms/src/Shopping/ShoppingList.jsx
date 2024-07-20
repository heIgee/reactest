import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ShoppingListForm from './ShoppingListForm';
import ShoppingListFormRHF from './ShoppingListFormRHF';

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: 'Banana', quantity: 12 },
    { id: uuid(), product: 'Apple', quantity: 14 },
  ]);
  console.log(items);

  const addItem = (item) => {
    setItems((prev) => [...prev, { ...item, id: uuid() }]);
  };

  const removeItem = (item) => {
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li
            key={i.id}
            onContextMenu={(ev) => {
              ev.preventDefault();
              removeItem(i);
            }}
          >
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      {Array.from({ length: 1 }, (i) => (
        <ShoppingListFormRHF key={i} submitFunc={addItem} />
      ))}
    </>
  );
}
