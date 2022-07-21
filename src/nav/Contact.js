import React from 'react'

function Contact() {
    function forsub(e){
        e.preventDefault()
        alert('Thank you! we will consider it certainly')
    }
  return (
    <>
        <h1 className='top'>Do you have any <b>Sugessions, Complains?</b></h1>
        <div className='contact'>
        <form onSubmit={forsub}>
        <input type={'text'} placeholder='Phone Number' required/> <br />
        <input type='email' placeholder='Email' required /> <br></br>
        <label >Sugessions, Complains</label> <br />
        <textarea ></textarea> <br />
        <button >Submit</button>
        </form>
        </div>
    </>
  )
}

export default Contact
