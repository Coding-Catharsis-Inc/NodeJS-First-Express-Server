// Requirements
const express = require("express");
const path = require("path");

// Initialize
const app = express();
const server = require("http").createServer(app);

// Set up express
app.set("view engine", "ejs");
app.use(express.json({extended: true}));
app.use(express.static("public"));
app.set("views", path.join(__dirname, '../views'));

// Import Routes
app.use("/", require("./routes/index"));

// Run server
server.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});