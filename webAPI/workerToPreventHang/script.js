let workerVariable;
function startWorker(){

    // first check browser support
    if(typeof Worker == 'undefined'){
        alert("This browser is not support Worker API");
    }else{

        // check worker is undefined or not
        if(typeof workerVariable=='undefined'){
            workerVariable = new Worker('worker.js');
        }

        // after get postmessage from worker.js
        workerVariable.onmessage = function(event){
            document.getElementById('output').innerHTML = "Output is " + event.data;
        }
    }

}
function stopWorker(){
    if(typeof Worker == 'undefined'){
        alert("This browser is not support Worker API");
    }else{
        workerVariable.terminate();
        workerVariable = undefined;
    }
}