let numeroAdivinar;
let intentosRestantes;

function iniciarJuego () {
    numeroAdivinar = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 5;
    actualizarIntentos();
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
        intentosRestantes--;

    if (numeroUsuario === numeroAdivinar){
        mensaje.textContent = "Felicidades! has adivinado el numero. Eres un crack";
    }

    if (numeroUsuario < numeroAdivinar) {
        mensaje.textContent = "El numero a adivinar es mas grande";
        intentos.textContent = `${intentosRestantes}`;
    }

    if (numeroUsuario > numeroAdivinar) {
        mensaje.textContent = "El numero a adivinar es mas pequeño";
        intentos.textContent = `${intentosRestantes}`;
    }

    if(intentosRestantes === 0) {
        mensaje.textContent = `Uff! se te acabron los intentos, el numero era ${numeroAdivinar}`;
    }
    actualizarIntentos();
}

function actualizarIntentos() {
const intentos = document.getElementById('intentos');
intentos.textContent = `Intentos restantes ${intentosRestantes}`;
}

function reiniciar() {
    iniciarJuego();
    document.getElementById('numeroUsuario').value = '';
    document.getElementById('mensaje').textContent = '';
}

iniciarJuego();