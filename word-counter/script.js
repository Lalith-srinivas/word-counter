let textInput = document.getElementById('textInput');
let wordCount = document.getElementById('wordCount');
let charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    let text = textInput.value;
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;
    charCount.textContent = text.length;
});
