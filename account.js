   function register() {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        if (localStorage.getItem(username)) {
          alert('User already exists');
        } else {
          localStorage.setItem(username, password);
          alert('Registration successful');
        }
      }

      function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const storedPassword = localStorage.getItem(username);
        if (storedPassword === password) {
          sessionStorage.setItem('loggedInUser', username);
          alert('Login successful');
        } else {
          alert('Invalid credentials');
        }
      }

      function logout() {
        sessionStorage.removeItem('loggedInUser');
        alert('Logout successful');
      }

      function checkLoginStatus() {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (loggedInUser) {
          document.getElementById('welcome-message').innerText = `Welcome, ${loggedInUser}`;
          document.getElementById('auth-section').style.display = 'none';
          document.getElementById('logout-section').style.display = 'block';
        } else {
          document.getElementById('auth-section').style.display = 'block';
          document.getElementById('logout-section').style.display = 'none';
        }
      }

      window.onload = checkLoginStatus;
