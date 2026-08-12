import Video from "../models/Video.js";



export const getVideos = async (req, res) => {

  try {

    const {
      category
    } = req.query;



    let filter = {};



    if (
      category &&
      category !== "All"
    ) {

      filter.category = category;

    }




    const videos =
      await Video.find(filter)
        .populate(
          "uploadedBy",
          "username"
        )
        .sort({
          createdAt: -1
        });



    res.json(videos);



  } catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};







export const getVideoById = async (req, res) => {

  try {


    const video =
      await Video.findById(
        req.params.id
      )
      .populate(
        "uploadedBy",
        "username"
      );



    if (!video) {

      return res.status(404).json({

        message:
          "Video not found"

      });

    }



    // Increase views only when API is called
    video.views =
      (video.views || 0) + 1;



    await video.save();



    res.json(video);



  } catch (error) {


    res.status(500).json({

      message:
        error.message

    });


  }

};









export const uploadVideo = async (req,res)=>{

  try{


    const {
      title,
      description,
      category

    } = req.body;




    const videoFile =
      req.files.video?.[0];



    const thumbnailFile =
      req.files.thumbnail?.[0];





    if(
      !videoFile ||
      !thumbnailFile
    ){

      return res.status(400).json({

        message:
          "Video and thumbnail are required"

      });

    }





    const video =
      await Video.create({

        title,

        description,

        category,


        videoUrl:
          `/uploads/videos/${videoFile.filename}`,



        thumbnailUrl:
          `/uploads/thumbnails/${thumbnailFile.filename}`,



        uploadedBy:
          req.user._id,


        views:0

      });




    res.status(201).json(video);



  }
  catch(error){


    res.status(500).json({

      message:
        error.message

    });


  }

};









export const deleteVideo = async(req,res)=>{


  try{


    const video =
      await Video.findById(
        req.params.id
      );



    if(!video){

      return res.status(404).json({

        message:
          "Video not found"

      });

    }



    await video.deleteOne();



    res.json({

      message:
        "Video deleted successfully"

    });



  }
  catch(error){


    res.status(500).json({

      message:
        error.message

    });


  }


};









export const searchVideos = async(req,res)=>{


  try{


    const keyword =
      req.query.keyword || "";



    const {
      category
    } = req.query;




    let filter = {

      title:{

        $regex:
          keyword,

        $options:
          "i"

      }

    };





    if(
      category &&
      category !== "All"
    ){

      filter.category =
        category;

    }





    const videos =
      await Video.find(filter)
      .populate(
        "uploadedBy",
        "username"
      )
      .sort({

        createdAt:-1

      });




    res.json(videos);



  }
  catch(error){


    res.status(500).json({

      message:
        error.message

    });


  }


};