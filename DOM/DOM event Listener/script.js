function hello(txt){
    console.log(txt);
}
const button = document.getElementById("myButton");
button.addEventListener("mouseover", function(){
    hello("hello world");
});
button.addEventListener("mouseover", function(){
    this.innerHTML = "hover worked";
});
button.addEventListener("mouseout", function(){
    this.innerHTML = "hover end";
});