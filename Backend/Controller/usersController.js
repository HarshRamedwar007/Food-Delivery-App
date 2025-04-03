import userModel from "../Model/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function register(req, res) {
  const { fullName, email, password } = req.body;
  userModel.findOne({ email }).then((data) => {
    if (data) {
      return res.status(403).json({ message: "User  already Exist" });
    } else {
      const newUser = new userModel({
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      newUser
        .save()
        .then((data) => {
          return res.status(201).json({ message: "registred succesfully" });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    }
  });
}

export function login(req, res) {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .then((data) => {
      if (!email) {
        return res.status(500).json({ message: "User is not Registered" });
      }
      let validPassword = bcrypt.compareSync(password, data.password);
      if (!validPassword) {
        return res.status(403).json({ message: "Invalid Password" });
      }
      let token = jwt.sign({id:data.id},"harsh009",{expiresIn: "10m"});

      res.send({
        user: {
          email: data.email,
          fullName: data.fullName,
        },
        accessToken :token,
      });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}
