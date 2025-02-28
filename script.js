const display = document.getElementById("display-panel")

function appenToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function clearNumber(){
    display.value = display.value.slice(0, - 1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value="Error";
        setTimeout(() => display.value="", 1500)
    }
}