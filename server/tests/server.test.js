const expect= require('expect');
const request = require('supertest');

const {app} = require('./../server');
const{Todo} = require('./../models/todo');
const {User} = require('./../models/user');

var todos = [{
  text: " First text"
}, {
  text: "Second text"
}]

beforeEach((done)=> {
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
});

// because there exists data in fils, so if we test to see whether the first element in todo
// = text or not, we have to clear them all for testing purposes.

describe('Test', ()=>{
  it('create /todos',(done)=>{
    var text = "Test todo text";

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res)=>{
        expect(res.body.text).toBe(text);
      })
      .end((err, res)=> {
        if(err){
          return done(err);
        }

        // we only input 1 element so we expect the size to be 1 and first item is "text"
        Todo.find({text}).then((todo) =>{
          expect(todo.length).toBe(1);
          expect(todo[0].text).toBe(text);
          done();
        }).catch((e)=> done(e));
      });
  });

  it('should create todo with invalid body', (done)=>{
    var text ="";

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res)=>{
        if(err){
          return done(err);
        }

        Todo.find().then((todo) =>{
          expect(todo.length).toBe(2);
          done();
        }).catch((e)=> done(e));
      })

    });

    it('create GET /todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
          expect(res.body.length).toBe(2);
        })
        .end(done);
    });

    it('Testing GET/todos/:id', (done)=>{
      

      request(app)
        .get('/todos:id')
        .expect(200)
        .expect((res, err)=>{
          if(err){
            return done(err);
          }

          Todo.findById(id).then((todo)=>{
            expect(todo.length).toBe(1);
            expect(todos.text).toBe("Hello nodejs");
          }).catch((e)=> done(e));
        })
    });
});
