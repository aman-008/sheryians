const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");




// let flag = true;
// btn.addEventListener('click', () => {
//     if(flag){
//         bulb.style.backgroundColor = "orange";
//         btn.textContent = 'Off';
//         flag = false;
//     }
//     else{
//         bulb.style.backgroundColor = "transparent";
//         btn.textContent = 'On';
//         flag = true;
//     }
// });



btn.addEventListener('click', () => {
    if(bulb.classList.toggle("lightUp")){
        btn.textContent = "Off";
    }
    else{
        btn.textContent = "On";
    }
});