//      calling mongoose library and establishinga connection.
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
//      Building a User instance to use later.
// const user = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })
//    creating a new user using the User instance.
// const me = new user({
//     name: 'Eric',
//     age: 12
// })
// // saving the user
// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'sleep',
//     completed: false
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })