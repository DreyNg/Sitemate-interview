// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let issues = [
    { id: 1, title: "Issue 1", description: "This is the first issue" },
    { id: 2, title: "Issue 2", description: "This is the second issue" },
];
let nextId = 3; // Start the next available ID after the hardcoded ones

app.use(bodyParser.json());

// GET all issues
app.get("/api/issues", (req, res) => {
    res.json(issues);
});

// POST create an issue
app.post("/api/issues", (req, res) => {
    const { title, description } = req.body;
    const newIssue = { id: nextId++, title, description }; // Assign and increment ID
    issues.push(newIssue);
    res.json(newIssue);
});

// PUT update an issue
app.put("/api/issues/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    issues = issues.map((issue) =>
        issue.id === id ? { ...issue, title, description } : issue
    );
    res.json(issues.find((issue) => issue.id === id));
});

// DELETE an issue
app.delete("/api/issues/:id", (req, res) => {
    const id = parseInt(req.params.id);
    issues = issues.filter((issue) => issue.id !== id);
    res.send(`Issue with ID ${id} deleted.`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
