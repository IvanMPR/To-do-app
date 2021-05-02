const button = document.querySelector('.btn');
let input = document.querySelector('.input');
let list = document.querySelector('.list');
let output = document.querySelector('.output');

button.addEventListener('click', addItem);

function addItem(string) {
  string = input.value;
  if (string === '') {
    alert('You must type in something...');
  } else {
    let text = `${string}`;
    let textFinal = document.createTextNode(text);
    let listItem = document.createElement('li');
    listItem.appendChild(textFinal);
    list.appendChild(listItem);
    input.value = '';

    listItem.ondblclick = function () {
      this.classList.toggle('checked');
    };

    let x = document.createElement('span');
    let xInput = document.createTextNode('\u00D7');
    x.classList.add('close');
    x.appendChild(xInput);
    listItem.appendChild(x);
    x.onclick = function () {
      let parent = this.parentElement;
      parent.remove();
    };
  }
}

input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    button.click();
  }
});


