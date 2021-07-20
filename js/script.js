let button = document.querySelector("#btn");
let err=document.querySelector(".noerror");
let input = document.querySelector("#email-id");
let warning = document.querySelector(".nowarn");

function isValid(email){
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

button.addEventListener("click",(event)=>{
    event.preventDefault();
    let email = document.getElementById("subscribe").elements[0].value;
    if(!isValid(email)){
        err.classList.add("error"); 
        warning.classList.add("warn");   
    }
});

input.addEventListener("click",()=>{
    err.classList.remove("error");
    warning.classList.remove("warn");
});