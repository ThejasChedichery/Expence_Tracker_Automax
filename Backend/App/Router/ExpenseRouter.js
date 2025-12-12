const express = require('express')
const Router = express.Router()

const {
    CreateExpense,
    GetAllExpenses,
    GetExpenseById,
    UpdateExpense,
    DeleteExpense,
    GetExpenseSummary
} = require('../Controller/ExpenseController')

Router.post('/', CreateExpense)
Router.get('/', GetAllExpenses)
Router.get('/summary', GetExpenseSummary)
Router.get('/:id', GetExpenseById)
Router.put('/:id', UpdateExpense)
Router.delete('/:id', DeleteExpense)

module.exports = Router
