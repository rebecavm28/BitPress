import './EditForm.css'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import {updateData, getNewById} from '../../services/newServices'
import { useParams, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext';

const EditForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const {id_news} = useParams();
    const {id_user} = useUserContext();

    const dateValue = "2024-03-27T00:00:00.000Z";
    const date = new Date(dateValue);
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    useEffect(() => {
        const fetchData = async ()=>{
            try {
                const response = await getNewById(id_news);
                const data = response.data;
                setValue('tittle', data.tittle);
                setValue('content', data.content);
                setValue('imageUrl',data.imageUrl);
                setValue('dateFieldName', formattedDate);
            } catch (error) {
               console.error(error.message);
            }
        }
        fetchData();
    }, [id_news, setValue]);


    const onSubmit = async (data) =>{
      try {
        const updatedData = { ...data, user: id_user };
        await updateData( updatedData, id_news);
        alert('New updated');
        navigate('/dashboard');
      } catch (error) {
          console.error(error.message)
      }
    }

  return (
    <div className='formEdit'>
        <div>
            <h2>EDIT NEW</h2> 
        </div>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <div className='formFields'>
                <label htmlFor="title"className='editTitle'>Title</label>
                <input type="text" id="title" name="title" {...register('tittle', { 
                    pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                    required: true, maxLength:  100 
                })}/>
            </div>
            <div className='formFields'>
                <label htmlFor="image"className='image'>Imagen</label>
                <input type="url" id="image" name="image" {...register('imageUrl', { 
                    pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                    required: true 
                })}/>
            </div>
            <div className='formFields'>
            <label htmlFor="date"className='editDate'>Date</label>
            <input {...register('dateFieldName')} type="date" />
            </div>
            <div className='formFields'>
                <label htmlFor="description"className='editDescription'>Description</label>
                <input type="text" id="description" name="description"{...register('content', { 
                    pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                    required: true, maxLength:  10000 
                })}/>
            </div>
            <input className="buttonEdit" type="submit" value="EDIT NEW"/>
        </form>
    </div>
  )
}

export default EditForm