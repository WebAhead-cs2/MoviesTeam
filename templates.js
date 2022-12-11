function layout() {;
    return (
        `<!DOCTYPE html>
   <html lang="en">
       <head>
           <link rel="icon" href="favicon.ico">
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Movies</title>
           <link rel="stylesheet" href="index.css">
           <script src="index.js"></script>
       </head>
   
       <body>
           <div class="header">
               <h1>Movies</h1>
               <h3>
                    “It's funny how the colors of the real world only seem really real when you watch them on a screen.”
               </h3>
           </div>
           <div class="Menu" id="myTopnav">
               <a href="/login" class="active">Login</a>
               <a href="/signup">SignUp</a>
   
               <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                   <i class="fa fa-bars"></i>
               </a>
           </div>
   
           <div style="padding-left:16px">
               //
           </div>
   
       </body>
   </form>
   </html>
   `);
}

function reviews(){
    return (`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reviews.css">
    <title>Document</title>
</head>
<body>
    <h1>REVIEWS</h1>
    <div id="movie-reviews-box"> 
        <div id="users-reviews">
            <span class="retrieved-reviews">great movie , nice to watch it..</span>
            <span class="retrieved-reviews">it is a dramatic film just wow!</span>
            <span class="retrieved-reviews">naaa I hate it :@</span>
        </div>
    </div>
</body>
</html>
    `)
}
function displayPosters(movie_id, userName, img){
    console.log(2, userName)
    return `
    <a href="/movies?id=${movie_id}&name=${userName}" onclick="returnId(this.id)"> 
    
    
    <img src="${img}" alt=""></a>  
    `
}



function welcome(username){
    return `
        <h1 style="text-align: center; 
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
         >
         WELCOME  ${username}  😍 
         </h1>
    `
}

function displayMovies(title, year, time, genre, img_url, story, director, writer, movie_id){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href= "filmBox.css">
        <script src="index.js"></script> 
        <title>Document</title>
    </head>
    <body>
        <div class ="main">
        <div id="film-box">
            <h1 id="title">${title}</h1>
            <div id="year-time-box">
                <div id="year"> ${year}</div>
                <div id="runtime"> ${time} min</div>
            </div>
            <div id="genre"><b>${genre}</b></div>
            <div id="img-story">
                <img id="movie-img" width="220px" src="${img_url}" alt="">
                <div id="story">
                    ${story}
                </div>
            </div>
            <div class="info-dw">
                <span><b>Director</b></span>
                <span>${director}</span>
            </div>
            <div class="info-dw">
                <span><b>Writer</b></span>
                <span>${writer}</span>
            </div>
            <div style="margin-bottom: 5px;"><b>reviews</b></div>
    
            <div id="movie-reviews-box"> 
                <div id="users-reviews">
                    <span class="retrieved-reviews">great movie , nice to watch it..</span>
                    <span class="retrieved-reviews">it is a dramatic film just wow!</span>
                    <span class="retrieved-reviews">naaa I hate it :@</span>
                </div>
            </div>
            
        </div>
        <form id="review-box" method="post">
                <div id="q-to-user"><b>what do you think about this movie?</b> <span id="movieID">${movie_id}</span></div>
                <textarea name="text_content" class="user-rev" id="${movie_id}"  rows="8" placeholder="Leave a review ..."></textarea>
                <button id="save-review-btn" type="submit">save your review ${movie_id}</button>
        </form>
        </div>
        </body>
    </html>`
}

function signUp() {
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SignUp</title>
        <link rel="stylesheet" href="signUp.css" />
    </head>
    <body>
        <div class="container">
            <h1 class="title">Register ..</h1>
            <form method="post" class="info">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <label for="pass">Password: </label>
                <input type="password" id="pass" name="password" minlength="8" required>
                <input type="submit" id="signupBtn" value="SIGN UP"></input>
            </form>
        </div>
    </body>
    </html>
    
    `)
}

function logIn(){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LogIn</title>
        <link rel="stylesheet" href="LogIn.css" />
    </head>
    <body>
        <div class="container">
            <h1 id="title">Hello Again</h1>
            <form class="info" method = "post">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">

                <label for="pass">Password: </label>
                <input type="password" id="pass" name="password" minlength="8" required>

                <button type="submit" id="loginBtn">LOG IN</button>
                
            </form>
            <div id="q-signup">
                <span>Don't have an account?</span>
                <a href="/signup" class="form link"><b>sign up</b> </a>
            </div>
            
        </div>
    </body>
    
    </html>
    `
}

module.exports = { layout,displayPosters, displayMovies, logIn, signUp, welcome};