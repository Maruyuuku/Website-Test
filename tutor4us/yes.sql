INSERT INTO users 
(userID, name, username, Passwrd, occupation, Bio)
values('2','Olivia', 'maruyuuku', '1234', "student", "Just living life, bro.");

INSERT INTO users 
(userID, name, username, Passwrd, occupation, Bio)
values('1','Jane', 'jaybear', '1234', "student", "Tryna learn new things.");

SELECT * FROM users WHERE Passwrd = '1234';