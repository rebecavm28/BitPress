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
                    <label htmlFor="tittle"className='addTitle'>Title</label>
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
                    <input type='date' id='publicationDate' name='publicationDate' {...register('date',{required:true})} />
                </div>
                <div className='formFields'>
                    <label htmlFor="content"className='addDescription'>Description</label>
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