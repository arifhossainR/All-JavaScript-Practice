function animatation(){
    const yellowdiv = document.getElementById("redDiv");
    let pos = 0;
    let interval = setInterval(frame, 5);
    function frame(){
        if(pos < 520){
            pos++;
            yellowdiv.style.top = pos + 'px';
            yellowdiv.style.left = pos + 'px';
        }else{
            clearInterval(interval);
        }
    }
}