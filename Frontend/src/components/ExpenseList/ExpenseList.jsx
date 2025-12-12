function ExpenseList({ expenses, onDeleteExpense, loading }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    if (loading) {
        return (
            <div className="text-center py-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (expenses.length === 0) {
        return (
            <div className="alert alert-info">
                No expenses found. Add your first expense above.
            </div>
        )
    }

    return (
        <div className="card">
            <div className="card-header">
                <h5>All Expenses</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Notes</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr key={expense._id}>
                                    <td>{expense.title}</td>
                                    <td>₹{expense.amount.toFixed(2)}</td>
                                    <td>
                                        <span className="badge bg-secondary">
                                            {expense.category}
                                        </span>
                                    </td>
                                    <td>{formatDate(expense.date)}</td>
                                    <td>{expense.notes || '-'}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => onDeleteExpense(expense._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseList
