const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "Hurryy !! Your Birthday is luckyy 🚀";
  } else {
    output.innerText = "Sorry Your Birthday Is Not Lucky 😢";
  }
}

function checkBirthdayIsLucky() {
  const birthDate = dob.value;
  const sum = calculateSum(birthDate);

  if (sum && luckyNumber) {
    compareValues(sum, luckyNumber.value);
  } else {
    output.innerHTML = "Please fill both the fields !";
  }
}

function calculateSum(birthDate) {
  birthDate = birthDate.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < birthDate.length; i++) {
    sum = sum + Number(birthDate.charAt(i));
  }
  return sum;
}

checkBtn.addEventListener("click", checkBirthdayIsLucky);
