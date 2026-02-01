// Basic client-side "auth" for demo purposes only
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');

  function showMessage(text, isError = true) {
    msg.style.display = 'block';
    msg.textContent = text;
    msg.style.color = isError ? '#ffdede' : '#dfffe0';
    msg.style.background = isError ? 'rgba(255,0,0,0.04)' : 'rgba(0,255,0,0.03)';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.style.display = 'none';

    const username = (document.getElementById('username').value || '').trim();
    const password = (document.getElementById('password').value || '').trim();

    if (!username || !password) {
      showMessage('Please provide both username and password.');
      return;
    }

    // Demo credentials
    const DEMO_USER = 'admin';
    const DEMO_PASS = 'password';

    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';

    // Simulate network delay
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Sign In';

      if (username === DEMO_USER && password === DEMO_PASS) {
        // Save a simple client-side session token
        localStorage.setItem('rucha_logged_in', 'true');
        localStorage.setItem('rucha_user', username);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        showMessage('Invalid credentials. Try admin / password');
      }
    }, 700);
  });
});
