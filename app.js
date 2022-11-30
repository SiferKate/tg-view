const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use("/", express.static(__dirname));

app.get("*", (req, res) => {
    res.sendFile("index.html");
});

app.listen(PORT, err => {
    console.log(
        err ? err : `Server has been started on port: ${PORT}...`
    );
});
