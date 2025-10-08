// we have used urlencoded and static middleware

import express from "express";
import path from 'path';
const app = express();

 app.use(express.urlencoded({extended:false}))
 app.use(express.static('public'))
 
app.get("", (req, resp) => {
  const file = path.resolve("view/home.html")
  resp.sendFile(file);
});

app.get("/Login", (req, resp) => {
  resp.send(`
    <form action="/submit" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    </br>
    <input type="text" placeholder="Enter Username" name="uname" required>
    </br>

    <label for="psw"><b>Password</b></label>
    </br>
    <input type="password" placeholder="Enter Password" name="psw" required>
</br>
    <button type="submit">Login</button>
    </br>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>

    `);
});
 
app.post("/submit", (req, resp) => {
  resp.send("The content is "+ JSON.stringify(req.body));
});

 

app.listen(3000);
