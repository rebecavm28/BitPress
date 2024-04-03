import axios from "axios";

const url = 'http://localhost:3000/';

//GET

export const getUser = async () => {
  const response = await fetch(`${url}/users`);
  const data = await response.json();
  return data;
};

//POST

export const postUser = async (data) =>{
  const users = await axios.post(`${url}/users`, data);
  alert("User creado exitosamente");
  return users;
};

//DELETE

export const deleteUser = async (id) =>{
  if(confirm("¿Estás seguro que quieres eliminar este user?") === true){
    const users = await axios.delete(`${url}/users/${id}`);
    return users;
  }
};

//UPDATE

export const updateUser = async (id, newData) => {
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