const form = document.getElementById('form');
const itemsContainer = document.getElementById('items');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').files[0];

  if (image) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const itemHTML = `
        <div class="item">
          <img src="${event.target.result}" alt="${title}">
          <h2>${title}</h2>
          <p>${description}</p>
        </div>`;
      itemsContainer.insertAdjacentHTML('afterbegin', itemHTML);
      form.reset();
    };
    reader.readAsDataURL(image);
  }
});
