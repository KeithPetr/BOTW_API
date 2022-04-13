const creatures = document.getElementById("creatures")
const images = document.getElementById("image-container")

function getCreatureData() {
    fetch("https://botw-compendium.herokuapp.com/api/v2")
    .then(response => response.json())
    .then(data => {
        console.log(data.data.creatures)
        for (let i = 0; i < data.data.creatures.food.length; i++) {
            const img = document.createElement("img")
            img.src = data.data.creatures.food[i].image
            images.appendChild(img)
        }
    })
}

creatures.addEventListener("click", getCreatureData)


