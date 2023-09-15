import { Router } from "express";
import connection from "../database.js";

const postsRouter = Router();

// // READ all posts
// postsRouter.get("/", (request, response) => {
//     // sql query to select all from the table users
//     const query = /*sql*/ `
//             SELECT posts.*,
//                 users.name AS userName,
//                 users.title AS userTitle,
//                 users.image AS userImage,
//                 users.mail as userMail,
//                 users.id AS userId
//             FROM posts
//             INNER JOIN posts_users
//                 ON posts.id = posts_users.post_id
//             INNER JOIN users
//                 ON posts_users.user_id = users.id;
//     `;
//     connection.query(query, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//         } else {
//             response.json(results);
//         }
//     });
// });

postsRouter.get("/", (request, response) => {
    // sql query to select all from the table posts
    const query = /*sql*/ `
            SELECT posts.*,
                users.name AS userName,
                users.title AS userTitle,
                users.image AS userImage,
                users.mail as userMail,
                users.id AS userId
            FROM posts
            INNER JOIN posts_users
                ON posts.id = posts_users.post_id
            INNER JOIN users
                ON posts_users.user_id = users.id;
    `;
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.log(error);
            // Handle error and send an error response if needed
            response.status(500).json({ error: "An error occurred" });
        } else {
            // Prepare the data - array of posts with users array for each post object
            const posts = preparePostData(results);
            // Send the formatted data as JSON response
            response.json(posts);
        }
    });
});

// READ all posts
// postsRouter.get("/:id", (request, response) => {
//     const id = request.params.id;

//     // sql query to select all from the table users
//     const query = /*sql*/ `
//             SELECT posts.*,
//                 users.name AS userName,
//                 users.title AS userTitle,
//                 users.image AS userImage,
//                 users.mail as userMail,
//                 users.id AS userId
//             FROM posts
//             INNER JOIN posts_users
//                 ON posts.id = posts_users.post_id
//             INNER JOIN users
//                 ON posts_users.user_id = users.id
//             WHERE posts.id = ?;
//     `;
//     const values = [id];

//     connection.query(query, values, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//         } else {
//             response.json(results);
//         }
//     });
// });

postsRouter.get("/:id", (request, response) => {
    const id = request.params.id;

    // sql query to select all from the table posts
    const query = /*sql*/ `
            SELECT posts.*,
                users.name AS userName,
                users.title AS userTitle,
                users.image AS userImage,
                users.mail as userMail,
                users.id AS userId
            FROM posts
            INNER JOIN posts_users
                ON posts.id = posts_users.post_id
            INNER JOIN users
                ON posts_users.user_id = users.id
            WHERE posts.id = ?;
    `;
    const values = [id];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            // Handle error and send an error response if needed
            response.status(500).json({ error: "An error occurred" });
        } else {
            // Prepare the data - array of posts with users array for each post object
            const posts = preparePostData(results);
            // Send the formatted data as JSON response
            response.json(posts);
        }
    });
});

export default postsRouter;

// HELPERS

function preparePostData(results) {
    // Create an object to store posts with users as an array
    const postsWithUsers = {};

    for (const post of results) {
        // If the post is not in the object, add it
        if (!postsWithUsers[post.id]) {
            postsWithUsers[post.id] = {
                id: post.id,
                caption: post.caption,
                image: post.image,
                createdAt: post.createdAt,
                // Add other post properties here
                users: []
            };
        }

        // Add user information to the post's users array
        postsWithUsers[post.id].users.push({
            name: post.userName,
            title: post.userTitle,
            image: post.userImage,
            mail: post.userMail,
            id: post.userId
        });
    }

    // Convert the object of posts into an array
    const postsArray = Object.values(postsWithUsers);
    return postsArray;
}
