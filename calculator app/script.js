let displayValue="";
function appendValue(val){
    displayValue+=val;
    updateDisplay();
}
function clearDisplay(){
    displayValue="";
    updateDisplay();
}
function calculateResult(){
    try{
        const result=eval(displayValue);
        displayValue=result.toString();
        updateDisplay();
    }
    catch(error){
        displayValue="Error";
        updateDisplay();

    }
    }
    function updateDisplay(){
        const display= document.getElementById('display');
        display.value= displayValue;
    }
