import cors from "cors";
import express from "express";
import db from "./database.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Enable CORS for all routes

app.get("/", (request, response) => {
    db.ping();
    response.send("Node.js Users REST API 🎉");
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
