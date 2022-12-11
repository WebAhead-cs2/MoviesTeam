const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({connectionString});
for(let i = 1; i<=17; i++){
    db.query(`select * from movies where id = ${i}`)
    .then((res) => {
        const movies = res.rows;
        movies.map( (movie) => {
            console.log(i + '>>> ' + movie.movie_name + '  ' + movie.year + '  ' + movie.director + '  ' + movie.runtime +'min');
        });
    });
}
// db.query('select movie_name from movies where id = 6')
// .then((result) => {console.log(result.rows)});

module.exports = db;