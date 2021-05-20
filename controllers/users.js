import { v4 as uuidv4 } from "uuid";

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    id: "1",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    id: "2",
  },
];

export const createUser = (req, res) => {
  const newUser = req.body;

  users.push({ ...newUser, id: uuidv4() });

  res.send(`user ${newUser.firstName} has been added`);
};

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  if (foundUser) {
    res.send(foundUser);
  } else {
    res.send("Sorry, No user by that id");
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user ${id} has been deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(user);
};
