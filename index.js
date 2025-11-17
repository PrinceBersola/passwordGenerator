let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersWithoutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersWithoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","? ","/"];
const charactersOnlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const generateBtn = document.getElementById('generate-btn');
const passwordDisplay1 = document.getElementById('password1');
const passwordDisplay2 = document.getElementById('password2');
const lengthInput = document.getElementById('length-input');
const symbolsBox = document.getElementById('symbols-box');
const numbersBox = document.getElementById('numbers-box');
const passwordLength = document.getElementById('length-input').value;

// initial check for checkboxes
function passwordContents() {
  if (!symbolsBox.checked && !numbersBox.checked) {
    characters = charactersOnlyLetters;
} else if (!symbolsBox.checked) {
    characters = charactersWithoutSymbols;
} else if (!numbersBox.checked) {
    characters = charactersWithoutNumbers;
} else {
    characters = characters;
}}

// event listeners for checkboxes
symbolsBox.addEventListener('change', passwordContents);
numbersBox.addEventListener('change', passwordContents);

generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value) || passwordLength;
    let password1 = '';
    let password2 = '';

    for (let i = 0; i < length; i++) {
        const randomIndex1 = Math.floor(Math.random() * characters.length);
        const randomIndex2 = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex1];
        password2 += characters[randomIndex2];
    }
    passwordDisplay1.value = password1;
    passwordDisplay2.value = password2;
})

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Save preference to localStorage
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
});

// Load saved preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
    }
});

// Copy to clipboard
passwordDisplay1.addEventListener('click', copy);
passwordDisplay2.addEventListener('click', copy);

function copy() {
  const inputValue = this.value;
    if (inputValue) {
      navigator.clipboard.writeText(inputValue)
      this.value = 'copied!'; // Provide visual feedback to the user
        setTimeout(() => {
            this.value = inputValue;
        }, 1000); // Revert after 1 second
    }
    else {
      alert('Failed to copy text. Please copy manually.');
    };
};
