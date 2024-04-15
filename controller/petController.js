module.exports.getCat = (req, res, next) => {

    console.log("getCat()");
    res.send("<h1>This is the cat page</h1>");
}