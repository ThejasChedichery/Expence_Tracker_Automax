const express = require('express')
const connectDataBase = require('./Utils/DataBase')
const cors = require('cors')
const ExpenseRouter = require('./App/Router/ExpenseRouter')

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/expenses', ExpenseRouter)

connectDataBase()

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
