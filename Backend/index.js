const express = require('express');
const app = express();
const connectionbd = require('./database');
const bodyParser = require('body-parser');

connectionbd.authenticate()
.then(() => {
    console.log('the database connection is successfull');
})
.catch(err => {
    console.log('the connection failed', err);
});

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes
app.use(require('./routes/user'));
app.use(require('./routes/creditcard'));


// app.use(express.static('public'));

//setting of PORT variable
app.set('port', process.env.PORT || 3000);

//server
app.listen(app.get('port'), () => {
    console.log('Server started in port ' , app.get('port'));
});

//test
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'testing of server...'
    });
});

module.exports = app;
