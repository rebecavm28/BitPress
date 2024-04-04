// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { postData } from './src/services/userServices.js'
// import { useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//     const { register, formState: { errors }, handleSubmit, reset } = useForm(); // Utiliza el hook useForm para manejar el estado del formulario
//     //const navigate = useNavigate() // Hook para redirigir la navegación a una página concreta.
//     const onSubmit = async (newUser) => {
//         await postData(newUser) // Petición de espera a la función createPoster para crear un nuevo póster.
//         //navigate("/")
//     };
//   return (
//     <div className="FormContainer">
//     <div className="RegisterFormTitle">Sign Up</div>
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label>User</label>
//             <input type="text" id="username" value={username} onChange={handleUsernameChange}></input>
//         </div>
//         <div>
//             <label>Email</label>
//             <input type="text" id="email" value={email} onChange={handleEmailChange}></input>
//         </div>
//         <div>
//             <label>Password</label>
//             <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
//         </div>
//         <button type="submit">Register</button>
//     </form>
//     </div>
//   )
// }

// export default RegisterForm