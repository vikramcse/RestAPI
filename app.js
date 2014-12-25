var express     = require('express'),
    bodyParser  = require('body-parser'),
    port 		= process.env.PORT || 3000,
    app         = express();

//var routes = require('./routes/index');
var todos = require('./routes/todos');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoApp', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/todos', todos);
app.use(express.static('./public'));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port);