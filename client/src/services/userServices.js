import axios from "axios";

const url = 'http://localhost:3000/users';

//GET

export const getData = async () => {
  const response = await fetch(`${url}/users`);
  const data = await response.json();
  return data;
};

//POST

export const postData = async (data) =>{
  const users = await axios.post(`${url}/users`, data);
  alert("User creado exitosamente");
  return users;
};

//DELETE

export const deleteData = async (id) =>{
  if(confirm("¿Estás seguro que quieres eliminar este user?") === true){
    const users = await axios.delete(`${url}/users/${id}`);
    return users;
  }
};

//UPDATE

export const updateData = async (id, newData) => {
  console.log("modificando");
  const response = await fetch(`${url}/users/${id}`, {
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

export const getUserById = async (id) => {
  const response = await fetch(`${url}/users/${id}`);
  const data = await response.json();
  return data;
};