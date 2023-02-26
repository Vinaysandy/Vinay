function clear(){
    document.getElementById("res").value="";
}
function dis(value){
    document.getElementById("res").value +=value;
}
function cal (){
    var a = document.getElementById("res").value;
    var b = eval(a);
    document.getElementById("res").value=b;
}

