import React from 'react'
import { useForm } from "react-hook-form";
import { postData } from './services/newServices.js'; 
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm(); 
    //const navigate = useNavigate(); 
    const onSubmit = async (postData) => {
        try {
            await postData(data);
            alert('News created successfully');
            reset();
            //navigate("/"); añadir ruta a card detail
        } catch (error) { 
            console.error('Error creating new:', error);
            alert('There was an error creating the new');
        }
    };
}
    return (
        <div className='formAdd'>
            <div>
                <h2>Add new news</h2> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    <label className='addTitle'>Add the title of the news</label>
                    <input type="text" {...register('title', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true 
                    })} />
                     {errors.title?.type === 'required' && <p className="error-message">Please add a title</p>}
                </div>
                <div>
                    <label className='image'>Imagen</label>
                    <input type="url" {...register('imageUrl', { 
                        pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                        required: true 
                    })} />
                     {errors.imageUrl?.type === 'required' && <p className="error-message">Please add the new image</p>}
                </div>
                <div>
                    <label className='addDescription'>Add the news description</label>
                    <input type="text" {...register('description', { 
                        pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                        required: true, maxLength:  500 
                    })} />
                     {errors.name?.type === 'required' && <p className="error-message">Please add a description. </p>}
                </div>
                <input className="buttonAdd" type="submit" value="Añadir noticia" />
            </form>
        </div>
    );

export default AddForm



    
