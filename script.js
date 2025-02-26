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
        //emojiMenu.classList.add("hidden");
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

document.getElementById("hamburger-button").addEventListener("click", function (event) {
    event.stopPropagation();
    let menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
    let menu = document.getElementById("dropdown-menu");
    let button = document.getElementById("hamburger-button");
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add("hidden");
    }
});

class Contact {
    constructor(name, contact, pfp, email) {
        this.name = name;
        this.contact = contact;
        this.pfp = pfp;
        this.email = email;
    }
}

class Message {
    constructor(time, text) {
        this.time = time;
        this.text = text;
    }

    find(value) {
        return this.text.contains(value);
    }


}

class Chat {
    #messages;
    constructor(sender, recipient) {
        this.sender = sender;
        this.recipient = recipient;
    }

    add_message(message) {
        this.#messages.push(message);
    }

    find(value) {
        //not impilemented yet
    }

    delete_message(index) {

    }
}

/* const contacts = [];
const Chat = []; */


