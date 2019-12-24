console.log('%c HI', 'color: firebrick')

// Challenge 1

function fetchImages() {
  return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json));
};


function renderImages(json) {
  const container = document.getElementById('dog-image-container')
  json["message"].forEach(image => {
    const div = document.createElement('div')
    div.innerHTML = `<img src="${image}">`
    container.appendChild(div)
  });
};

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
  clickNChange();
  filterDogs();
})

// Challenge 2

function fetchBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
};


function renderBreeds(json) {
  const container = document.getElementById('dog-image-container');
  const ul = document.createElement('ul');
  Object.keys(json["message"]).forEach(breed => {
    const li = document.createElement('li')
    li.innerHTML = breed
    ul.appendChild(li)
  });
  container.appendChild(ul)
};

// Challenge 3

// Placed on line 24
function clickNChange() {
  document.getElementById("dog-image-container").addEventListener('click', function(e) {
    const li = event.toElement.tagName;
    if (li === "LI") {
      changeColor(e);
    }
  });
}


function changeColor(e) {
  if (e.target.style.color === "") {
    e.target.style.color = "green"
  } else {
    e.target.style.color = ""
  }
};

// Challenge 4

function filterDogs() {
  const selector = document.getElementById("breed-dropdown")
  selector.addEventListener('change', function(e) {
    const listItems = document.querySelectorAll('li')
    const letter = e.target.value
    for (const element of listItems) {
      if (element.innerText.charAt(0) !== letter) {
        element.hidden = true
      } else {
        element.hidden = false
      };
    };
  });
}
