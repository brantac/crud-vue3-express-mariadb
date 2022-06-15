const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.js');
const authRoute = require('./routes/auth.js');

require('dotenv').config();

// Create server
const app = express();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Routes
app.get("/", (req, res) => {
    res.send({msg: "Success!"});
})
app.use('/', userRoute)
app.use('/', authRoute)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`[API SERVER]: Listening for requests on http://localhost:${process.env.SERVER_PORT}`);
})