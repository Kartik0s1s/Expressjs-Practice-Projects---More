import express from "express";

const app = express();


//one way
function checkRout(req, resp, next) {
   console.log(req.url)
  next();
}
app.use(checkRout);



//Anather way 
// app.use((req, resp, next)=> {
//    console.log(req.url)
//   next();
// });


app.get("", (req, resp) => {
  resp.send("This is home page ");
});

app.get("/product", (req, resp) => {
  resp.send("This is product  page ");
});

app.get("/service", (req, resp) => {
  resp.send("This is service page ");
});

app.listen(3200);
