import React from 'react';
import ProductsList from './ProductList';

export function App() {
  const [count, setCount] = React.useState(0);
  const [showProducts, setShowProducts] = React.useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col gap-5 p-5 border text-cyan-900 w-1/2 m-5 ">
      <div className="flex gap-5 justify-center border p-5">
        <h1 className="text-center">The current count is {count}</h1>
        <div>
          <button
            className="w-[50px] border hover:bg-cyan-200 active:bg-cyan-100 rounded"
            onClick={decrement}
          >
            -
          </button>
          <button
            className="w-[50px] border hover:bg-cyan-200 active:bg-cyan-100 rounded"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 p-5 border">
        <button
          className="w-[250px] border hover:bg-cyan-200 active:bg-cyan-100 rounded"
          onClick={() => setShowProducts((prev) => !prev)}
        >
          {showProducts ? 'Hide' : 'Show'} Products
        </button>
        <div>{showProducts && <ProductsList />}</div>
      </div>
    </div>
  );
}

export default App;
