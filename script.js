let isUzbek = true;
function toggleLanguage() {
    isUzbek = !isUzbek;
    document.getElementById("lang-btn").textContent = isUzbek ? "🌐 O'zb" : "🌐 English";
    document.getElementById("offer-text").textContent = isUzbek ? "Offerta imzolash" : "Sign the offer";
    document.getElementById("welcome-text").textContent = isUzbek ? "Spacega xush kelibsiz" : "Welcome to Space";
    document.getElementById("qr-text").textContent = isUzbek ? "QR code orqali kirish" : "Login via QR code";
    document.getElementById("confirm-text").textContent = isUzbek ? "Подвердить" : "Confirm";
    document.getElementById("profile-title").textContent = isUzbek ? "Profil ma'lumotlari" : "Profile Information";
}
function switchRole(button) {
    document.querySelectorAll('.role-switch button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
function togglePassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}
function submitForm() {
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;
    const profileInfo = document.getElementById('profile-info');
    if (userId === '2972' && password === '667799') {
        profileInfo.style.display = 'block';
    } else {
        alert(isUzbek ? "hamayoni toldr" : "Please fill in all fields correctly!");
    }
}