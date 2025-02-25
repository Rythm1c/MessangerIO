const emojiButton = document.getElementById("emoji-button");
const emojiMenu = document.getElementById("emoji-menu");
const textInput = document.querySelector("input[type='text']");
const backButton = document.getElementById("back-button");
const contactModal = document.getElementById("contact-modal");
const chatContainer = document.getElementById("chat-app-container");

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

backButton.addEventListener("click", () => {
    contactModal.classList.toggle("hidden");
    chatContainer.classList.toggle("bg-gray-500", !contactModal.classList.contains("hidden"));
});

chatContainer.addEventListener("click", (event) => {
    if (!contactModal.contains(event.target) && !backButton.contains(event.target)) {
        contactModal.classList.add("hidden");
        chatContainer.classList.remove("bg-gray-500");
    }
});


class contact {
    constructor(name, constact, profile,) {

    }
}
