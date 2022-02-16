document.getElementById("calculate-btn").addEventListener("click", function () {
  // food expenses
  const foodInput = document.getElementById("food-expenses");
  const foodExpenses = foodInput.value;
  const foodAmound = parseFloat(foodExpenses);
  //   Rent expenses
  const rentInput = document.getElementById("rent-expenses");
  const renExpenses = rentInput.value;
  const renAmound = parseFloat(renExpenses);
  //  clothes expenses
  const clothesInput = document.getElementById("clothes-expenses");
  const clothesExpenses = clothesInput.value;
  const clothesAmound = parseFloat(clothesExpenses);
  const totalCost = foodAmound + renAmound + clothesAmound;
  //   Total expenses
  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesAmound = totalExpenses.innerText;
  totalExpenses.innerText = totalCost;
  //   Total income
  const incomeInput = document.getElementById("total-income");
  const totalIncome = incomeInput.value;
  const totalIncomeAmound = parseFloat(totalIncome);

  //   Total balance problem
  const balanceInput = document.getElementById("total-balance");

  const balanceText = balanceInput.innerText;

  const totalBalance = parseFloat(balanceText);

  balanceInput.innerText = totalBalance + totalIncomeAmound;
  const balance = balanceInput.innerText - totalExpenses.innerText;
});
// save amount
document.getElementById("save-btn").addEventListener("click", function () {
  const saveInput = document.getElementById("save-input");
  const saveValue = parseFloat(saveInput.value);
  const saveAmound = totalIncomeAmound / saveValue;
  console.log(saveAmound);
});
