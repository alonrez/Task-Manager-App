require('../src/db/mongoose')
const Task = require('../src/models/task')

//   5fbe8a876e0fb81cbc94f418

Task.findByIdAndDelete('5fbe8a876e0fb81cbc94f418').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete('5fc0e4ea0a55d2672c49e843')
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5fc0e4ea0a55d2672c49e843').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})