function setSessionStorage(key, value){
    window.sessionStorage.setItem(key, value);
}
function getSessionStorage(key){
    alert(window.sessionStorage.getItem(key));
}
function removeSessionStorage(key){
    window.sessionStorage.removeItem(key);
}
function clearSessionStorage(){
    window.sessionStorage.clear();
}