import axios from "axios";


//export const url = 'http://localhost:3000'
//url de la base de datos = 'http://localhost:5000/api'


export const url = 'http://localhost:5000/api';



//GET

export const getNew = async () => {
  const response = await fetch(`${url}/news`);
  const data = await response.json();
  return data;
};

//POST

 export const postNew = async (data) =>{
   const news = await axios.post(`${url}/news`, data);
   alert("News created successfully");
   return news;
 };

//DELETE

export const deleteData = async (id) =>{
  if(confirm("Do you want to delete this new?") === true){
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

// export const getNewById = async (id) => {
//   const response = await fetch(`${url}/news/${id}`);
//   const data = await response.json();
//   return data;
// };

export const getNewById = async (id) => {
  try {
    const response = await fetch(`${url}/news/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};