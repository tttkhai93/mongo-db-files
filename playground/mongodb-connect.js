// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect Server');
  }
  console.log('Connected to the server');
  db.collection('User').insertOne({
    name:'Thanh tran',
    age: 18,
    location:'Georgia'
  }, {
    name:'Son tran',
    age: 18,
    location:'Georgia'
  }, (err, result)=>{
    if(err){
      console.log('Unable to do it');
    }
    console.log(result.ops);
  });



// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
//   if(err){
//     console.log('Unable to connect to Mongodb server');
//   }
//   console.log('Connect to Mongodb server');
//
//   db.collection('User').insertOne({
//     name: "Khai Tran",
//     age: 24,
//     location: "Riverdale"
//   }, (err, result) => {
//     if(err){
//       console.log('Unable to connect User', err);
//     }
//     console.log(result.ops);
//   });

//   db.collection('Todos').insertOne({
//     text: "Something to do",
//     completed: false
//   }, (err, result)=>{
//     if(err){
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });
  db.close();
});
