begin;

drop table if exists users, reviews, movies CASCADE;

create table users (
    id serial primary key,
    username varchar(255) not null,
    email varchar(255)  not null,
    password varchar(255) not null
);

create table movies(
    id serial primary key,
    movie_name varchar(255) not null,
    director varchar(255),
    writer varchar(255),
    genre varchar(255),
    year integer,
    runTime integer,
    img text,
    storyLine text
);

create table reviews(
    id serial primary key,
    user_id integer references users (id),
    movie_id integer references movies(id),
    text_content text not null
);



INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
    ('The Shawshank Redemption', 'Frank Darabont', 'Stephen King, Frank Darabont', 'Drama', 1994, 142, 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-', 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the mans unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES 
    ('Taxi', 'Martin Scorsese', 'Paul Schrader', 'Crime, Drama', 1976, 114, 'https://upload.wikimedia.org/wikipedia/en/3/33/Taxi_Driver_%281976_film_poster%29.jpg', 'Travis Bickle is an ex-Marine and Vietnam War veteran living in New York City. As he suffers from insomnia, he spends his time working as a taxi driver at night, watching porn movies at seedy cinemas during the day, or thinking about how the world, New York in particular, has deteriorated into a cesspool. He is a loner who has strong opinions about what is right and wrong with mankind. For him, the one bright spot in New York humanity is Betsy, a worker on the presidential nomination campaign of Senator Charles Palantine. He becomes obsessed with her. After an incident with her, he believes he has to do whatever he needs to make the world a better place in his opinion. One of his priorities is to be the savior for Iris, a twelve-year-old runaway and prostitute who he believes wants out of the profession and under the thumb of her pimp and lover Matthew.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
    ('Pulp Fiction', 'Quentin Tarantino', 'Quentin Tarantino, Roger Avary', 'Crime, Drama', 1994, 154, 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg', 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.')
;
INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
    ('Inception', 'Christopher Nolan', 'Christopher Nolan', 'Action, Adventure, Sci-Fi', 2010, 148, 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg', 'Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobbs rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES 
    ('Up', 'Pete Docter, Bob Peterson', 'Pete Docter, Bob Peterson, Tom McCarthy', 'Animation, Adventure, Comedy', 2009, 96, 'https://m.media-amazon.com/images/I/61702e1qYUL._AC_SY445_.jpg', 'As a boy, Carl Fredricksen wanted to explore South America and find the forbidden Paradise Falls. About 64 years later he gets to begin his journey along with Boy Scout Russell by lifting his house with thousands of balloons. On their journey, they make many new friends including a talking dog, and figure out that someone has evil plans. Carl soon realizes that this evildoer is his childhood idol.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
    ('Parasite', 'Bong Joon Ho', 'Bong Joon Ho, Han Jin-won', 'Drama, Thriller', 2019, 132, 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg', 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES 
    ('Joker', 'Todd Phillips', 'Todd Phillips, Scott Silver, Bob Kane', 'Crime, Drama, Thriller', 2019, 122, 'https://m.media-amazon.com/images/I/81YdUDaMiWL._AC_SL1500_.jpg', 'Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
    ('Shrek', 'Andrew Adamson, Vicky Jenson', 'William Steig, Ted Elliott, Terry Rossio', 'Animation, Adventure, Comedy', 2001, 90, 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg', 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.')
;

INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
    ('The Hangover', 'Todd Phillips', 'Jon Lucas, Scott Moore', 'Comedy', 2009, 100, 'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg', 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.')
;

-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
--     ('The Matrix', 'Lana Wachowski, Lilly Wachowski', 'Lana Wachowski, Lilly Wachowski', 'Action, Sci-Fi', 1999, 136, 'https://cdn.posteritati.com/posters/000/000/065/339/the-matrix-md-web.jpg', 'Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.')
-- ;

-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
--     ('Se7en', 'David Fincher', 'Andrew Kevin Walker', 'Crime, Drama, Mystery', 1995, 127, 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg', 'A film about two homicide detectives (Morgan Freeman and Brad Pitt) desperate hunt for a serial killer who justifies his crimes as absolution for the worlds ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic John Doe (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderers terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killers modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer...')
-- ;

-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
--     ('Amélie', 'Jean-Pierre Jeunet', 'Guillaume Laurant, Jean-Pierre Jeunet', 'Comedy, Romance', 2001, 122, 'https://m.media-amazon.com/images/I/51kf0YW+bwL._SX376_BO1,204,203,200_.jpg', 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.')
-- ;

-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
--     ('WALL·E', 'Andrew Stanton', 'Andrew Stanton, Pete Docter, Jim Reardon', 'Animation, Adventure, Family', 2008, 98,  'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_FMjpg_UX1000_.jpg', 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.')
-- ;
-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
--     ('Zombieland', 'Ruben Fleischer', 'Rhett Reese, Paul Wernick', 'Action, Comedy, Horror', 2009, 88, 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/12/1490098672-zombieland1.jpg?resize=480:*', 'A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.')
-- ;
-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES
--     ('I Am Legend', 'Francis Lawrence', 'Mark Protosevich, Akiva Goldsman, Richard Matheson', 'Action, Drama, Sci-Fi', 2007, 101, 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/iamlegend.mp_480x.progressive.jpg?v=1610391791', 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.')
-- ;
-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES 
--     ('Black Swan', 'Darren Aronofsky', 'Mark Heyman, Andres Heinz, John J. McLaughlin', 'Drama, Thriller', 2010, 108, 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/dbb6feec00d9ba133f32046452658984_500x.jpg?v=1573617508', 'A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovskys Swan Lake.')
-- ;
-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img, storyLine) VALUES 
--     ('28 Days Later...', 'Danny Boyle', 'Alex Garland', 'Drama, Horror, Sci-Fi', 2002, 113, 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/505d1b2902d13709142585f9e5353da7_60bfb032-0ed0-4bb9-99e4-81ac80686007_350x.jpg?v=1573587246', 'Animal activists invade a laboratory with the intention of releasing chimpanzees that are undergoing experimentation, infected by a virus -a virus that causes rage. The naive activists ignore the pleas of a scientist to keep the cages locked, with disastrous results. Twenty-eight days later, our protagonist, Jim, wakes up from a coma, alone, in an abandoned hospital. He begins to seek out anyone else to find London is deserted, apparently without a living soul. After finding a church, which had become inhabited by zombie like humans intent on his demise, he runs for his life. Selena and Mark rescue him from the horde and bring him up to date on the mass carnage and horror as all of London tore itself apart. This is a tale of survival and ultimately, heroics, with nice subtext about mankinds savage nature.')
-- ;

-- INSERT INTO movies (movie_name, director, writer, genre, year, runTime, img) VALUES
--     ('The Shawshank Redemption', 'Frank Darabont', 'Stephen King, Frank Darabont', 'Drama', 1994, 142, './posters/shawshank.jpg'),
--     ('Taxi', 'Martin Scorsese', 'Paul Schrader', 'Crime, Drama', 1976, 114, './posters/taxi.jpg'),
--     ('Pulp Fiction', 'Quentin Tarantino', 'Quentin Tarantino, Roger Avary', 'Crime, Drama', 1994, 154, './posters/pulp-fiction.jpg'),
--     ('Inception', 'Christopher Nolan', 'Christopher Nolan', 'Action, Adventure, Sci-Fi', 2010, 148, './posters/inception.jpg'),
--     ('Up', 'Pete Docter, Bob Peterson', 'Pete Docter, Bob Peterson, Tom McCarthy', 'Animation, Adventure, Comedy', 2009, 96, './posters/up.jpg'),
--     ('Parasite', 'Bong Joon Ho', 'Bong Joon Ho, Han Jin-won', 'Drama, Thriller', 2019, 132, './posters/parasite.jpg'),
--     ('Joker', 'Todd Phillips', 'Todd Phillips, Scott Silver, Bob Kane', 'Crime, Drama, Thriller', 2019, 122, './posters/joker.jpg'),
--     ('Shrek', 'Andrew Adamson, Vicky Jenson', 'William Steig, Ted Elliott, Terry Rossio', 'Animation, Adventure, Comedy', 2001, 90, './posters/shrek.jpg'),
--     ('The Hangover', 'Todd Phillips', 'Jon Lucas, Scott Moore', 'Comedy', 2009, 100, './posters/hangover.jpg'),
--     ('The Matrix', 'Lana Wachowski, Lilly Wachowski', 'Lana Wachowski, Lilly Wachowski', 'Action, Sci-Fi', 1999, 136, './posters/matrix.jpg'),
--     ('Se7en', 'David Fincher', 'Andrew Kevin Walker', 'Crime, Drama, Mystery', 1995, 127, './posters/seven.jpg'),
--     ('Amélie', 'Jean-Pierre Jeunet', 'Guillaume Laurant, Jean-Pierre Jeunet', 'Comedy, Romance', 2001, 122, './posters/amelie.jpg'),
--     ('WALL·E', 'Andrew Stanton', 'Andrew Stanton, Pete Docter, Jim Reardon', 'Animation, Adventure, Family', 2008, 98, './posters/walle.jpg'),
--     ('Zombieland', 'Ruben Fleischer', 'Rhett Reese, Paul Wernick', 'Action, Comedy, Horror', 2009, 88, './posters/zombieland.jpg'),
--     ('I Am Legend', 'Francis Lawrence', 'Mark Protosevich, Akiva Goldsman, Richard Matheson', 'Action, Drama, Sci-Fi', 2007, 101, './posters/i-am-legend.jpg'),
--     ('Black Swan', 'Darren Aronofsky', 'Mark Heyman, Andres Heinz, John J. McLaughlin', 'Drama, Thriller', 2010, 108, './posters/black-swan.jpg'),
--     ('28 Days Later...', 'Danny Boyle', 'Alex Garland', 'Drama, Horror, Sci-Fi', 2002, 113, './posters/28later.jpg')

-- ;

-- insert into movies (img) values
--     ('./posters/shawshank'),
--     ('./posters/taxi'),
--     ('./posters/pulp-fiction'),
--     ('./posters/inception'),
--     ('./posters/up');
--     ('./posters/parasite'),
--     ('./posters/joker'),
--     ('./posters/shrek'),
--     ('./posters/hangover'),
--     ('./posters/matrix'),
--     ('./posters/seven'),
--     ('./posters/amelie'),
--     ('./posters/walle'),
--     ('./posters/zombieland'),
--     ('./posters/i-am-legend'),
--     ('./posters/black-swan'),
--     ('./posters/28-days-later')
-- ;    

commit;

