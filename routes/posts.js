import { Router } from "express";
import connection from "../database.js";

const postsRouter = Router();

// // READ all posts
postsRouter.get("/", (request, response) => {
    // sql query to select all from the table posts
    const query = /*sql*/ `
        SELECT posts.*,
            users.name AS userName,
            users.title AS userTitle,
            users.mail AS userMail,
            users.image AS userImage
        FROM posts
        INNER JOIN users ON posts.createdBy = users.id;
    `;
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

// READ all posts
postsRouter.get("/:id", (request, response) => {
    const id = request.params.id;
    // sql query to select all from the table users
    const query = /*sql*/ `
        SELECT posts.*,
            users.name AS userName,
            users.title AS userTitle,
            users.mail AS userMail,
            users.image AS userImage
        FROM posts
        INNER JOIN users ON posts.createdBy = users.id
        WHERE posts.id = ?;
    `;
    const values = [id];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.json(results);
        }
    });
});

export default postsRouter;
