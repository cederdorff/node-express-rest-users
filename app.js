import cors from "cors";
import express from "express";
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";

const app = express();
const port = process.env.PORT;

app.use(express.json()); // to parse JSON bodies
app.use(cors());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.send("Node Express REST Users API");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`App listening on http://localhost:${port}`);
});
