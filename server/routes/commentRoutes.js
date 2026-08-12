import express from "express";

import {
  addComment,
  getComments,
  deleteComment,
} from "../controllers/commentController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


router.get(
  "/:videoId",
  getComments
);


router.post(
  "/:videoId",
  protect,
  addComment
);


router.delete(
  "/:id",
  protect,
  deleteComment
);


export default router;