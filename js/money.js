// common function

function getValue(inputId, isInput) {
  const inputValue = document.getElementById(inputId);
  if (isInput) {
    if (isNaN(inputValue.value) || inputValue.value < 0) {
      alert(
        `Error in ${inputId}: give positive number in ${inputId} please!!!`
      );
    } else {
      const inputAmound = parseFloat(inputValue.value);
      return inputAmound;
    }
  } else {
    const inputAmound = parseFloat(inputValue.innerText);
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
  if (totalIncome > totalExpenses) {
    //   Total expenses update
    document.getElementById("total-expenses").innerText = totalExpenses;
    //   Total Balance update

    document.getElementById("total-balance").innerText =
      totalIncome - totalExpenses;
  } else {
    alert("Increase income");
  }
});
// event handaler
document.getElementById("save-btn").addEventListener("click", function () {
  const totalIncome = getValue("total-income", true);
  const balance = getValue("total-balance", false);
  // save input
  const saveInput = getValue("save-input", true);
  const saveAmount = (totalIncome * saveInput) / 100;

  if (saveAmount < balance) {
    // Update saving amount
    document.getElementById("saveing-amound").innerText = saveAmount;
    // Update Remaining Balance
    document.getElementById("remaining-balance").innerText =
      balance - saveAmount;
  } else {
    alert("insufficient balance");
  }
});
