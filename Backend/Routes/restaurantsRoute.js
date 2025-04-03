import { createRestaurant, deleteRestaurant, FetchRestaurants, updateRestaurant } from "../Controller/restaurantsController.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function routes(app)
{
app.post("/api/restaurant",createRestaurant);
app.get("/api/restaurant",verifyToken,FetchRestaurants);
app.put("/api/restaurant/:id",updateRestaurant);
app.delete("/api/restaurant/:id",deleteRestaurant);

}