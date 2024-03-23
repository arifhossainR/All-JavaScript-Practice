function hello(){
    document.getElementById("demo").innerHTML = "Not working"
}

const nowButton = document.getElementById("buttonName");
nowButton.onclick = function(){
    nowButton.innerHTML = "Now button changes";
    console.log("Hello I am showing in console");
}

// mouse hover
function mouseHover(){
    document.getElementById("mouseover").innerHTML = "mouse over worked";
}
function mouseRemove(){
    document.getElementById("mouseover").innerHTML = "mouse over end";
}
// mouse hover end


// mouse press and relase
function mouseDown(){
    document.getElementById("mouseDownUp").innerHTML = "Now pressed";
}
function mouseUp(){
    document.getElementById("mouseDownUp").innerHTML = "Released";
}
// mouse press and release end

