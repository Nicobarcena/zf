import React from 'react'
import './Card.css'
import remeras from "../Data/Product.json"
const Card = () => {
  return (
    <>
    <p className='p'>Unifomes Destacados</p>
    <div className='product-container'>
      <div className='producto'>
        <img src={remeras[0].imgUrl} alt="" />
        <div className='producto-info'>
          <h2>{remeras[0].name}</h2>
          <p className='precio'>
            $ {remeras[0].price} 
          </p>
          <p className='envio_gratis'>Envio gratis</p>
          <button className='btn' >Comprar</button>
        </div>
      </div>

      <div className='producto'>
        <img src={remeras[2].imgUrl} alt="" />
        <div className='producto-info'>
          <h2>{remeras[2].name}</h2>
          <p className='precio'>
            $ {remeras[2].price} 
          </p>
          <p className='envio_gratis'>Envio gratis</p>
          <button className='btn'>Comprar</button>
        </div>
      </div>
      <div className='producto'>
        <img src={remeras[3].imgUrl} alt="" />
        <div className='producto-info'>
          <h2>{remeras[3].name}</h2>
          <p className='precio'>
            $ {remeras[3].price} 
          </p>
          <p className='envio_gratis'>Envio gratis</p>
          <button className='btn'>Comprar</button>
        </div>
      </div>
      <div className='producto'>
        <img src={remeras[4].imgUrl} alt="" />
        <div className='producto-info'>
          <h2>{remeras[4].name}</h2>
          <p className='precio'>
            $ {remeras[4].price}  
          </p>
          <p className='envio_gratis'>Envio gratis</p>
          <button className='btn'>Comprar</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card