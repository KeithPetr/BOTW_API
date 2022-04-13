const creatures = document.getElementById("creatures")
const images = document.getElementById("image-container")
const largeImage = document.getElementById("large-image")
const description = document.getElementById("description")
const thingName = document.getElementById("thing-name")

let img

function getSmallCreatureData() {
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.food)
        for (let i = 0; i < data.data.food.length; i++) {
            img = document.createElement("img")
            img.src = data.data.food[i].image
            img.id = data.data.food[i].description
            img.title = data.data.food[i].name
            img.addEventListener("click", function(event) {
                console.log("clicked")
                console.log(event)
                largeImage.src = event.target.src
                description.textContent = event.target.id
                thingName.textContent = event.target.title
            })
            images.appendChild(img)
            console.log(img)
        }
    }) 
}



creatures.addEventListener("click", getSmallCreatureData)

