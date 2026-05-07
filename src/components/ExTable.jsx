function ExTable({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg text-center">
        <p className="text-gray-400">Howdy there my Sparrow add some expenses</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-t">
              <td className="p-3">{expense.name}</td>
              <td className="p-3">{expense.category || 'hehe doesnt exit'}</td>
              <td className="p-3">KSh {expense.amount.toFixed(2)}</td>
              <td className="p-3">{expense.date}</td>
              <td className="p-3">
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  );
}
export default ExTable;