// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// //A way for Mongo to come up with new Object ID's
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Kris Montgomery',
    //     age: 27,
    //     location: 'Joplin, Missouri'
    // }, (err, result) => {
    //     if (err) {
    //        return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    //     //result.ops is an array of the documents that go input to the DB

    // });

    // var user = {name: 'andrew', age: 25};
    // var {name} = user;
    // console.log(name);
    // //object destructuring

    // //A way for Mongo to come up with new Object ID's
    // var obj = new ObjectID();
    // console.log(obj);


    db.close();
});