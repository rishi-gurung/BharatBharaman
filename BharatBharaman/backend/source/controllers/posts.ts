import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addPost = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    user_id: req.body.user_id,
    post: req.body.post,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  };
  const sql =
    "INSERT INTO posts (user_id, post, name, image, description, date, time) VALUES (?,?,?,?,?,?)";
  const params = [
    data.user_id,
    data.post,
    data.name,
    data.image,
    data.description,
    Date().slice(0, 16),
    Date().slice(16, 21),
  ];
  db.run(sql, params, (err: any, result: any) => {
    if (err) {
      res.status(404).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
    });
  });
};

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM posts";
  db.all(getQuery, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "User NotFound",
      });
      return;
    }
    res.json({
      message: "success",
      data: row.slice(id - 5,id),
    });
  });
};

const addPComment = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    post_id: req.body.post_id,
    user_id: req.body.user_id,
    name: req.body.name,
    image: req.body.image,
    comment: req.body.comment,
  };
  const sql =
    "INSERT INTO pcomments (user_id, post, name, image, description, date, time) VALUES (?,?,?,?,?,?)";
  const params = [
    data.post_id,
    data.user_id,
    data.name,
    data.image,
    data.comment,
    Date().slice(0, 16),
    Date().slice(16, 21),
  ];
  db.run(sql, params, (err: any, result: any) => {
    if (err) {
      res.status(404).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
    });
  });
};

const getPComments = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const getQuery = "SELECT * FROM pcomments WHERE post_id=?";
  const params = [id];
  db.all(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "User NotFound",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};

//#######################################################################################################
//############             ####            ########          #########             ######################
//################   ##########  ###################   ###################   ############################
//################   ##########       #################   ################   ############################
//################   ##########       ####################   #############   ############################
//################   ##########  ##########################   ############   ############################
//################   ##########            ########          #############   ############################
//#######################################################################################################



export default {
  addPost,
  getPosts,
  addPComment,
  getPComments,
};
