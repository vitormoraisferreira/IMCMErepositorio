const form = document.getElementById("form-imc");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    resultado.textContent = "Seu IMC é: " + imc.toFixed(2);
  } else {
    resultado.textContent = "Por favor, preencha os campos corretamente.";
  }
});
