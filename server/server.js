import express from 'express'
import usersController from './users/usersController.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use('/api/user', usersController)

app.listen(PORT, () => {
    console.log('Server running on localhost ' + PORT)
})
