import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import db from "./ts-sql";

const addEvent = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    user_id: req.body.user_id,
    image: req.body.image,
    name: req.body.name,
    eventdate: req.body.eventdate,
    arival: req.body.arival,
    info: req.body.info,
    venue: req.body.venue,
    lastedate: req.body.lastedate
  };
  const sql =
    "INSERT INTO event (user_id, image, name, eventdate, arival, info, venue, lastedate, date, time) VALUES (?,?,?,?,?,?,?,?,?,?)";
  const params = [
    data.user_id,
    data.image,
    data.name,
    data.eventdate,
    data.arival,
    data.info,
    data.venue,
    data.lastedate,
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

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM event";
  db.all(getQuery, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "event NotFound",
      });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
};

const addEventRegister = async (req: Request, res: Response, next: NextFunction) => {
  const data = {
    event_id: req.body.event_id,
    user_id: req.body.user_id,
    kids: req.body.kids,
    adults: req.body.adults,
    country: req.body.country,
    phone: req.body.phone
  };
  const sql =
    "INSERT INTO visitevent (event_id, user_id, kids, adults, country, phone, date, time) VALUES (?,?,?,?,?,?,?,?)";
  const params = [
    data.event_id,
    data.user_id,
    data.kids,
    data.adults,
    data.country,
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

const getUserEvents = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const getQuery = "SELECT * FROM visitevent WHERE user_id=?";
  const params = [id];
  db.all(getQuery, params, (err: any, row: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (typeof row === "undefined") {
      res.status(404).send({
        message: "event NotFound",
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
  addEvent,
  getEvents,
  addEventRegister,
  getUserEvents
};
