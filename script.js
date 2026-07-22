const startButton = document.getElementById('startButton');

if (startButton) {
    startButton.addEventListener('click', () => {
        window.location.href = 'auth1.html';
    });
}
