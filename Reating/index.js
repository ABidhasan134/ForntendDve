const rating= document.querySelectorAll(".btn");
const Main=document.querySelector(".main");
const submit =document.querySelector(".submit");
const bottun=document.querySelector(".btns").values;

var selectedRating=0;
let text = "hello there";

rating.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const Justify= parseInt(btn.getAttribute('data-ratings'))
        console.log(Justify);
        if(Justify===selectedRating)
        {
            selectedRating=0;
            btn.classList.remove('btn-active');
        }
        else
        {
            selectedRating=Justify;
            // btn.classList.toggle('btn-active');
                rating.forEach((btn) => {
                    btn.classList.remove('btn-active');
                });
                // Then, add the 'btn-active' class to the clicked button
                btn.classList.add('btn-active');

        }
    })
})

succese=()=>{
    if(selectedRating!=0)
    {
        alert(`you have rated ${selectedRating} out of 5`);
        window.location.href='thank.html';
    }
    else
    {
        alert('please select a value from the star to rate our service')
    }
}

submit.addEventListener('click',succese);

// export default selectedRating;