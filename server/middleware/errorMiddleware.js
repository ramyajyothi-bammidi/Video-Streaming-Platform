const errorHandler = (

  err,

  req,

  res,

  next

)=>{


  console.log(

    err.message

  );





  res.status(

    res.statusCode === 200

      ? 500

      : res.statusCode

  );





  res.json({


    message:

      err.message || "Server Error"



  });



};





export default errorHandler;