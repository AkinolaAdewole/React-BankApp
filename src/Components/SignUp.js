import React, { useEffect, useState } from 'react'
import kudas1 from '../pics/kudas12.jpg'
import myStyles from '../myStyles/Signup'
import { useNavigate } from 'react';


const SignUp = () => {
  let Navigate=useNavigate()
  const[firstname, setfirstname]=useState("")
  const[lastname, setlastname]=useState("")
  const[email, setemail]=useState("")
  const[phonenumber, setphonenumber]=useState("")
  const[password, setpassword]=useState("")
  const[allUsers, setallUsers]=useState([])

  useEffect(()=>{
    if(localStorage.ade){
      let b = JSON.parse(localStorage.ade)
       setallUsers(b)
    } else{
      setallUsers([])
    }
    
  }, [])

  

  const submit=()=>{
    if(firstname!=="" && lastname!==""){
     let acctno =`222${ Math.floor(Math.random()*10000)}`
    //  let bvn =`3434${Math.floor(Math.random()*10000)}`
     let user={firstname,lastname, email, phonenumber, password, acctno,}
     
     
     setallUsers(()=>{
      let applicant =[...allUsers, user]
      alert('you have successfully registered')
     Navigate('/login')
     localStorage.ade=JSON.stringify(applicant) 
     return applicant
    }) 
    
    }
    
  }


  
  return (
    <>
  <div className='d-flex'>

  <div style={myStyles.form1} >
    
    
    <div style={myStyles.form12}>
    
    
    <div className='col-md-4 mb-3' >
    <label htmlFor="" style={myStyles.color} className='h4 fw-bold'>FIRSTNAME</label>
    <input type="text" onChange={(e)=>setfirstname(e.target.value)} className='form-control' />
    </div>
    
    <div className='col-md-4 mb-3'>
      <label htmlFor="" style={myStyles.color} className='h4 fw-bold'>LASTNAME</label>
      <input  type="text" onChange={(e)=>setlastname(e.target.value)} className='form-control' required />
    </div>

    <div className='col-md-4 mb-3'>
      <label  style={myStyles.color} className='h4 fw-bold'>E-MAIL</label>
      <input onChange={(e)=>setemail(e.target.value)} className='form-control' type="text" />
    </div>

    <div className='col-md-4 mb-3' >
      <label style={myStyles.color} className='h4 fw-bold'>PHONE NUMBER</label>
      <input type="number" className='form-control' onChange={(e)=>setphonenumber(e.target.value)} />
    </div>

    <div className='col-md-4 mb-3' >
      <label style={myStyles.color} className='h4 fw-bold'>PASSWORD</label>
      <input type="text" className='form-control' onChange={(e)=>setpassword(e.target.value)} />
    </div>


    <button class="btn btn-primary" type="submit" onClick={submit}>SIGN UP</button>
    
    </div>
    </div>
      
      <div style={myStyles.pics1} > <img src={kudas1} alt="" /></div>
      
      </div>
    
    
    
    </>
  )
}

export default SignUp