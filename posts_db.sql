-- Delete a database
DROP DATABASE posts_db;

-- Create a database
CREATE DATABASE posts_db;

-- Use database posts_db
USE posts_db;

-- Create a New Table


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(100),
    image TEXT
);

CREATE TABLE posts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    caption VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy INT,
    FOREIGN KEY (createdBy) REFERENCES users(id)
);

-- Insert data into the 'users' table
INSERT INTO users (image, mail, name, title)
VALUES
    ('https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921650330000&format=webp', 'mlbe@eaaa.dk', 'Maria Louise Bendixen', 'Senior Lecturer'),
    ('https://share.cederdorff.com/images/race.jpg', 'race@eaaa.dk', 'Rasmus Cederdorff', 'Senior Lecturer'),
    ('https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921531600000&format=webp', 'anki@eaaa.dk', 'Anne Kirketerp', 'Head of Department'),
    ('https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000', 'lskj@eaaa.dk', 'Line Skjødt', 'Senior Lecturer & Internship Coordinator'),
    ('https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp', 'dob@eaaa.dk', 'Dan Okkels Brendstrup', 'Lecturer');

-- Insert data into the 'posts' table
INSERT INTO posts (caption, image, createdBy)
VALUES
    ('Beautiful sunset at the beach', 'https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 2),
    ('Exploring the city streets of Aarhus', 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 4),
    ('Delicious food at the restaurant', 'https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 1),
    ('Exploring the city center of Aarhus', 'https://images.unsplash.com/photo-1612624629424-ddde915d3dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 2),
    ('A cozy morning with coffee', 'https://images.unsplash.com/photo-1545319261-f3760f9dd64d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 2),
    ('Serenity of the forest', 'https://images.unsplash.com/photo-1661505216710-32316e7b5bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 5),
    ('A beautiful morning in Aarhus', 'https://images.unsplash.com/photo-1573997953524-efed43db70a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 5),
    ('Rainbow reflections of the city of Aarhus', 'https://images.unsplash.com/photo-1558443336-dbb3de50b8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', 3);


select * FROM posts;
select * FROM users;

-- 3. Select Posts with User Information (Join Users and Posts)
SELECT posts.*,
       users.name AS user_name
FROM posts
INNER JOIN users ON posts.createdBy = users.id;

-- Select all (posts and users) where createBy is equal to user id
SELECT posts.caption, users.name
FROM posts,
     users
WHERE posts.createdBy = users.id;

-- Select selected column with aliases
SELECT posts.caption,
       posts.image AS postImage,
       posts.createdAt,
       users.name,
       users.title,
       users.image AS userImage
FROM posts, users
WHERE posts.createdBy = users.id;

-- Select Posts by a Specific User (user with id 2)
SELECT * FROM posts
WHERE createdBy = 2;

-- Select Users Who Created Posts (Users with Posts)
SELECT DISTINCT users.*
FROM users
INNER JOIN posts ON users.id = posts.createdBy;

-- 9. Count the Number of Posts by Each User
SELECT users.name,
       COUNT(posts.id) AS post_count
FROM users
LEFT JOIN posts ON users.id = posts.createdBy
GROUP BY users.id;