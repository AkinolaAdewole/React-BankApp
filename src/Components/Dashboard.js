import React from 'react'


const Dashboard = () => {
    const userDetails=JSON.parse(localStorage.ade)
    let b=userDetails.find(eachUser=>eachUser.email && eachUser.password)
    let nam=b.firstname
    let acctno=b.acctno
    // if (b != null){
    //     names = b;
    // } else{ 
    //     names = [];
    // }


  return (
    <>
    <div className='mt-3 ms-4'> welcome, {nam} </div>
    <div> Account Number {acctno} </div>
    
    </>
  )
}

export default Dashboard