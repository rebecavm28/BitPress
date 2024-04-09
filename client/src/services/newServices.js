//import axios from "axios";

// url de la FakeAPI de noticias = 'http://localhost:3000'
// url de la base de datos = 'http://localhost:5000/api'


export const url = 'http://localhost:5000/api';


//GET

export const getNew = async () => {
  const response = await fetch(`${url}/news`);
  const data = await response.json();
  return data;
};

// //POST

// export const postNew = async (data) =>{
//   const news = await axios.post(`${url}/news`, data);
//   alert("News created successfully");
//   return news;
// };

// //DELETE

// export const deleteData = async (id) =>{
//   if(confirm("Do you want to delete this new?") === true){
//     const news = await axios.delete(`${url}/news/${id}`);
//     return news;
//   }
// };

//UPDATE

// export const updateData = async (id, newData) => {
//   console.log("modifying");
//   const response = await fetch(`${url}/news/${id}`, {
//     method: "PUT",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newData)
//   });
//   const data = await response.json();
//   return data;
// };

// export const getNewById = async (id_news) => {
//   try {
//     const response = await fetch(`${url}/news/${id_news}`);
    
//     if (!response.ok) {
//       throw new Error(`Error al obtener la noticia con id ${id_news}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error al obtener la noticia:', error);
//     throw error;
//   }
// }
//Get by id

// export const getNewById = async (id_news) => {
//   const response = await fetch(`${url}/news/${id_news}`); //💥🐱‍🏍😁💥🐱‍🏍😁🐱‍🏍😁💥 need to be fixed
//   const data = await response.json();
//   return data;
// };

// export const getNewById = async (id_news) => {
//   try {
//     const response = await fetch(`${url}/news/${id_news}`);
    
//     if (!response.ok) {
//       throw new Error(`Error al obtener la noticia con id ${id_news}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error al obtener la noticia:', error);
//     throw error;
//   }
// };
export const getNewById = async (id) => {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(`${url}/news/${id}`, {
      headers: {
        Authorization: 'Bearer ${token}', //💥🐱‍🏍😁💥🐱‍🏍😁🐱‍🏍😁💥 need to be fixed
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
