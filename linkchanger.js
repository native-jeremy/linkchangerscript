let cell = document.querySelectorAll('.project-cell')

for (let i = 0; i < cell.length; i++) {
  cell[i].href = 'slideNum' + '' + cell[i];
}
