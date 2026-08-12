import multer from "multer";
import path from "path";



const storage = multer.diskStorage({

  destination: (req, file, cb) => {


    if(file.mimetype.startsWith("video")){


      cb(
        null,
        "uploads/videos"
      );


    }
    else{


      cb(
        null,
        "uploads/thumbnails"
      );


    }


  },


  filename: (req,file,cb)=>{


    const uniqueName =

      Date.now()

      +

      "-"

      +

      Math.round(
        Math.random()*100000
      )

      +

      path.extname(
        file.originalname
      );



    cb(
      null,
      uniqueName
    );


  }


});






const upload = multer({


  storage,


  limits:{


    fileSize:

      200 * 1024 * 1024


  },



  fileFilter:(req,file,cb)=>{


    const allowed = [


      "video/mp4",

      "video/webm",

      "video/x-matroska",

      "image/jpeg",

      "image/png",

      "image/webp"


    ];



    if(
      allowed.includes(
        file.mimetype
      )
    ){


      cb(
        null,
        true
      );


    }
    else{


      cb(
        new Error(
          "Only video and image files allowed"
        )
      );


    }


  }


});



export default upload;