const boxes = document.querySelectorAll('.box');
const button = document.getElementById('change-color-btn');

button.addEventListener('click', function() {
  const colors = ['#c0392b', '#3498db', '#2ecc71', '#9b59b6'];
  boxes.forEach(function(box) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
  });
});
