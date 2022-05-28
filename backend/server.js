const express = require("express");

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, console.log(`Express Server is listening on port ${port}`));