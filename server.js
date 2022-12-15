const express = require("express");
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const router = require('./router');
const templates = require('./templates');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const db = require('./database/connection');
//const res = require("express/lib/response");
const { use } = require("./router");
//let html = '';
const app = express();
app.use(express.static(__dirname + '/MainPage'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('etag', false)
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
})

app.use(router);



app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
    .then(hash => {
        db.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`, [username, email, hash])
        .then(() => {
            res.cookie('username', username, { maxAge: 600000 });
            res.redirect('/posters');
        })
        .catch(err => {
            res.status(500).send(`<h1>Something went wrong saving your data</h1>`)
        })
    })
    
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('name: ', username); console.log('pass: ', password);
    db.query(`select * from users where username = '${username}'`)
    .then((result) => {
        const data = result.rows;
        data.map((user) => {
            console.log("passs   " , user.password);
            bcrypt.compare(password, user.password)
            .then((match) => {
                if(!match){
                    console.log("No match");
                    res.status(401).send(templates.notMatch());
                }
                else{

                    res.cookie('username', username, { maxAge: 600000 });
                    res.redirect('/posters'); 
                }
            });
        });
    });
});


app.get('/posters', (req, res) => {
    let html ='';
    const header = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Movies</title>
        <link rel="icon" href="popcorn.ico">
        <link rel="stylesheet" href="moviesPosters.css">
        <link rel="stylesheet" href="navbar.css">
        <script src="index.js"></script>
    </head>
    <body>
        <div class="Menu" id="myTopnav">
        <a href="/" class="active">Home</a>
        <a href="/posters">Movies</a>

        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </a>
        </div>
        <div id="poster-box">`;

        //console.log(1, html)

    const footer = `
    </div>
    </body>
    </html>` ;
    const username = req.cookies.username;
    console.log("posters >>>" + username);
    html += header;
    db.query(`select * from movies where id in (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)`)
        .then((result) => {
            const data = result.rows;
            console.log('mhere', { username })
            data.map((i) => {
                html += templates.displayPosters(i.id, username, i.img);
            });
            html += footer;
            res.status(200).send(html);
        });
});


app.get('/movies', (req, res) => {
    console.log(1, req.query);
    console.log(1, req.query.id);
    //const username = req.cookies.username;
    console.log("FROM MOVIES >>> " + req.query.name);
    db.query(`select * from movies where id = ${req.query.id}`)
        .then((result) => {
            const movies = result.rows;
            movies.map((movie) => {
                res.status(200).send(templates.displayMovies(movie.movie_name, movie.year, movie.runtime, movie.genre, movie.img, movie.storyline, movie.director, movie.writer, movie.id));
            });
        });
});

app.post('/movies', (req, res) => {
    const movie_id = req.query.id;
    console.log('movieID >>>>>' + movie_id);
    console.log('userName >>>>' + req.query.name);
    let user_id ;
    db.query(`select id from users where username = '${req.query.name}'`)
    .then( (result) => {
        console.log(result.rows);
        result.rows.map((user) => {
            user_id = user.id;
            console.log('on query' , user_id);
        })
        const {text_content} = req.body;
        db.query(`insert into reviews (user_id, movie_id, text_content) values ($1,$2,$3) RETURNING *`, [user_id, movie_id, text_content])
        .then(() => {
            res.redirect(`/reviews?id=${movie_id}`);
        });
    });


   
});

app.get('/reviews', (req, res) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reviews.css">
    <link rel="stylesheet" href="navbar.css">
    <title>Document</title>
    </head>
    <body>
    <div class="Menu" id="myTopnav">
        <a href="/" class="active">Home</a>
        <a href="/posters">Movies</a>

        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </a>
    </div>` ;

    const movie_id = req.query.id;
    db.query(`select movie_name, img from movies where id = ${movie_id}`)
    .then((result) => {
        result.rows.map(info => {
            html += `
                <div id="film-box">
                    <h1>${info.movie_name} Reviews</h1>
                    <img src="${info.img}">
                </div>
            `
        });
    });

    db.query(`select username, text_content from reviews inner join users on
            reviews.user_id = users.id where reviews.movie_id = ${movie_id}`)
    .then((result) => {
        console.log("REV.." + result.rows);
        const reviews = result.rows;
        reviews.map((review) => {
            html += `<div id="movie-reviews-box"> ⚪ ${review.username}     ▪ ▪ ▪ ▪   ${review.text_content} </div>`;
        });
        html += `
        </body>
        </html>`;
        res.status(200).send(html);
        
    });
});


app.listen(PORT, () => {
    console.log(`Server statrted on port http://localhost:${PORT}`);

});