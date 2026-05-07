import {useState} from 'react'
import Search from './components/Search';
import ExForm from './components/ExForm';
import ExTable from './components/ExTable'

function App() {
  const [expenses,setExpenses]=useState([]);
  const[searchTerm,setSearchTerm]=useState('');

  const addExpense=(newExpense)=>{
    const expenseWithId = {
      ...newExpense, id: Date.now(), amount: parseFloat(newExpense.amount)
    }
    setExpenses([expenseWithId, ...expenses]) //without this itakuwa 2d array
  }

  const deleteExpense=(id)=>{
    if(window.confirm('howdy do you want to delete this expense')){
      setExpenses(expenses.filter(expense =>expense.id !==id)) //callback function
    }
  }

  const filteredExpense = expenses.filter(expense=>{
    const searchedLower=searchTerm.toLowerCase();
    return(expense.name.toLowerCase().includes(searchedLower)||expense.description.toLowerCase().includes(searchedLower));
  })
  return (
   <div className='min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 p-6'>
    <div className='max-w-7xl mx-auto'>
      <header className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-white mb-2'>SparrowExpense Tracker</h1>
          <p className='text-purple-100'>Lets Manage your daily Expense with Sparrowlen</p>
      </header>
      <ExForm onAddExpense={addExpense} /> //passes prop for the addExpense function
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExTable expenses={filteredExpense} onDeleteExpense={deleteExpense} />
    </div>
   </div>
  )
}

export default App