import React from 'react'
import './AddForm.css'
import { useForm } from "react-hook-form";
//import { postNew } from '../../services/newServices';
import { useNavigate } from "react-router-dom";

const AddForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        await postNew(data)
        navigate("/detail")
    };
 
    return (
        <div className='formAdd'>
            <div>
                <h2>ADD NEW</h2> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className='formFields'>
                    <label htmlFor="title"className='addTitle'>Title</label>
                    <input type="text" id="title" name="title" {...register('title', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  100 
                    })}/>
                    {errors.title?.type === 'required' && <p className="error-message">Please, add the title of the new</p>}
                </div>
                <div className='formFields'>
                    <label htmlFor="image"className='image'>Imagen</label>
                    <input type="url" id="image" name="image" {...register('image', { 
                        pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                        required: true 
                    })}/>
                    {errors.image?.type === 'required' && <p className="error-message">Please, add the image of the new</p>}
                </div>
                <div className='formFields'>
                    <label htmlFor="description"className='addDescription'>Description</label>
                    <input type="text" id="description" name="description"{...register('description', { 
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



    
