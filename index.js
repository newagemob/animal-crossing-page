const getImages = (array) => {
  array.forEach((img, index) => {
    const image = document.createElement('img')
    const imageParent = document.getElementById('image-container')
    image.id = 'array-image'
    image.src = img
    imageParent.appendChild(image)
  })
}


const fishArray = [
  "https://static.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest?cb=20200401003128",
  "https://static.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129"
]
getImages(fishArray)


const bugArray = [
  "https://static.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest/scale-to-width-down/64?cb=20200401005428",
  "https://static.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest/scale-to-width-down/64?cb=20200401005429"
]
getImages(bugArray)
