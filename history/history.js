// Sample transactions (can be replaced by actual data from a server)
const transactions = [
    { date: '2024-11-05', amount: 5000, status: 'Completed', ref: 'ABC12345', type: 'payment' },
    { date: '2024-11-04', amount: 3000, status: 'Pending', ref: 'XYZ67890', type: 'payment' },
    { date: '2024-11-03', amount: 1200, status: 'Completed', ref: 'DEF45678', type: 'usage' }
];

// Function to display transactions
function displayTransactions(filteredTransactions) {
    const transactionList = document.querySelector('.transaction-list');
    transactionList.innerHTML = ''; // Clear current list

    filteredTransactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
            <span class="transaction-date">${transaction.date}</span>
            <span class="transaction-amount">₦${transaction.amount.toLocaleString()}</span>
            <span class="transaction-status ${transaction.status.toLowerCase()}">${transaction.status}</span>
            <span class="transaction-ref">Ref: ${transaction.ref}</span>
        `;
        transactionList.appendChild(transactionItem);
    });
}

// Initial display of all transactions
displayTransactions(transactions);

// Filter transactions by date and type
document.getElementById('filterDate').addEventListener('change', (e) => {
    const filterDate = e.target.value;
    const filterType = document.getElementById('filterType').value;
    filterTransactions(filterDate, filterType);
});

document.getElementById('filterType').addEventListener('change', (e) => {
    const filterType = e.target.value;
    const filterDate = document.getElementById('filterDate').value;
    filterTransactions(filterDate, filterType);
});

function filterTransactions(date, type) {
    let filtered = transactions;

    if (date) {
        filtered = filtered.filter(transaction => transaction.date === date);
    }

    if (type !== 'all') {
        filtered = filtered.filter(transaction => transaction.type === type);
    }

    displayTransactions(filtered);
}
