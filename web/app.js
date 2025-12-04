const modeBtns = document.querySelectorAll('.mode-btn');
const dashboard = document.querySelector('.dashboard');
const recommendation = document.getElementById('recommendation');

modeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    document.body.setAttribute('data-mode', mode);
    if (mode === 'personal') {
      recommendation.textContent = "It's sunny! Take a walk in the park for 20 minutes.";
    } else {
      recommendation.textContent = "Challenge a friend to a step contest today!";
    }
  });
});
