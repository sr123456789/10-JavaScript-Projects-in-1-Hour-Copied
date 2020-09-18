const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

open.addEventListener('click', () => {
  container.classList.add('active');
});
// container에 active 클래스 추가되면서 display:flex

close.addEventListener('click', () => {
  container.classList.remove('active');
});
// container에 active 클래스 제거되면서 display:none
