import React from 'react'
import './EditForm.css'

const EditForm = () => {


    
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
            {/* {errors.title?.type === 'required' && <p className="error-message">Please, edit the title of the new</p>} */}
        </div>
        <div className='formFields'>
            <label htmlFor="image"className='image'>Imagen</label>
            <input type="url" id="image" name="image" {...register('image', { 
                pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/,
                required: true 
            })}/>
            {/* {errors.image?.type === 'required' && <p className="error-message">Please, add the image of the new</p>} */}
        </div>
        <div className='formFields'>
            <label htmlFor="description"className='editDescription'>Description</label>
            <input type="text" id="description" name="description"{...register('description', { 
                pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/,
                required: true, maxLength:  1000 
            })}/>
            {/* {errors.description?.type === 'required' && <p className="error-message">Please, add the description of the new</p>} */}
        </div>
        <input className="buttonEdit" type="submit" value="EDIT NEW"/>
    </form>
</div>
  )
}

export default EditForm