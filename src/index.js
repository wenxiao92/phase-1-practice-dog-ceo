console.log('%c HI', 'color: firebrick')


let array

document.addEventListener("DOMContentLoaded", function() {
grabImages()

let allBreeds = []
getDogBreeds()

function grabImages() {
    let imgContainer = document.querySelector('#dog-image-container')
    //console.log(imgContainer) //Test to see the element id in the console
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        array = data.message
        //console.log(array)
        for(let images of array) {
            let img = document.createElement("img")
            
            img.setAttribute("src", `${images}`)
            imgContainer.appendChild(img)
        }
    })
}

function getDogBreeds() {
    let dogbreeds = document.querySelector('#dog-breeds')
    //console.log(dogbreeds)
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(function(data){
        //console.log(data.message)
        let newArray = Object.keys(data.message)
        allBreeds = Object.keys(data.message)
        //console.log("dogbreeds", newArray)

        // for(let i=0; i < newArray.length; i++) {
            
        //     let li = document.createElement("li")
        //     li.innerText = newArray[i]
        //     dogbreeds.appendChild(li)
        //     //console.log(li)

        //     li.addEventListener('click', () => {
        //         li.style.color = "blue";
        //     })
        // }
        
    })
}
testing()

function testing() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(function(data){
        allBreeds = Object.keys(data.message)

        let filter = document.querySelector("#breed-dropdown")
        //console.log(filter) //used to see if we're grabbing the right tag where the drop down is in
        //You do not need to loop because it will loop through based on what you select from drop down
        
        filter.addEventListener('change', function(event) {
         //console.log(event.target.value) //To test if we're logging out the letter we chose

        let newArray = allBreeds.filter((firstLetter) => {
            return firstLetter[0] === event.target.value
        })
        //console.log(newArray) returns the list of dog names that begins with (drop down list)
            for(list of newArray) {
                let dogbreeds = document.querySelector('#dog-breeds')

                let li = document.createElement("li")
                li.innerText = list
                //li.innerText = event.target.value //test code
                dogbreeds.appendChild(li)
            }

    })
})
}





}) //end of DOMContent
