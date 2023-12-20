import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addOrder = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    user_id: req.body.user_id,
    p_id: req.body.p_id,
    p_name: req.body.p_name,
    p_price: req.body.p_price,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    postal_code: req.body.postal_code
  };
  const sql =
    "INSERT INTO orders (user_id, p_id, p_name, p_price, name, phone, email, address, postal_code, delivered, date, time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
  const params = [
    data.user_id,
    data.p_id,
    data.p_name,
    data.p_price,
    data.name,
    data.phone,
    data.email,
    data.address,
    data.postal_code,
    "",
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

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  const getQuery = "SELECT * FROM orders";
  db.all(getQuery, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "orders Not Found",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};

const getOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM orders WHERE order_id=?";
  const params = [id];
  db.get(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "order Not Found",
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
  addOrder,
  getOrders,
  getOrder
};
