import express from 'express'
import * as UserData from './users.js'

const app = express()

app.use(express.json());
app.use(express.static('public'))

app.get('/users', async (req, res)=>{
    const users = await UserData.getAllUsers();
    res.send(users);
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const record = await UserData.getUserById(id);
    res.send(record);
})

app.delete('/users/:id', async (req, res)=>{
    const id = req.params.id;
    await UserData.deleteUser(id);
    res.status(200).send('Ok.')
})

app.post('/users', async (req, res)=>{
    const body = req.body
    const newUser = await UserData.addUser(body)
    res.send(newUser);
})

console.log('Listening on port 3000')
app.listen(3000)
