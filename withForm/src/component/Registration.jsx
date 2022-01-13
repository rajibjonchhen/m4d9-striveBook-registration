// import {Container, Row, Col, Alert} from 'react-bootstrap'
// import {useState} from 'react'

// const Registration =()=>{
//     const [name ,setName ]=useState('')
//     const [surname ,setSurname ]=useState('')
//     const [email ,setEmail ]=useState('')
//     const [password ,setPassword ]=useState('')
//     const [ passwordConfirm,setPasswordConfirm ]=useState('')
//     const [validPw,setValidPw]=useState(false)
//     const [errMsg, setErrMsg]=useState([])
//     const [success,setSuccess]=useState(null)

//     const handleSubmit =(e)=>{
//        e.preventDefault()

//        if (containsSpecialChars(password)) {
//         setValidPw(true)
//       } else {
//         console.log('⛔️ password does NOT contain special characters');
//       }

//       {name.length>2? setSuccess(success+1):setErrMsg([...errMsg,"Name must be longer than 2"])}
//       {surname.length>3? setSuccess(success+1):setErrMsg([...errMsg,"Surname must be longer than 2"])}
//       {email.length>2? setSuccess(success+1):setErrMsg([...errMsg,"Invalid Email"])}
//       {validPw? setSuccess(success+1):setErrMsg([...errMsg,"Password must contain at least 8 chars, 1 digit, 1 letter"])}
//       {passwordConfirm===password? setSuccess(success+1):setErrMsg([...errMsg,"Password should be have the same value as Password"])}
//     //   console.log(name)
//     //   console.log(surname)
//     //   console.log(email)
//     //   console.log(password)
//     //   console.log(passwordConfirm)
//          console.log(validPw)
//       console.log(errMsg)
//     //   console.log(success)
//       if(success===5){
//           setName('')
//           setSurname('')
//           setEmail('')
//           setPassword('')
//           setPasswordConfirm('')
//           setErrMsg([])
//           setSuccess(null)
//       }
      
//     }
    
//     function containsSpecialChars(str) {
//         const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//         return specialChars.test(str);
//       }

    

// console.log(errMsg)
//     return(
//         <Container className='bg-primary' fluid>
//             <Row className='justify-content-center p-5 '>
//                 <Col sm={12} md={10} lg={6} className='bg-light p-5'>
//                 <h1 className='mb-5'>Registration Form</h1>
//                 {errMsg.length>0 && <Alert variant='danger'>

//                    <ul>
//                     { errMsg.map(message=><li>{message}</li>)}
//                     </ul>
//                 </Alert>}
               
//                         <div className='d-flex justify-content-between m-2' >
//                             <label for='name'>Name</label>  
//                             <input id='name' type='text' value={name} onChange={(e)=>setName(e.target.value)} required>
//                               </input>
//                         </div>
                        
//                         <div className='d-flex justify-content-between m-2' >
//                             <label for='surname'>Surname</label>   
//                             <input id='surname' type='text' value={surname} onChange={(e)=>setSurname(e.target.value)} required>
//                              </input>
//                         </div>

//                         <div className='d-flex justify-content-between m-2' >
//                             <label for='email'>Email</label>  
//                             <input id='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required>
//                                 </input>
//                         </div>

//                         <div className='d-flex justify-content-between m-2' >
//                             <label for='password'>Password</label>    <input id='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required>
//                                 </input>
//                         </div>

//                         <div className='d-flex justify-content-between m-2' ><label for='passwordConfirm'>PasswordConfirm</label> 
//                            <input id='passwordConfirm' type='password' value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} required>
//                                </input>
//                         </div>
//                         <button onClick={(e)=>{handleSubmit(e)}}> Submit</button>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Registration