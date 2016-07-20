let express = require('express');

let app = express()

app.use(express.static(__dirname + '/webapp')); 

require('./server/routes.js')(app);

app.listen(3000, () => {
    console.log('App started on port 3000');
});
