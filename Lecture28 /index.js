import express from 'express'
import path from 'path';

const app = express();
app.get("/home", (req, resp)=>{
      const abs= path.resolve('view/home.html');
      resp.sendFile(abs)
})

 
app.get("/login", (req, resp)=>{
      const abs= path.resolve('view/login.html');
      resp.sendFile(abs)
})

app.get("/about", (req, resp)=>{
      const abs= path.resolve('view/about.html');
      resp.sendFile(abs)
})

app.listen(3000);