import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import faculties from './faculty'
import students from './student'
import products from './product'



function App() {
  const filteredProducts = products.filter(product => product.price > 20000);
  const totalPrice = filteredProducts.reduce((total, product) => total + product.price, 0);

  return (
    <>
    {
      faculties.map((elem)=>(
      <div class="card" style={{width: '18rem'}}>
        <img src={elem.image}class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{elem.name}</h5>
          <p class="card-text">{elem.experience}</p>
          <a href="#" class="btn btn-primary">{elem.email}</a>
        </div>
      </div>
      ))
    }
    {
     students.map((elem)=>(
      <div class="card" style={{width: '18rem'}}>
        <img src={elem.image}class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{elem.name}</h5>
          <p class="card-text">{elem.rollNo}</p>
          <a href="#" class="btn btn-primary">{elem.cgpa}</a>
        </div>
      </div>
      ))
    }
    {
      <div>
        <h1>Products priced over $20,000</h1>
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    }
    {
      <div>
        <h1>total price</h1>
        <ul>
          {totalPrice}
        </ul>
      </div>
    }
    </>
  )
}

export default App
