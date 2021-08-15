document.getElementById('submit-btn').addEventListener('click', function(){
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;
    //check email and password
    if(userEmail == 'shontan@baap.com' && userPass == 'secret'){
        window.location.href = 'banking.html'
    } else {
        alert("You're not a valid user");
    }
});