function layout() { //Home page ;
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
               <h3>“It's funny how the colors of the real world only seem really real when you watch them on a screen.”
               </h3>
           </div>
   
   
   
           <div class="Menu" id="myTopnav">
               <a href="#Login" class="active">Login</a>
               <a href="#SignUp">SignUp</a>
   
               <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                   <i class="fa fa-bars"></i>
               </a>
           </div>
   
           <div style="padding-left:16px">
               //
           </div>
   
       </body>
   </form>
   
   </html>`);
}

function SignUp() {
    return (`

    
    `)
}
module.exports = { layout };