import express from "express";
import { submit } from "./pages/submit.js";
import { login } from "./pages/login.js";
import { home } from "./pages/home.js";

const app = express();

 app.get("/home", (req, resp)=>{
     resp.send(home())
 });

app.get("/login", (req, resp) => {
  resp.send(login());
});

 app.post("/submit", (req, resp)=>{
     resp.send(submit())
 });

 

app.listen(3000);
