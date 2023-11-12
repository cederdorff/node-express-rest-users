-- Delete a database
DROP DATABASE users_db;

-- Create a database
CREATE DATABASE users_db;

-- Select and use database, users_db
USE users_db;

-- Create a New Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    mail VARCHAR(255),
    title VARCHAR(255),
    image VARCHAR(255)
);

-- Create a New Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(100),
    image VARCHAR(500)
);

-- Delete a table
DROP TABLE users;

-- insert
INSERT INTO users (name, mail, title, image) VALUES ('Peter Lind', 'petl@kea.dk', 'Senior Lecturer', 'https://share.cederdorff.com/images/petl.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Rasmus Cederdorff', 'race@dev.dk', 'Senior Lecturer', 'https://share.cederdorff.com/images/race.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Lars Bogetoft', 'larb@eaaa.dk', 'Head of Education', 'https://kea.dk/slir/w200-c1x1/images/user-profile/chefer/larb.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Edith Terte', 'edan@kea.dk', 'Lecturer', 'https://media.licdn.com/dms/image/C4E03AQE6nx7oUPqo_g/profile-displayphoto-shrink_800_800/0/1643707886591?e=1697673600&v=beta&t=Qp4GcxVlJfsZi4t-if6YJ6O1u7bH2oLwWgVxB-X5Nt4');
INSERT INTO users (name, mail, title, image) VALUES ('Frederikke Bender', 'fbe@kea.dk', 'Head of Education', 'https://kea.dk/slir/w200-c1x1/images/user-profile/chefer/fbe.jpg');


-- select all
SELECT * FROM users;

SELECT * FROM users ORDER BY name;
-- select name and title
SELECT name, title
FROM users;

SELECT *
FROM users
WHERE mail LIKE '%@kea.dk';

SELECT *
FROM users
WHERE title = 'Lecturer';

-- Create a New Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    mail VARCHAR(256),
    title VARCHAR(256),
    image TEXT
);

-- Create New Row (entity or record)
INSERT INTO users (name, mail, title, image)
VALUES ('John Doe', 'johndoe@example.com', 'Software Engineer', 'profile.jpg');

-- Update the title column for user with id 1
UPDATE users
SET title = 'Senior Software Engineer'
WHERE id = 1;

-- Update title and mail for user with id 2
UPDATE users
SET title = 'Senior Software Engineer',
    mail =  'race@eaaa.dk'
WHERE id = 2;

-- Delete row (user) with id 2
DELETE FROM users
WHERE id = 5;

-- Read data (name and mail column) from table (user)
SELECT name, mail
FROM users
WHERE title = 'Software Engineer'
ORDER BY name;

-- counts the number of different titles
SELECT title, COUNT(title) as count
FROM users
GROUP BY title;

