//CRUD creade read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database')
    }

    const db = client.db(databaseName) 
})
////////////////////////////////////////////////////////////////////////// delete one
db.collection('tasks').deleteOne({
    description: 'Bake a cake'
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

    ///////////////////////////////////////////////////////////////////////// delete many
db.collection('users').deleteMany({
    age: 27
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

    /////////////////////////////////////////////////////////////////////////// update many
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })


   ////////////////////////////////////////////////////////////////////////////// update one 
    db.collection('users').updateOne({
        _id: new ObjectID("5f80580a0850ef6e90cea49a")
    }, {
        $inc: {
            age: 6
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    ////////////////////////////////////////////////////////////////////////  read find and fetch users from DB
    db.collection('users').findOne({ _id: new ObjectID("5f8063c424031e743494ce09")}, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

 //////////////////////////////////////////////////////////////  red find and fetch the cursor to the data from DB
    db.collection('users').find({ age:27 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age:27 }).count((error, count) => {
        console.log(count)
    })


    db.collection('tasks').findOne({ _id: new ObjectID("5f805dd0a74aea23485606d0")}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })

   ///////////////////////////////////////////////////////////////////// create collection and insert data to DB
  db.collection('users').insertMany([
    {
        name: '',
        age: 1
    }, {
        name: '',
        age: 2
    }
], (error, result) => {
    if (error) {
        return console.log('Unable to insert')
    }

    console.log(result.ops) 
})


// how to restart mongoDB  === cd task manager   /users/alonr/mongodb/bin/mongod.exe --dbpath=/users/alonr/mongodb-data