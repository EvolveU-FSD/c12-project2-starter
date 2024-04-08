import express from 'express'
import usersController from './users/usersController.js'

const app = express()

app.use(express.json());
app.use('/api/user', usersController)

app.listen(process.env.PORT || 3000)
