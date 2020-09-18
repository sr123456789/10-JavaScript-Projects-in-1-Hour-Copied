const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  document.body.style.background = randomBg();
  console.log(randomBg());
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

// http://jun.hansung.ac.kr/CWP/htmls/html%20hsl%20colors.html
