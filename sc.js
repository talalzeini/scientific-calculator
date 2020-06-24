function changeSign(input){

if(calculator.display.value.substring(0, 1) == "-"){
calculator.display.value = calculator.display.value.substring(1,calculator.display.value.length);
}else{
calculator.display.value = "-"+ calculator.display.value;
}
}
function lock (orientation) {
   
    screen.orientation.lock(orientation);
  }
function toDeg(){
    const rad = document.getElementById('rad');
    const deg= document.getElementById('deg');
    const radians = document.getElementById('radians');
    const degrees = document.getElementById('degrees');
    const radIcon = document.getElementById('radIcon');
    const degIcon = document.getElementById('degIcon');

    rad.classList.add('hide');
    deg.classList.remove('hide');
    radians.classList.remove('hide');
    degrees.classList.add('hide');

    radIcon.classList.remove('hide');
    degIcon.classList.add('hide');
   
}
function toRad(){
    const rad = document.getElementById('rad');
    const deg= document.getElementById('deg');
    const radians = document.getElementById('radians');
    const degrees = document.getElementById('degrees');
    const radIcon = document.getElementById('radIcon');
    const degIcon = document.getElementById('degIcon');

    rad.classList.remove('hide');
    deg.classList.add('hide');

    radians.classList.add('hide');
    degrees.classList.remove('hide');

    degIcon.classList.remove('hide');
    radIcon.classList.add('hide');
}