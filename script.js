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

document.getElementById("close-modal").addEventListener("click", function () {
    contactModal.classList.add("hidden");
});

let currentTime = new Date();
class Message {
    constructor(time, text) {
        this.time = time;
        this.text = text;
    }

    find(value) {
        return this.text.contains(value);
    }
}

class Contact {
    #messages;
    constructor(name, contact, pfp, email) {
        this.name = name;
        this.contact = contact;
        this.pfp = pfp;
        this.email = email;
        this.#messages = []
    }

    get_contact_count() {
        return this.#messages.length;
    }

    add_message(message) {

        this.#messages.push(message);
    }

    get_message(index) {
        return this.#messages[index];
    }

    find(value) {
        //not impilemented yet
    }

    delete_message(index) {

    }
}

let Me = new Contact("Me", "0767566789", "none", "random@gmail.com");

let contacts = [
    new Contact("John Doe", "078982651", "none", "random@gmail.com"),
    new Contact("Jane Smith", "078586661", "assets/jane.png", "random@gmail.com"),
    new Contact("Alex Brown", "073445221", "assets/alex.jpeg", "random@gmail.com"),

];
let current_contact = 0;

function add_contact(new_contact) {
    contacts.push(new_contact);
    let container = document.getElementById("contacts-container");
    let contact = document.createElement("div");
    contact.classList.add("flex", "flex-row", "space-x-2", "p-2", "bg-gray-100", "rounded-[2px]", "hover:cursor-pointer", "hover:bg-gray-200");
    contact.innerHTML += `<img id='pfp' src='${contact.pfp}' alt='Profile' class='w-10 h-10 rounded-full'><div>${contact.name}</div>`;
    container.appendChild(contact);
}


//add_contact(new Contact("chatbot", "openAI.com", "assets/user.png", "openAI.org"));


function display_texts() {
    let chatContainer = document.getElementById("chat-container");
    while (chatContainer.hasChildNodes()) {
        chatContainer.removeChild(chatContainer.firstChild);
    }
    for (let i = 0; i < contacts[current_contact].get_contact_count(); ++i) {
        chatContainer.appendChild(contacts[current_contact].get_message(i));
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

function display_contact(index) {
    current_contact = index;
    display_texts();
    document.getElementById("prof-name").innerHTML = contacts[current_contact].name;
    if (contacts[current_contact].pfp === "none") {
        document.getElementById("pfp").src = "assets/user.png";
    }
    else {
        document.getElementById("pfp").src = contacts[current_contact].pfp;
    }
}

display_contact(current_contact);


document.getElementById("send-button").addEventListener("click", (event) => {
    event.preventDefault();
    let inputField = document.getElementById("chat-input");
    let message = inputField.value.trim();
    if (message !== "") {
        let time = new Date();
        let messageBubble = document.createElement("div");
        messageBubble.classList.add("flex", "flex-col", "items-end");
        messageBubble.innerHTML = `<p>${time.toTimeString()}</p>`;
        messageBubble.innerHTML += `<div class='bg-blue-500 text-white p-2 rounded-[2px] max-w-xs'>${message}</div>`;
        inputField.value = "";
        contacts[current_contact].add_message(messageBubble);
        display_texts()
    }
})

document.querySelectorAll("#contact").forEach((contact, index) => {
    contact.addEventListener("click", () => {
        display_contact(index);
        contactModal.classList.add("hidden");
    });
});

