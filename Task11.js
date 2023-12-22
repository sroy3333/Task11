document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  // Create input element for fruit description
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.name = 'description';
  descriptionInput.placeholder = 'Enter fruit description';

  // Insert the input element before the form button
  form.insertBefore(descriptionInput, form.lastElementChild);

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      const fruitToAdd = document.getElementById('fruit-to-add').value;
      const descriptionToAdd = descriptionInput.value;
      if (fruitToAdd.trim() !== '') {
          addFruit(fruitToAdd, descriptionToAdd);
          form.reset();
      }
  });

  // Function to add a new fruit to the list
  function addFruit(name, description) {
      const fruitList = document.querySelector('.fruits');
      const li = document.createElement('li');
      li.className = 'fruit';
      const spanName = document.createElement('span');
      spanName.textContent = name;
      const spanDescription = document.createElement('span');
      spanDescription.textContent = description;
      spanDescription.style.fontStyle = 'italic';
      li.appendChild(spanName);
      li.appendChild(document.createElement('br')); // Line break to show description on the next line
      li.appendChild(spanDescription);
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'x';
      deleteBtn.addEventListener('click', function () {
          removeFruit(li);
      });
      li.appendChild(deleteBtn);
      fruitList.appendChild(li);
  }

  // Remove a fruit from the list
  function removeFruit(fruitItem) {
      const fruitList = document.querySelector('.fruits');
      fruitList.removeChild(fruitItem);
  }
});

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName('fruit');
  for(let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    if(currentFruitText.indexOf(textEntered) === -1) {
      fruitItems[i].style.display = 'none';
    } else {
      fruitItems[i].style.display = 'flex';
    }
  }
});