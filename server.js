const express = require("express");
const router = require('./router');
// const index = require('./MainPage/index');
const templates = require('./templates');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const db = require('./database/connection')
let movieID;
// let html = '';
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
    db.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`, [username, email, password])
        .then(() => {
            res.redirect('/posters');
        })
        .catch(err => {
            res.status(500).send(`<h1>Something went wrong saving your data</h1>`)
        })
});

// app.post('/posters', (req, res) => {
//     //const data = req.body;
//     console.log(data);
//     res.redirect(`/movies?id=${data.id}`);

// });

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query(`select count (*) from users where username = '${username}' and password = '${password}'`)
        .then((result) => {
            const data = result.rows;
            data.map((c) => {
                console.log(c.count);
                if (c.count === '1') {
                    res.cookie('username', username, { maxAge: 600000 });
                    res.redirect('/posters');
                }
                else {
                    res.redirect('/login');
                }
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
        <link rel="stylesheet" href="moviesPosters.css">
    </head>
    <body>
        <div id="poster-box">`;

        console.log(1, html)

    const footer = `
    </div>
    </body>
    <script src="index.js"></script>
    </html>` ;
    const username = req.cookies.username;
    console.log("posters >>>" + username);
    html += header;
    db.query(`select * from movies where id in (1,2,3,4,5,6,7,8,9)`)
        .then((result) => {
            const data = result.rows;
            console.log('mhere', { username })
            data.map((i) => {
                movieID = i.id;
                html += templates.displayPosters(i.id, username, i.img);
            });
            html += footer;
            console.log(2, html)
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

app.get('/reviews', (req, res) => {
    db.query(`select * from `)
})
// app.post('/movies', (req,res) => {
//     let userId;
//     const username = req.cookies.username;
//     db.query(`select id from users where username = '${username}'`)
//     .then(result => {
//         const data = result.rows;
//         data.map( (i) => {
//             console.log(i.id);
//             userId = i.id;
//         });
//     });



//     const {text_content} = req.body;
//     db.query(`insert into reviews (user_id, movie_id, text_content) values (${userId}, ${text_content} })`)

// });
app.listen(PORT, () => {
    console.log(`Server statrted on port http://localhost:${PORT}`);

});