import axios from "axios";

export const url = 'http://localhost:3000/';

export const login = async (data) => {
    try {
        const res = await axios.post(`${url}login`, data);
        return res;
    }  catch (error) {
        console.error('error:', error.message);
        throw error;
      }

};

export const register = async (data) => {
    try {
        const res = await axios.post(`${url}register`, data);
        return res;
    }  catch (error) {
        console.error(' error:', error.message);
        throw error;
      }

};

//GET

export const getUser = async () => {
  const response = await fetch(`${url}/users`);
  const data = await response.json();
  return data;
};

//POST

export const postUser = async (data) =>{
  const users = await axios.post(`${url}/users`, data);
  alert("User created successfully");
  return users;
};

//DELETE

export const deleteData = async (id) =>{
  if(confirm("Are you sure you want to delete this user?") === true){
    const users = await axios.delete(`${url}/users/${id}`);
    return users;
  }
};

//UPDATE

export const updateData = async (id, newData) => {
  console.log("modifying");
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