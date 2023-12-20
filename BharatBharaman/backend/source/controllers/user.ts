import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    name: req.body.name,
    image: req.body.image,
    email: req.body.email,
    phone: req.body.phone,
  };
  const sql =
    "INSERT INTO users (name, image, email, phone, date, time) VALUES (?,?,?,?,?,?)";
  const params = [
    data.name,
    data.image,
    data.email,
    data.phone,
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

const logUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const getQuery = "SELECT * FROM users WHERE user_id=?";
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

//#######################################################################################################
//############             ####            ########          #########             ######################
//################   ##########  ###################   ###################   ############################
//################   ##########       #################   ################   ############################
//################   ##########       ####################   #############   ############################
//################   ##########  ##########################   ############   ############################
//################   ##########            ########          #############   ############################
//#######################################################################################################

const testAddUser = async (req: Request, res: Response, next: NextFunction) => {
  let response: AxiosResponse = await axios.post(
    `http://127.1.91.11:6060/add/user`,
    {
      name: "Rishi Gurung",
      image: "https://thumbsnap.com/i/8J5Hv2hD.jpg",
      email: "risgur00@gmail.com",
      phone: "6005949576",
    }
  );
  // return response
  return res.status(200).json({
    message: response.data,
  });
};

const allUser = async (req: Request, res: Response, next: NextFunction) => {
  const getQuery = "SELECT * FROM users";
  db.all(getQuery, (err: any, row: any) => {
    if (err) {
      res.json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.json({
        message: "No User Found",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};


export default {
  addUser,
  logUser,
  testAddUser,
  allUser,
};
