import jwt from "jsonwebtoken";
import userModel from "../Model/usersModel.js";

const tokenSecret = process.env.TOKEN_SECRET || "harsh009";

export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.Authorization &&
    req.headers.Authorization.split(" ")[0] === "JWT"
  ) {
    const token = req.headers.Authorization.split(" ")[1];
    jwt.verify(token, "harsh009", function (err, verifiedToken) {
      if (err) {
        return res.status(403).json({ message: "Invalid JWT Token" });
      }
      if (!verifiedToken) {
        return res.status(401).json({ message: "Invalid token" });
      }
      userModel
        .findById(verifiedToken._id)
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: "User  not found" });
          }
          req.user = user;
          next();
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    });
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
}