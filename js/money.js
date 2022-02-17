// common function

function getValue(inputId, isInput) {
  if (isInput) {
    const inputAmound = parseFloat(document.getElementById(inputId).value);
    return inputAmound;
  } else {
    const inputAmound = parseFloat(document.getElementById(inputId).innerText);
    return inputAmound;
  }
}
// event handeler

document.getElementById("calculate-btn").addEventListener("click", function () {
  // total income
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
// event handaler
document.getElementById("save-btn").addEventListener("click", function () {
  const totalIncome = getValue("total-income", true);
  const balance = getValue("total-balance", false);
  // save input
  const saveInput = document.getElementById("save-input");

  const saveValue = parseFloat(saveInput.value);
  // saving amound
  const saveAmound = (totalIncome * saveValue) / 100;
  const saveMoney = document.getElementById("saveing-amound");
  const saveText = saveMoney.innerText;
  saveMoney.innerText = saveAmound;
  // Remaining Balance
  const remainedBalance = document.getElementById("remaining-balance");
  const remainedBalanceText = remainedBalance.innerText;
  remainedBalance.innerText = balance - saveAmound;
});
