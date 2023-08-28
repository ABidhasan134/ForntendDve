var img=document.querySelector("#img");
//adding window event resize for adding mobile jpg of any of jpg
window.addEventListener('resize',()=>{
    if(window.innerWidth>=800)
    {
        img.src="illustration-sign-up-desktop.svg";
    }
    else
    {
        img.src="illustration-sign-up-mobile.svg";
    }
});

var submit = document.querySelector(".btn");
var email=document.querySelector(".Email");
const apiKey = 'aa885f50ef57439d845df80027b3220d';
const ErrorMass= document.querySelector('.Error');
var MassEmail=document.querySelector('.MassEmail');
async function  validEmail()
{
    if(!email.value)
    {
        alert("Input your email");
        console.log(email.value);
        return;
    }
    // email.style.display = 'grid';

    try{
        const respons=await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email.value}`);
        console.log(respons);
        if(respons.ok)
        {
            const date=await respons.json();
            // console.log(`Date: ${date}`);
            const {is_valid_format: {value}} = data;
            console.log(date);
            if(!email.value)
            {
                ErrorMass.classList.add('visibal1');
                email.classList.add('visibal2');
                console.log("error");
                setTimeout( ()=>{
                    ErrorMass.classList.remove('visibal2');
                    ErrorMass.classList.remove('visibal1');
                    console.log("error");
                },1300);
                // email.style.display = 'none';
            }
            
            else
            {
                email.style.display = 'none';
                localStorage.setItem('user-email', email.value);
                window.location.href= 'index2.html'
            }

        }
    }
    catch{
        console.log("Eror is here");
    }
}

submit.addEventListener("click",validEmail);


// function httpGetAsync(url, callback) {
//     const xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
//         callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", url, true); // true for asynchronous
//     xmlHttp.send(null);
// }

// const url = "https://emailvalidation.abstractapi.com/v1/?api_key=c265f90d2fb84c8bbb0717f33c606c82&email=abeydhasan134@gmail.com"

// httpGetAsync(url);