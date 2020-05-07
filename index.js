const express = require('express');
const request = require('request');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/../septa"))

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/getroute', function (req, res, next) {
  
    let bus = req.body.bus;
   
    let url = `https://www3.septa.org/hackathon/TransitView/?route=${bus}`;
   
    console.log(url);
    //HTTP server and client
    request(url, function (error, response, body) {
        const json = JSON.parse(body);
        //console.log(json);
            
        if (!json.bus) {
            console.error('Oh no!')
        } else {
            res.send(json);
        }
    });
  
  })

app.listen(8000, () => {
    console.log('App listening on port 8000!')
  });