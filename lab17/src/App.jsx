// import { useEffect, useState } from 'react'
import './App.css'
import Calculator from './component/Calculator'

function App() {
  // const [count, setCount] = useState(0)
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result.products);
  //     });
  // }, []);

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
      <Calculator/>
    </>
  )
}

export default App
