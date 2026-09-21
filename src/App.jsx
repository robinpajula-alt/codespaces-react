import "./App.css";
import Expenses from "./componenents/Expenses/Expenses.jsx";
import NewExpense from "./componenents/NewExpense/NewExpense.jsx";

const App = () => {
  const DYMMY_EXPENSES = [
    {
      id: "id1",
      date: new Date(2024, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      id: "id2",
      date: new Date(2025, 10, 12),
      title: "Big man",
      price: 55.55,
    },
    {
      id: "id3",
      date: new Date(2024, 10, 12),
      title: "New phatpants",
      price: 140.99,
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={DYMMY_EXPENSES} />
    </div>
  );
};

export default App;