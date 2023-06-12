window.addEventListener('DOMContentLoaded', ()=>{

    for (let i = 0; i < pokemon.length; i++) {
        //Crea un nodo <article id="n"> dentro de <main class="list" id="list">
        var nodo = document.createElement("article");
        document.getElementById("list").appendChild(nodo);
        nodo.setAttribute("id", i+1);
    }

    for (let i = 0; i < pokemon.length; i++) {
        //Crea un nodo <section class="id id="section-n"> dentro del <article id="n">
        seccion = document.createElement("section");
        document.getElementById(i+1).appendChild(seccion);
        seccion.setAttribute("class", "id");
        seccion.setAttribute("id", "id"+(i+1));
        //Crea un nodo <span>
        span1 = document.createElement("span");
        document.getElementById("id"+(i+1)).appendChild(span1);
        span1.textContent = pokemon[i].number;

        
        seccion2 = document.createElement("section");
        document.getElementById(i+1).appendChild(seccion2);
        seccion2.setAttribute("class", "image");
        seccion2.setAttribute("id", "image"+(i+1));
        imagen = document.createElement("img");
        document.getElementById("image"+(i+1)).appendChild(imagen);
        imagen.setAttribute('src', pokemon[i].url_image);
        
        seccion3 = document.createElement("section");
        document.getElementById(i+1).appendChild(seccion3);
        seccion3.setAttribute("class", "name");
        seccion3.setAttribute("id", "name"+(i+1));
        span2 = document.createElement("span");
        document.getElementById("name"+(i+1)).appendChild(span2);
        span2.textContent = pokemon[i].nombre;
    }
    
    localStorage.clear();
    for (let i = 0; i < pokemon.length; i++) {
        document.getElementById(i+1).addEventListener("click", ()=>{
            localStorage.setItem("pos", JSON.stringify(i));
            location.href = "/details/index.html";
        });
    }

    document.getElementById("search").addEventListener("keyup", searchKeyUp);

    document.getElementById("search").addEventListener("change", searchChange);
    
    document.getElementById("cancel").addEventListener("click", cancel);

    document.getElementById("sort").addEventListener("click", sort);

    document.getElementById("radio_number").addEventListener("click", radio_number);
    document.getElementById("radio_name").addEventListener("click", radio_name);

});