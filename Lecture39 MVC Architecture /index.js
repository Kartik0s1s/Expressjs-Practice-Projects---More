import express from 'express';
import { userHandler } from './controllers/controllers.js';
const app = express();

 
app.set("view engine", "ejs");

app.get("/users", userHandler )
        
 
app.get("/usersLis", (req, resp) => {
  resp.render("users");
});
        
 
      
 
       

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});