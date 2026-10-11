const welcomeButton = document.getElementById("welcomeButton");

welcomeButton.addEventListener("click", function () {
    alert("Welcome to my website!");
});
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formResponse.textContent =
        "Thank you, " + name + "! Your form was submitted successfully.";

    contactForm.reset();
});
const themeButton = document.getElementById("themeButton");

// Load the saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}

// Switch themes and save the preference
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙 Dark Mode";
    }
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});
document.getElementById("year").textContent =
    new Date().getFullYear();
    const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        searchMessage.textContent = "Please enter something to search.";
        return;
    }

    const sections = document.querySelectorAll("main section");
    let found = false;

    sections.forEach(function (section) {
        if (section.textContent.toLowerCase().includes(query)) {
            section.scrollIntoView({ behavior: "smooth" });
            found = true;
        }
    });

    if (found) {
        searchMessage.textContent = "Matching sections found!";
    } else {
        searchMessage.textContent = "No matching sections found.";
    }
});
window.addEventListener("load", function () {
    document.getElementById("loader").classList.add("hidden");
});
const greetButton = document.getElementById("greetButton");
const visitorName = document.getElementById("visitorName");
const greetingMessage = document.getElementById("greetingMessage");

greetButton.addEventListener("click", function () {
    const name = visitorName.value.trim();

    if (name === "") {
        greetingMessage.textContent = "Please enter your name!";
    } else {
        greetingMessage.textContent =
            "Welcome to my website, " + name + "! 🎉";
    }
});
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleString();
}

updateClock();

setInterval(updateClock, 1000);
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";
});
let visits = Number(localStorage.getItem("visitCount")) || 0;

visits++;

localStorage.setItem("visitCount", visits);

document.getElementById("visitCount").textContent = visits;
const copyEmailButton = document.getElementById("copyEmailButton");
const copyMessage = document.getElementById("copyMessage");

copyEmailButton.addEventListener("click", async function () {
    const email = "yourname@example.com";

    try {
        await navigator.clipboard.writeText(email);
        copyMessage.textContent = "Email copied successfully!";
    } catch (error) {
        copyMessage.textContent =
            "Copy failed. Please copy the email manually.";
    }
});
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", function () {
    charCount.textContent = messageInput.value.length;
});
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const demoPasswordInput = document.getElementById("demoPassword");
const loginMessage = document.getElementById("loginMessage");

loginButton.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    const password = demoPasswordInput.value;

    if (username === "" || password === "") {
        loginMessage.textContent = "Please fill in both fields.";
    } else if (password === "1234") {
        loginMessage.textContent =
            "Welcome, " + username + "! 🎉";
    } else {
        loginMessage.textContent = "Incorrect demo password.";
    }
});
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const operator = document.getElementById("operator").value;
    const result = document.getElementById("calculatorResult");

    if (number1 === "" || number2 === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const a = Number(number1);
    const b = Number(number2);
    let answer;

    if (operator === "+") {
        answer = a + b;
    } else if (operator === "-") {
        answer = a - b;
    } else if (operator === "*") {
        answer = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }

        answer = a / b;
    }

    result.textContent = "Result: " + answer;
});
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("calculatorResult").textContent = "Result: ";
});
const quotes = [
    "Believe in yourself and keep learning.",
    "Great things take time.",
    "Every expert was once a beginner.",
    "Never stop asking questions.",
    "Your future depends on what you learn today.",
    "Small steps lead to big achievements."
];

const quoteButton = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

quoteButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex];
});

themeColor.addEventListener("input", function () {
    document.documentElement.style.setProperty(
        "--accent-color",
        themeColor.value
    );
});

// Load the saved color
const savedColor = localStorage.getItem("accentColor");

if (savedColor) {
    themeColor.value = savedColor;

    document.documentElement.style.setProperty(
        "--accent-color",
        savedColor
    );
}

// Save a new color when the visitor chooses one
themeColor.addEventListener("input", function () {
    const selectedColor = themeColor.value;

    document.documentElement.style.setProperty(
        "--accent-color",
        selectedColor
    );

    localStorage.setItem("accentColor", selectedColor);
});
// Hide the loading screen after the page loads
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});
