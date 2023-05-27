function show(){
    document.getElementById("container").style.display = "block";
}
function hide(){
    document.getElementById("container").style.display = "none";
}


function on(){
    document.getElementById("body").style.background = "black";
    document.getElementById("on").style.display = "none";
    document.getElementById("off").style.display = "block";
    document.getElementById("moon").style.display = "block";
    document.getElementById("cloud1").style.display = "none";
    document.getElementById("cloud2").style.display = "none";
    document.getElementById("cloud3").style.display = "none";
    document.getElementById("cloud4").style.display = "none";
    document.getElementById("cloud5").style.display = "none";
    document.getElementById("cloud6").style.display = "none";
    document.getElementById("cloud7").style.display = "none";
    document.getElementById("cloud8").style.display = "none";
    document.getElementById("cloud9").style.display = "none";
    document.getElementById("sun").style.display = "none";
    document.getElementById("rock1").style.display = "block";
    document.getElementById("rock2").style.display = "block";
    document.getElementById("rock3").style.display = "block";
    document.getElementById("rock4").style.display = "block";



}
function off(){
    document.getElementById("body").style.background = "linear-gradient(to right,#84c7e9, #1481e7)";
    document.getElementById("off").style.display = "none";
    document.getElementById("on").style.display = "block";
    document.getElementById("cloud1").style.display = "block";
    document.getElementById("cloud2").style.display = "block";
    document.getElementById("cloud3").style.display = "block";
    document.getElementById("cloud4").style.display = "block";
    document.getElementById("cloud5").style.display = "block";
    document.getElementById("cloud6").style.display = "block";
    document.getElementById("cloud7").style.display = "block";
    document.getElementById("cloud8").style.display = "block";
    document.getElementById("cloud9").style.display = "block";
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
    document.getElementById("rock1").style.display = "none";
    document.getElementById("rock2").style.display = "none";
    document.getElementById("rock3").style.display = "none";
    document.getElementById("rock4").style.display = "none";
}