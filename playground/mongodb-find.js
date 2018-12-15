// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c1549d7b2dbd402d1a67cbb')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
 


    // getting the number of named users specified in the DB
//  db.collection('Users').find({name: 'Kris Montgomery'}).count().then((count) => {
//         console.log(`Todos count: ${count}`);
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     });



// Getting the user objects and meta data displayed to us with specific named person
db.collection('Users').find({name: 'Kris Montgomery'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});



    // db.close();
});