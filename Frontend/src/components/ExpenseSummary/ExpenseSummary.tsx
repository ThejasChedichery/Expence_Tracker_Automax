function ExpenseSummary({ summary, totalAmount }:any) {
    return (
        <div className="row mb-4">
            <div className="col-md-4 mb-3">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <h5 className="card-title">Total Expenses</h5>
                        <h2>₹{totalAmount.toFixed(2)}</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h5>Spending by Category</h5>
                    </div>
                    <div className="card-body">
                        {summary.length === 0 ? (
                            <p className="text-muted">No data available</p>
                        ) : (
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Total Amount</th>
                                        <th>Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {summary.map((item:any) => (
                                        <tr key={item._id}>
                                            <td>
                                                <span className="badge bg-info">
                                                    {item._id}
                                                </span>
                                            </td>
                                            <td>₹{item.total.toFixed(2)}</td>
                                            <td>{item.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseSummary