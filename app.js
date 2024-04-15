const express = require("express");
const app = express();

const petRouter = require("./routes/pets");

app.use("/pet", petRouter)


app.get("/", (req, res, next) => {
    console.log("home page 들어옴");
    res.send("<h1>This is home page. Hi! </h1>");
})

app.listen(80, () => {
    console.log("CONNECTED ON PORT 80");
})