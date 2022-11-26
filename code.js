// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         // console.log('clicked');
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(e.target.innerText)
//         switch(e.target.innerText) {
//             case 'X':
//                 display.innerText  = '';
//                 break;
//             case 'B':
//                 if(display.innerText){
//                     display.innerText = display.innerText.slice(0, -1)
//                 }
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch{
//                     display.innerText = 'Error';                
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
let button = document.querySelector("button");
// Output
let output = document.querySelector('#output');
function display(arg) {
    output.value += arg;
}
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener('click', ()=>{
    if (output !== ''){
        // calculate if the is a value in the screen
        output.value = eval(output.value);
    }
})
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', ()=>{
    if (output !== ''){
        output.value = "";
    }
})
