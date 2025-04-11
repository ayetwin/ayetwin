document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('check');
    const body = document.body;
    const messages = document.getElementById('messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Default to Male Mode (unchecked)
    body.classList.add('male-mode');

    // Toggle between Male and Female modes based on checkbox state
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('male-mode');
            body.classList.add('female-mode');
        } else {
            body.classList.remove('female-mode');
            body.classList.add('male-mode');
        }
    });

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        body.classList.add('scrolling');
        body.style.setProperty('--scroll', scrollPosition);
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        const userMsg = document.createElement('p');
        userMsg.textContent = `You: ${message}`;
        messages.appendChild(userMsg);

        const botMsg = document.createElement('p');
        botMsg.textContent = `Aye Twin: ${getBotResponse(message)}`;
        messages.appendChild(botMsg);

        userInput.value = '';
        messages.scrollTop = messages.scrollHeight;
    }

    function getBotResponse(message) {
        const lowerMsg = message.toLowerCase();
        const isFemaleMode = body.classList.contains('female-mode');

        if (isFemaleMode) {
            if (lowerMsg.includes('hey') || lowerMsg.includes('hi')) return 'Heyy, sis! Lemme clock you some tea, what’s good?';
            if (lowerMsg.includes('how')) return 'I’m good, fam! You know I stay bless and blockin’ the mess. How you holdin’ up?';
            if (lowerMsg.includes('tea') || lowerMsg.includes('gossip')) return 'Oop, the tea hot, sis! Spill it, ‘cause this gon’ be messy!';
            return 'Nah, sis, you wildin’! But I’m here for it, let’s heal louder.';
        } else {
            if (lowerMsg.includes('hey') || lowerMsg.includes('hi')) return 'Yo, twin! We OUTSIDEEEE!!! What’s poppin’?';
            if (lowerMsg.includes('how')) return 'I’m straight, gang! How you holdin’ up? Let’s hit up AK for da chopped cheese.';
            if (lowerMsg.includes('outside')) return 'WE OUTSIDEEEE!!! Twin, let’s make it lit, fam!';
            return 'Nah, twin, you know I’m with the shits. Let’s keep it a buck.';
        }
    }
});
