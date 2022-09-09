// access fishID from search bar
const fishName = new URLSearchParams(window.location.search).get('fishName');

const callFishAPI = (fish) => {
  const xhr = new XMLHttpRequest();
  // create a GET request to http://acnhapi.com/v1a/fish/{fishID}
  xhr.open('GET', `http://acnhapi.com/v1a/fish/${fish}`);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      // console.log(data);
      const fishData = document.createElement('div');
      fishData.id = 'fish-data';
      const fishName = document.createElement('h1');
      fishName.id = 'fish-name';
      fishName.innerText = data.name['name-EUen'];
      const fishImage = document.createElement('img');
      fishImage.id = 'fish-image';
      fishImage.src = data.image_uri;
      const fishDescription = document.createElement('p');
      fishDescription.id = 'fish-description';
      fishDescription.innerText = data["museum-phrase"];

      fishData.appendChild(fishName);
      fishData.appendChild(fishImage);
      fishData.appendChild(fishDescription)

      document.body.appendChild(fishData);
    }
  }

  xhr.send();
}

const callBugAPI = (bug) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://acnhapi.com/v1a/bugs/${bug}`);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const bugData = document.createElement('div');
      bugData.id = 'bug-data';
      const bugName = document.createElement('h1');
      bugName.id = 'bug-name';
      bugName.innerText = data.name['name-EUen'];
      const bugImage = document.createElement('img');
      bugImage.id = 'bug-image';
      bugImage.src = data.image_uri;
      const bugDescription = document.createElement('p');
      bugDescription.id = 'bug-description';
      bugDescription.innerText = data["museum-phrase"];

      bugData.appendChild(bugName);
      bugData.appendChild(bugImage);
      bugData.appendChild(bugDescription)

      document.body.appendChild(bugData);
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
  callFishAPI(fish);
})

const bugs = [
  'ant',
  'agrias_butterfly',
  'banded_dragonfly',
  'bell_cricket',
  'blue_weevil_beetle',
]
bugs.forEach((bug) => {
  callBugAPI(bug);
})
