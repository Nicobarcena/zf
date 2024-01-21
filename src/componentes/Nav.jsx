import React, {  useEffect, useState } from 'react'
import {Link} from "react-scroll"
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useScrollPosition } from '../Hooks/scrollPosition'

const Nav = () => {
    const[navOpen, setNavOpen] = useState(false);
    const[windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    
    const detectDimension = () =>{
        setWindowDimension(
           { width: window.innerWidth,
            height: window.innerHeight,
        })
    }
    useEffect(()=>{
        window.addEventListener("resize", detectDimension)
        windowDimension.width > 769 && setNavOpen (false)
        return () => {
            window.removeEventListener("resize", detectDimension)
        }
    },[windowDimension])
    const links = [
        {
            id:1,
            link:"Home",
        },
        {
            id:2,
            link:"Tienda",
        },
        {
            id:3,
            link:"Uniformes",
        },
        {
            id:4,
            link:"QuienesSomos",
        },

    ];
    const scrollPosition = useScrollPosition();
    return (
        <div className={navOpen
            ? "navopen"
            : scrollPosition > 0
            ? "navOnScroll"
            : "navbar"}>
        {!navOpen && <p className='logo'>Foja Zero</p>}
        {!navOpen && windowDimension.width <769 ? ( <FontAwesomeIcon size="xl" style={{color:"#ffffff"}} icon={faBars} onClick={()=> setNavOpen(!navOpen)} /> )
        : windowDimension.width <769 && (<FontAwesomeIcon icon={faX} size="xl" style={{color:"#ffffff"}} onClick={()=> setNavOpen(!navOpen)} />)}
        {navOpen && (
                <ul className='linksconteiner' > 
                    {links.map((x) => {
            return (
                <div>
                    <Link
                    onClick={() => setNavOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={"navLink"}
                    >
                    {x.link === "QuienesSomos" ? "Quienes Somos" : x.link}
                    </Link>
            <div className="border"></div>
            </div>
        );
        })}
    </ul>
    )}
    {windowDimension.width > 769 &&
     <ul className='linksconteiner' > 
     {links.map((x) => {
return (
 <div>
     <Link
     onClick={() => setNavOpen(false)}
     to={x.link}
     smooth
     duration={500}
     className={"navLink"}
     >
     {x.link === "QuienesSomos" ? "Quienes Somos" : x.link}
     </Link>
<div className="border"></div>
</div>
);
})}
<Link oonClick={() => setNavOpen(false)}
     to= "Contacto"
     smooth
     duration={500}
     className={"contacto"}>Contacto</Link>
</ul>
    }

        </div>
    )
}

export default Nav