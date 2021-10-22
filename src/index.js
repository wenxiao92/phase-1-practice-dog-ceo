console.log('%c HI', 'color: firebrick')

let imgContainer = document.querySelector('#dog-image-container')
let array
document.addEventListener("DOMContentLoaded", grabImages)

function grabImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        array = data
        console.log(array)
        for(let images of array) {
            let img = document.createElement("img")
            img.setAttribute("src", `${images}`)
        }
    })
}

// function displayImg(theImage) {
//     let images = document.createElement("img")
//     images.setAttribute("src", `${theImage}`)
// }
