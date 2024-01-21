import React from 'react'
import "./Home.css"
import { Link } from 'react-scroll'
  
const Home = () => {
  
 return (
    
    <div className='home'>  
    <div className='text'>
    <h2>DONDE TODO EMPIEZA</h2>
    <img src={require("../screens/comienzo.png")} alt="" />
    
    </div>
      <div className='ctaconteiner'>
        <Link className='llamar'
     to= "/Uniformes"
     smooth
     duration={500}
     
        >Ir a nuestra tienda</Link>
        <Link className='llamar'
         to= "Contacto"
         smooth
         duration={500}>Contacta con nosotros</Link>
      </div>
    </div>

 )
}

export default Home