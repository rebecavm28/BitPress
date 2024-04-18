import React, {useState} from 'react'
import './AddForm.css'
import { useForm } from "react-hook-form";
import { postNew } from '../../services/newServices';
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../../context/UserContext'; 


const AddForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {id_user} = useUserContext();
    const navigate = useNavigate();
       

    const onSubmit = async (data) =>{
        console.log(data)
        try { 
                      
            const token = localStorage.getItem('token');
            const id_user = localStorage.getItem('id_user');
            const response = await postNew({...data, user:id_user}, token);
            console.log(response)
            alert("News created successfully");
            navigate("/dashboard");
}
    catch(error){

        console.error('Error creating new:', error);
}
}
 
    return (
        <div className='formAdd'>
            <div>
                <h2>ADD NEW</h2> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className='formFields'>
                    <label htmlFor="tittle"className='addTitle'>Título</label>
                    <input type="text" id="tittle" name="tittle" {...register('tittle', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  100 
                    })}/>
                    {errors.tittle && <p className="error-message">Por favor, añade un título</p>}                </div>
                <div className='formFields'>
                    <label htmlFor="imageUrl"className='image'>Imagen</label>
                    <input type="url" id="imageUrl" name="imageUrl" {...register('imageUrl', { 
                        pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                        required: true 
                    })}/>
                    {errors.imageUrl && <p className="error-message">Por favor, añade una imagen válida</p>}                </div>
                <div className='formFields'>
                    <label htmlFor='date' className='publicationDate'>Fecha de publicación</label>
                    <input type='date' id='date' name='date' {...register('date',{required:true})} />
                </div>
                {errors.publicationDate && <p className="error-message">Por favor, añade una fecha válida</p>}
                <div className='formFields'>
                    <label htmlFor="content"className='addDescription'>Descripción</label>
                    <input type="text" id="content" name="content"{...register('content', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  1000 
                    })}/>
                    {errors.content && <p className="error-message">La descripción es requerida</p>}
                </div>
                <input className="buttonAdd" type="submit" value="ADD NEW"/>
            </form>
        </div>
    );
};

export default AddForm;