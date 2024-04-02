import React, {useState} from 'react';
import styled from 'styled-components';

const FormContainer = style.div`
    width: 300px;
    margin: 0 auto; 
    text-align: center;
`;
const LoginFormTitle = style.div`


`

const LoginForm = () => {

// Estado para almacenar los valores del usuario y la contraseña
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

// Manejadores de cambios para los campos de usuario y contraseña
const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

// Manejador para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();

// Aquí puedes agregar la lógica para enviar los datos al servidor, etc.
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="FormContainer">
    <div className="LoginFormTitle">Login</div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>User</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange}></input>
        </div>
        <div>
            <label>Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
        </div>
        <button type="submit">Sign in</button>
    </form>
    </div>
  )
}

export default LoginForm