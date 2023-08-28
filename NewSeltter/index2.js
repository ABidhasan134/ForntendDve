const btnClose=document.querySelector('.btn-close');
var user=document.querySelector('.user');
const email=document.querySelector('.Email');
const successMessage = document.querySelector('.Success-page'); // Corrected variable name
// const userName=email.value;
// console.log(userName);

// console.log("hello");
// console.log(userName);
// user.innerHTML=userName;
// console.log(userName);
btnClose.addEventListener("click",function(){
    // main.classList.remove('none');
    successMessage.classList.add('none');
    console.log("mass");
    window.location.href= 'index.html';
});


