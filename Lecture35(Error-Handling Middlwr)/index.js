import express from "express";
const app = express();

app.get("",(req , resp)=>{
  resp.send("This is homepage")
})
 
app.get("/about", (req, resp) => {
   resp.send("This is about page")
});

// Error handling middle ware 

function errorHandling(error, req, resp , next) {
  resp.status(error.status || 500).send("Try again after some time ")
  }
  app.use(errorHandling)



// anonimous function to do the same  

  // app.use( (error, req, resp , next)=> {
  // resp.status(error.status || 500).send("Try again after some time ")
  // })


app.listen(3000);

