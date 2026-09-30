import React from 'react'
import { Container } from 'react-bootstrap'
import ButtonApp from './ButtonApp'
export default function ContainerApp() {
  return (
    <>
     <Container fluid className='bg-success p-5 mt-0 rounded-3'>
     <h1 className='text-white'>Container</h1>
     </Container>

     <Container className='bg-success p-5 mt-5 rounded-3'>
     <h1 className='text-white'>Container</h1>
     </Container>
     
     <ButtonApp />
    </>
  )
}
