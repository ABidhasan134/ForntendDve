let Bdays=document.querySelector("#day");
let Bmonths=document.querySelector("#month");
let Byears=document.querySelector("#year");
let button=document.querySelector(".btn");
let icon =document.querySelector("bi");
const YearIn =document.querySelector(".value1");
const MonthIn =document.querySelector(".value2");
const DayIn =document.querySelector(".value3");
var Htext=document.querySelectorAll(".hiden");
let texts=document.querySelectorAll(".pa");
let Tday=document.querySelector(".no1");

const ErrorText=document.querySelector(".date");
//testing in console
console.log(Htext);
 //main function
function ageFinder(e){
    e.preventDefault();
    //finding the vlaue
    const days=parseInt(Bdays.value);
    const months=parseInt(Bmonths.value);
    const years=parseInt(Byears.value);
    //apply condition of error
    if(isNaN(days)||isNaN(months)||isNaN(years))
    {
        console.log("Empty");
        sowError();
        return;
    }
    if(months<0 || days<0 || years<1900)
    {
        console.log("Error")
        sowError();
        return;
    }
    if(months>12 || days>31 || years>2023)
    {
        sowError("Invalide");
        return;
    }
    //geting dates 
    const crruntDate=new Date();
    const BrithDay=new Date (years,months-1,days);
    if(BrithDay>crruntDate)
    {
        sowError();
        return;
    }
    //main logic of code 
    //converting into mili sceond (ageMilis)
    const ageInMilis=crruntDate-BrithDay;
    const ageInDay=Math.floor(ageInMilis/(1000*60*60*24));
    const ageInMonth=Math.floor(ageInDay/30);
    const ageInYear=Math.floor(ageInDay/365);
    //set the value it also can done by innerHtml
    YearIn.textContent=ageInYear;
    MonthIn.textContent=ageInMonth;
    DayIn.textContent=ageInDay;

    
}
//add Event Listener
button.addEventListener("click", ageFinder);

// button.addEventListener("keydown",function(event){
//     if(event=='Enter'){
//         event.preventDefault();
//         ageFinder();
//     }
// })

//creating error secetion area
const sowError=(mass)=>{
    
    YearIn.textContent="- -";
    MonthIn.textContent="- -" ;
    DayIn.textContent ="- -";

    
    Bdays.classList.add('error');
    Bmonths.classList.add('error');
    Byears.classList.add('error');
    //add or remove 1 class in many element 
    //we must use array (map forEach etc)
    Htext.forEach(function(elements){
        elements.classList.remove('hiden');
        elements.classList.add('error2');
    })
    texts.forEach((elements)=>{
        elements.classList.add('error');
    })
    Bdays.addEventListener("click",removeError);
    Bmonths.addEventListener("click",removeError);
    Byears.addEventListener('click',removeError);
}
//Error removing area
function removeError(){
    Bdays.classList.remove('error');
    Bmonths.classList.remove('error');
    Byears.classList.remove('error');
    Htext.forEach(function(elements){
        elements.classList.add('hiden');
        elements.classList.remove('error');
    })
    texts.forEach((elements)=>{
        elements.classList.remove('error');
    })

}
