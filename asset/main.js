// Access JSON File
let data = 'Names_Of_Allah.json';

// Select DOM Elements
const nameOfAllah = document.querySelector('.name');
const nameOfAllahInfo = document.querySelector('.name-explain');
const sidebar = document.querySelector('.side-bar');

// Fetch Data from JSON File
async function getData(data) {
  const res = await fetch(data);
  let names = await res.json();

  // Create element for each name of ALLAH
  names.forEach((name) => {
    const button = document.createElement('button');

    button.innerText = name.name;
    button.classList.add('name');

    button.addEventListener('click', (e) => {
      allBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      nameOfAllah.innerText = name.name;
      nameOfAllahInfo.innerText = name.text;
    });

    sidebar.appendChild(button);
  });

  // Select All Buttons
  const allBtns = document.querySelectorAll('button');
  // Add Active Class to The First Button
  allBtns[0].classList.add('active');
}

getData(data);
