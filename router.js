const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

router.get('/', handlers.home);
router.get('/login', handlers.login);
router.get('/signup', handlers.signup);
//router.post('/signup', handlers.createUser);
//router.get('/movies', handlers.filmBox);
// router.use((req, res) => {
//     res.status(404).send(`<h1>Not found</h1>`)
// });


  


module.exports = router;