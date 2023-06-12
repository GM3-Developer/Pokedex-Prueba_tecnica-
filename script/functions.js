
function searchKeyUp(e){
    var buscar = e.target.value;
    var cate = "";
    
    for (let i = 0; i < pokemon.length; i++) {
        if(number_selected){
            cate = pokemon[i].number;
        }else if(name_selected){
            cate = pokemon[i].nombre;
        }
        if(!(cate.includes(buscar))){
            document.getElementById(i+1).style.display = "none";
        }else{
            document.getElementById(i+1).style.display = "flex";
        }
    }
    if(buscar != ""){
        document.getElementById("cancel").style.display = "block";
    }else{
        document.getElementById("cancel").style.display = "none";
    }
}
function searchChange(e){
    var buscar = e.target.value;
    if(buscar != ""){
        document.getElementById("cancel").style.display = "block";
    }else{
        document.getElementById("cancel").style.display = "none";
    }
}
function cancel(e){
    document.getElementById("search").value = "";
    e.target.style.display = "none";
    for (let i = 0; i < pokemon.length; i++) {
        document.getElementById(i+1).style.display = "flex";
    }
}
function sort(){
    document.getElementById("modal").style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";

    if(document.getElementById("radio_number").checked){
        document.getElementById("radio_name").checked = false;
    }else if(document.getElementById("radio_name").checked){
        document.getElementById("radio_number").checked = false;
    }
}
function radio_number(){
    document.getElementById("radio_name").checked = false;
    number_selected = true;
    name_selected = false;
    
    document.getElementById("modal").style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";

    document.getElementById("sort").style.background = "no-repeat url('img/icons/sort_number.png')";
    document.getElementById("sort").style.backgroundColor = "#FFFFFF";
    document.getElementById("sort").style.backgroundSize = "16px";
    document.getElementById("sort").style.backgroundPosition = "center";
}
function radio_name(){
    document.getElementById("radio_number").checked = false;
    number_selected = false;
    name_selected = true;

    document.getElementById("modal").style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";

    document.getElementById("sort").style.background = "no-repeat url('img/icons/sort_name.png')";
    document.getElementById("sort").style.backgroundColor = "#FFFFFF";
    document.getElementById("sort").style.backgroundSize = "16px";
    document.getElementById("sort").style.backgroundPosition = "center";
}