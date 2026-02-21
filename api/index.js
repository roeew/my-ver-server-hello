const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

// GET
app.get("/allmessages", (req, res) => {
    res.json(messages);
});

// GET with query parameter handling
app.get("/message", (req, res) => {
    const num = parseInt(req.query.num);
    res.json(messages[num]);
});

// POST
app.post("/messages", (req, res) => {
    const message = req.body.text;
    messages.push({ text: message });
    res.json({ status: "ok" });
});

module.exports = app;
