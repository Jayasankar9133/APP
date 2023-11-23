const express = require('express');
const app = express();

const port = process.port | 4200;

app.listen(port, () => {
    console.log("Server Running");
});


app.get("/", (req, res) => {
    res.send("Jayasankar");
});
