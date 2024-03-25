import express from 'express'
import * as UserData from './users.js'
const app = express()

app.use(express.json());
app.use(express.static('public'))

app.get('/users', (req, res)=>{
    const users = UserData.getAllUsers();
    res.send(users);
})

app.get('/users/:name', (req, res)=>{
    const name = req.params.name;
    const record = UserData.getUser(name);
    res.send(record);
})

app.delete('/users/:name', (req, res)=>{
    const name = req.params.name;
    UserData.deleteUser(name);
    res.status(200).send('Ok.')
})

app.post('/users', (req, res)=>{
    const body = req.body
    UserData.addUser(body)
    res.status(200).send('Ok');
})

console.log('Listening on port 3000')
app.listen(3000)
