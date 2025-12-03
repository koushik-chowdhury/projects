let textBox = document.getElementById('text-box');
let wordCount = document.getElementById('word-count');
let charCount = document.getElementById('char-count');

let totalWords = [];

textBox.addEventListener('input', countWord);

function countWord() {
  let text = textBox.value.trim().split(/\s+/);

  wordCount.textContent = text.length;
  charCount.textContent = text.join('').length;
  if (text[0] === '') {
    wordCount.textContent = 0;
  }
}
