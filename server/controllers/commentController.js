import Comment from "../models/Comment.js";


export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      user: req.user._id,
      video: req.params.videoId,
    });

    res.status(201).json(comment);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      video: req.params.videoId,
    })
      .populate(
        "user",
        "username"
      )
      .sort({
        createdAt: -1,
      });


    res.json(comments);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(
      req.params.id
    );


    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }


    await comment.deleteOne();


    res.json({
      message: "Comment deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};