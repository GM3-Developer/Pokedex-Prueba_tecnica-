window.addEventListener('DOMContentLoaded', ()=>{
    var id = document.querySelectorAll('.id');
    var name = document.querySelectorAll('.name');
    var imagen = document.querySelectorAll('.image');


    //001
    var pokemon = [
        {
            number: "#001",
            nombre: "Bulbasaur",
            url_image: "img/items/Bulbasaur.png"
        },
        {
            number: "#004",
            nombre: "Charmander",
            url_image: "img/items/Charmander.png"
        },
        {
            number: "#007",
            nombre: "Squirtle",
            url_image: "img/items/Squirtle.png"
        },
        {
            number: "#012",
            nombre: "Butterfree",
            url_image: "img/items/Butterfree.png"
        },
        {
            number: "#025",
            nombre: "Pikachu",
            url_image: "img/items/Pikachu.png"
        },
        {
            number: "#092",
            nombre: "Gastly",
            url_image: "img/items/Gastly.png"
        },
        {
            number: "#132",
            nombre: "Ditto",
            url_image: "img/items/Ditto.png"
        },
        {
            number: "#152",
            nombre: "Mew",
            url_image: "img/items/Mew.png"
        },
        {
            number: "#304",
            nombre: "Aron",
            url_image: "img/items/Aron.png"
        }
    ];
    
    console.log(pokemon[2].number);

    for (let i = 0; i < pokemon.length; i++) {
        var nodo = document.createElement("article");
        document.getElementById("list").appendChild(nodo);
        nodo.setAttribute("id", i+1);

        seccion1 = document.createElement("section");
        document.getElementById(i+1).appendChild(seccion1);
        seccion1.setAttribute("class", "id");
        seccion1.setAttribute("id", "section1");
        span1 = document.createElement("span");
        document.getElementById("section1").appendChild(span1);
        span1.textContent = pokemon[i].number;

        
        seccion3 = document.createElement("section");
        document.getElementById(i+1).appendChild(seccion3);
        seccion3.setAttribute("class", "image");
        seccion3.setAttribute("id", "section3");
        imagen = document.createElement("img");
        document.getElementById("section3").appendChild(imagen);
        imagen.setAttribute('src', pokemon[i].url_image);
        
        seccion2 = document.createElement("section");
        document.getElementById(i+1).appendChild(seccion2);
        seccion2.setAttribute("class", "name");
        seccion2.setAttribute("id", "section2");
        span2 = document.createElement("span");
        document.getElementById("section2").appendChild(span2);
        span2.textContent = pokemon[i].nombre;
    }
});