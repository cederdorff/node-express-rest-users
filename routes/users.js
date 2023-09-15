import { Router } from "express";
import connection from "../database.js";

const usersRouter = Router();

// READ all users
usersRouter.get("/", (request, response) => {
    // sql query to select all from the table users
    const query = "SELECT * FROM users ORDER BY name;";
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

// READ one user
usersRouter.get("/:id", (request, response) => {
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
usersRouter.post("/", (request, response) => {
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
usersRouter.put("/:id", (request, response) => {
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
usersRouter.delete("/:id", (request, response) => {
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

export default usersRouter;
