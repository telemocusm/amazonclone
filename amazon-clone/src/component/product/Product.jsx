import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>PRODUCT LIST</h1>
      <ul>
        <li><Link to="/product/01">Product 01</Link></li>
        <li><Link to="/products/02">Product 02</Link></li>
        <li><Link to="/products/03">Product 03</Link></li>
      </ul>
    </div>
  )
}

export default Product