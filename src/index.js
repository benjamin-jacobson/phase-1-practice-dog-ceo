console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    // Loading image url, unpacking, putting on DOM
    loadImages(); // also add images to DOM

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    var breedData =fetch(breedUrl)
    .then(res => res.json())
    .then(data =>  Object.keys(data.message))
    .then(x =>addListenerToSelectorAndUpdateDom(x))
}
)

function addListenerToSelectorAndUpdateDom(c) {
    console.log(c)
    let x = document.querySelector('select')
    x.addEventListener("change", function(e) {
        console.log("I was clicked")
        console.log(e.target.value) // returns a,b,c
        getUserSelectionThenAppendDogBreedToUl(e.target.value,c)
    })
}

function loadImages () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(res => res.json())
    .then(res => addImage(res.message))
    //.then(data => console.log("after fetch"))
}

function addImage (obj){
    for (let imgUrl of obj){
        let cont = document.querySelector('#dog-image-container')
        newImageElement = document.createElement('img')
        newImageElement.src = imgUrl
        cont.append(newImageElement)
    }
}

function loadDogBreedData(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(res => res.json())
    .then(breedData => {
        breedData = Object.keys(breedData.message)
    })
}

function getUserSelectionThenAppendDogBreedToUl(chooseFromSelectABC, data = c) {
    let ulq = document.querySelector("#dog-breeds") // clears out the selection from previous choice
    ulq.innerHTML = "";

    for (dog of data) {
        if (Array.from(dog)[0].toLowerCase() === chooseFromSelectABC){
            console.log(dog)
            appendToUl(dog)
        }
    }
}

function appendToUl(x) {
    let ul = document.querySelector("#dog-breeds")
    let newParagraph = document.createElement('p')
    newParagraph.innerText = x
    ul.appendChild(newParagraph)
    console.log(ul)
}