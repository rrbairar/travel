const btn = document.getElementById('btn');
const alertPopup = document.querySelector('#alertPopup');
const overlay = document.querySelector('#overlay');
const closeModal = document.getElementById('closeModal');

function showPopup() {
  alertPopup.classList.add('show');
  overlay.classList.add('overlayTop');
}

function hidePopup() {
  alertPopup.classList.remove('show');
  overlay.classList.remove('overlayTop');
}

btn.addEventListener('click', showPopup);
closeModal.addEventListener('click', hidePopup);
overlay.addEventListener('click', (event) => {
  if (event.target.classList.contains('overlayTop')) {
    hidePopup();
  }
});