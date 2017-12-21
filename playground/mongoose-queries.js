const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a3add27ec88cd1454e390b6';

if(!ObjectId.isValid(id)){
  console.log('Invalid Id');
}

User.findById(id).then((user)=>{
  if(!user){
    return console.log('ID not found');
  }
  console.log(user);
}).catch((e)=> console.log(e));





// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.findById(id).then((todos)=>{
//   if(!todos){
//     return console.log('Id not found');
//   }
//   console.log(JSON.stringify(todos,undefined,2));
// }).catch((e)=> console.log(e));
