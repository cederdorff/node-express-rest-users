import cors from "cors";
import express from "express";
import db from "./database.js";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json()); // to parse JSON bodies
app.use(cors());

app.get("/", (req, res) => {
    res.send("Node Express REST Users API");
});

// READ all users
app.get("/users", async (request, response) => {
    // sql query to select all from the table users
    const query = "SELECT * FROM users ORDER BY name;";
    const [users] = await db.execute(query); // execute the query
    response.json(users); // send response
});

// READ one user
app.get("/users/:id", async (request, response) => {
    const id = request.params.id;
    const query = "SELECT * FROM users WHERE id=?;"; // sql query
    const values = [id];

    const [results] = await db.execute(query, values); // execute the query

    response.json(results[0]); // send response
});

// CREATE user
app.post("/users", async (request, response) => {
    const user = request.body;
    const query = "INSERT INTO users(name, mail, title, image) values(?,?,?,?);"; // sql query
    // const query = "INSERT INTO users SET name=?, mail=?, title=?, image=?;"; // sql query
    const values = [user.name, user.mail, user.title, user.image];

    const [result] = await db.execute(query, values); // execute the query

    response.json(result); // send response
});

// UPDATE user
app.put("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = request.body;
    const query = "UPDATE users SET name=?, mail=?, title=?, image=? WHERE id=?;"; // sql query
    // const query = `UPDATE users SET name="${user.name}", mail="${user.mail}", title="${user.title}", image="${user.image}" WHERE id=${id};`; // sql query
    const values = [user.name, user.mail, user.title, user.image, id];

    const [result] = await db.execute(query, values); // execute the query

    response.json(result); // send response
});

// DELETE user
app.delete("/users/:id", async (request, response) => {
    const id = request.params.id; // tager id fra url'en, så det kan anvendes til at finde den givne bruger med "det" id.
    const query = "DELETE FROM users WHERE id=?;"; // sql query
    const values = [id];

    const [result] = await db.execute(query, values); // execute the query

    response.json(result); // send response
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
