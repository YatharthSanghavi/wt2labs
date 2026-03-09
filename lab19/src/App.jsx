// import { useEffect, useState } from 'react'
import './App.css'
import Faculty from './component/faculty'

function App() {
  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        {data.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.images[0]} alt={product.title} style={{ width: '100px' }} />
            </li>
          ))}
      </p> */}
      {/* <Calculator/> */}
      <Faculty/>
    </>
  )
}

export default App
