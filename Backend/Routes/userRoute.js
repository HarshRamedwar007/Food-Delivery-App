import { login, register } from "../Controller/usersController.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function userRoutes(app)
{
app.post("/api/register",register);
app.post("/api/login", login)

}