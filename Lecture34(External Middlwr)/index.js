// we have used morgan external  middleware

import express from "express";
import  morgan  from "morgan"; 

const app = express();
app.use(morgan('dev'))

app.get("",(req , resp)=>{
  resp.send()
})
 
 
app.get("/wait", (req, resp) => {
   setTimeout(()=>{
    resp.send("Respond after 1 Sec ")
   }, 4000);
});

 

app.listen(3000);
