// function getData() {
//     fetch(`https://botw-compendium.herokuapp.com/api/v2`)
//     .then(response => response.json())
//     .then(data => console.log(data))}

// getData()

const creatures = document.getElementById("creatures")
const images = document.getElementById("image-container")
const largeImage = document.getElementById("large-image")
const description = document.getElementById("description")
const thingName = document.getElementById("thing-name")

// --- Call and Display Small Creatures ---

let smallCreatureImg

function getSmallCreatureData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.food)
        images.innerHTML = ""
        for (let i = 0; i < data.data.food.length; i++) {
            smallCreatureImg = document.createElement("img")
            smallCreatureImg.src = data.data.food[i].image
            smallCreatureImg.id = data.data.food[i].description
            smallCreatureImg.title = data.data.food[i].name
            smallCreatureImg.addEventListener("click", function(event) {
                console.log("clicked")
                console.log(event)
                largeImage.src = event.target.src
                description.textContent = event.target.id
                thingName.textContent = event.target.title
            })
            images.appendChild(smallCreatureImg)
            console.log(smallCreatureImg)
        }
    }) 
}

creatures.addEventListener("click", getSmallCreatureData)

// --- Call and Display Equipment ---

let equipmentImg

function getEquipmentData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        images.innerHTML = ""
        for (let i = 0; i < data.data.length; i++) {
            equipmentImg = document.createElement("img")
            equipmentImg.src = data.data[i].image
            equipmentImg.id = data.data[i].description
            equipmentImg.title = data.data[i].name
            equipmentImg.addEventListener("click", function(event) {
                console.log("clicked")
                console.log(event)
                largeImage.src = event.target.src
                description.textContent = event.target.id
                thingName.textContent = event.target.title
            })
            images.appendChild(equipmentImg)
            console.log(equipmentImg)
        }
    }) 
}

equipment.addEventListener("click", getEquipmentData)