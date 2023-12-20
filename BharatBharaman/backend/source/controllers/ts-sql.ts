import * as sqlite3 from "sqlite3";
const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err: any) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    // done               USERS
    const sqlUsers = `CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER  PRIMARY KEY AUTOINCREMENT,
            name text, 
            image text,
            email text UNIQUE,
            phone text UNIQUE,
            date text,
            time text,
            CONSTRAINT email_unique UNIQUE (email)
            );`;
    db.run(sqlUsers, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'users' table");
    });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // done               POSTS
    const sqlPosts = `CREATE TABLE IF NOT EXISTS posts (
      post_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      post text,
      name text, 
      image text,
      description text,
      date text,
      time text
      );`;
    db.run(sqlPosts, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'posts' table");
    });
    // done               POST COMMENTS
    const sqlPComment = `CREATE TABLE IF NOT EXISTS pcomments (
      comment_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      post_id INTEGER,
      user_id INTEGER,
      name text, 
      image text,
      comment text,
      date text,
      time text
      );`;
    db.run(sqlPComment, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'post comments' table");
    });
    // done               POST LIKES
    const sqlPLikes = `CREATE TABLE IF NOT EXISTS Plikes (
      like_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      post_id INTEGER,
      date text,
      time text
      );`;
    db.run(sqlPLikes, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'post likes' table");
    });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // done               SHORTS
    const sqlShorts = `CREATE TABLE IF NOT EXISTS shorts (
      short_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      short text,
      name text, 
      image text,
      description text,
      date text,
      time text
      );`;
    db.run(sqlShorts, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'shorts' table");
    });
    // done               SHORTS COMMENTS
    const sqlSComment = `CREATE TABLE IF NOT EXISTS scomments (
      comment_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      short_id INTEGER,
      user_id INTEGER,
      name text, 
      image text,
      comment text,
      date text,
      time text
      );`;
    db.run(sqlSComment, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'shorts comments' table");
    });
    // done               SHORT LIKES
    const sqlSLikes = `CREATE TABLE IF NOT EXISTS Slikes (
      like_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      short_id INTEGER,
      date text,
      time text
      );`;
    db.run(sqlSLikes, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'short likes' table");
    });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // done                EVENTS
    const sqlCreateEvent = `CREATE TABLE IF NOT EXISTS event (
      event_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      image text,
      name text,
      eventdate text,
      arival date,
      info text,
      venue text,
      lastedate text,
      date text,
      time text
      );`;
    db.run(sqlCreateEvent, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'event' table");
    });
    // done               REGISTER EVENT
    const sqlVisitEvent = `CREATE TABLE IF NOT EXISTS visitevent (
      reg_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      event_id INTEGER,
      user_id INTEGER,
      kids text,
      adults text,
      country text,
      phone text,
      date text,
      time text
      );`;
    db.run(sqlVisitEvent, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'visit event' table");
    });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //done                SHOP
    const sqlShop = `CREATE TABLE IF NOT EXISTS products (
      p_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      name text,
      price text,
      image text,
      description text,
      date text,
      time text
      );`;
    db.run(sqlShop, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'visit event' table");
    });
    //done              ORDERS
    const sqlOrders = `CREATE TABLE IF NOT EXISTS orders (
      order_id INTEGER  PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      p_id INTEGER,
      p_name text,
      p_price text,
      name text,
      phone text,
      email text,
      address text,
      postal_code text,
      delivered text,
      date text,
      time text
      );`;
    db.run(sqlOrders, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of the 'visit event' table");
    });
  }
});

export default db;
