import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
    <section className='herobg d-flex justify-content-center align-items-center'>
<Container>
<Row>
<div className='d-flex flex-column justify-content-start align-items-start'>
    <h4 className='fw-bold'>Doctor Recommended Hair loss Treatment </h4>
    <h2 className='pt-2'>Know The Root Cause <span className='d-lg-block'>Of Your Hair Loss</span></h2>
    <h3 className='pt-1'>100% saw results* in 3 Months</h3>
    <button className=' nav-btn py-2 px-2 mt-2'>Take The Hair Test</button>
</div>
</Row>

</Container>
    </section>
    </>
  )
}

export default Hero