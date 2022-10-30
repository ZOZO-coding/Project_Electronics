// IMPORT PATH
const path = require("path");

// IMPORT EXPRESS
const express = require("express");

// IMPORT MORGAN TO LOG REQUEST AND RESPONSE
const morgan = require("morgan");

// IMPORT FAVICON
const favicon = require("serve-favicon");

// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIGURATION FILE
const dotenv = require("dotenv");

// IMPORT MONGOOSE TO CONNECT TO OUR DATABASE
const mongoose = require("mongoose");

// IMPORT USER ROUTER
const userRouter = require("./routes/api/user");
const itemsRouter = require('./routes/api/items')
const usedItemsRouter = require("./routes/api/usedItems")

// Connect to our config file
dotenv.config();

// connect to DB, async, returns a promise
// mongoose.connect(process.env.DATABASE, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//     .then(() => {
//         // listen for requests
//         app.listen(process.env.PORT, () => {
//             console.log("connected to DB & listening on port " + process.env.PORT);
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
    console.log("connected to mongodb")
})


// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

app.use(morgan("dev"));

// req.body parser
app.use(express.json());

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./../frontend", "public", "index.html"));
// });

app.use("/api/users", userRouter);
app.use("/api/items", itemsRouter);
app.use("/api/usedItems", usedItemsRouter);

app.all("*", (request, response) => {
    response.send("Undefined route");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ` + process.env.PORT)
})