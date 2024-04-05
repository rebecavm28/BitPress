import React from 'react'
import './AddForm.css'

const AddForm = () => {
    return (
        <div className='formAdd'>
            <div>
                <h2>Add new news</h2> 
            </div>
            <form> 
                <div className='formFields'>
                    <label htmlFor="title"className='addTitle'>Add the title of the news</label>
                    <input type="text" id="title" name="title"/>
                </div>
                <div className='formFields'>
                    <label htmlFor="image"className='image'>Imagen</label>
                    <input type="url" id="image" name="image"/>
                </div>
                <div className='formFields'>
                    <label htmlFor="description"className='addDescription'>Add the news description</label>
                    <input type="text" id="description" name="description"/>
                </div>
                <input className="buttonAdd" type="submit" value="Añadir noticia" />
            </form>
        </div>
    )
}

export default AddForm



    
