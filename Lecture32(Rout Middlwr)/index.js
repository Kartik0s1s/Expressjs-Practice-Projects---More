import express from "express";

const app = express();

 function ageCheck(req, resp, next){
  if(!req.query.age || req.query.age<18){
      resp.send("Pehle bada toh hoja bhai ")
  }else{
  next();
  }
 }
 
app.get("", (req, resp) => {
  resp.send("This is home page ");
});

app.get("/Login",ageCheck, (req, resp) => {
  resp.send("This is Login page ");
});

app.get("/product", (req, resp) => {
  resp.send("This is product  page ");
});

app.get("/service", (req, resp) => {
  resp.send("This is service page ");
});

app.listen(3200);
