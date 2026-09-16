import "./App.css";
import Expenses from "./componenents/Expenses/Expenses.jsx";
import NewExpense from "./componenents/NewExpense/NewExpense.jsx";

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      date: new Date(2025, 10, 12),
      title: "Big man",
      price: 55.55,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;