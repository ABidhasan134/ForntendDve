const email = document.querySelector('.Email');
const button = document.querySelector('.btn'); // Corrected variable name
const main = document.querySelector('.main');
const ErrorText = document.querySelector('#Error');
const successMessage = document.querySelector('.Success-page'); // Corrected variable name


// console.log(user);
button.addEventListener('click', (e) => {
    // e.preventDefault();
    if (validEmail(email.value)) {
        success(email.value);
    } else {
        errorMasseg(email.value);
    }
    console.log("working");
});


function success(userEmail) { // Corrected function name
    if (validEmail(userEmail)) {
        main.classList.add('none');
        // successMessage.classList.remove('none');
        alert("Email is valid. Success!"); // Changed the alert message
        
       window.location.href= 'index2.html';
    //    window.location.href='index2.js';
       
      
    }
}



function validEmail(email) {
    let valida = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valida.test(email);
}



function errorMasseg(NotEmail) {
    if (!validEmail(NotEmail)) {
        email.classList.add('error');
        // ErrorText.style.display = 'block';
        ErrorText.classList.remove('none');
        alert("Invalid valu:");
        console.log("Error");
        
    }
}
  


email.addEventListener(('keydown',function (){
email.classList.remove('error');
ErrorText.classList.add('none');    
}))
