import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;

  users.push({ ...users, id: uuidv4() });

  res.send(`user ${newUser.firstName} has been added`);
});

export default router;
