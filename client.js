// client.js
const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const BASE_URL = "http://localhost:3000/api/issues";

function createIssue() {
    rl.question("Enter issue title: ", async (title) => {
        rl.question("Enter issue description: ", async (description) => {
            try {
                const response = await axios.post(BASE_URL, {
                    title,
                    description,
                });
                console.log("Issue created:", response.data);
            } catch (error) {
                console.error("Error creating issue:", error.response.data);
            }
            rl.close();
        });
    });
}

function readIssues() {
    axios
        .get(BASE_URL)
        .then((response) => {
            console.log("List of issues:", response.data);
        })
        .catch((error) => {
            console.error("Error fetching issues:", error.response.data);
        });
}

function updateIssue(id) {
    rl.question("Enter new title: ", async (title) => {
        rl.question("Enter new description: ", async (description) => {
            try {
                const response = await axios.put(`${BASE_URL}/${id}`, {
                    title,
                    description,
                });
                console.log("Issue updated:", response.data);
            } catch (error) {
                console.error("Error updating issue:", error.response.data);
            }
            rl.close();
        });
    });
}

function deleteIssue(id) {
    axios
        .delete(`${BASE_URL}/${id}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Error deleting issue:", error.response.data);
        });
}

const command = process.argv[2];

switch (command) {
    case "create":
        createIssue();
        break;
    case "read":
        readIssues();
        break;
    case "update":
        updateIssue(process.argv[3]);
        break;
    case "delete":
        deleteIssue(process.argv[3]);
        break;
    default:
        console.log("Invalid command.");
}
