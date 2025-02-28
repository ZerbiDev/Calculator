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
        let expression = display.value;

        expression = expression.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
        expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");

        display.value = eval(expression);
    } catch (error){
        display.value="Error";
        setTimeout(() => display.value="", 1500)
    }
}