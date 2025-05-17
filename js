function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if(user && pass) {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
  } else {
    alert('Please enter valid credentials.');
  }
}

function showParentLogin() {
  document.getElementById('auth-section').style.display = 'none';
  document.getElementById('parent-login-section').style.display = 'block';
}

function parentLogin() {
  const user = document.getElementById('parentUsername').value;
  const pass = document.getElementById('parentPassword').value;
  if(user && pass) {
    alert('Parent login successful.');
    document.getElementById('parent-login-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
  } else {
    alert('Invalid parent credentials.');
  }
}

function backToLogin() {
  document.getElementById('parent-login-section').style.display = 'none';
  document.getElementById('auth-section').style.display = 'block';
}

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      document.getElementById('location-display').innerHTML = 
        `📍 Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    }, () => {
      alert('Location access denied.');
    });
  } else {
    alert('Geolocation not supported.');
  }
}

function simulateCall() {
  const log = document.getElementById('call-log');
  log.innerHTML += "<p>📞 Normal Call placed to emergency contact.</p>";
}

function simulateVideoCall() {
  const log = document.getElementById('call-log');
  log.innerHTML += "<p>🎥 Video Call started with emergency contact.</p>";
}

function sendEmergencyAlert() {
  alert('🚨 Emergency alert sent to your trusted contacts!');
}
