let rope = {};
// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: "rope"        ---   weight: 10
name: "knife"       ---   weight: 8
name: "candlestick" ---   weight: 2
name: "dumbbell"    ---   weight: 30
name: "poison"      ---   weight: 2
name: "axe"         ---   weight: 15
name: "bat"         ---   weight: 13
name: "trophy"      ---   weight: 25
name: "pistol"      ---   weight: 20


// Rooms
let
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

class character {
  constructor(fn, ln, col, desc, ag, img, occ) {
    this.first_name = fn;
    this.last_name = ln;
    this.color = col;
    this.description = desc;
    this.age = ag;
    this.image = img;
    this.occupation = occ;
  }
}

class weapon {
  constructor(n, w) {
    this.name = n;
    this.weight = w;
  }
}
class place {
  constructor(nam) {
    this.name = nam;
  }
}

function personajeVacio() {
  return new character("", "", "", "", 0, "", "");
}

function pregencharacter(perso) {
  switch (perso) {
    case "mrGreen":
      return new character(
        "Jacob",
        "Green",
        "green",
        "He has a lot of connections",
        45,
        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        "Entrepreneur"
      );

      break;
    case "drOrchid":
      return new character(
        "Doctor",
        "Orchid",
        "white",
        "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        26,
        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        "Scientist"
      );
      break;
    case "mrsPeacock":
      return new character(
        "Eleanor",
        "Peacock",
        "blue",
        "She is from a wealthy family and uses her status and money to earn popularity",
        36,
        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        "Socialité"
      );
      break;
    case "missScarlet":
      return new character(
        "kasandra",
        "Scarlet",
        "red",
        "She is an A-list movie star with a dark past",
        31,
        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        "Actor"
      );
      break;
    case "mrMustard":
      return new character(
        "Jack",
        "Mustard",
        "yellow",
        "He is a former football player who tries to get by on his former glory",
        62,
        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        "Retired Football player"
      );
      break;
    case "profPlum":
      return new character(
        "Victor",
        "Plum",
        "purple",
        "Billionare video game designer",
        22,
        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        "Designer"
      );
      break;
    default:
    case "":
      return new character("", "", "", "", 0, "", "");
      break;
  }
}

function pw(wea) {
  switch (wea) {
    case "rope":
      return new weapon("rope", 10);

      break;
    case "knife":
      return new weapon("knife", 8);
      break;
    case "candlestick":
      return new weapon("candlestick", 2);
      break;
    case "dumbbell":
      return new weapon("dumbbell", 30);
      break;
    case "poison":
      return new weapon("poison", 2);
      break;
    case "axe":
      return new weapon("axe", 15);
      break;
    case "bat":
      return new weapon("bat", 13);
      break;
    case "trophy":
      return new weapon("trophy", 25);
      break;
    case "pistol":
      return new weapon("pistol", 20);
      break;
    default:
    case "":
      return new weapon("", 0);
      break;
  }
}

//let green=new character()

var charactersArray = [
  pregencharacter("mrGreen"),
  pregencharacter("drOrchid"),
  pregencharacter("profPlum"),
  pregencharacter("missScarlet"),
  pregencharacter("mrsPeacock"),
  pregencharacter("mrMustard")
];
var weaponsArray = [
  pw("rope"),
  pw("knife"),
  pw("candlestick"),
  pw("dumbbell"),
  pw("poison"),
  pw("axe"),
  pw("bat"),
  pw("trophy"),
  pw("pistol")
];
// Rooms' Collection
var roomsArray = [
  new place("Dinning Room"),
  new place("Conservatory"),
  new place("Kitchen"),
  new place("Study"),
  new place("Library"),
  new place("Billiard Room"),
  new place("Hall"),
  new place("Spa"),
  new place("Living Room"),
  new place("Observatory"),
  new place("Theater"),
  new place("Guest House"),
  new place("Patio")
];
/*];

// Weapons Collection
*/

function randomSelector(arr) {
  //console.log(Math.floor(Math.random()*10))
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickMistery() {
  return [
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  ];
}
function revealMistery(me) {
  let homicida = me[0];
  let arma = me[1];
  let lugar = me[2];
  return `${homicida.first_name} ${
    homicida.last_name
  } killed Mr.Boddy using the ${arma.name} in the ${lugar.name}!!!!`;
}

var misteryEnvelope = pickMistery();
console.log(randomSelector(weaponsArray).name.name);
console.log(pickMistery());
let char = personajeVacio();
