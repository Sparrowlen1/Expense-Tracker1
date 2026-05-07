import { useState } from "react";

function ExForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  const categories = [
    { value: "", label: "Select a category" },
    { value: "Food", label: "Food" },
    { value: "Transport", label: "Transport" },
    { value: "Shopping", label: "Shopping" },
    { value: "Other", label: "Other" },
  ];
// lets handle or respond to user input input in real time
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  
  if (errors[name]) {
    setErrors({ ...errors, [name]: '' });
  }
};

const validateForm = ()=>{
    const newErrors={};

    if(!formData.name.trim()) newErrors.name="howdy Sparrow expense name is required";
    if(!formData.category) newErrors.category="well there is a missing category my fellow sparrow";
    if(!formData.amount){
        newErrors.amount="well cant add expense without amount"
    }
    else if(isNaN(formData.amount) || formData.amount <=0){
        newErrors.amount="hehe seems you have no money since its negative amount"
    }
    if(!formData.date)
        newErrors.date="we need date fellow Sparrow"
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //gets an array of all keys with errors
};

const handleSubmit = (e)=>{
    e.preventDefault();
    if(validateForm()){
        onAddExpense(formData);
        setFormData({
            name:'',
            description:'',
            category:'',
            amount:'',
            date:''
        })
    }
}

   return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Expense Name <span className="text-red-500"></span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="movie,groceries my fellow sparrow"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Category <span className="text-red-500"></span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Amount in kenyaSH <span className="text-red-500"></span>
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Date <span className="text-red-500"></span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="hey Sparrow kindly provide a description "
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
        >
          submit your expense
        </button>
      </form>
    </div>
  );
}

export default ExForm;
