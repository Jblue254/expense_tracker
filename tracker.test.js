import { expenses, addExpense, deleteExpense, calculateTotal, clearAllExpenses } from './tracker.js';

describe('Simplified Expense Tracker Tests', () => {
    
    beforeEach(() => {
        // Clear out old values before each test run
        clearAllExpenses();
    });

    test('Should add an expense to the list', () => {
        addExpense('Food', 15.75, 'Lunch');
        expect(expenses.length).toBe(1);
        expect(expenses[0].description).toBe('Lunch');
    });

    test('Should delete an expense by its ID', () => {
        const item = addExpense('Transport', 4.00, 'Train');
        deleteExpense(item.id);
        expect(expenses.length).toBe(0);
    });

    test('Should calculate the correct total amount spent', () => {
        addExpense('Food', 20.00, 'Groceries');
        addExpense('Bills', 30.00, 'Water');
        expect(calculateTotal()).toBe(50.00);
    });
});