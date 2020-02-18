function changeSign(input){

if(calculator.display.value.substring(0, 1) == "-"){
calculator.display.value = calculator.display.value.substring(1,calculator.display.value.length);
}else{
calculator.display.value = "-"+ calculator.display.value;
}
}
