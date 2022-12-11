const templates = require('./templates');
const db = require('./database/connection');
const cookieParser = require('cookie-parser');

let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href= "filmBox.css">
        <title>Document</title>
    </head>
    <body>`;

const footer = `</body>
    <script src="index.js"></script>
    </html>`

function home(req, res){
    const html = templates.layout();
    res.send(html);
}

function login(req, res){
    const html = templates.logIn();
    res.status(200).send(html);
}

function signup (req, res){
    const html = templates.signUp();
    res.status(200).send(html);
}

// function filmBox(req, res){
    
//     for (let index = 1; index <= 3; index++) {
//         db.query(`select * from movies where id = ${index}`)
//         .then( (result) => {          
//             const movies = result.rows;
//             movies.map( (movie) => {
//                 html += (templates.displayMovies(movie.movie_name, movie.year, movie.runtime, movie.genre, movie.img, movie.storyline, movie.director, movie.writer )); 
//             });
//         });  
//     }
//     sod(res, html+footer);
    
    // movie.movie_name, movie.year, movie.runtime, movie.genre, movie.img, movie.storyline, movie.director, movie.writer ;
    
    // db.query(`select * from movies where id = 5`)
    // .then((result) => {
    //         const movies = result.rows;
    //         movies.map( (movie) => {
    //             res.status(200).send(templates.displayMovies(movie.movie_name, movie.year, movie.runtime, movie.genre, movie.img, movie.storyline, movie.director, movie.writer ))
    //         });
    // });

//}

// function createUser(req, res){
//     const {username, email, password} = req.body;
//     console.log(req.body);
//     db.query (`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`, [username, email, password])
//     .then( () => {
//         res.redirect('/movies');
//     })
//     .catch(err => {
//         res.status(500).send(`<h1>Something went wrong saving your data</h1>`)
//     })



// }


// function sod (res , html) {
//     console.log(html);
//     res.status(200).send(html);
// }
module.exports = {home, login, signup};