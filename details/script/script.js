window.addEventListener('DOMContentLoaded', ()=>{

    

    if(res==0){
        document.getElementById("backward").style.visibility = "hidden";
    }else if(res==8){
        document.getElementById("forward").style.visibility = "hidden";
    }

    //Back
    document.querySelector("div#title>button").addEventListener("click", ()=>{
        history.back();
    });

    //Backward
    document.getElementById("backward").addEventListener("click", backward);

    //Forward
    document.getElementById("forward").addEventListener("click", forward);

    //Initial Show
    initialShow();
});