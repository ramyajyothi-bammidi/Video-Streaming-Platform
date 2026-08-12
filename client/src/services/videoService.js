import api from "./api.js";





export const getVideos = async (
  category="All"
)=>{


  const response =
    await api.get(
      `/videos?category=${category}`
    );


  return response.data;


};







export const getVideoById = async(id)=>{


  const response =
    await api.get(

      `/videos/${id}`

    );


  return response.data;


};








export const uploadVideo = async(formData)=>{


  const response =
    await api.post(

      "/videos/upload",

      formData,

      {

        headers:{

          "Content-Type":
          "multipart/form-data"

        }

      }

    );



  return response.data;


};







export const deleteVideo = async(id)=>{


  const response =
    await api.delete(

      `/videos/${id}`

    );


  return response.data;


};








export const searchVideos = async(
  keyword,
  category="All"
)=>{


  const response =
    await api.get(

      `/videos/search?keyword=${keyword}&category=${category}`

    );


  return response.data;


};