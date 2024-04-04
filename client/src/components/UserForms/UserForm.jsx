import React from 'react'

const UserForm = () => {
  return (
    <div>
        <div className="formulary">

            <div className="text">
                <h3 className="login_option"></h3>
                <button className='login_option_changer'></button>
                <h3 className="registrer_option"></h3>
                <button className='registrer_option_changer'></button>
            </div>


            <div className="register">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
            </div>

            <div className="login">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
            </div>

        </div>

        <div className="social">
            <a href="http://" target="_blank" rel="noopener noreferrer">Instagram/Bitpress</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Linkedin/Bitpress</a>
        </div>
    </div>
  )
}

export default UserForm