export function startRecognition() {

    if (!('webkitSpeechRecognition' in window)) {
        console.error('API de reconhecimento de voz não suportada.');
        return;
    }

    // eslint-disable-next-line no-undef
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Reconhecimento de voz:', transcript);
    };

    recognition.onerror = (event) => {
        console.error('Erro no reconhecimento de voz:', event.error);
    };

    recognition.start();
}

