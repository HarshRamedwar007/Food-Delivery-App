import e from "express";
import restaurantModel from "../Model/RestaurantModel.js";
export function createRestaurant(req, res) {
  const { name, imageUrl, rating, cuisines, time } = req.body;
  const newRestaurant = new restaurantModel({
    name,
    imageUrl,
    rating,
    cuisines,
    time,
  });
  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        return res.status(400).send({ message: "Failed to create restaurant" });
      }
      res.send(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function FetchRestaurants(req, res) {
  restaurantModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "No restaurants found" });
      }
      res.json(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function updateRestaurant(req, res)
{
    const _id= req.params.id;
    restaurantModel.findByIdAndUpdate(_id, req.body).then(data =>
    {
        if(!data)
        {
            return res.status(404).json({ message: "No restaurants found" });  
        }
        res.send(data);
    }
    ).catch(err => res.status(500).json({message : err.message}));
}

export function deleteRestaurant(req, res)
{
    const _id= req.params.id;
    restaurantModel.findByIdAndDelete(_id).then(data =>
    {
        if(!data)
        {
            return  res.status(404).json({ message: "No restaurants found" });  
        }
        res.send(data); 
    }
    ).catch(err => res.status(500).json({message : err.message}));
}