const data = require('../users.json');
const users = data.users;



exports.createUser = (req, res) => {
    // console.log(req.body)
    users.push(req.body)
    res.json(req.body)
}

exports.getAllUsers = (req, res) => {
    res.json(users)
}

exports.getUser = (req, res) => {
    const id = +req.params.id
    // console.log(id)
    const user = users.find(p => p.id === id)
    res.json(user)
}

exports.replaceUser = (req, res) => {
    const id = +req.params.id
    // console.log(id)
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1, { ...req.body, id: id })
    res.status(201).json()
}

exports.updateUser = (req, res) => {
    const id = +req.params.id
    // console.log(id)
    const userIndex = users.findIndex(p => p.id === id)
    user = users[userIndex]
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.status(201).json(users[userIndex])
}

exports.deleteUser = (req, res) => {
    const id = +req.params.id
    // console.log(id)
    const userIndex = users.findIndex(p => p.id === id)
    user = users[userIndex]
    users.splice(userIndex, 1)
    res.status(201).json(user)
}