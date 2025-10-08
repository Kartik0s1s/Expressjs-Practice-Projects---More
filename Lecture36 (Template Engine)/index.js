 import express from "express";
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("", (req, resp) => {
  resp.render("home", {
    name: "Kartik",
    clg: "PRMCEAM",
    age: 22
  });
});

app.get("/about", (req, resp) => {
  resp.send("This is about page");
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
  console.log("Views folder:", process.cwd() + "/views");


});
