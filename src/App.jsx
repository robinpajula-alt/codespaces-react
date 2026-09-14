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

  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;