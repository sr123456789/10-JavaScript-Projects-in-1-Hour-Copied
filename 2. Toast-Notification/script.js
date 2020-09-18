const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.innerText = `i'm king of the world.`;

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000); // 3초뒤에 하나씩 삭제
}
