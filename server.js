const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('project'));

const port = 4000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

const fs = require(‘fs’)
const obj = require("../city-list.json");


var oXHR = new XMLHttpRequest();

    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../../city-list.json", true);  // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {		// Check if request is complete.
          c
        }
    }


