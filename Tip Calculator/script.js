const form = document.querySelector("form");
const total = document.querySelector("#total p span");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const billValue = Number(event.target[0].value);

  const tipPercentage = Number(event.target[1].value);

  total.textContent = (billValue + (tipPercentage / 100) * billValue).toFixed(
    2,
  );
});
