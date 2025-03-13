// 1. Select the HTML element where the animated text will be displayed.
const typedTextSpan = document.querySelector(".typed-text");

// 2. Select the HTML element representing the blinking cursor.
const cursor = document.querySelector(".cursor");

// 3. Define an array of words to animate one by one in the typing effect.
const words = ["HTML", "CSS", "JAVASCRIPT"];

// 4. Define the typing speed (in milliseconds). Lower value = faster typing.
const typingDelay = 100;

// 5. Define the erasing speed (in milliseconds). Lower value = faster erasing.
const erasingDelay = 50;

// 6. Define the delay before typing the next word (in milliseconds).
const newLetterDelay = 400;

// 7. Track the current word's index in the 'words' array.
let index = 0;

// 8. Track the current letter's index in the word being typed.: for example-> [HTML => H T M L]
let charIndex = 0;

// 9. Listen for when the HTML document is fully loaded before starting animation.
document.addEventListener("DOMContentLoaded", () => {
  // Check if there are words to animate. If yes, start the typing animation.
  if (words.length) setTimeout(type, newLetterDelay);
});

// 11. Function to handle the typing effect.
function type() {
  // 12. If the current word is not fully typed yet...
  if (charIndex < words[index].length) {
    // 13. Add the next character of the word to the text content.
    typedTextSpan.textContent += words[index].charAt(charIndex);
    
    // 14. Move to the next character in the current word.
    charIndex++;
    
    // 15. Continue typing the next character with a delay.
    setTimeout(type, typingDelay);
  } else { 
    // 16. When the whole word is typed, wait before starting the erasing process.
    setTimeout(erase, newLetterDelay);
  }
}

// 17. Function to handle the erasing effect.
function erase() {
  // 18. If there are still characters to erase...
  if (charIndex > 0) {
    // 19. Remove one character from the text content each time.
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    
    // 20. Move to the previous character.
    charIndex--;
    
    // 21. Continue erasing the next character with a delay.
    setTimeout(erase, erasingDelay);
  } else {
    // 22. When the entire word is erased, move to the next word.
    index++;
    
    // 23. If all words have been typed and erased, restart from the first word.
    if (index >= words.length) index = 0;

    // 24. Start typing the next word with a delay for a smooth transition.
    setTimeout(type, typingDelay + 1000);
  }
}
