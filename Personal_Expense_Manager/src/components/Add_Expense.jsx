import React, { useState, useEffect } from 'react';
import './CSS/Add_Expense.css'; // Import CSS
import { useNavigate } from 'react-router-dom'; 

function AddExpense() {
    const userId = localStorage.getItem('userId');
    const [user, setUser] = useState({
        Description: "",
        Amount: "",
        UserId: userId,
        Month: "",
        Year: "",
        Date: new Date().toISOString().split("T")[0], // Set the default date to today
    });
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
            setUser({ 
                Description: "", 
                Amount: "", 
                UserId: localStorage.getItem("userId"), 
                Month: "", 
                Year: "", 
                Date: new Date().toISOString().split("T")[0] // Reset to today's date
            });
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
                    
                    {/* Month and Year Select */}
                    <select 
                        value={user.Month} 
                        onChange={(e) => setUser({ ...user, Month: e.target.value })} 
                        required
                    >
                        <option value="">Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>

                    <select 
                        value={user.Year} 
                        onChange={(e) => setUser({ ...user, Year: e.target.value })} 
                        required
                    >
                        <option value="">Select Year</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        {/* You can add more years here */}
                    </select>

                    {/* Today's Date */}
                    <input 
                        type="date" 
                        value={user.Date} 
                        onChange={(e) => setUser({ ...user, Date: e.target.value })} 
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
