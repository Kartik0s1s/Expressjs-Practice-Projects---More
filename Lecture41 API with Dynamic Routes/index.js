 import express from 'express';
import userdata from './users.json' assert { type: 'json' };

const app = express();

// Route to get all users
app.get("/", (req, resp) => {
    resp.json(userdata); // Use json() to send JSON data
});

// Route to get a single user by id
app.get("/user/:name", (req, resp) => {
    const name = req.params.name;  
    const filteredData = userdata.filter(user => user.name.toLowerCase() === name.toLowerCase());

    if (filteredData.length > 0) {
        resp.json(filteredData[0]); // Send the first matched user
    } else {
        resp.status(404).json({ error: "User not found" });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});
