var express     = require('express')
    mongoose    = require('mongoose')
    app         = express();


mongoose.connect('mongodb://localhost/restapi');

var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: {type: Date, default: Date.now}
});

var Todo = mongoose.model('Todo', TodoSchema);

/*var todo = new Todo({name: 'New Comer in Nodejs', completed: true, note: 'Almost reached there'});
todo.save(function (err) {
    if(err)
        console.log(err);
    else
        console.log(todo);
});*/


Todo.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});


var callback = function (err, data){
    if (err) 
        return console.error(err);
  console.log(data)
}

// Find with queries...
//Todo.find({completed: Boolean}, callback);
//Todo.find({name: /JS$/ }, callback);

// Get all tasks staring with `Master`, not completed and created from year ago to now...
/*var oneYearAgo = new Date();
oneYearAgo.setYear(oneYearAgo.getFullYear() - 1);
Todo.find({name: /^Master/, completed: false }).where('updaed_at').gt(oneYearAgo).exec(callback);*/


/*Todo.update({completed: false}, { completed: true }, { multi: true }, function (err, numberAffected, raw) {
  if (err) return handleError(err);
  console.log('The number of updated documents was %d', numberAffected);
  console.log('The raw response from Mongo was ', raw);
});*/



app.get('/', function (req, res) {
    res.send("Hello Express !!");
});

app.listen(3000);