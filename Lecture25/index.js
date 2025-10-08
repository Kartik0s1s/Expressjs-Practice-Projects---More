
// lecture 26 
 
import express from 'express';
import { home } from './pages/home.js';
import { contact } from './pages/contact.js';
const app = express();


app.get("", (req, resp)=>{
  resp.send(home())
})



app.get("/contact", (req, resp)=>{
  resp.send(contact())
})




app.listen(3000);