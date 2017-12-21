var {ObjectId} = require('mongodb');
var express = require('express');
var bodyParser = require('body-Parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((docs)=>{
    res.send(docs);
  },(e)=>{
    res.status(400).send(e);
  });
});


// send data back to browser (what we have in POST)
app.get('/todos', (req,res)=>{
  Todo.find().then((docs)=>{
    res.send({docs});
    // co' {} like an object because in the future we might need to send
    // more code. ex: {docs, code:"alo", completed: false}
  }, (e)=>{
    res.status(400).send(e);
  })
});


app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send('Invalid Id');
  }

  Todo.findById(id).then((todos)=>{
    if(!todos){
      res.status(404).send('ID not found');
    }
    res.send({todos});
  }).catch((e)=>{
    res.status(400).send();
  })
});


app.post('/user', (req, res)=>{
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });
  user.save().then((docs)=>{
    res.send(docs);
  },(e)=>{
    res.status(400).send(e);
  });
});

module.exports = {app};

app.listen(3000, ()=>{
  console.log('Start on port 3000');
});
