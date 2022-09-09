// access fishID from search bar
const fishName = new URLSearchParams(window.location.search).get('fishName');

const callAnimalCrossingAPI = (animalType, animalName) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://acnhapi.com/v1a/${animalType}/${animalName}`);

  xhr.onload = async function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      const animalData = document.createElement('div');
      animalData.id = 'animal-data';
      const animalName = document.createElement('h1');
      animalName.id = 'animal-name';
      animalName.innerText = data.name['name-EUen'];
      const animalImage = document.createElement('img');
      animalImage.id = 'animal-image';
      animalImage.src = data.image_uri;
      const animalDescription = document.createElement('p');
      animalDescription.id = 'animal-description';
      animalDescription.innerText = data["museum-phrase"];
      const animalRarity = document.createElement('p');
      animalRarity.id = 'animal-rarity';
      animalRarity.innerText = data.availability.rarity;

      animalData.appendChild(animalName);
      animalData.appendChild(animalImage);
      animalData.appendChild(animalDescription)
      if (await data.availability.rarity) {
        animalData.appendChild(animalRarity);
      }

      document.getElementById('animal-data-container').appendChild(animalData);
    }
  }

  xhr.send();
}

const fish = [
  'dab',
  'bitterling',
  'pale_chub',
  'salmon',
  'crucian_carp',
  'king_salmon'
]
fish.forEach((fish) => {
  callAnimalCrossingAPI('fish', fish);
})

const bugs = [
  'ant',
  'agrias_butterfly',
  'banded_dragonfly',
  'bell_cricket',
  'blue_weevil_beetle',
]
bugs.forEach((bug) => {
  callAnimalCrossingAPI('bugs', bug);
})

const seaCreatures = [
  'sea_anemone',
  'sea_star',
  'sea_urchin',
  'sea_slug',
]
seaCreatures.forEach((seaCreature) => {
  callAnimalCrossingAPI('sea', seaCreature);
})
