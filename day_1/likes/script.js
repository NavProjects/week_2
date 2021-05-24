var count = 0
var countElement = document.querySelector("#count")

function add1(){
    count+=1;
    countElement.innerHTML = count + "like(s)"
}