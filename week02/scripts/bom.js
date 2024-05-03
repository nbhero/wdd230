const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (!input.value == '') {
        document.querySelector('.error').style.display = 'none';
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.focus();
        
        input.value = '';

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        })
    }
    else {
        document.querySelector('.error').style.display = 'block';
        input.focus();
    }
})