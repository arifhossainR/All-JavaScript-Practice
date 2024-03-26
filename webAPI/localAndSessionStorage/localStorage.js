function setLocalStorage(key, value){
    window.localStorage.setItem(key, value);
}

function getLocalStorage(key){
    alert(window.localStorage.getItem(key));
}

function removeLocalStorage(key){
    alert(window.localStorage.removeItem(key));
}

function clearLocalStorage(){
    alert(window.localStorage.clear());
}