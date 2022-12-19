let cell = document.querySelectorAll('.project-cell')

for (let i = 0; i < cell.length; i++) {
  cell[i].href = 'https://beardwood-group-website.webflow.io/individual-projects?slideNum' + cell[i];
}
