window.onload = function() {
    document.getElementById('popup').style.display = 'block';
}

document.getElementById('close-popup-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('goto-google-btn').onclick = function() {
    window.location.href = 'https://www.google.com';
}
