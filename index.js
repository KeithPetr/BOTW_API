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
const tabs = document.querySelectorAll(".category-tabs");

// --- Get and display the images ---

let getImg

function getImages(dataset) {
    // clear previous grid images
    images.innerHTML = ""
    // create new grid images
    for (let i = 0; i < dataset.length; i++) {
        getImg = document.createElement("img")
        getImg.className = "img-style"
        getImg.src = dataset[i].image
        getImg.id = dataset[i].description
        getImg.title = dataset[i].name
        getImg.addEventListener("click", function(event) {
            console.log(event)
            largeImage.src = event.target.src
            description.textContent = event.target.id
            thingName.textContent = event.target.title
        })
        console.log(getImg)
        images.appendChild(getImg)
    }
}

// --- Category Tab Class Selector ---

function toggleTab(event) {
    for (let i = 0; i < tabs.length; i++) {
        console.log(tabs[i])
          if (tabs[i].id == event.target.id) {
            tabs[i].classList.add('category-tabs-clicked');
            tabs[i].classList.remove('category-tabs');
          } else if (tabs[i].id != event.target.id 
                    && tabs[i].classList.contains("category-tabs-clicked")) {
                        tabs[i].classList.remove('category-tabs-clicked')
                        tabs[i].classList.add('category-tabs')
            }
    }
 }

// --- Display Small Creatures ---

function getSmallCreatureData(event) {
    toggleTab(event)
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.food)
        console.log(smallCreatures)
        getImages(data.data.food)
    }) 
}

smallCreatures.addEventListener("click", getSmallCreatureData)

// --- Display Large Creatures ---

function getLargeCreatureData(event) {
    toggleTab(event)
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.non_food)
        getImages(data.data.non_food)
    }) 
}

largeCreatures.addEventListener("click", getLargeCreatureData)

// --- Display Equipment ---

function getEquipmentData(event) {
    toggleTab(event)
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

equipment.addEventListener("click", getEquipmentData)

// --- Display Materials ---

function getMaterialsData(event) {
    toggleTab(event)
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

materials.addEventListener("click", getMaterialsData)

// --- Display Monsters ---

function getMonstersData(event) {
    toggleTab(event)
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    }) 
}

monsters.addEventListener("click", getMonstersData)

// --- Display Treasure ---

function getTreasureData(event) {
    toggleTab(event)
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        getImages(data.data)
    })
}

treasure.addEventListener("click", getTreasureData)

