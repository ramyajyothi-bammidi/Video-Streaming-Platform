import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import path from "path";
import { fileURLToPath } from "url";


import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

import errorHandler from "./middleware/errorMiddleware.js";



const app = express();



const __filename =
  fileURLToPath(import.meta.url);


const __dirname =
  path.dirname(__filename);



app.use(

  cors({

    origin:
      "http://localhost:5173",

    credentials:true,

  })

);



app.use(
  express.json()
);



app.use(
  express.urlencoded({
    extended:true
  })
);



app.use(
  cookieParser()
);



app.use(
  morgan("dev")
);



// Serve uploaded files

app.use(

  "/uploads",

  express.static(
    path.join(
      __dirname,
      "uploads"
    )
  )

);





app.get("/",(req,res)=>{

  res.json({

    message:
    "Video Streaming Platform API is running"

  });

});





app.use(
  "/api/auth",
  authRoutes
);



app.use(
  "/api/videos",
  videoRoutes
);



app.use(
  "/api/comments",
  commentRoutes
);



app.use(
  errorHandler
);



export default app;