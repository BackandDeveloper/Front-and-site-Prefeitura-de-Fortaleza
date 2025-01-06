<<<<<<< HEAD
//  Script para enviar E-mail. Presente na página de Informações, e saúde. Que se encontra temporariamente imcompleta.:

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    emailjs.send("", "", {
        to_email: email
    })
    .then(function(response) {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        document.getElementById('message').innerText = 'E-mail enviado com sucesso!';
    }, function(error) {
        console.log('Falha ao enviar o e-mail.', error);
        document.getElementById('message').innerText = 'Falha ao enviar o e-mail.';
    });
});
=======
//  Script para enviar E-mail. Presente na página de Informações, e saúde. Que se encontra temporariamente imcompleta.:

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    emailjs.send("", "", {
        to_email: email
    })
    .then(function(response) {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        document.getElementById('message').innerText = 'E-mail enviado com sucesso!';
    }, function(error) {
        console.log('Falha ao enviar o e-mail.', error);
        document.getElementById('message').innerText = 'Falha ao enviar o e-mail.';
    });
});
>>>>>>> b9199b9398f438a0bd539c241ccbe1950aa797b7
