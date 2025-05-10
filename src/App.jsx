import { useState } from 'react';
import LoginRegister from './components/LoginRegister';
import ExpenseList from './components/spendTracker/ExpenseList';
import ExpenseFilter from './components/spendTracker/ExpenseFilter';
import ExpenseForm from './components/spendTracker/ExpenseForm';
import './styles.css';
import Dashboard from './pages/Dashboard';


function App() {
    // return(
    //     <div>
    //         <LoginRegister/>
    //     </div>
   
    // );

    const[expenses,setExpenses] = useState([
    ]);

    const addItem = (data) => {
        console.log(data)
        setExpenses(() => [...expenses, data])
    }

    const deleteItem = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    const filterItem = (cat) => {
        setExpenses(expenses.filter(expense => expense.category == cat))
    }

    return(
        <>
        <ExpenseForm addExpense = {addItem}/>
            <ExpenseFilter filterItem = {filterItem}/>
            <ExpenseList items = {expenses} deleteItem = {deleteItem}/>
            {/* <Dashboard />; */}
        </>
    );

}
export default App;  
