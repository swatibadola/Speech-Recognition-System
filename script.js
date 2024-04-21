const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p')

recognition.addEventListener('result', (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)  //Array.from() method is used here to create a new array from an iterable or array-like object. Here iterable is e.results

        // TO EXTRACT THE TRANSCRIBED TEXT FROM SPEECH RECOGNITION RESULTS.
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    if (e.results[0].isFinal) {
        if (text.includes('how are you')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'I am fine';
            texts.appendChild(p)
        }

        if (text.includes("what's your name") || text.includes('what is your name')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'My name is Swati';
            texts.appendChild(p)
        }
        p = document.createElement('p');
    }
})

recognition.addEventListener('end', () => {
    recognition.start();
})
recognition.start();