<<<<<<< HEAD
// Nome: Pedro Henrique | Full Stack
// Script em JavaScript para realizar o cálculo do IMC do usuário

function calculateIMC() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const imc = (weight / (height * height)).toFixed(2);

    let resultText = `Seu IMC é ${imc}. `;
    let imageElement = document.getElementById('imc-image');
    let phraseElement = document.getElementById('imc-phrase');

    if (imc < 18.5) {
        resultText += "Você está abaixo do peso.";
        imageElement.src = "caminho/para/imagem-abaixo-peso.jpg"; // Define a imagem para abaixo do peso
        phraseElement.innerText = "Recomendo que você procure um médico, e realize uma consulta com o nutricionista para verificar seu caso.";
    } else if (imc < 24.9) {
        resultText += "Você está com peso normal.";
        imageElement.src = "caminho/para/imagem-peso-normal.jpg"; // Define a imagem para peso normal
        phraseElement.innerText = "Frase para peso normal.";
    } else if (imc < 29.9) {
        resultText += "Você está com sobrepeso.";
        imageElement.src = "caminho/para/imagem-sobrepeso.jpg"; // Define a imagem para sobrepeso
        phraseElement.innerText = "Frase para sobrepeso.";
    } else {
        resultText += "Você está com obesidade.";
        imageElement.src = "caminho/para/imagem-obesidade.jpg"; // Define a imagem para obesidade
        phraseElement.innerText = "Recomendo que você procure um médico, e realize uma consulta com o nutricionista para verificar seu caso.";
    }

    document.getElementById('imc-result').innerText = resultText;
    imageElement.style.display = "block"; // Exibe a imagem
}
=======
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

>>>>>>> b9199b9398f438a0bd539c241ccbe1950aa797b7
