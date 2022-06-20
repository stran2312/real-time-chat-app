import React from 'react'

function Register() {
  return (
    <div className='register'>
       <div className='card'>
            <div className="card-header">
                <h3>Register</h3>
            </div>

            <div className="card-body">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"  className='form-control' placeholder='username' id='username'/>
                    </div>
                </form>
            </div>
       </div>
    </div>
  )
}

export default Register