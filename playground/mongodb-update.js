
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect Server');
  }
  console.log('Connected');
  db.collection('User').findOneAndUpdate({
    _id: new ObjectId('5a36503ee87a04294440ac90')
  }, {
    $set: {
      name:'Jen',
      location:"Duluth"
    }, $inc: {
        age: 1
      }

  },{ returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

//  db.close();
});











// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
//   if(err){
//     return console.log('Unable to connect Mongodb Server');
//   }
//   console.log('Connected to Server');
//
//   db.collection('Todos').find({_id: new ObjectId('5a3494a764fd3a2a6c862002')}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined,2));
//   }, (err)=>{
//     console.log('Unable to fetch todos', err);
//   });
//
//   // db.close();
// });
