// script.js

function showConfirmation() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';

    // Espera 3 segundos antes de redirigir a WhatsApp
    setTimeout(() => {
        const phoneNumber = '+573182578264'; // Reemplaza con tu número de WhatsApp
        const message = 'Obvi, hagamos algo hoy';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    }, 3000);
}
