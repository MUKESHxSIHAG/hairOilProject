
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx'
import Whatsapp  from '../assets/Images/whatsapp.png';

const Navbar = () => {
    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <section className='bg-hero'>
            <Container>
                <div className='d-flex justify-content-between py-1 align-items-center' >
                   
                        <p className=' fw-bold mb-0'>Treet</p>
                 

                    <h3 className='position-relative z-3 d-lg-none text-black' onClick={first ? shownav : hidenav}>  {first ? <RxHamburgerMenu /> : <RxCross1 />}  </h3>
                    <ul className={first ? 'd-flex justify-content-center align-items-center gap-5 nav_bar pt-2 ps-0' : "d-flex ps-0 gap-5 nav_bar pt-2 show"} >
                        <button className=' text-uppercase px-2  nav-btn'>Take the hair test</button>
                        <Link><img height={26} width={26} src={Whatsapp} alt="Whatsapp" /></Link>
                    </ul>

                </div>


                <div>
                    
                </div>


            </Container>
        </section>
    )
}

export default Navbar
