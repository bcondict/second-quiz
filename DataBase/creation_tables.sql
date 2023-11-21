create database if not exists ver_tech_fellowship;
use ver_tech_fellowship;

create table if not exists users (
    id varchar(36),
    user_name varchar(255) not null,
    user_email varchar(255) not null,
    user_password varchar(255) not null,
    primary key (id)
);

create table if not exists queries_string (
    id varchar(36),
    user_id varchar(36),
    query_name varchar(255) not null,
    query_string text,
    query_description text,
    primary key (id),
    foreign key (user_id) references users(id)
);

create table if not exists others_comments (
    id varchar(36),
    user_id varchar(36),
    query_id varchar(36),
    comment text,
    primary key (id),
    foreign key (user_id) references users(id),
    foreign key (query_id) references queries_string(id)
);
