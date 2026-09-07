document.getElementById("symbol").checked = true
document.getElementById("min").value = 1
document.getElementById("max").value = 36


const elements = [
  {Name:"Hydrogen", Symbol:"H", Group:"1", Period:"1", Type:"Non Metal"},
  {Name:"Helium", Symbol:"He", Group:"18", Period:"1", Type:"Non Metal"},
  {Name:"Lithium", Symbol:"Li", Group:"1", Period:"2", Type:"Metal"},
  {Name:"Beryllium", Symbol:"Be", Group:"2", Period:"2", Type:"Metal"},
  {Name:"Boron", Symbol:"B", Group:"13", Period:"2", Type:"Metaloid"},
  {Name:"Carbon", Symbol:"C", Group:"14", Period:"2", Type:"Non Metal"},
  {Name:"Nitrogen", Symbol:"N", Group:"15", Period:"2", Type:"Non Metal"},
  {Name:"Oxygen", Symbol:"O", Group:"16", Period:"2", Type:"Non Metal"},
  {Name:"Fluorine", Symbol:"F", Group:"17", Period:"2", Type:"Non Metal"},
  {Name:"Neon", Symbol:"Ne", Group:"18", Period:"2", Type:"Non Metal"},
  {Name:"Sodium", Symbol:"Na", Group:"1", Period:"3", Type:"Metal"},
  {Name:"Magnesium", Symbol:"Mg", Group:"2", Period:"3", Type:"Metal"},
  {Name:"Aluminum", Symbol:"Al", Group:"13", Period:"3", Type:"Metal"},
  {Name:"Silicon", Symbol:"Si", Group:"14", Period:"3", Type:"Metaloid"},
  {Name:"Phosphorus", Symbol:"P", Group:"15", Period:"3", Type:"Non Metal"},
  {Name:"Sulfur", Symbol:"S", Group:"16", Period:"3", Type:"Non Metal"},
  {Name:"Chlorine", Symbol:"Cl", Group:"17", Period:"3", Type:"Non Metal"},
  {Name:"Argon", Symbol:"Ar", Group:"18", Period:"3", Type:"Non Metal"},
  {Name:"Potassium", Symbol:"K", Group:"1", Period:"4", Type:"Metal"},
  {Name:"Calcium", Symbol:"Ca", Group:"2", Period:"4", Type:"Metal"},
  {Name:"Scandium", Symbol:"Sc", Group:"3", Period:"4", Type:"Metal"},
  {Name:"Titanium", Symbol:"T", Group:"4", Period:"4", Type:"Metal"},
  {Name:"Vanadium", Symbol:"V", Group:"5", Period:"4", Type:"Metal"},
  {Name:"Chromium", Symbol:"Cr", Group:"6", Period:"4", Type:"Metal"},
  {Name:"Manganese", Symbol:"Mn", Group:"7", Period:"4", Type:"Metal"},
  {Name:"Iron", Symbol:"Fe", Group:"8", Period:"4", Type:"Metal"},
  {Name:"Cobalt", Symbol:"Co", Group:"9", Period:"4", Type:"Metal"},
  {Name:"Nickel", Symbol:"Ni", Group:"10", Period:"4", Type:"Metal"},
  {Name:"Copper", Symbol:"Cu", Group:"11", Period:"4", Type:"Metal"},
  {Name:"Zinc", Symbol:"Zn", Group:"12", Period:"4", Type:"Metal"},
  {Name:"Gallium", Symbol:"Ga", Group:"13", Period:"4", Type:"Metal"},
  {Name:"Germanium", Symbol:"Ge", Group:"14", Period:"4", Type:"Metaloid"},
  {Name:"Arsenic", Symbol:"As", Group:"15", Period:"4", Type:"Metaloid"},
  {Name:"Selenium", Symbol:"se", Group:"16", Period:"4", Type:"Non Metal"},
  {Name:"Bromine", Symbol:"Br", Group:"17", Period:"4", Type:"Non Metal"},
  {Name:"Krypton", Symbol:"Kr", Group:"18", Period:"4", Type:"Non Metal"}
]

document.getElementById("card").addEventListener("click", step)
document.getElementById("startcards").addEventListener("click", start)

let newArray = []
let index = -1
function step(){
  index +=1
  if (index > (newArray.length * 2) - 1) {
    index = -1
    newArray = []
    document.getElementById("card").innerHTML = "<h1>Press start to start</h1>"
    return undefined
  }
  element = Math.floor(index/2)
  document.getElementById("card").innerHTML = newArray[element][index % 2]
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function start() {
  let min = document.getElementById("min").value
  let max = document.getElementById("max").value
  let startProperty = document.getElementById("Start").value
  let returnProperties = [document.getElementById("number").checked,document.getElementById("name").checked,document.getElementById("symbol").checked,document.getElementById("position").checked,document.getElementById("type").checked]
  console.log(min, max)
  
  for (let i = min-1; i <= max-1; i++) {
    let temp = elements[i]
    let Front;
    switch(startProperty) {
      case "number":
        Front = `<h1>Atomic number: ${i}</h1>`
        break
      case "name":
        Front = `<h1>${elements[i]["Name"]}</h1>`
        break
      case "symbol":
        Front = `<h1>Atomic symbol: ${elements[i]["Symbol"]}</h1>`
        break
      case "position":
        Front = `<h1>Period: ${elements[i]["Period"]}, Group: ${elements[i]["Group"]}</h1>`
        break
      default:
        Front = "ok you broke something how did you do this"
        break
    }
    let Back = ""
    if (returnProperties[1]) {
      Back += `<p>{elements[i]["Name"]}</p>`
    }
    if (returnProperties[0]) {
      Back += `<p>Atomic number: ${i}</p>`
    }
    if (returnProperties[2]) {
      Back += `<p>Atomic symbol: ${elements[i]["Symbol"]}</p>`
    }
    if (returnProperties[3]) {
      Back += `<p>Period: ${elements[i]["Period"]}, Group: ${elements[i]["Group"]}</p>`
    }
    if (returnProperties[4]) {
      Back += `<p>${elements[i]["Type"]}</p>`
    }
    newArray[newArray.length] = [Front, Back]
  }
  if (document.getElementById("shuffle").checked){
    shuffle(newArray)
  }
  index = -1
  step()
}
