const BtnContainerElRef = document.getElementById("buttoncontainer");
const inputElRef = document.getElementById("inputnum");
const resultElRef = document.getElementById("result");
const btnElFef = document.getElementsByClassName("btn");

function numSeparaotr(numStr) {
  return numStr.split('').reverse().join('').match(/.{1,3}/g).join("'").split('').reverse().join('');
}


for (let i = 0; i < btnElFef.length; i++) {
btnElFef[i].addEventListener('click', function () {
    let whole = Number(inputElRef.value);
    let buttons = btnElFef[i].value
    let result = ((whole * buttons) / 100) + whole;
    let Strresult = result.toString()
    resultElRef.innerHTML = numSeparaotr(Strresult) + '₮'
    
    console.log(Strresult)
  })
}

const ResetbuttonElRef = document.getElementById('reset')
ResetbuttonElRef.addEventListener ('click', function(){
  resultElRef.innerHTML = "";
  inputElRef.value = "";
})












