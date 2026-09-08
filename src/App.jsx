import './App.css';
import ExpenseItem from './componenents/ExpenseItem.jsx';

const App = () => {
  const expenses = [
    {
      date:  new Date(2024, 10, 12),
      title: "New book",
      price: 30.99
    },
    {
      date:  new Date(2025, 10, 12),
      title: "Big man",
      price: 55.55
    }
  ]
  return (
    <div className="App">
      <ExpenseItem
        data={expenses[0]}
      />
      <ExpenseItem
        data={expenses[1]}
      />
    </div>
  );
};

export default App;