const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

let user = { name: 'Tony', team: '501s'}

app.get('/user', (req, res) => {
    res.send(user)
})

app.post('/user', (req, res) => {
    user = req.body
    console.log('Got user', user)
    res.sendStatus(200)
})

app.delete('/user', (req, res) => {
    user = {}
    console.log('Deleting user!')
    res.sendStatus(200)
})

console.log('Listening on port 3000')
app.listen(3000)
