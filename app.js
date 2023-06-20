import express from "express";
const app = express();
const port = 3333;
import fs from "fs/promises";

app.get("/", (req, res) => {
    res.send("Hello Worlddd!");
});

async function getUsersFromJSON() {
    const data = await fs.readFile("data.json");
    const users = JSON.parse(data);
    return users;
}

app.get("/users", async (request, response) => {
    response.json(await getUsersFromJSON());
});

app.get("/users/:id", async (request, response) => {
    const id = request.params.id; // tager id fra url'en, så det kan anvendes til at finde den givne bruger med "det" id.
    const users = await getUsersFromJSON();
    const user = users.find(user => user.id === id);
    response.json(user);
});

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
});
