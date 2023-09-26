const chooseColor = document.querySelectorAll('.color__item');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element) {
  element.addEventListener('click', open)
});

function open(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function(item) {
    item.classList.remove('color__item--active')
  });

  target.classList.add('color__item--active');

  contentItem.forEach(function(item) {
    item.classList.remove('content-item--active')
  });

  contentActive.forEach(function(item) {
    item.classList.add('content-item--active')
  });
}