console.log('%c HI', 'color: firebrick')


let array
document.addEventListener("DOMContentLoaded", grabImages)

function grabImages() {
    let imgContainer = document.querySelector('#dog-image-container')
    //console.log(imgContainer) //Test to see the element id in the console
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        array = data.message
        console.log(array)
        for(let images of array) {
            let img = document.createElement("img")
            
            img.setAttribute("src", `${images}`)
            imgContainer.appendChild(img)
        }
    })
}

document.addEventListener("DOMContentLoaded", getDogBreeds)

function getDogBreeds() {
    let dogbreeds = document.querySelector('#dog-breeds')
    //console.log(dogbreeds)
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(function(data){
        array = data.message
        console.log(array)
        for(i=0; i < array.length; i++) {
            
            let li = document.createElement("li")
            dogbreeds.appendChild(li)
            console.log(dogbreeds)
            li.innerText = array[i]
        }

    })
    
}