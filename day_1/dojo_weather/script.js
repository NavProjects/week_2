
function far(degC){
    return Math.round((degC * 9/5 +32)*10)/10
} 
function celc(degF) {
    return Math.round(((degF - 32) * 5/9)*10)/10
}

function degChange(type) {
    for (var element of document.querySelectorAll(".hot,.cold")){
        if(type == "F"){
        element.innerHTML = far(parseFloat(element.innerHTML));
    }
    else if (type == "C") {
        element.innerHTML = celc(parseFloat(element.innerHTML))
    }
    }
}