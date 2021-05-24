
var count = [0,0,0]
function add(index){
    if (index == 0){
        var niel = (count[0])+1;
        count[0] = niel;
        var countElement = document.querySelector("#count");
        countElement.innerHTML = niel + " like(s)";
    }
    else if (index == 1){
        var nichole = (count[1])+1;
        count[1] = nichole;
        var countElement = document.querySelector("#count1");
        countElement.innerHTML = nichole + " like(s)"
    }
    else if (index == 2){
        var niel = (count[2])+1;
        count[2] = niel;
        var countElement = document.querySelector("#count2");
        countElement.innerHTML = niel + " like(s)"
    } 
}
