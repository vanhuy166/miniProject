var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var removeAllTags = document.querySelector('.remove-all');

var tags = ["Nodejs", "Reactjs"];

renderTags();

input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 && this.value.trim()) {
        tags.push(this.value.trim());
        input.value = "";
        renderTags();
    }
});

removeAllTags.addEventListener('click', function(e) {
    tags.splice(0, tags.length);
    renderTags();
});

function removeTags(index) {
    tags.splice(index, 1);
    renderTags();
}

function renderTags() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const element = tags[i];
        content.innerHTML += ` <li>
                                    ${element}
                                    <i class="fa-solid fa-xmark" onclick="removeTags('${i}');"></i>
                                </li>`
    }
    content.appendChild(input);
    input.focus();
}