import React from 'react'
import '../EditForm/EditForm.css'
import { useNavigate } from "react-router";

const EditForm = () => {
    const { register, handleSubmit } = EditForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => { 
        try {
          const response = await EditForm(data);
          const {token, rol} = response.data.sesiondata;
          localStorage.setItem('token', token);
          localStorage.setItem('rol', rol);
          setIsAuthenticated(true);
          navigate('/editForm'); 
        } catch (error) {
          console.error('Error:', error);
        }
      }; 


  return (
    <div className='formEdit'>
        <div>
            <h2>EDIT NEW</h2> 
        </div>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <div className='formFields'>
                <label htmlFor="title"className='editTitle'>Title</label>
                <input type="text" id="title" name="title" {...register('title', { 
                    pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                    required: true, maxLength:  100 
                })}/>
            </div>
            <div className='formFields'>
                <label htmlFor="image"className='image'>Imagen</label>
                <input type="url" id="image" name="image" {...register('image', { 
                    pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                    required: true 
                })}/>
            </div>
            <div className='formFields'>
                <label htmlFor="description"className='editDescription'>Description</label>
                <input type="text" id="description" name="description"{...register('description', { 
                    pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                    required: true, maxLength:  1000 
                })}/>
            </div>
            <input className="buttonEdit" type="submit" value="EDIT NEW"/>
        </form>
    </div>
  )
}

export default EditForm