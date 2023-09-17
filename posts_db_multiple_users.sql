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
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
INSERT INTO posts (caption, image)
VALUES
    ('Beautiful sunset at the beach', 'https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('Exploring the city streets of Aarhus', 'https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('Delicious food at the restaurant', 'https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('Exploring the city center of Aarhus', 'https://images.unsplash.com/photo-1612624629424-ddde915d3dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('A cozy morning with coffee', 'https://images.unsplash.com/photo-1545319261-f3760f9dd64d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('Serenity of the forest', 'https://images.unsplash.com/photo-1661505216710-32316e7b5bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('A beautiful morning in Aarhus', 'https://images.unsplash.com/photo-1573997953524-efed43db70a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'),
    ('Rainbow reflections of the city of Aarhus', 'https://images.unsplash.com/photo-1558443336-dbb3de50b8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80');

-- Create a Junction Table to link posts and users
CREATE TABLE posts_users (
    post_id INT,
    user_id INT,
    PRIMARY KEY (post_id, user_id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert data into 'posts_users' to create the link - relationship
INSERT INTO posts_users (post_id, user_id)
VALUES
    (1, 2),  -- User with ID 2 is associated with Post 1
    (1, 4),  -- User with ID 4 is associated with Post 1
    (2, 2),  -- User with ID 2 is associated with Post 2
    (2, 5),  -- User with ID 5 is associated with Post 2
    (4, 5),  -- User with ID 5 is associated with Post 4
    (2, 1),  -- User with ID 1 is associated with Post 2
    (3, 3),  -- User with ID 3 is associated with Post 3
    (5, 1),  -- User with ID 1 is associated with Post 5
    (5, 2),  -- User with ID 2 is associated with Post 5
    (6, 2),  -- User with ID 2 is associated with Post 6
    (7, 5),  -- User with ID 5 is associated with Post 7
    (8, 3);  -- User with ID 3 is associated with Post 8


-- 1. Select All Posts
SELECT * FROM posts;

-- 2. Select All Users
SELECT * FROM users;





-- 6. Select Posts Created After a Specific Date (Replace 'YYYY-MM-DD' with the desired date)
SELECT * FROM posts
WHERE createdAt > 'YYYY-MM-DD';

-- 7. Select Posts with Captions Containing a Keyword (Replace 'keyword' with the desired keyword)
SELECT * FROM posts
WHERE caption LIKE '%keyword%';

-- Select Posts with Users' Names and Titles 
-- (Join Users, Posts, and posts_users Tables)
SELECT *
FROM posts
INNER JOIN posts_users
    ON posts.id = posts_users.post_id
INNER JOIN users
    ON posts_users.user_id = users.id;

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
            WHERE posts.id = 2;

-- ANALYZE TABLE posts;

-- Same, but with aliases
SELECT posts.id AS post_id,
       posts.caption,
       posts.image AS post_image,
       users.id AS user_id,
       users.name AS user_name,
       users.mail,
       users.title,
       users.image AS user_image
FROM posts
INNER JOIN posts_users
    ON posts.id = posts_users.post_id
INNER JOIN users
    ON posts_users.user_id = users.id;

-- Same, but with other aliases
SELECT posts.*,
       users.name AS user_name,
       users.title AS user_title
FROM posts
INNER JOIN posts_users
    ON posts.id = posts_users.post_id
INNER JOIN users
    ON posts_users.user_id = users.id;

-- Select Posts by a User with Their Name 
-- (Replace X with the user's ID)
SELECT posts.*,
       users.name AS user_name
FROM posts
INNER JOIN posts_users
    ON posts.id = posts_users.post_id
INNER JOIN users
    ON posts_users.user_id = users.id
WHERE users.id = 2;


SELECT *
FROM posts,
     users,
     posts_users
WHERE posts.id = posts_users.post_id
  AND posts_users.user_id = users.id;