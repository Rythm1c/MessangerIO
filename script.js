const emojiButton = document.getElementById("emoji-button");
const emojiMenu = document.getElementById("emoji-menu");
const textInput = document.querySelector("input[type='text']");

emojiButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    emojiMenu.classList.toggle("hidden");
});

document.querySelectorAll("#emoji-menu button").forEach(button => {
    button.addEventListener("click", () => {
        textInput.value += button.textContent;
        emojiMenu.classList.add("hidden");
    });
});

document.addEventListener("click", (event) => {
    if (!emojiMenu.contains(event.target) && !emojiButton.contains(event.target)) {
        emojiMenu.classList.add("hidden");
    }
});