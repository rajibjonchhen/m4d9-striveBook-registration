import {Container, Row, Col, Alert} from 'react-bootstrap'
import {useState} from 'react'
import {useForm} from 'react-hook-form' 
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15).required(),
    passordConfirm: yup.string().oneOf([yup.ref("password"),null])
    })
    
const Registration =()=>{
 
const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(schema),
})

const submitForm = (data) => {}

    return(
        <Container className='bg-primary' fluid>
            <Row className='justify-content-center p-5 '>
                <Col sm={12} md={10} lg={6} className='bg-light p-5'>
                <h1 className='mb-5'>Registration Form</h1>
                {errors && <Alert variant='danger'>
                   <ul className='text-left'>
                    {errors.firstName && <li>{errors.firstName?.message}</li>}
                    {errors.lastname && <li>{errors.lastname?.message}</li>}
                    {errors.email && <li>{errors.email?.message}</li>}
                    {errors.password && <li>{errors.password?.message}</li>}
                    {errors.passwordConfirm && <li>Password Should match</li>}
                    </ul>
                </Alert>}
               
                <form onSubmit={handleSubmit((submitForm)=>{
                    
                })}>
                        <div className='d-flex justify-content-between m-2' >
                            <label for='name'>Name</label>  
                            <input id='name' type='text' ref={register} placeholder='First Name'>
                              </input>
                        </div>
                        <div className='d-flex justify-content-between m-2' >
                            <label for='lastName'>Surname</label>   
                            <input id='lastName' type='text' ref={register} placeholder='Last Name'>
                             </input>
                        </div>

                        <div className='d-flex justify-content-between m-2' >
                            <label for='email'>Email</label>  
                            <input id='email' type='email' ref={register} placeholder='Email'>
                                </input>
                        </div>

                        <div className='d-flex justify-content-between m-2' >
                            <label for='password'>Password</label>    
                            <input id='password' type='password' ref={register} placeholder='password'>
                                </input>
                        </div>

                        <div className='d-flex justify-content-between m-2' >
                            <label for='passwordConfirm'>PasswordConfirm</label> 
                           <input id='passwordConfirm' type='password' ref={register} placeholder='re-password'>
                               </input>
                        </div>
                        <button> Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Registration