// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;

  // step-3: get the current deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  console.log(depositTotal);
});

// start from 26-6---------->> 9.36
