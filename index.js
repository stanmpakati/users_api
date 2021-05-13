import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hello Weirdo"));

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
