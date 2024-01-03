let numeroAdivinar;
let intentosRestantes;

function iniciarJuego () {
    numeroAdivinar = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 5;
}

function adivinarNumero () {
    const numeroUsuario =
    parseInt(document.getElementById('numeroUsuario').value);
    const mensaje = document.getElementById('mensaje');
    const intentos = document.getElementById('intentos');

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = 'Por favor, ingresa un numero valido';
        return;
    } 

    if (numeroUsuario === numeroAdivinar){
        mensaje.textContent = "Felicidades! has adivinado el numero."
        intentos.textContent = "Intentos restante: 0"
    }

    if (numeroUsuario < numeroAdivinar) {
        mensaje.textContent = "El numero a adivinar es mas pequeño";
        intentos.textContent = `Te quedan ${intentosRestantes}`;
    }

    if (numeroUsuario > numeroAdivinar) {
        mensaje.textContent = "El numero a adivinar es mas grande";
        intentos.textContent = `Te quedan ${intentosRestantes}`;
    }

    if(intentosRestantes === 0) {
        mensaje.textContent = `ff! se te acabron los intentos, el numero era ${numeroAdivinar}`;
    }
}

iniciarJuego();