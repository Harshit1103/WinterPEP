
let accountName = "";
let accountBalance = 0;


function createAccount(name, initialBalance) {
  accountName = name;
  accountBalance = initialBalance;
  console.log(`Account created for ${accountName} with balance ₹${accountBalance}`);
}


function deposit(amount) {
  if (amount > 0) {
    accountBalance += amount;
    console.log(`₹${amount} deposited. New balance: ₹${accountBalance}`);
  } else {
    console.log("Deposit amount must be greater than zero.");
  }
}


function withdraw(amount) {
  if (amount > 0 && amount <= accountBalance) {
    accountBalance -= amount;
    console.log(`₹${amount} withdrawn. New balance: ₹${accountBalance}`);
  } else if (amount > accountBalance) {
    console.log("Not enough balance to withdraw.");
  } else {
    console.log("Withdrawal amount must be greater than zero.");
  }
}


function checkBalance() {
  console.log(`The balance for ${accountName} is ₹${accountBalance}`);
}


createAccount("John", 1000); 
deposit(500);               
withdraw(300);             
checkBalance();            
