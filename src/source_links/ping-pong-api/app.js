const express = require ('express');
const app = express();
const port = 3000;




app.get('/ping', (request, response) => {

    const pong = `{
        "message": "pong"
      }`
    response.send(JSON.parse(pong));
    console.log(pong)

});

app.get('/pong', (request, response) => {

    const ping = `{
        "message": "ping"
      }`
    response.send(JSON.parse(ping));
    console.log(pong)

});


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});