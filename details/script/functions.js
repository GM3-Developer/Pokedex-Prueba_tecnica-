function backward(e){
    res--;
    if (res==0) {
        e.target.style.visibility = "hidden";
    }if(res<0){
        return;
    }
    document.getElementById("forward").style.visibility = "visible";
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
        if(document.getElementById("secundary")==null){
            var nodo2 = document.createElement('div');
            nodo2.setAttribute('class','type-chip');
            nodo2.setAttribute('id','secundary');
            document.getElementById('type').appendChild(nodo2);
            var span2 = document.createElement('span');
            document.getElementById('secundary').appendChild(span2);
        }
        document.querySelector('div#secundary>span').textContent = pokemon[res].type[1].string;
        document.querySelector('div#secundary').style.backgroundColor = pokemon[res].type[1].color;
        document.querySelector('div#secundary').style.width = "50px";
    }else if (pokemon[res].type.length==1){
        if(document.getElementById("secundary")!=null){
            document.getElementById("secundary").remove();
        }
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
}

function forward(e){
    res++;    
    if (res==8) {
        e.target.style.visibility = "hidden";
    } else if(res>8){
        return;
    }
    document.getElementById("backward").style.visibility = "visible";
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
        if(document.getElementById("secundary")==null){
            var nodo2 = document.createElement('div');
            nodo2.setAttribute('class','type-chip');
            nodo2.setAttribute('id','secundary');
            document.getElementById('type').appendChild(nodo2);
            var span2 = document.createElement('span');
            document.getElementById('secundary').appendChild(span2);
        }
        document.querySelector('div#secundary>span').textContent = pokemon[res].type[1].string;
        document.querySelector('div#secundary').style.backgroundColor = pokemon[res].type[1].color;
        document.querySelector('div#secundary').style.width = "50px";
    }else if (pokemon[res].type.length==1){
        if(document.getElementById("secundary")!=null){
            document.getElementById("secundary").remove();
        }
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
}

function initialShow(){
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
        if(document.getElementById("secundary")==null){
            var nodo2 = document.createElement('div');
            nodo2.setAttribute('class','type-chip');
            nodo2.setAttribute('id','secundary');
            document.getElementById('type').appendChild(nodo2);
            var span2 = document.createElement('span');
            document.getElementById('secundary').appendChild(span2);
        }
        document.querySelector('div#secundary>span').textContent = pokemon[res].type[1].string;
        document.querySelector('div#secundary').style.backgroundColor = pokemon[res].type[1].color;
        document.querySelector('div#secundary').style.width = "50px";
    }else if (pokemon[res].type.length==1){
        if(document.getElementById("secundary")!=null){
            document.getElementById("secundary").remove();
        }
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
    document.getElementById("c_hp").style.setProperty('--tamaño-final', pokemon[res].base_stats.hp+"px");
    document.getElementById("l_atk").textContent = pokemon[res].base_stats.atk;
    document.getElementById("c_atk").style.width = pokemon[res].base_stats.atk+"px";
    document.getElementById("c_atk").style.setProperty('--tamaño-final', pokemon[res].base_stats.atk+"px");
    document.getElementById("l_def").textContent = pokemon[res].base_stats.def;
    document.getElementById("c_def").style.width = pokemon[res].base_stats.def+"px";
    document.getElementById("c_def").style.setProperty('--tamaño-final', pokemon[res].base_stats.def+"px");
    document.getElementById("l_satk").textContent = pokemon[res].base_stats.satk;
    document.getElementById("c_satk").style.width = pokemon[res].base_stats.satk+"px";
    document.getElementById("c_satk").style.setProperty('--tamaño-final', pokemon[res].base_stats.satk+"px");
    document.getElementById("l_sdef").textContent = pokemon[res].base_stats.sdef;
    document.getElementById("c_sdef").style.width = pokemon[res].base_stats.sdef+"px";
    document.getElementById("c_sdef").style.setProperty('--tamaño-final', pokemon[res].base_stats.sdef+"px");
    document.getElementById("l_spd").textContent = pokemon[res].base_stats.spd;
    document.getElementById("c_spd").style.width = pokemon[res].base_stats.spd+"px";
    document.getElementById("c_spd").style.setProperty('--tamaño-final', pokemon[res].base_stats.spd+"px");
}