// function getData() {
//     fetch(`https://botw-compendium.herokuapp.com/api/v2`)
//     .then(response => response.json())
//     .then(data => console.log(data))}

// getData()

const smallCreatures = document.getElementById("small-creatures")
const largeCreatures = document.getElementById("large-creatures")
const images = document.getElementById("image-container")
const largeImage = document.getElementById("large-image")
const description = document.getElementById("description")
const thingName = document.getElementById("thing-name")
const equipment = document.getElementById("equipment")
const materials = document.getElementById("materials")
const monsters = document.getElementById("monsters")
const treasure = document.getElementById("treasure")

// --- Get and display the images ---

let getImg

function getImages(dataset) {
    // clear previous grid images
    images.innerHTML = ""
    // create new grid images
    for (let i = 0; i < dataset.length; i++) {
        getImg = document.createElement("img")
        getImg.src = dataset[i].image
        getImg.id = dataset[i].description
        getImg.title = dataset[i].name
        getImg.addEventListener("click", function(event) {
            console.log(event)
            largeImage.src = event.target.src
            description.textContent = event.target.id
            thingName.textContent = event.target.title
        })
        images.appendChild(getImg)
    }
}

// --- Display Small Creatures ---

function getSmallCreatureData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.food)
        getImages(data.data.food)
    }) 
}

smallCreatures.addEventListener("click", getSmallCreatureData)

// --- Display Large Creatures ---

function getLargeCreatureData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.non_food)
        getImages(data.data.non_food)
    }) 
}

largeCreatures.addEventListener("click", getLargeCreatureData)

// --- Display Equipment ---

function getEquipmentData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

equipment.addEventListener("click", getEquipmentData)

// --- Display Materials ---

function getMaterialsData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

materials.addEventListener("click", getMaterialsData)

// --- Display Monsters ---

function getMonstersData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

monsters.addEventListener("click", getMonstersData)

// --- Display Treasure ---

function getTreasureData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

treasure.addEventListener("click", getTreasureData)