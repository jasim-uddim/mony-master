// input value

function getValue(inputId, isInput) {
  if (isInput) {
    const inputAmound = parseFloat(document.getElementById(inputId).value);
    return inputAmound;
  } else {
    const inputAmound = parseFloat(document.getElementById(inputId).innerText);
    return inputAmound;
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalIncome = getValue("total-income", true);
  // food expenses
  const foodExpenses = getValue("food-expenses", true);
  //   Rent expenses
  const rentExpenses = getValue("rent-expenses", true);
  //  clothes expenses
  const clothesExpenses = getValue("clothes-expenses", true);

  const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
  //   Total expenses update
  document.getElementById("total-expenses").innerText = totalExpenses;
  //   Total Balance update
  document.getElementById("total-balance").innerText =
    totalIncome - totalExpenses;
});
// save amount
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeInput = document.getElementById("total-income");
  const totalIncome = incomeInput.value;
  const totalIncomeAmound = parseFloat(totalIncome);
  // saveing amound
  const saveInput = document.getElementById("save-input");

  const saveValue = parseFloat(saveInput.value);

  const saveAmound = (totalIncomeAmound * saveValue) / 100;
  const saveMoney = document.getElementById("saveing-amound");
  const saveText = saveMoney.innerText;
  saveMoney.innerText = saveAmound;
  // Remaining Balance
  const remainedBalance = document.getElementById("remaining-balance");
  const remainedBalanceText = remainedBalance.innerText;
  remainedBalance.innerText = -saveAmound;
});
