window.addEventListener('DOMContentLoaded', ()=>{
    var id = document.querySelectorAll('.id');
    var name = document.querySelectorAll('.name');
    var imagen = document.querySelectorAll('.image');


    //001
    var pokemon = [
        {
            number: "#001",
            nombre: "Bulbasaur",
            url_image: "img/items/144x144/Bulbasaur.png"
        },
        {
            number: "#004",
            nombre: "Charmander",
            url_image: "img/items/144x144/Charmander.png"
        },
        {
            number: "#007",
            nombre: "Squirtle",
            url_image: "img/items/144x144/Squirtle.png"
        },
        {
            number: "#012",
            nombre: "Butterfree",
            url_image: "img/items/144x144/Butterfree.png"
        },
        {
            number: "#025",
            nombre: "Pikachu",
            url_image: "img/items/144x144/Pikachu.png"
        },
        {
            number: "#092",
            nombre: "Gastly",
            url_image: "img/items/144x144/Gastly.png"
        },
        {
            number: "#132",
            nombre: "Ditto",
            url_image: "img/items/144x144/Ditto.png"
        },
        {
            number: "#152",
            nombre: "Mew",
            url_image: "img/items/144x144/Mew.png"
        },
        {
            number: "#304",
            nombre: "Aron",
            url_image: "img/items/144x144/Aron.png"
        }
    ];
    
    console.log(pokemon[2].number);

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
            location.href = "details/index.html";
        });
    }
});