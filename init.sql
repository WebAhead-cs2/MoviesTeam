begin;
-- // drop table if exists users, reviews, genres;
create table users (
    id serial primary key,
    email varchar(255) unique not null,
    password varchar(255) not null
);

create table reviews(
    id serial primary key,
    user_id integer references users(id),
    text_content text
);

create table genres(
    id integer,
    name varchar(255)
)