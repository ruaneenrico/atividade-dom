function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    const imc = weight / (height * height);
    displayResult(imc);
  }
  
  function displayResult(imc) {
    let resultText = '';
    if (imc < 18.5) {
      resultText = 'Abaixo do peso.';
    } else if (imc < 24.9) {
      resultText = 'Peso normal.';
    } else if (imc < 29.9) {
      resultText = 'Sobrepeso.';
    } else if (imc < 34.9) {
      resultText = 'Obesidade grau 1.';
    } else if (imc < 39.9) {
      resultText = 'Obesidade grau 2.';
    } else {
      resultText = 'Obesidade grau 3.';
    }
  
    document.getElementById('result').textContent = `Seu IMC é ${imc.toFixed(2)}. ${resultText}`;
  }