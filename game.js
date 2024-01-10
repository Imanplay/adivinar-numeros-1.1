let numeroAdivinar;
let intentosRestantes;
const mensaje = document.getElementById('mensaje');
const intentos = document.getElementById('intentos');

function iniciarJuego() {
    numeroAdivinar = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 5;
}

function limpiarInput (){
const input = document.getElementById("numeroUsuario").value = "";
}

function adivinarNumero() {
    const numeroUsuario =
        parseInt(document.getElementById('numeroUsuario').value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.textContent = 'Por favor, ingresa un número valido';
        decirIntentos('Por favor, ingresa un número valido');
        return;
    }

    if (numeroUsuario === numeroAdivinar) {
        mensaje.textContent = "Felicidades! has adivinado el número. Eres un crack";
        decirIntentos('Felicidades! has adivinado el número. Eres un crack');
       mensaje.style.color = "green";
    }

    if (numeroUsuario < numeroAdivinar ) {
        actualizarIntentos();
        if (intentosRestantes !== 0){
        mensaje.textContent = "El número a adivinar es mas grande";
        decirIntentos(`El número a adivinar es mas grande, te quedan ${intentosRestantes} intentos.`);
        intentos.textContent = `${intentosRestantes}`;
limpiarInput();
        }
    } 
    
    if (numeroUsuario > numeroAdivinar){
        actualizarIntentos();
        if (intentosRestantes !== 0) {
        mensaje.textContent = "El número a adivinar es mas pequeño";
        decirIntentos(`El número a adivinar es mas pequeño, te quedan ${intentosRestantes} intentos.`);
        intentos.textContent = `${intentosRestantes}`;
limpiarInput();
        }
    }

    if (intentosRestantes === 0 ) {
        mensaje.textContent = `Uffff! se te acabron los intentos, el número era ${numeroAdivinar}`;
        decirIntentos(`Uffff! se te acabaron los intentos, el número era ${numeroAdivinar}`);
limpiarInput();
    }
}

function actualizarIntentos() {
    intentosRestantes--;
    intentos.textContent = `Intentos restantes: ${intentosRestantes}`;
}

function decirIntentos(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'es-ES'
    utterance.volume = 1;
    utterance.rate = 1;
    synth.speak(utterance);
}

function reiniciar() {
    document.getElementById('numeroUsuario').value = '';
    mensaje.textContent = '';
    mensaje.style.color = 'red';
    iniciarJuego();
    intentos.textContent = intentosRestantes;
    decirIntentos('Juego reiniciado');
}

iniciarJuego();