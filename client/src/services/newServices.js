import axios from "axios";

const url = 'http://localhost:3000/news';

//GET

export const getData = async () => {
  const response = await fetch(`${url}/news`);
  const data = await response.json();
  return data;
};

//POST

export const postData = async (data) =>{
  const news = await axios.post(`${url}/news`, data);
  alert("News created successfully");
  return news;
};

//DELETE

export const deleteData = async (id) =>{
  if(confirm("Do you want to delete this news?") === true){
    const news = await axios.delete(`${url}/news/${id}`);
    return news;
  }
};

//UPDATE

export const updateData = async (id, newData) => {
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
};

//Get by id

export const getNewById = async (id) => {
  const response = await fetch(`${url}/news/${id}`);
  const data = await response.json();
  return data;
};