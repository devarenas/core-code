const Express = require("express");
const {Router} = require("express");

const App = Express();
const RequestHandler = Router();
const port = 3000;

App.use(Express.json());
App.use(RequestHandler);


App.listen(port, () => {
    console.log("Running in port 3000")
});




RequestHandler.get("/delay/:ms", (request, response)=>{

    const msInfo = request.params.ms;
    const text = 
    `{
        message: "Delayed response after 3000 ms"
    }`;

    setTimeout(() => {
        response.send(text)
        console.log(text)
    }, msInfo);

})