const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
// const text = lorem50

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>learn html</title>
      <style>
          .main {
  
              /* background-color: #800080; */
              color: black;
              padding: 40px;
              text-align: center;
          }
  
          .align {
  
              text-align: center
          }
  
  
          .vertical {
              border-left: 100px solid #0f89cf;
              height: 2000px;
              /* position:absolute; */
              /* left: 50%; */
          }
  
          .vertical2 {
              border-left: 100px solid #0f89cf;
              height: 2000px;
              /* position:absolute; */
              left: 100%;
          }
  
          html {
              height: 100%;
          }
  
          body {
              /* background-image: linear-gradient(to bottom right, #33475b, #0033CC, #FF77CC, rgb(255, 122, 89)); */
              /* background-color: rgba(27, 99, 146, 0.4); */
              background-color:  #CDCDCD;
              opacity: 1;
          }
      </style>
  
  
  
  </head>
  
  <h1 class="main">Survey Form</h1>
  <hr color="black">
  <!-- <br> -->
  
  <p class="align">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, nemo.</p>
  <div class="align">
  
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname">
  
  
  </div>
  <br>
  
  
  <div class="align">
      <label for="email">Enter your email:</label>
      <input type="email" id="email" name="email">
  
  </div>
  <br>
  
  
  <div class="align">
      <label for="email">Age :</label>
      <input type="number" id="email" name="email">
  
  </div>
  
  
  <br>
  <p class="align">which option best describes your current role :</p>
  <form action="/action_page.php" class="align">
  
      <input type="radio" id="age1" name="age" value="30">
      <label for="age1">student</label><br>
      <input type="radio" id="age2" name="age" value="60">
      <label for="age2">teacher</label><br>
      <input type="radio" id="age3" name="age" value="100">
      <label for="age3">engineer</label><br><br>
      <!-- <input type="submit" value="Submit"> -->
  
  
      <label for="cars">which is your favourite icecream :</label>
  
      <select id="cars">
          <option value="volvo">vanilla</option>
          <option value="saab">chocolate</option>
          <option value="opel">butterscotch</option>
          <option value="audi">oreo</option>
      </select>
  
      <br>
  
      <p style="padding-right: 12rem;">Discuss feedback :</p>
      <textarea style="padding-left: 0rem;" name="paragraph_text" cols="50" rows="10"></textarea>
  
      <br><br><br>
      <span>
          <input type="submit" value="Submit">
      </span>
      <span>
  
          <input type="reset" value="Reset Now">
  
      </span>
      <!-- <input type="reset" value="Reset Now">
  
      </span> -->
  
  
  
  
  
  </form>
  
  
  
  
  
  
  <body>
  
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
