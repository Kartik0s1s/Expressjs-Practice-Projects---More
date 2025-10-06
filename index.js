const express = require("express");

const app = express();
app.get("", (req, resp) => {
  resp.send("<h1>The app is running</h1>");
});

app.get("/about", (req, resp) => {
  resp.send("<h1>The app is running</h1>");
});

app.get("/contact", (req, resp) => {
  resp.send("<h1>The app is running</h1>");
});

app.get("/services", (req, resp) => {
  resp.send("<h1>The app is running</h1>");
});
app.listen(3000);
