function layout() {;
    return (
        `<!DOCTYPE html>
   <html lang="en">
       <head>
           <link rel="icon" href="popcorn.ico">
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Movies</title>
           <link rel="stylesheet" href="index.css">
           <link rel="stylesheet" href="navbar.css">
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
                      </div>
   
       </body>
   </form>
   </html>
   `);
}

function reviews(){
    return (`

    <div id="movie-reviews-box"> wow </div>
        
    `)
}

function notMatch(){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <link rel="icon" href="popcorn.ico">
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Movies</title>
            <link rel="stylesheet" href="navbar.css">
        </head>
        <body>
            <div class="Menu" id="myTopnav">
            <a href="/" class="active">Home</a>
            <a href="/signup">Signup</a>
            <a href="/login">Login</a>

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
            </a>
            </div>

            <h3>Password mismatch</h3>


        </body>
        </html>
        
    
    `
    

}
function displayPosters(movie_id, userName, img){
    //console.log(2, userName)
    return `
    <a href="/movies?id=${movie_id}&name=${userName}"> 
    
    
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
        <link rel="icon" href="popcorn.ico">
        <link rel="stylesheet" href= "filmBox.css">
        <link rel="stylesheet" href="navbar.css">
        <script src="index.js"></script> 
        <title>Movies</title>
    </head>
    <body>
        <div class="Menu" id="myTopnav">
               <a href="/" class="active">Home</a>
               <a href="/posters">Movies</a>
   
               <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                   <i class="fa fa-bars"></i>
               </a>
        </div>
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
            <div>
            <a href="/reviews?id=${movie_id}" id="atoReviews">movie reviews</a>
            </div>
        </div>
        <form id="review-box" method="post">
            <div id="q-to-user"><b>what do you think about this movie?</b></div>
            <textarea name="text_content" class="user-rev" required rows="8" placeholder="Leave a review ..."></textarea>
            <button id="save-review-btn" type="submit">save your review</button>
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
        <title>Movies</title>
        <link rel="icon" href="popcorn.ico">
        <link rel="stylesheet" href="signUp.css" />
        <link rel="stylesheet" href="navbar.css">
    </head>
    <body>
        <div class="Menu" id="myTopnav">
            <a href="/" class="active">Home</a>
            <a href="/login">Login</a>

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div class="container">
            <h1 class="title">Register ..</h1>
            <form method="post" class="info">
                <div id="inputs-img">
                    <div>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="pass">Password: </label>
                        <input type="password" id="pass" name="password" minlength="8" required>
                        <input type="submit" id="signupBtn" value="SIGN UP">
                    </div>
                    <img src="login.png"  alt="">
                </div>
                
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
        <title>Movies</title>
        <link rel="icon" href="popcorn.ico">
        <link rel="stylesheet" href="LogIn.css" />
        <link rel="stylesheet" href="navbar.css">
    </head>
    <body>
    <div class="Menu" id="myTopnav">
        <a href="/" class="active">Home</a>
        <a href="/signup">SignUp</a>
   
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="container">
    <h1 id="title" >Hello Again</h1>
    <form class="info" method="post">
        <div id="inputs-img">
            <div id="iinputs">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="pass">Password: </label>
                <input type="password" id="pass" name="password" minlength="8" required>
                <button type="submit" id="loginBtn">LOG IN</button>
            </div>
            <img src="login.png"  alt="">
        </div>
        <div id="q-signup">
            <span>Don't have an account?</span>
            <a href="/signup" class="form link"><b>sign up</b> </a>
        </div>
    </body>
    </html>
    `
}

module.exports = { layout,displayPosters, displayMovies, logIn, signUp, welcome, reviews, notMatch};