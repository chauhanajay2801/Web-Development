import React from 'react'

const AddContact = () => {
  return (
    
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <input type="text" name = "name" placeholder='Name' />
        </div>

        <div className='field'>
          <label>Email</label>
          <input type="email" name = "Email" placeholder='Email' />
        </div>

        <button className='ui button blue'>Add</button>
      </form>
    </div>
    
  )
}

export default AddContact