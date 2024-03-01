import React from 'react'
import { Container } from 'react-bootstrap'
import Google from '../assets/Images/Google.png'
import Verified from '../assets/Images/Verified.png'
import Rating from '../assets/Images/Rating.png'

const Slider1 = () => {
  return (
    <>
    <section>
        <Container>
            <div className='d-flex justify-content-start align-items-center py-4'>
                <img src={Google} alt="Googe logo" />
                <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='mb-0'>4.5</p>
                    <img src={Rating} alt="Rating" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={Verified} alt="Verified" />
                    <p className='mb-0'>100k+ reviews</p>
                </div>
                </div>

            </div>


        </Container>
    </section>
    </>
  )
}

export default Slider1