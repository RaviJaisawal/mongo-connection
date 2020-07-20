const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const mongoUtil = require('./mongoUtil');
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoUtil.connectToServer(function (err, client) {
    if (err) console.log(err);
    // start the rest of your app here
    app.listen(process.env.PORT || PORT, () => {
        console.log(`server started at http://localhost:${PORT}/`)
    });
});



