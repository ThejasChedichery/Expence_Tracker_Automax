import { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary/ExpenseSummary'
import FilterBar from './components/FilterBar/FilterBar'
import {
  getAllExpenses,
  createExpense,
  deleteExpense,
  getExpenseSummary
} from './services/expenseService'

function App() {
  const [expenses, setExpenses] = useState([])
  const [summary, setSummary] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchExpenses = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await getAllExpenses(selectedCategory)
      setExpenses(response.data)
    } catch (err) {
      setError('Failed to fetch expenses')
    } finally {
      setLoading(false)
    }
  }

  const fetchSummary = async () => {
    try {
      const response = await getExpenseSummary()
      setSummary(response.data)
      setTotalAmount(response.totalAmount)
    } catch (err) {
      setError('Failed to fetch summary')
    }
  }

  useEffect(() => {
    fetchExpenses()
    fetchSummary()
  }, [selectedCategory])

  const handleExpenseAdded = async (expenseData:any) => {
    await createExpense(expenseData)
    fetchExpenses()
    fetchSummary()
  }

  const handleDeleteExpense = async (id:any) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await deleteExpense(id)
        fetchExpenses()
        fetchSummary()
      } catch (err) {
        setError('Failed to delete expense')
      }
    }
  }

  const handleCategoryChange = (category:any) => {
    setSelectedCategory(category)
  }

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h1 className="display-4">Personal Expense Tracker</h1>
        <p className="text-muted">Track your daily expenses and manage your budget</p>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <ExpenseSummary summary={summary} totalAmount={totalAmount} />

      <div className="row">
        <div className="col-md-4">
          <ExpenseForm onExpenseAdded={handleExpenseAdded} />
        </div>
        <div className="col-md-8">
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default App