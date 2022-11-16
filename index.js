const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('totalcounter');
const remainingCounterEl = document.getElementById('remainingcounter')

textareaEl.addEventListener('keyup', () => {
    updateCounter()
});

updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}

