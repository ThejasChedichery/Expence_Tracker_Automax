import { useState } from 'react'

function ExpenseForm({ onExpenseAdded }) {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: 'food',
        date: '',
        notes: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!formData.title || !formData.amount) {
            setError('Title and Amount are required')
            return
        }

        if (formData.amount <= 0) {
            setError('Amount must be greater than 0')
            return
        }

        setLoading(true)
        try {
            await onExpenseAdded(formData)
            setFormData({
                title: '',
                amount: '',
                category: 'food',
                date: '',
                notes: ''
            })
        } catch (err) {
            setError('Failed to add expense')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5>Add New Expense</h5>
            </div>
            <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                            className="form-select"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="utilities">Utilities</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Notes</label>
                        <textarea
                            className="form-control"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="2"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Adding...' : 'Add Expense'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ExpenseForm
