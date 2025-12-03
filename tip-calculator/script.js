let billAmount = document.getElementById('billAmount');
let tip = document.getElementById('tipPercent');
let button = document.getElementById('button');
let container = document.querySelector('.form');

button.addEventListener('click', validation);
const p = document.createElement('p');
p.classList.add('tip');

function validation() {
  const userBill = parseFloat(billAmount.value.trim());
  const tipAmount = parseFloat(tip.value.trim());

  if (isNaN(userBill) || isNaN(tipAmount)) {
    p.textContent = '❗ Please enter valid numbers in both fields';
    appendMessage();
    return;
  }
  calculateTip(userBill, tipAmount);
}

function calculateTip(userBill, tipAmount) {
  let total = 0;
  total = userBill + userBill * (tipAmount / 100);
  p.textContent = `Total with Tip : ₹${total.toFixed(2)}`;
  appendMessage();
}

function appendMessage() {
  if (!container.contains(p)) {
    container.appendChild(p);
  }
}
