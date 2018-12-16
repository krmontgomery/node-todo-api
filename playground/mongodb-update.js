// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c1573da5b025b4745345c6e')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

  
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c15cc055b025b4745346edc')
    }, {
        $set: {
            name: "Kristopher"
        }
    },{
        $inc: {
            age: 1
        }
    },
     {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    

    // db.close();
});