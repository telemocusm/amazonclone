import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>PRODUCT LIST</h1>
      <ul>
        <li><Link to="/product-details/01">Product 01</Link></li>
        <li><Link to="/product-details/02">Product 02</Link></li>
        <li><Link to="/product-details/03">Product 03</Link></li>
      </ul>
    </div>
  )
}

export default Product