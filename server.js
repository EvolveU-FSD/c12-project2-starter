import * as UserData from './User.js'
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/users', (req, res) => {
    res.send(UserData.getUsers())
})

app.get('/user/:userId', (req, res)=>{
    const userId = req.params.userId;
    res.send(UserData.getUser(userId))
})

app.delete('/user/:userId', (req, res)=>{
    const userId = req.params.userId;
    UserData.deleteUser(userId);
    res.status(200).send('Ok')
})

app.post('/user', (req, res)=>{
    var body = req.body;
    UserData.addUser(body);
    res.status(200).send('Ok')
})

console.log('Listening on port 3000')
app.listen(3000)
