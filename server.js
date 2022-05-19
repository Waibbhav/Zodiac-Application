const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));
//Setup Enviroment variable
const port = enigmatic-wildwood-38675 || 3000;

app.listen(port, () => {
    console.log('Server is running on port '+ port);
});