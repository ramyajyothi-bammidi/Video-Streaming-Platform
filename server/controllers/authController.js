import User from "../models/User.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";





const generateToken = (id)=>{


  return jwt.sign(

    {
      id
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "7d"
    }

  );


};









export const registerUser = async(req,res)=>{


  try{


    const {

      username,

      email,

      password


    } = req.body;





    const existingUser = await User.findOne({

      email

    });





    if(existingUser){


      return res.status(400).json({

        message:
          "User already exists"

      });


    }







    const hashedPassword = await bcrypt.hash(

      password,

      10

    );







    const user = await User.create({


      username,


      email,


      password: hashedPassword



    });







    const token = generateToken(

      user._id

    );







    res.cookie(

      "token",

      token,

      {


        httpOnly:true,


        sameSite:"lax"



      }

    );







    res.status(201).json({


      _id:user._id,


      username:user.username,


      email:user.email



    });





  }

  catch(error){


    res.status(500).json({

      message:
        error.message

    });


  }


};









export const loginUser = async(req,res)=>{


  try{


    const {

      email,

      password


    } = req.body;







    const user = await User.findOne({

      email

    });







    if(!user){


      return res.status(401).json({

        message:
          "Invalid credentials"

      });


    }







    const isMatch = await bcrypt.compare(

      password,

      user.password

    );







    if(!isMatch){


      return res.status(401).json({

        message:
          "Invalid credentials"

      });


    }







    const token = generateToken(

      user._id

    );







    res.cookie(

      "token",

      token,

      {


        httpOnly:true,


        sameSite:"lax"



      }

    );







    res.json({


      _id:user._id,


      username:user.username,


      email:user.email



    });







  }

  catch(error){


    res.status(500).json({

      message:
        error.message

    });


  }


};









export const logoutUser = async(req,res)=>{


  res.cookie(

    "token",

    "",

    {

      expires:
        new Date(0)

    }

  );



  res.json({

    message:
      "Logged out successfully"

  });


};