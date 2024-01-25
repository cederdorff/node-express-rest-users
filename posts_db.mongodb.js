use("posts_db");

//users

// db.users.insertMany([
//     {
//         image: "https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921650330000&format=webp",
//         mail: "mlbe@eaaa.dk",
//         name: "Maria Louise Bendixen",
//         title: "Senior Lecturer"
//     },
//     {
//         image: "https://share.cederdorff.dk/images/race.jpg",
//         mail: "race@eaaa.dk",
//         name: "Rasmus Cederdorff",
//         title: "Senior Lecturer"
//     },
//     {
//         image: "https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921531600000&format=webp",
//         mail: "anki@eaaa.dk",
//         name: "Anne Kirketerp",
//         title: "Head of Department"
//     },
//     {
//         image: "https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000",
//         mail: "lskj@eaaa.dk",
//         name: "Line Skjødt",
//         title: "Senior Lecturer & Internship Coordinator"
//     },
//     {
//         image: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
//         mail: "dob@eaaa.dk",
//         name: "Dan Okkels Brendstrup",
//         title: "Lecturer"
//     }
// ]);

// // posts

// db.posts.insertMany([
//     {
//         caption: "Beautiful sunset at the beach",
//         createdAt: new Date("2023-04-05T15:27:14Z"),
//         image: "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Anne Kirketerp" })._id
//     },
//     {
//         caption: "Exploring the city streets of Aarhus",
//         createdAt: new Date("2023-04-06T10:45:30Z"),
//         image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Rasmus Cederdorff" })._id
//     },
//     {
//         caption: "Delicious food at the restaurant",
//         createdAt: new Date("2023-04-04T20:57:24Z"),
//         image: "https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Anne Kirketerp" })._id
//     },
//     {
//         caption: "Exploring the city center of Aarhus",
//         createdAt: new Date("2023-04-06T10:58:24Z"),
//         image: "https://images.unsplash.com/photo-1612624629424-ddde915d3dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Dan Okkels Brendstrup" })._id
//     },
//     {
//         caption: "A cozy morning with coffee",
//         createdAt: new Date("2023-04-03T08:21:04Z"),
//         image: "https://images.unsplash.com/photo-1545319261-f3760f9dd64d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Maria Louise Bendixen" })._id
//     },
//     {
//         caption: "Serenity of the forest",
//         createdAt: new Date("2023-04-05T14:34:04Z"),
//         image: "https://images.unsplash.com/photo-1661505216710-32316e7b5bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Maria Louise Bendixen" })._id
//     },
//     {
//         caption: "A beautiful morning in Aarhus",
//         createdAt: new Date("2023-04-06T09:10:54Z"),
//         image: "https://images.unsplash.com/photo-1573997953524-efed43db70a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Line Skjødt" })._id
//     },
//     {
//         caption: "Rainbow reflections of the city of Aarhus",
//         createdAt: new Date("2023-04-02T20:25:34Z"),
//         image: "https://images.unsplash.com/photo-1558443336-dbb3de50b8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
//         uid: db.users.findOne({ name: "Dan Okkels Brendstrup" })._id
//     }
// ]);

// db.users.replaceOne(
//     // Specify the user you want to replace
//     { _id: ObjectId("65b2199e9064f6ef7069dace") },
//     // Specify the new user
//     {
//         image: "https://new-image-url.com",
//         mail: "new-email@example.com"
//         // Add more fields as needed
//     }
// );

db.users.find({}, { _id: 0, posts: 1 });
