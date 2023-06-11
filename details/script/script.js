
window.addEventListener('DOMContentLoaded', ()=>{
    var pokemon = [
        {
            number: "#001",
            nombre: "Bulbasaur",
            url_image: "../img/items/400x400/Bulbasaur.png",
            color: "#74CB48",
            type: [{
                string:"Grass", color:"#74CB48"}, {string:"Poison", color: "#A43E9E"}
            ],
            weight: "6,9",
            height: "0,7",
            moves: "Chlorophyll Overgrow",
            about: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
            base_stats: {
                hp: "045",
                atk:"049",
                def: "049",
                satk: "065",
                sdef: "065",
                spd: "045"
            }
        },
        {
            number: "#004",
            nombre: "Charmander",
            url_image: "../img/items/400x400/Charmander.png",
            color: "#F57D31",
            type: [{
                string: "Fire",
                color: "#F57D31"
            }],
            weight: "8,5",
            height: "0,6",
            moves: "Mega-Punch Fire-Punch",
            about: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
            base_stats: {
                hp: "039",
                atk:"052",
                def: "043",
                satk: "060",
                sdef: "050",
                spd: "065"
            }
        },
        {
            number: "#007",
            nombre: "Squirtle",
            url_image: "../img/items/400x400/Squirtle.png",
            color: "#6493EB",
            type: [{
                string: "Water",
                color: "#6493EB"
            }],
            weight: "9,0",
            height: "0,5",
            moves: "Torrent Rain-Dish",
            about: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
            base_stats: {
                hp: "044",
                atk:"048",
                def: "065",
                satk: "050",
                sdef: "064",
                spd: "043"
            }
        },
        {
            number: "#012",
            nombre: "Butterfree",
            url_image: "../img/items/400x400/Butterfree.png",
            color: "#A7B723",
            type: [{
                string: "Bug",
                color: "#A7B723"
            }, {
                string: "Flying",
                color: "#A891EC"
            }],
            weight: "32,0",
            height: "1,1",
            moves: "Compound-Eyes Tinted-Lens",
            about: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
            base_stats: {
                hp: "060",
                atk:"045",
                def: "050",
                satk: "090",
                sdef: "080",
                spd: "070"
            }
        },
        {
            number: "#025",
            nombre: "Pikachu",
            url_image: "../img/items/400x400/Pikachu.png",
            color: "#F9CF30",
            type: [{
                string: "Electric",
                color: "#F9CF30"
            }],
            weight: "6,0",
            height: "0,4",
            moves: "Mega-Punch Pay-Day",
            about: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
            base_stats: {
                hp: "035",
                atk:"055",
                def: "040",
                satk: "050",
                sdef: "050",
                spd: "090"
            }
        },
        {
            number: "#092",
            nombre: "Gastly",
            url_image: "../img/items/400x400/Gastly.png",
            color: "#70559B",
            type: [{
                string: "Ghost",
                color: "#70559B"
            }, {
                string: "Poison",
                color: "#A43E9E"
            }],
            weight: "0,1",
            height: "1,3",
            moves: "Levitate",
            about: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
            base_stats: {
                hp: "030",
                atk:"035",
                def: "030",
                satk: "100",
                sdef: "035",
                spd: "080"
            }
        },
        {
            number: "#132",
            nombre: "Ditto",
            url_image: "../img/items/400x400/Ditto.png",
            color: "#AAA67F",
            type: [{
                string: "Normal",
                color: "#AAA67F"
            }],
            weight: "4,0",
            height: "0,3",
            moves: "Limber Imposter",
            about: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
            base_stats: {
                hp: "048",
                atk:"048",
                def: "048",
                satk: "048",
                sdef: "048",
                spd: "048"
            }
        },
        {
            number: "#152",
            nombre: "Mew",
            url_image: "../img/items/400x400/Mew.png",
            color: "#FB5584",
            type: [{
                string: "Psychic",
                color: "#FB5584"
            }],
            weight: "4,0",
            height: "0,4",
            moves: "Synchronize",
            about: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
            base_stats: {
                hp: "100",
                atk:"100",
                def: "100",
                satk: "100",
                sdef: "100",
                spd: "100"
            }
        },
        {
            number: "#304",
            nombre: "Aron",
            url_image: "../img/items/400x400/Aron.png",
            color: "#B7B9D0",
            type: [{
                string: "Steel",
                color: "#B7B9D0"
            }, {
                string: "Rock",
                color: "#B69E31"
            }],
            weight: "60,0",
            height: "0,4",
            moves: "Sturdy Rock-Head",
            about: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
            base_stats: {
                hp: "050",
                atk:"070",
                def: "100",
                satk: "040",
                sdef: "040",
                spd: "030"
            }
        }
    ];

    var res = JSON.parse(localStorage.getItem("pos"));
    console.log(res);

    if(res==0){
        document.getElementById("backward").style.visibility = "hidden";
    }else if(res==8){
        document.getElementById("forward").style.visibility = "hidden";
    }

    //Backward
    document.getElementById("backward").addEventListener("click", (e)=>{
        res--;
        if (res==0) {
            e.target.style.visibility = "hidden";
        }if(res<0){
            return;
        }
        document.getElementById("forward").style.visibility = "visible";
        console.log(res);
        //Fondo
        document.querySelector('body').style.backgroundColor = pokemon[res].color;
        //Title
        document.querySelector('div.title>span.title-text').textContent = pokemon[res].nombre;
        //Number
        document.querySelector('div.title>span.number').textContent = pokemon[res].number;
        //Image
        document.getElementById('pokemon').setAttribute('src', pokemon[res].url_image);

        //Type
        document.querySelector('div#main>span').textContent = pokemon[res].type[0].string;
        document.querySelector('div#main').style.backgroundColor = pokemon[res].type[0].color;
        document.querySelector('div#main').style.width = "54px";

        if (pokemon[res].type.length>1) {
            document.querySelector('div#secundary>span').textContent = pokemon[res].type[1].string;
            document.querySelector('div#secundary').style.backgroundColor = pokemon[res].type[1].color;
            document.querySelector('div#secundary').style.width = "50px";
        }

        //Attributes
        document.querySelector('div#values_w>span').textContent = pokemon[res].weight + " kg";
        document.querySelector('div#values_h>span').textContent = pokemon[res].height + " m";
        document.querySelector('div#values_m>span').textContent = pokemon[res].moves;

        //About
        document.getElementById('about-desc').textContent = pokemon[res].about;

        //Base Stats
        document.getElementById("l_hp").textContent = pokemon[res].base_stats.hp;
        document.getElementById("c_hp").style.width = pokemon[res].base_stats.hp+"px";
        document.getElementById("l_atk").textContent = pokemon[res].base_stats.atk;
        document.getElementById("c_atk").style.width = pokemon[res].base_stats.atk+"px";
        document.getElementById("l_def").textContent = pokemon[res].base_stats.def;
        document.getElementById("c_def").style.width = pokemon[res].base_stats.def+"px";
        document.getElementById("l_satk").textContent = pokemon[res].base_stats.satk;
        document.getElementById("c_satk").style.width = pokemon[res].base_stats.satk+"px";
        document.getElementById("l_sdef").textContent = pokemon[res].base_stats.sdef;
        document.getElementById("c_sdef").style.width = pokemon[res].base_stats.sdef+"px";
        document.getElementById("l_spd").textContent = pokemon[res].base_stats.spd;
        document.getElementById("c_spd").style.width = pokemon[res].base_stats.spd+"px";
    });

    //Forward
    document.getElementById("forward").addEventListener("click", (e)=>{
        res++;
        if (res==8) {
            e.target.style.visibility = "hidden";
        } else if(res>8){
            return;
        }
        document.getElementById("backward").style.visibility = "visible";
        console.log(res);
        //Fondo
        document.querySelector('body').style.backgroundColor = pokemon[res].color;
        //Title
        document.querySelector('div.title>span.title-text').textContent = pokemon[res].nombre;
        //Number
        document.querySelector('div.title>span.number').textContent = pokemon[res].number;
        //Image
        document.getElementById('pokemon').setAttribute('src', pokemon[res].url_image);

        //Type
        document.querySelector('div#main>span').textContent = pokemon[res].type[0].string;
        document.querySelector('div#main').style.backgroundColor = pokemon[res].type[0].color;
        document.querySelector('div#main').style.width = "54px";

        if (pokemon[res].type.length>1) {
            document.querySelector('div#secundary>span').textContent = pokemon[res].type[1].string;
            document.querySelector('div#secundary').style.backgroundColor = pokemon[res].type[1].color;
            document.querySelector('div#secundary').style.width = "50px";
        }

        //Attributes
        document.querySelector('div#values_w>span').textContent = pokemon[res].weight + " kg";
        document.querySelector('div#values_h>span').textContent = pokemon[res].height + " m";
        document.querySelector('div#values_m>span').textContent = pokemon[res].moves;

        //About
        document.getElementById('about-desc').textContent = pokemon[res].about;

        //Base Stats
        document.getElementById("l_hp").textContent = pokemon[res].base_stats.hp;
        document.getElementById("c_hp").style.width = pokemon[res].base_stats.hp+"px";
        document.getElementById("l_atk").textContent = pokemon[res].base_stats.atk;
        document.getElementById("c_atk").style.width = pokemon[res].base_stats.atk+"px";
        document.getElementById("l_def").textContent = pokemon[res].base_stats.def;
        document.getElementById("c_def").style.width = pokemon[res].base_stats.def+"px";
        document.getElementById("l_satk").textContent = pokemon[res].base_stats.satk;
        document.getElementById("c_satk").style.width = pokemon[res].base_stats.satk+"px";
        document.getElementById("l_sdef").textContent = pokemon[res].base_stats.sdef;
        document.getElementById("c_sdef").style.width = pokemon[res].base_stats.sdef+"px";
        document.getElementById("l_spd").textContent = pokemon[res].base_stats.spd;
        document.getElementById("c_spd").style.width = pokemon[res].base_stats.spd+"px";
    });

    //Fondo
    document.querySelector('body').style.backgroundColor = pokemon[res].color;
    //Title
    document.querySelector('div.title>span.title-text').textContent = pokemon[res].nombre;
    //Number
    document.querySelector('div.title>span.number').textContent = pokemon[res].number;
    //Image
    document.getElementById('pokemon').setAttribute('src', pokemon[res].url_image);

    //Type
    var nodo1 = document.createElement('div');
    nodo1.setAttribute('class','type-chip');
    nodo1.setAttribute('id','main');
    document.getElementById('type').appendChild(nodo1);
    var span1 = document.createElement('span');
    document.getElementById('main').appendChild(span1);
    document.querySelector('div#main>span').textContent = pokemon[res].type[0].string;
    document.querySelector('div#main').style.backgroundColor = pokemon[res].type[0].color;
    document.querySelector('div#main').style.width = "54px";

    if (pokemon[res].type.length>1) {
        var nodo2 = document.createElement('div');
        nodo2.setAttribute('class','type-chip');
        nodo2.setAttribute('id','secundary');
        document.getElementById('type').appendChild(nodo2);
        var span2 = document.createElement('span');
        document.getElementById('secundary').appendChild(span2);
        document.querySelector('div#secundary>span').textContent = pokemon[res].type[1].string;
        document.querySelector('div#secundary').style.backgroundColor = pokemon[res].type[1].color;
        document.querySelector('div#secundary').style.width = "50px";
    }

    //Attributes
    document.querySelector('div#values_w>span').textContent = pokemon[res].weight + " kg";
    document.querySelector('div#values_h>span').textContent = pokemon[res].height + " m";
    document.querySelector('div#values_m>span').textContent = pokemon[res].moves;

    //About
    document.getElementById('about-desc').textContent = pokemon[res].about;

    //Base Stats
    document.getElementById("l_hp").textContent = pokemon[res].base_stats.hp;
    document.getElementById("c_hp").style.width = pokemon[res].base_stats.hp+"px";
    document.getElementById("l_atk").textContent = pokemon[res].base_stats.atk;
    document.getElementById("c_atk").style.width = pokemon[res].base_stats.atk+"px";
    document.getElementById("l_def").textContent = pokemon[res].base_stats.def;
    document.getElementById("c_def").style.width = pokemon[res].base_stats.def+"px";
    document.getElementById("l_satk").textContent = pokemon[res].base_stats.satk;
    document.getElementById("c_satk").style.width = pokemon[res].base_stats.satk+"px";
    document.getElementById("l_sdef").textContent = pokemon[res].base_stats.sdef;
    document.getElementById("c_sdef").style.width = pokemon[res].base_stats.sdef+"px";
    document.getElementById("l_spd").textContent = pokemon[res].base_stats.spd;
    document.getElementById("c_spd").style.width = pokemon[res].base_stats.spd+"px";

    


    //Back
    document.querySelector("div#title>button").addEventListener("click", ()=>{
        history.back();
    });


    localStorage.clear();

});