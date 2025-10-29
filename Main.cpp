#include <iostream>
#include <vector>
#include <string>

struct Account {
    std::string name;
    double balance;
    std::string accountType;
    int accountID;
};
struct Transaction {
    int transactionID;
    int accountID;
    std::string date;
    double amount;
    std::string category;
    std::string description;
    bool isIncome;
};

// Functions for menu, add account, add transaction, display reports

int main() {
    std::vector<Account> accounts;
    std::vector<Transaction> transactions;
    // Load data from files

    int choice = 0;
    while (choice != 9) {
        std::cout << "1. Add Account\n2. Add Transaction\n3. View Accounts\n4. View Transactions\n9. Exit\n";
        std::cin >> choice;
        // Handle choices
    }
    // Save data on exit
    return 0;
}