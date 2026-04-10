fetch('projects.json')
  .then(response => response.json())
  .then(projets => {
    const grid = document.getElementById('projets-grid');

    projets.forEach(projet => {
      const tags = projet.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

      const card = document.createElement('div');
      card.className = 'projet-card';
      card.innerHTML = `
        <img src="${projet.image}" alt="${projet.titre}" class="projet-img">
        <div class="projet-card-body">
          <div class="projet-tags">${tags}</div>
          <h3>${projet.titre}</h3>
          <p>${projet.description}</p>
          <a href="${projet.lien}" target="_blank">Voir le projet →</a>
        </div>
      `;

      grid.appendChild(card);
    });
  });

  const textes = [
  "Développeur web en formation",
  "Étudiant en Bachelor 3",
  "En recherche d'alternance"
];



let indexTexte = 0;
let indexLettre = 0;
let enEffacement = false;

const element = document.querySelector("#hero p");

function ecrire() {
  const texteActuel = textes[indexTexte];

  if (!enEffacement) {
    element.textContent = texteActuel.slice(0, indexLettre + 1);
    indexLettre++;

    if (indexLettre === texteActuel.length) {
      enEffacement = true;
      setTimeout(ecrire, 1500);
      return;
    }
  } else {
    element.textContent = texteActuel.slice(0, indexLettre - 1);
    indexLettre--;

    if (indexLettre === 0) {
      enEffacement = false;
      indexTexte = (indexTexte + 1) % textes.length;
    }
  }

  setTimeout(ecrire, enEffacement ? 50 : 80);
}

ecrire();


const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  toggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
});