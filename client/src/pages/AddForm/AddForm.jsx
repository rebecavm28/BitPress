import React from 'react'
import './AddForm.css'
import { useForm } from "react-hook-form";
import { postNew } from '../../services/newServices';
import { useNavigate } from "react-router-dom";
/* import { useState } from 'react';
import { loginUser } from "../../services/authService";
 */
const AddForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
/*     const [isLoggedIn, setIsLoggedIn] = useState(false);
 */    const currentDate = new Date().toISOString().split('T')[0];
    const onSubmit = async (data) => {
        // try {
        //     // Verifica si el usuario está autenticado
        //     const isAuthenticated = await login(variableForm);
        //     if (!isAuthenticated) {
        //       return;
        //     }
        //data.publicationDate = currentDate;
        await postNew(data).then(() => {
            navigate("/") //Cambiar luego la navegación a la página de detail
        })
    /* } catch (error){
        console.error('Error al intentar iniciar sesión:', error);
    } */
  };
 
    return (
        <div className='formAdd'>
            <div>
                <h2>ADD NEW</h2> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className='formFields'>
                    <label htmlFor="title"className='addTitle'>Title</label>
                    <input type="text" id="tittle" name="title" {...register('tittle', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  100 
                    })}/>
                    {errors.title?.type === 'required' && <p className="error-message">Please, add the title of the new</p>}
                </div>
                <div className='formFields'>
                    <label htmlFor="image"className='image'>Imagen</label>
                    <input type="url" id="image" name="imageUrl" {...register('imageUrl', { 
                        pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                        required: true 
                    })}/>
                    {errors.image?.type === 'required' && <p className="error-message">Please, add the image of the new</p>}
                </div>
                <div className='formFields'>
                    <label htmlFor='publicationDate' className='publicationDate'>Publication Date</label>
                    <input type='text' id='publicationDate' name='publicationDate'value={currentDate} readOnly/>
                </div>
                <div className='formFields'>
                    <label htmlFor="description"className='addDescription'>Description</label>
                    <input type="text" id="description" name="content"{...register('content', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  1000 
                    })}/>
                    {errors.description?.type === 'required' && <p className="error-message">Please, add the description of the new</p>}
                </div>
                <input className="buttonAdd" type="submit" value="ADD NEW"/>
            </form>
        </div>
    );
};

export default AddForm;