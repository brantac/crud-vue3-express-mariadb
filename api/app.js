const express = require('express');
const cors = require('cors');

require('dotenv').config();

// Create server
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send({msg: "Success!"});
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`[API SERVER]: Listening for requests on http://localhost:${process.env.SERVER_PORT}`);
})