const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
});
// 여기까지 작성한 코드는 햄버거 모양 눌렀을 때 메뉴가 나타나고 사라짐.
