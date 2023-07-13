function convert(){
    var x =  document.getElementById("main").value;
    var y =  document.getElementById("main").value;
    var z =  document.getElementById("main").value;

     var celsius= x*9/5 +32;
     var fahrenheit = (y-32)*5/9;
     var kalvin = celsius+273.15;
     document.getElementById("main1").value =celsius + " "+"*C";
     document.getElementById("main2").value =fahrenheit + " "+"*F";
     document.getElementById("main3").value =kalvin + " "+"K";
}
function reset(){
    document.getElementById("main").value="";
    document.getElementById("main1").value="";
    document.getElementById("main2").value="";
    document.getElementById("main3").value="";
}