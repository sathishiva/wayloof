import { v4 as uuidv4 } from "uuid";
import Users from "../models/users.js";
import mongoose from "mongoose";
var ObjectId = mongoose.Types.ObjectId;

// const users = [];
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  console.log("posting user");
  const user = new Users(req.body);
  //   const userWithId = { ...user, id: uuidv4() };
  //   users.push(userWithId);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
  res.send(`User ${user.firstname} Created`);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  //   const foundUser = users.find((user) => user.id === id);

  try {
    const foundUser = await Users.findById(id);
    if (foundUser === null) {
      res.status(404).send({ message: "User not found.." });
    }
    res.send(foundUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.send(foundUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (id.includes(",")) {
    const ids = id.split(",");
    var obj_ids = ids.map(function (id) {
      return ObjectId(id);
    });
    try {
      await Users.remove({ _id: { $in: obj_ids } });
      res.json({ message: "Deleted multiple users!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    res.send(`Multiple users deleted`);
  } else {
    const singleUser = await Users.findById(id);
    console.log("single user", singleUser);
    try {
      await singleUser.remove();
      res.json({ message: "Deleted the user!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    res.send(`User deleted`);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  //   const foundUser = users.find((user) => user.id === id);
  const foundUser = await Users.findById(id);
  if (firstname) foundUser.firstname = firstname;
  if (lastname) foundUser.lastname = lastname;
  if (age) foundUser.age = age;

  try {
    const updatedUser = await foundUser.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400);
  }
};
