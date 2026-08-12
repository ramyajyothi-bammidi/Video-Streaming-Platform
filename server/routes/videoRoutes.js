import express from "express";


import {

  getVideos,
  getVideoById,
  uploadVideo,
  deleteVideo,
  searchVideos

} from "../controllers/videoController.js";


import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";



const router =
  express.Router();





router.get(
  "/",
  getVideos
);





router.get(
  "/search",
  searchVideos
);





router.get(
  "/:id",
  getVideoById
);





router.post(

  "/upload",

  protect,


  upload.fields([

    {
      name:"video",
      maxCount:1
    },

    {
      name:"thumbnail",
      maxCount:1
    }

  ]),


  uploadVideo

);





router.delete(

  "/:id",

  protect,

  deleteVideo

);





export default router;