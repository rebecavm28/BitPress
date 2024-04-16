import axios from "axios";

//export const url = 'http://localhost:3000'
//url de la base de datos = 'http://localhost:5000/api'


export const url = 'http://localhost:5000/api/news';


function getToken(){
  let token = localStorage.getItem('token');
  const headers ={
    'Authorization': `Bearer ${token}`
  };
  return headers
}
//GET
 
export const getNew = async () => {
  try {
    const headers = getToken()
    console.log(headers)
    const response = await axios.get(url, {headers});
    return response.data
  } catch (error) {
    console.error('error get news', error.message);
    throw error;
  }
};

//POST

export const postNew = async (data, token) => {
 
  try {
    const headers = getToken()
    console.log(headers)
     const response = await axios.post(url, data, {headers});
     alert("News created successfully");
     return response;
  } catch (error) {
     console.error('Error creating new:', error.message);
     throw error; }
 };

//DELETE

export const deleteData = async (id_news) =>{
  try {
    const headers = getToken()
    console.log("eliminar")
    let urlId = `${url}/${id_news}`;
    const response = await axios.delete(urlId, {headers});
    alert("News deleted successfully");
    return response;
  } catch (error) {
    console.error('error delete new', error.message);
    throw error;
  }

};

//UPDATE

/* export const updateData = async (id, newData) => {
  console.log("modifying");
  const response = await fetch(`${url}/news/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  });
  const data = await response.json();
  return data;
}; */
export const updateData = async (data) => {
  try {
    const headers = getToken()
    let urlId = 	`${url}/${data.id_news}`;
    const response = await axios.put(urlId, data, {headers});
    alert('Noticia actualizada');
    return response;
  } catch (error) {
    console.error('error update new', error.message);
    throw error;
  }
}
//Get by id

export const getNewById = async (id) => {
  try {
    const headers = getToken()
    const response = await axios.get(`${url}/${id}`, {headers});
    return response;
  } catch (error) {
    console.error('Error get new', error.message);
    throw error;
  }
};