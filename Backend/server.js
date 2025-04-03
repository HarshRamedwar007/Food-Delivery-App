import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/restaurantsRoute.js";
import { userRoutes } from "./Routes/userRoute.js";
import cors from "cors";
const app = express();

mongoose.connect("mongodb+srv://harshramedwar23:harsh009@cluster0.aouov5h.mongodb.net/");
const db = mongoose.connection;
db.on("open",()=>
{
    console.log("connected to database");
});

app.listen(4000, () => {
  console.log("port is Running on 3000 hello");
});
app.use(express.json());
app.use(cors());
routes(app);
userRoutes(app);
// app.get("/", (req, res) => {
//   res.send("learning Node");
// });

// app.get("/user", (req, res) => {
//   res.send("hello");
// });

// const users = [
//   { id: 1, name: "harsh", age: 20 },
//   { id: 3, name: "shubham", age: 21 },
//   { id: 2, name: "saurabh", age: 22 },
// ];

// app.post("/user", (req, res) => {
//   const { name, age } = req.body;
//   const newUser = {
//     id: Math.trunc(Math.random() * 20),
//     name: name,
//     age: age,
//   };
//   users.push(newUser);
//   res.send(users);
// });

// app.put("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((user) => (user.id = id));
//   if (!user) {
//     return res.status(404).json({ Message: "user not founr" });
//   }
//   const keys = Object.keys(req.body);
//   keys.forEach((key) => {
//     if (!user[key]) {
//       return res.status(404).end.json({ Message: "not found" });
//     }
//     user[key] = req.body[key];
//   });
//   res.json(users);
// });

// app.delete("/user/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((user) => (user.id = id));
//   if (!user) {
//     return res.status(404).json({ Message: "user not founr" });
//   }
//   const keys = Object.keys(req.body);
//   const FilteredUser = users.filter((user) => user.id != id);
//   res.json(FilteredUser);
// });

