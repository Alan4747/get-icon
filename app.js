const express = require('express');
const app = express();

app.use(express.static(__dirname + '/svg/ionicons'));

app.listen(process.env.PORT || 4000);
