import React, { useState, useEffect } from 'react';
import './CSS/View_Exp.css';

function View_Exp() {
    const [expenses, setExpenses] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = () => {
        const userId = localStorage.getItem('userId');  // Fetch the userId from localStorage
        fetch(`http://localhost:3000/expenses/${userId}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${userId}`,  // Send the userId as Authorization header
                'Content-Type': 'application/json'
            }
        })
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

    const handleDelete = (expenseId) => {
        const userId = localStorage.getItem('userId');

        fetch(`http://localhost:3000/expenses/${expenseId}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${userId}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                // Re-fetch the expenses after deletion
                fetchExpenses();
            })
            .catch(error => console.error('Error deleting expense:', error));
    };

    return (
        <div className='main_Container'>
            <div className="expense-list-container">
                <h2>Expenses:</h2><h3 style={{ cursor: 'pointer', color: 'white' }}>Total Amount: ${totalAmount}</h3>
                <ul className="expense-list">
                    {expenses.map((expense, index) => (
                        <li key={expense._id}>  {/* Assuming _id is available */}
                            {expense.Description}: <strong>${expense.Amount}</strong>
                            <span onClick={() => handleDelete(expense._id)} style={{ cursor: 'pointer', color: 'white' }}> -</span>
                        </li>
                    ))}
                </ul>
                
            </div>
            
        </div>
    );
}

export default View_Exp;
