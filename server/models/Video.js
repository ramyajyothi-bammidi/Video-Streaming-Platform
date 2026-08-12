import mongoose from "mongoose";



const videoSchema = new mongoose.Schema(

  {


    title: {

      type: String,

      required: true,

      trim: true

    },



    description: {

      type: String,

      default: ""

    },



    videoUrl: {

      type: String,

      required: true

    },



    thumbnailUrl: {

      type: String,

      required: true

    },



    category: {

      type: String,

      required: true

    },



    views: {

      type: Number,

      default: 0

    },



    likes: [

      {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User"

      }

    ],



    uploadedBy: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true

    }



  },


  {

    timestamps: true

  }


);



const Video =
  mongoose.model(
    "Video",
    videoSchema
  );



export default Video;