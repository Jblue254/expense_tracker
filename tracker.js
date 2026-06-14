export let expenses = [];
// rLocalStorage if we are inside a web browser
if (typeof window !== 'undefined' && window.localStorage) {
    expenses = JSON.parse(localStorage.getItem("expenseHistory")) || [];
}

export function addExpense(category, amount, description) {
    const newExpense = {
        id: Date.now(),
        category: category,
        amount: parseFloat(amount) || 0,
        description: description
    };
    expenses.push(newExpense);
    saveData();
    return newExpense;
}

export function deleteExpense(id) {
    expenses = expenses.filter(item => item.id !== id);
    saveData();
}

export function clearAllExpenses() {
    expenses = [];
    saveData();
}

export function calculateTotal() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    return total;
}

function saveData() {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem("expenseHistory", JSON.stringify(expenses));
    }
}

// --- 2. HTML INTERACTION LOGIC (Only runs in the browser) ---
export function renderUI() {
    // If running in Jest terminal, stop here because there is no HTML page
    if (typeof document === 'undefined') return;

    const historyList = document.getElementById("historyList");
    const totalAmountDisplay = document.getElementById("total-amount");

    historyList.innerHTML = "";

    if (expenses.length === 0) {
        historyList.innerHTML = '<li class="text-gray-400 italic text-center py-4">No logged expenses on file.</li>';
        totalAmountDisplay.textContent = "0.00";
        return;
    }

    expenses.forEach(item => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200 mb-2";
        li.innerHTML = `
            <div>
                <span class="font-bold text-blue-600 mr-2">[${item.category}]</span>
                <span class="font-semibold text-gray-800">${item.description}</span>
            </div>
            <div class="flex items-center space-x-3">
                <span class="font-black text-gray-900">$${item.amount.toFixed(2)}</span>
                <button class="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded hover:bg-red-100 transition" onclick="handleDelete(${item.id})">✕</button>
            </div>
        `;
        historyList.appendChild(li);
    });

    totalAmountDisplay.textContent = calculateTotal().toFixed(2);
}

// --- 3. BROWSER EVENT HANDLERS (Exposed globally to HTML) ---
if (typeof window !== 'undefined') {
    // Form Submit Action
    window.handleSubmit = function(event) {
        event.preventDefault();
        const category = document.getElementById("category").value;
        const amount = document.getElementById("amount").value;
        const description = document.getElementById("description").value.trim();

        addExpense(category, amount, description);
        renderUI();
        document.getElementById("expense-form").reset();
    };

    // Item Delete Action
    window.handleDelete = function(id) {
        deleteExpense(id);
        renderUI();
    };

    // Clear All Action
    window.handleClearAll = function() {
        if (confirm("Wipe out everything?")) {
            clearAllExpenses();
            renderUI();
        }
    };

    // Automatically draw everything when the webpage first opens
    window.addEventListener("DOMContentLoaded", renderUI);
}