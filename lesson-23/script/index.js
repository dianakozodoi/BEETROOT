const textArea = document.createElement('input');
const divText = document.createElement('div');
document.body.appendChild(textArea);
document.body.appendChild(divText);
divText.innerText = 'Щоб редагувати текст натисніть Ctrl+e, щоб зберегти Ctrl+s';
divText.setAttribute('style', 'border: 1px solid red; height:60px; width:500px');
textArea.setAttribute('style', 'display:none');
addEventListener('keydown', function(e) {
    if (e.ctrlKey == true && e.key == "e") {
        divText.setAttribute('style', 'display:none');
        textArea.setAttribute('style', 'display:block');
        textArea.innerText = divText.innerText;
    }
    if (e.ctrlKey == true && e.key == "s") {
        textArea.setAttribute('style', 'display:none');
        divText.setAttribute('style', 'display:block');
        divText.innerText = textArea.value;
    }
});