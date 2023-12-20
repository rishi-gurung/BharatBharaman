import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description
  };
  const sql =
    "INSERT INTO products (name, price, image, description, date, time) VALUES (?,?,?,?,?,?)";
  const params = [
    data.name,
    data.price,
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

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  const getQuery = "SELECT * FROM products";
  db.all(getQuery, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "Products Not Found",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM products WHERE p_id=?";
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
  addProduct,
  getProducts,
  getProduct
};
