import React, { useState, useEffect } from 'react';
import './Add_Expense.css'; // Import CSS

function AddExpense() {
     const userId = localStorage.getItem('userId')
    const [user, setUser] = useState({ Description: "", Amount: "" ,UserId:userId });
    const [expenses, setExpenses] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
   
    useEffect(() => {
        fetchExpenses();
      
    }, []);
   
    const fetchExpenses = () => {
        fetch("http://localhost:3000/expenses")
            .then(response => response.json())
            .then(data => {
                setExpenses(data);
                calculateTotal(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const calculateTotal = (data) => {
        const total = data.reduce((acc, expense) => acc + Number(expense.Amount), 0);
        setTotalAmount(total);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/Add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(() => {
            setUser({ Description: "", Amount: "" ,UserId:localStorage.getItem("userId")});
            fetchExpenses(); // Refresh the expense list
        })
        .catch(error => console.error('Error adding expense:', error));
    };

    return (
        <div className="expense-wrapper">
            {/* Add Expense Form */}
            <div className="expense-form-container">
                <h2>Add Expense</h2>
                <form onSubmit={handleSubmit} className="expense-form">
                    <input 
                        type='text' 
                        value={user.Description} 
                        placeholder='Enter Details' 
                        onChange={(e) => setUser({ ...user, Description: e.target.value })} 
                        required
                    />
                    <input 
                        type='number' 
                        value={user.Amount} 
                        placeholder='Enter Amount' 
                        onChange={(e) => setUser({ ...user, Amount: e.target.value })} 
                        required
                    />
                    <button type="submit">Add Expense</button>  
                         
                </form>
            </div>


        </div>
    );
}

export default AddExpense;
