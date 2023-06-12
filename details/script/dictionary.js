var res = JSON.parse(localStorage.getItem("pos"));
var pokemon = [
    {
        number: "#001",
        nombre: "Bulbasaur",
        url_image: "/../../img/items/400x400/Bulbasaur.png",
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
        url_image: "/../../img/items/400x400/Charmander.png",
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
        url_image: "/../../img/items/400x400/Squirtle.png",
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
        url_image: "/../../img/items/400x400/Butterfree.png",
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
        url_image: "/../../img/items/400x400/Pikachu.png",
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
        url_image: "/../../img/items/400x400/Gastly.png",
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
        url_image: "/../../img/items/400x400/Ditto.png",
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
        url_image: "/../../img/items/400x400/Mew.png",
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
        url_image: "/../../img/items/400x400/Aron.png",
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