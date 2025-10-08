import express, { urlencoded } from "express";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/add-user", (req, resp) => {
  resp.render("add-user");
});

app.post("/submit-user", (req, resp) => {
  resp.render("submit-user", {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
