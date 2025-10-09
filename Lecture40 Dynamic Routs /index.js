import express from 'express';
import { link } from 'fs';
const app = express();

app.get("/", (req, resp) => {
const users=['ram', 'shyam', 'raju'];
let data=`<ul>`;
for ( let i =0 ; i<users.length;i++){
  data+=`<li> <a href="user/${users[i]}"> ${users[i]}</a> </li>`
   
}


data+='</ul>'
 resp.send(data) 
});

app.get("/user/:name", (req, resp)=>{
    const userName=  req.params.name;
    resp.send(`This is  ${userName}'s Profile`)
})


        
 
      
 
      
app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});


