document.getElementById('absenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const password = document.getElementById('password').value;
    
    // Token Bot Telegram dan ID Chat
    const token = '6784104621:AAEVRyReTRmVtL_eGnFIZLbYm3FGkI0zF9M';
    const chatId = '7120969628';
    
    // Kirim data ke bot Telegram
    const message = `${nama} telah datang rapat jam ${new Date().toLocaleTimeString()}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;
    
    // Kirim pesan ke bot Telegram
    fetch(url)
        .then(response => {
            if (response.ok) {
                // Redirect ke halaman terima kasih jika pesan terkirim
                window.location.href = 'terimakasih.html';
            } else {
                alert('Gagal mengirim pesan hadir. Silakan coba lagi.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi.');
        });
});
