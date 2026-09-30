import React from 'react'
import { Container,Row,Button } from 'react-bootstrap'
export default function ButtonApp() {
  return (
    <>
     <Container className='bg-success p-5 mt-5 rounded-3'>
     <h1 className='text-white'>Container with buttons and icons</h1>
     
     <Row className='gap-5'>

        <div className='col-md-3 p-3 shadow bg-white'>
        <Button className='btn btn-lg btn-outline-danger bg-white'>click Me <span className='bi bi-person'></span></Button>   
        </div>

        <div className='col-md-3 p-3 shadow bg-white ms-3'>
         <Button>click Me <span className='bi bi-person'></span></Button>   
        </div>
        <div className='col-md-3 p-3 shadow bg-white ms-3'>
             <Button className='btn btn-lg btn-outline-danger bg-white'>click Me <span className='bi bi-cart'></span></Button> 
        </div>
        <div className='col-md-3 p-3 shadow bg-white ms-0'>
             <Button className='btn btn-lg btn-outline-warning bg-white'>click Me <span className='bi bi-cart'></span></Button> 
        </div>

         <div className='col-md-3 p-3 shadow bg-white ms-3'></div>
        <div className='col-md-3 p-3 shadow bg-white ms-3'></div>
     </Row>
     </Container>
    </>
  )
}
