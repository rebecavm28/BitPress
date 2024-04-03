import axios from "axios";

const url = 'http://localhost:3000';

//GET

export const getNew = async () => {
  const response = await fetch(`${url}/news`);
  const data = await response.json();
  return data;
};

//POST

export const postNew = async (data) =>{
  const news = await axios.post(`${url}/news`, data);
  alert("Noticia creada exitosamente");
  return news;
};

//DELETE

export const deleteNew = async (id) =>{
  if(confirm("¿Quieres eliminar esta noticia?") === true){
    const news = await axios.delete(`${url}/news/${id}`);
    return news;
  }
};

//UPDATE

export const updateNew = async (id, newData) => {
  console.log("modificando");
  const response = await fetch(`${url}/news/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  });
  const data = await response.json();
  return data;
};

//Get by id

export const getNewById = async (id) => {
  const response = await fetch(`${url}/news/${id}`);
  const data = await response.json();
  return data;
};