import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addSLike = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    user_id: req.body.user_id,
    short_id: req.body.short_id,
  };
  const sql =
    "INSERT INTO Slikes (user_id, short_id, date, time) VALUES (?,?,?,?)";
  const params = [
    data.user_id,
    data.short_id,
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

const addPLike = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  };
  const sql =
    "INSERT INTO Plikes (user_id, post_id, date, time) VALUES (?,?,?,?)";
  const params = [
    data.user_id,
    data.post_id,
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

const getSlikes = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM Slikes WHERE id=?";
  const params = [id];
  db.get(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "Short NotFound",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};

const getPlikes = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM Plikes WHERE id=?";
  const params = [id];
  db.get(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "Post NotFound",
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
  addSLike,
  addPLike,
  getSlikes,
  getPlikes,
};
