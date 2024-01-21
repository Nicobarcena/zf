import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='todo'>
      <p className='redes'>Redes Socilales 
      <a className='ig' href="https://www.instagram.com/fojazero.ok/?hl=es-la">
      <FontAwesomeIcon icon={faInstagram} size= "xl" /> /Fojazero.ok
      </a>
      <FontAwesomeIcon className='ws' icon={faWhatsapp} size= "xl" /> 54 9 3562 51-2725
      </p>
      <div className='direccion'>
        <p>Codoba, Cordoba, Argentina</p>
        <p>General Paz</p>
        <p>5000</p>
      </div>
      <div className='conocenos'>
      <p>Conoce nuestros <br /> productos</p>
      </div>
    </div>
  )
}

export default Contact