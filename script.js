const emptyEl = document.querySelectorAll('.empty');
const fillEl = document.querySelector('.fill');

fillEl.addEventListener('dragstart', dragStart);
fillEl.addEventListener('dragend', dragEnd);

emptyEl.forEach((i) => {
  i.addEventListener('dragover', dragOver);
  i.addEventListener('dragenter', dragEnter);
  i.addEventListener('dragleave', dragLeave);
  i.addEventListener('drop', dragDrop);
});

function dragStart() {
  console.log('dragStart');
  this.classList.add('hold');
  setTimeout(() => (this.className = ''), 0);
}
function dragEnd() {
  console.log('dragEnd');
  this.classList.remove('hold');
  this.classList.add('fill');
}
function dragOver(e) {
  e.preventDefault();
  console.log('dragOver');
  e.target.classList.add('hovered');
}
function dragEnter(e) {
  e.preventDefault();
  console.log('dragEnter');
}
function dragLeave(e) {
  console.log('dragLeave');
  e.target.classList.remove('hovered');
  /* e.target.removeChild('.fill'); */
}
function dragDrop() {
  this.className = 'empty';
  this.append(fillEl);

  console.log('dragDrop');
}
