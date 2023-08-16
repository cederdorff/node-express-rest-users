import cors from "cors";
import express from "express";
import connection from "./database.js";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json()); // to parse JSON bodies
app.use(cors());

app.get("/", (req, res) => {
    res.send("Node Express REST Users API");
});

// READ all users
app.get("/users", (request, response) => {
    const query = "SELECT * FROM users ORDER BY name;"; // sql query to select all from the table users
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

// READ one user
app.get("/users/:id", (request, response) => {
    const id = request.params.id;
    const query = "SELECT * FROM users WHERE id=?;"; // sql query
    const values = [id];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results[0]);
        }
    });
});

// CREATE user
app.post("/users", (request, response) => {
    const user = request.body;
    const query = "INSERT INTO users(name, mail, title, image) values(?,?,?,?);"; // sql query
    // const query = "INSERT INTO users SET name=?, mail=?, title=?, image=?;"; // sql query
    const values = [user.name, user.mail, user.title, user.image];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

// UPDATE user
app.put("/users/:id", (request, response) => {
    const id = request.params.id;
    const user = request.body;
    const query = "UPDATE users SET name=?, mail=?, title=?, image=? WHERE id=?;"; // sql query
    // const query = `UPDATE users SET name="${user.name}", mail="${user.mail}", title="${user.title}", image="${user.image}" WHERE id=${id};`; // sql query
    const values = [user.name, user.mail, user.title, user.image, id];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

// DELETE user
app.delete("/users/:id", (request, response) => {
    const id = request.params.id; // tager id fra url'en, så det kan anvendes til at finde den givne bruger med "det" id.
    const query = "DELETE FROM users WHERE id=?;"; // sql query
    const values = [id];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`App listening on http://localhost:${port}`);
    console.log(`Users Endpoint http://localhost:${port}/users`);
});
