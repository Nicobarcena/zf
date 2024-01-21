import React, { useEffect, useRef, useState } from 'react'
import './Carrusel.css'
import Imagenes from './Imagenes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
const Carrusel = () => {
    const listRef = useRef()
    const [currentIdex, setcurrentIdex] = useState(0)

    useEffect(() => {
        const listNode = listRef.current;
        const liNode = listNode.querySelectorAll('li')[currentIdex];
        if (liNode && liNode instanceof HTMLElement) {
          liNode.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, [currentIdex]);

    const scrollImage = (direction) => {
        if(direction === 'prev'){
            setcurrentIdex(curr => {
                const isFristSlide = currentIdex === 0
                return isFristSlide ? 0: curr -1
            })
        } else{
            const isLastSlide = currentIdex === Imagenes.lenght - 1
            if(!isLastSlide){
                setcurrentIdex(curr => curr +1)
            }
        }
    }
    return (
        <div className='contenedor'>

        <div className='main-container'>
            <div className='slider-container'>
                <div className='leftArrow' onClick={()=> scrollImage('prev')}><FontAwesomeIcon icon={faCircleArrowLeft} style={{color: "#859867",}} size = 'xl' /></div>
                <div className='rightArrow' onClick={()=> scrollImage('next')}><FontAwesomeIcon icon={faCircleArrowRight} style={{color: "#859867",}}  size = 'xl' /></div>
                <div className='container-images'>
                    <ul ref={listRef}>
                        {Imagenes.map((item) => {
                            return (
                                <li key={item.id}>
                                    <img src={item.Foto1} width={860} height={709} alt='' />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carrusel