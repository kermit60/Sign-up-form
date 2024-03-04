let pass = document.getElementById('password').value;
let repass = document.getElementById('confirm_password').value;
console.log(pass)
console.log(repass)
const checkPassword = (pass, repass) => {
    return pass === repass
};

const submitButton = document.querySelector('submit-btn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(pass)
    console.log(repass)
});