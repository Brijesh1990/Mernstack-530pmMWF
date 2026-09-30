import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function ContentApp() {
  return (
    <>
        <Container className='w-75 p-5 mt-5'>
            <Row>
                <div className='col-md-5 p-5'>
                    <p>React Router DOM is the standard library for implementing routing in React web applications. It allows you to create Single Page Applications (SPAs) where navigation occurs without a full page reload, maintaining a fast and seamless user experience. </p>
                </div>
                <div className='col-md-6 ms-5 p-5'>
                    <h1 className='fs-2'>Welcome to Home Page</h1>
                    <img src="https://assets-v2.lottiefiles.com/a/43136e14-118a-11ee-afa9-e3a75585f1a0/IbQyW8sGA4.gif" className='img-fluid' />
                </div>
            </Row>
        </Container>
    </>
  )
}
