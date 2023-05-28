function registerUser(event) {
    event.preventDefault();
  
    const form = document.getElementById('registrationForm');
    const userName = form.userName.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const privateNumber = form.privateNumber.value;
    const password = form.password.value;
  
    const userData = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        privateNumber: privateNumber,
        password: password,
        active: true
    };
    fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
          "userName": userData.userName,
      "firstName": userData.firstName,
      "lastName": userData.lastName,
      "email": userData.email,
      "privateNumber": userData.privateNumber,
      "password": userData.password,
      "active": true})
  })
     .then(response => response.json())
  
    .then(response => { console.log(JSON.stringify(response));
        alert('User registered successfully!');
        form.reset();
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred during registration.');
    });
  }
  
  
  function loginUser(event) {
    event.preventDefault();
  
    const form = document.getElementById('loginForm');
    const email = form.loginEmail.value;
    const password = form.loginPassword.value;
    fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
         
      "email": email,
      
      "password": password,
      })
  })
     .then(response => response.json())
  
    .then(response => { console.log(JSON.stringify(response));
        alert('Good job');
        form.reset();
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred during registration.');
    });
  }
  
  
  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', registerUser);
  
  
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', loginUser);
  

