use ver_tech_fellowship;

insert into users (id, user_name, user_email, user_password) 
values (uuid(), 'jesus', 'jesus.junc10@gmail.com', '123456');

-- Get the ID of the user just created
SET @user_id = (SELECT id FROM users WHERE user_name = 'jesus');

insert into queries (id, user_id, query_name, query, query_description)
values (uuid(), @user_id, 'query1', 'select * from users;', 'This is a query to get all the users from the table users');


select * from users; 
select * from queries;
