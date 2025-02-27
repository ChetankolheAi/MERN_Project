import React, { useState, useEffect } from 'react';
import './CSS/Add_Expense.css'; // Import CSS
import { useNavigate } from 'react-router-dom'; 

function AddExpense() {
     const userId = localStorage.getItem('userId')
    const [user, setUser] = useState({ Description: "", Amount: "" ,UserId:userId });
    const [expenses, setExpenses] = useState([]);
     const navigate = useNavigate();
   


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
                    <div className="buttons">
                    <button type="submit" id='button1'>Add Expense</button>  
                    <button id='button1' type="button" onClick={() => navigate('/view-expense')}>View Expense</button>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default AddExpense;
