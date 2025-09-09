let changeColor = document.querySelector("#changeColor");

changeColor.addEventListener("click", changeColour);

function changeColour(){
    document.querySelector('h1').innerHTML = "Goodbye World";
}