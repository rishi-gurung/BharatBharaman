import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addShort = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    user_id: req.body.user_id,
    post: req.body.post,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  };
  const sql =
    "INSERT INTO shorts (user_id, short, name, image, description, date, time) VALUES (?,?,?,?,?,?)";
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

const getShort = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM shorts WHERE short_id=?";
  const params = [id];
  db.get(getQuery, params, (err: any, row: any) => {
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

const addSComment = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    post_id: req.body.post_id,
    user_id: req.body.user_id,
    name: req.body.name,
    image: req.body.image,
    comment: req.body.comment,
  };
  const sql =
    "INSERT INTO shorts (user_id, short, name, image, description, date, time) VALUES (?,?,?,?,?,?)";
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

const getSComments = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const getQuery = "SELECT * FROM scomments WHERE short_id=?";
  const params = [id];
  db.all(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "Comments NotFound",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};

const getShortLimit = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const getQuery = "SELECT * FROM pshorts";
  const params = [id];
  db.all(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "Comments NotFound",
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
  addShort,
  getShort,
  addSComment,
  getSComments,
};
