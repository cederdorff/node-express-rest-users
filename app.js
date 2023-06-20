import express from "express";
import fs from "fs/promises";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json()); // to parse JSON bodies
app.use((request, response, next) => {
    response.setHeader("Allow-Access-Control-Header", "*");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

async function getUsersFromJSON() {
    const data = await fs.readFile("data.json");
    const users = JSON.parse(data);
    return users;
}

// READ all users
app.get("/users", async (request, response) => {
    response.json(await getUsersFromJSON());
});

// READ one user
app.get("/users/:id", async (request, response) => {
    const id = request.params.id; // tager id fra url'en, så det kan anvendes til at finde den givne bruger med "det" id.
    const users = await getUsersFromJSON();
    const user = users.find(user => user.id === id);
    response.json(user);
});

// CREATE user
app.post("/users", async (request, response) => {
    const newUser = request.body;
    newUser.id = new Date().getTime();
    console.log(newUser);

    const users = await getUsersFromJSON();
    users.push(newUser);
    fs.writeFile("data.json", JSON.stringify(users));
    response.json(users);
});

// UPDATE user
app.put("/users/:id", async (request, response) => {
    const id = request.params.id; // tager id fra url'en, så det kan anvendes til at finde den givne bruger med "det" id.
    const users = await getUsersFromJSON();
    let userToUpdate = users.find(user => user.id === id);
    const body = request.body;
    userToUpdate.image = body.image;
    userToUpdate.mail = body.mail;
    userToUpdate.name = body.name;
    userToUpdate.title = body.title;

    fs.writeFile("data.json", JSON.stringify(users));
    response.json(users);
});

// DELETE user
app.delete("/users/:id", async (request, response) => {
    const id = request.params.id; // tager id fra url'en, så det kan anvendes til at finde den givne bruger med "det" id.
    const users = await getUsersFromJSON();
    // const newUsers = users.filter(user => user.id === id);
    const userToDelete = users.findIndex(user => user.id === id);
    users.splice(userToDelete, 1);
    fs.writeFile("data.json", JSON.stringify(users));
    response.json(users);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);

    console.log(`App listening on http://localhost:${port}`);
    console.log(`Users Endpoint http://localhost:${port}/users`);
});
