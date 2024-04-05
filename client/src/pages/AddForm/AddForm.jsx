import React from 'react'


const AddForm = () => {
    return (
        <div className='formAdd'>
            <div>
                <h2>Add new news</h2> 
            </div>
            <form> 
                <div>
                    <label className='addTitle'>Add the title of the news</label>
                    <input type="text"/>
                </div>
                <div>
                    <label className='image'>Imagen</label>
                    <input type="url"/>
                </div>
                <div>
                    <label className='addDescription'>Add the news description</label>
                    <input type="text"/>
                </div>
                <input className="buttonAdd" type="submit" value="Añadir noticia" />
            </form>
        </div>
    )
}

export default AddForm



    
