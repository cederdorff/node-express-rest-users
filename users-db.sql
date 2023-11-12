-- Delete a database
DROP DATABASE IF EXISTS users_db;

-- Create a database
CREATE DATABASE users_db;

-- Select and use database, users_db
USE users_db;

-- Create a New Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(100),
    image TEXT
);

-- insert
INSERT INTO users (name, mail, title, image) VALUES ('Peter Lind', 'petl@kea.dk', 'Senior Lecturer', 'https://share.cederdorff.com/images/petl.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Rasmus Cederdorff', 'race@dev.dk', 'Senior Lecturer', 'https://share.cederdorff.com/images/race.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Lars Bogetoft', 'larb@eaaa.dk', 'Head of Education', 'https://kea.dk/slir/w200-c1x1/images/user-profile/chefer/larb.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Edith Terte', 'edan@kea.dk', 'Lecturer', 'https://media.licdn.com/dms/image/C4E03AQE6nx7oUPqo_g/profile-displayphoto-shrink_800_800/0/1643707886591?e=1697673600&v=beta&t=Qp4GcxVlJfsZi4t-if6YJ6O1u7bH2oLwWgVxB-X5Nt4');
INSERT INTO users (name, mail, title, image) VALUES ('Frederikke Bender', 'fbe@kea.dk', 'Head of Education', 'https://kea.dk/slir/w200-c1x1/images/user-profile/chefer/fbe.jpg');
INSERT INTO users (name, mail, title, image) VALUES ('Murat Kilic', 'mki@eaaa.dk', 'Senior Lecturer', 'https://www.eaaa.dk/media/llyavasj/murat-kilic.jpg?width=800&height=450&rnd=133401946552600000');
INSERT INTO users (name, mail, title, image) VALUES ('Anne Kirketerp', 'anki@eaaa.dk', 'Head of Education', 'https://www.eaaa.dk/media/5buh1xeo/anne-kirketerp.jpg?width=800&height=450&rnd=133403878321500000');


-- select all
SELECT * FROM users;

-- select name and title
SELECT name, title
FROM users;

SELECT *
FROM users
WHERE mail LIKE '%@kea.dk';

SELECT *
FROM users
WHERE title = 'Lecturer';

SELECT *
FROM users
WHERE title = 'Senior Lecturer';

SELECT *
FROM users
WHERE name = 'Edith Terte';

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

-- counts the number of different titles
SELECT title, COUNT(title) as count
FROM users
GROUP BY title
HAVING count > 1;

-- Select all and order by name
SELECT *
FROM users
ORDER BY name;

-- Select all and order by title
SELECT *
FROM users
ORDER BY title;

-- Select all and order by name, descending order
SELECT *
FROM users
ORDER BY name DESC;