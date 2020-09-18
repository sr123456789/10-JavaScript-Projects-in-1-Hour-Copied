function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💜';

  heart.style.left = Math.random() * 100 + 'vw'; //랜덤한 left 좌표에 하트 생김
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 애니메이션이 한 사이클을 완료하는 데 걸리는 시간을 지정
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
