const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(express.static(path.resolve(__dirname, './public/')));

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.resolve(__dirname, './index.html')).pipe(res);
});

app.get("/current", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    fs.createReadStream(path.resolve(__dirname, './currentvideo.json')).pipe(res);
    res.writeHead(200);
});

app.post("/", (req, res) => {
    console.log(`${Date.now()} - POST coming through`);
    let body = "";
    req.on("data", chunk => {
        body += chunk;
    });
    console.log(`${Date.now()} - POST received`);

    req.on("end", () => {
        return fs.writeFileSync(path.resolve(__dirname, './currentvideo.json'), body);
    });
    console.log(`${Date.now()} - POST saved`);
});


app.listen(5000, () => {
    console.log(`${Date.now()} - Server started!`);
});

