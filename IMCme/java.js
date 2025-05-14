const form = document.getElementById("form-imc");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (peso > 0 && alturaCm > 0) {
    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  } else {
    resultado.textContent = "Preencha os campos corretamente.";
  }
});
