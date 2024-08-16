import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
  const { id, title, price, description, caregory, image } = product

  const navigate = useNavigate();


  return (
    <div className='card'>
      <div className='flex-row' style={{ alignItems: "center", justifyContent: "center" }}>
        <img className='productImg' src={image} alt='' />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <h3 className='proTitle'>{title}</h3>
        <h2>{price} tl</h2>
      </div>
      <div className='flex-row' style={{ alignContent: "center", justifyContent: "center" }}>
        <button className='detayButton' onClick={() => navigate("/product-details/" + id)}>Detayına Git</button>
      </div>
    </div>
  )
}

export default Product
