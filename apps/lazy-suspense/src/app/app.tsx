import React from 'react';
import ProductsList from './ProductList';

export function App() {
  const [count, setCount] = React.useState(0);
  const [showProducts, setShowProducts] = React.useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="border text-cyan-900 text-center">
      <h1>The current count is {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <br />
      <br />
      <button onClick={() => setShowProducts((prev) => !prev)}>
        {showProducts ? 'Hide' : 'Show'} Products
      </button>
      <br />
      <br />
      <div>{showProducts && <ProductsList />}</div>
    </div>
  );
}

export default App;
