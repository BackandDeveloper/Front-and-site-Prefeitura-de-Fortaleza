// Script em JavaScript para realizar o cálculo do IMC do usuário. Na qual está vinculado a primeira página do site. 

function calculateIMC() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const imc = (weight / (height * height)).toFixed(2);

    let resultText = `Seu IMC é ${imc}. `;
    let imageElement = document.getElementById('imc-image');
    let phraseElement = document.getElementById('imc-phrase');

    if (imc < 18.5) {
        resultText += "🔴| Você está abaixo do peso.";
        phraseElement.innerText = " Aumente a ingestão calórica com alimentos nutritivos e consulte um profissional de saúde para orientações personalizadas.";
    } else if (imc < 24.9) {
        resultText += "🟩| Você está com peso normal.";
        phraseElement.innerText = " Mantenha-se assim, consumindo alimentos saudáveis, e se mantendo na média.";
    } else if (imc < 29.9) {
        resultText += "🟨| Você está com sobrepeso.";
        phraseElement.innerText = " Para combater o sobrepeso, adote uma dieta equilibrada e pratique atividade física regularmente.";
    } else {
        resultText += "🔴| Você está com obesidade.";
        phraseElement.innerText = "Adote uma dieta equilibrada, pratique atividade física regularmente e busque orientação de um profissional de saúde para um plano personalizado. ";
    }

    document.getElementById('imc-result').innerText = resultText;
    imageElement.style.display = "block"; 
}

