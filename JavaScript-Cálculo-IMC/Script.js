// Nome: Pedro Henrique | Full Stack
// Script em JavaScript para realizar o cálculo do IMC do usuário

function calculateIMC() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const imc = (weight / (height * height)).toFixed(2);

    let resultText = `Seu IMC é ${imc}. `;
    if (imc < 18.5) {
        resultText += "Você está abaixo do peso.";
    } else if (imc < 24.9) {
        resultText += "Você está com peso normal.";
    } else if (imc < 29.9) {
        resultText += "Você está com sobrepeso.";
    } else {
        resultText += "Você está com obesidade.";
    }

    document.getElementById('imc-result').innerText = resultText;
}
