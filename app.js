const transactions = [];
const form = document.getElementById("transaction-form");
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const transactionsList = document.getElementById("transactions");
const balanceSpan = document.getElementById("balance");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const desc = descInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (desc && !isNaN(amount)) {
        const transaction = {
            desc,
            amount,
            category,
            type: amount >= 0 ? "income" : "expense"
        };
        transactions.push(transaction);
        updateUI();
        form.reset();
    }
});

function updateUI() {
    // List
    transactionsList.innerHTML = "";
    let balance = 0;

    transactions.forEach((tx, idx) => {
        balance += tx.amount;
        const li = document.createElement("li");
        li.className = tx.type;
        li.innerHTML = `
            ${tx.desc} 
            <span>${tx.category}</span>
            <strong>$${tx.amount.toFixed(2)}</strong>
            <button onclick="deleteTransaction(${idx})">Delete</button>
        `;
        transactionsList.appendChild(li);
    });

    balanceSpan.textContent = balance.toFixed(2);
}

window.deleteTransaction = function(idx) {
    transactions.splice(idx, 1);
    updateUI();
};