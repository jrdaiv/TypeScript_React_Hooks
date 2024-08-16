import React, { useReducer } from 'react'
import { shoppingCartReducer } from '../hooks/ShoppingCartReducer';


export const ShoppingCart: React.FC = () => {
    const [cart, dispatch] = useReducer(shoppingCartReducer, []);


    const addItem = (item: ShoppingCartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item})
    }
    const removeItem = (id: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id})
    }
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    }


  return (
    <div>
        <h1>Shopping Cart:</h1>
        <ul>
            {cart.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
        <button onClick={() => addItem({id: Date.now(), name: 'Item', price: 10})}>Add Item</button>


    </div>
  )
}

