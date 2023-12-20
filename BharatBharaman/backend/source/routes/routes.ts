// source/routes/routes.ts
import express from "express";
import user from "../controllers/user";
import posts from "../controllers/posts";
import shorts from "../controllers/shorts";
import likes from "../controllers/likes";
import products from "../controllers/products";
import orders from "../controllers/orders";

const router = express.Router();

//          Users    Functions

router.get("/log/:id", user.logUser);
router.post("/add/user", user.addUser);
//                 Testing
router.get("/adduser", user.testAddUser);
router.get("/allusers", user.allUser);


//          POSTS

router.get("/posts/:id", posts.getPosts);
router.post("/add/post", posts.addPost);
router.get("/get/comments/:id", posts.getPComments);
router.post("/add/comment", posts.addPComment);
router.post("/like/post", likes.addPLike);
router.get("/get/likes/:id", likes.getPlikes);

//          SHORTS

router.get("/short/:id", shorts.getShort);
router.post("/add/short", shorts.addShort);
router.get("/get/comments/:id", shorts.getSComments);
router.post("/add/comments", shorts.addSComment);

//          SHOP
router.get("/get/products", products.getProducts);
router.get("/get/product/:id", products.getProduct);
router.post("/add/product", products.addProduct);

//          ORDERS
router.get("/get/orders", orders.getOrders);
router.get("/get/order/:id", orders.getOrder);
router.post("/add/order", orders.addOrder);


export = router;
