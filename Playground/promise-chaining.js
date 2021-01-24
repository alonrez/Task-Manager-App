require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// 5fbe8a756715f84c4c429937

User.findByIdAndUpdate('5fbe86527d9ecf0a301ff957', { age: 25 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 12 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5fbe8c48dfd52c511c57c9d6', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})




