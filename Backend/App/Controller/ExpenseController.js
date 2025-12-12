const ExpenseData = require('../Model/ExpenseModel')

const CreateExpense = async (req, res) => {
    try {
        const { title, amount, category, date, notes } = req.body

        if (!title || !amount || !category) {
            return res.status(400).send({ message: 'Title, amount and category are required' })
        }

        if (amount <= 0) {
            return res.status(400).send({ message: 'Amount must be a positive number' })
        }

        let data = new ExpenseData(req.body)
        const saveExpense = await data.save()
        res.status(200).send({ message: "Expense added successfully", data: saveExpense })
    } catch (err) {
        res.status(500).send({ message: 'Cannot add expense', error: err.message })
    }
}

const GetAllExpenses = async (req, res) => {
    try {
        const { category } = req.query
        const query = {}

        if (category) {
            query.category = category
        }

        const expenses = await ExpenseData.find(query).sort({ date: -1 })
        res.status(200).send({ message: "Expenses fetched successfully", data: expenses })
    } catch (error) {
        res.status(500).send({ message: 'Cannot fetch expenses', error: error.message })
    }
}

const GetExpenseById = async (req, res) => {
    try {
        const expenseById = await ExpenseData.findById(req.params.id)
        if (expenseById) {
            res.status(200).send({ message: "Expense fetched successfully", data: expenseById })
        } else {
            res.status(404).send({ message: "Expense not found" })
        }
    } catch (error) {
        res.status(500).send({ message: 'Cannot fetch expense', error: error.message })
    }
}

const UpdateExpense = async (req, res) => {
    try {
        const { amount } = req.body

        if (amount && amount <= 0) {
            return res.status(400).send({ message: 'Amount must be a positive number' })
        }

        const updateExpense = await ExpenseData.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (updateExpense) {
            res.status(200).send({ message: "Expense updated successfully", data: updateExpense })
        } else {
            res.status(404).send({ message: "Expense not found" })
        }
    } catch (err) {
        res.status(500).send({ message: 'Cannot update expense', error: err.message })
    }
}

const DeleteExpense = async (req, res) => {
    try {
        const deleteExpense = await ExpenseData.findByIdAndDelete(req.params.id)

        if (deleteExpense) {
            res.status(200).send({ message: "Expense deleted successfully" })
        } else {
            res.status(404).send({ message: "Expense not found" })
        }
    } catch (err) {
        res.status(500).send({ message: 'Cannot delete expense', error: err.message })
    }
}

const GetExpenseSummary = async (req, res) => {
    try {
        const summary = await ExpenseData.aggregate([
            {
                $group: {
                    _id: '$category',
                    total: { $sum: '$amount' },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { total: -1 }
            }
        ])

        const totalAmount = await ExpenseData.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: '$amount' }
                }
            }
        ])

        res.status(200).send({
            message: "Summary fetched successfully",
            data: summary,
            totalAmount: totalAmount[0]?.total || 0
        })
    } catch (error) {
        res.status(500).send({ message: 'Cannot fetch summary', error: error.message })
    }
}

module.exports = {
    CreateExpense,
    GetAllExpenses,
    GetExpenseById,
    UpdateExpense,
    DeleteExpense,
    GetExpenseSummary
}
