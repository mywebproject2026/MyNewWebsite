// ========================================
// MY WEBSITE - MAIN JAVASCRIPT
// ========================================

// Run code when the HTML document is ready
document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. WELCOME BUTTON
    // ========================================

    const welcomeButton = document.getElementById("welcomeButton");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", function () {
            alert("Welcome to my website!");
        });
    }


    // ========================================
    // 2. CONTACT FORM
    // ========================================

    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const nameInput = document.getElementById("name");
            const submitButton = contactForm.querySelector(
                'button[type="submit"]'
            );

            const name = nameInput ? nameInput.value.trim() : "";

            if (submitButton) {
                submitButton.disabled = true;
            }

            if (formResponse) {
                formResponse.textContent = "Sending your message...";
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (response.ok) {
                    if (formResponse) {
                        formResponse.textContent =
                            "Thank you, " + name +
                            "! Your message was sent successfully.";
                    }

                    contactForm.reset();
                } else {
                    if (formResponse) {
                        formResponse.textContent =
                            "Sorry, your message could not be sent. Please try again.";
                    }
                }
            } catch (error) {
                if (formResponse) {
                    formResponse.textContent =
                        "Connection error. Please check your internet and try again.";
                }

                console.error("Contact form error:", error);
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                }
            }
        });
    }


    // ========================================
    // 3. DARK MODE
    // ========================================

    const themeButton = document.getElementById("themeButton");

    function updateThemeButton() {
        if (!themeButton) return;

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }
    }

    try {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    } catch (error) {
        console.warn("Unable to read saved theme.");
    }

    updateThemeButton();

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            try {
                localStorage.setItem(
                    "theme",
                    isDark ? "dark" : "light"
                );
            } catch (error) {
                console.warn("Unable to save theme.");
            }

            updateThemeButton();
        });
    }


    // ========================================
    // 4. CURRENT YEAR
    // ========================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ========================================
    // 5. BACK TO TOP BUTTON
    // ========================================

    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ========================================
    // 6. WEBSITE SEARCH
    // ========================================

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchMessage = document.getElementById("searchMessage");

    if (searchInput && searchButton) {
        searchButton.addEventListener("click", function () {
            const query = searchInput.value.trim().toLowerCase();

            if (query === "") {
                if (searchMessage) {
                    searchMessage.textContent =
                        "Please enter something to search.";
                }
                return;
            }

            const sections = document.querySelectorAll("main section");
            let found = false;

            sections.forEach(function (section) {
                if (
                    section.textContent.toLowerCase().includes(query)
                ) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                    found = true;
                }
            });

            if (searchMessage) {
                searchMessage.textContent = found
                    ? "Matching sections found!"
                    : "No matching sections found.";
            }
        });
    }


    // ========================================
    // 7. GREETING
    // ========================================

    const greetButton = document.getElementById("greetButton");
    const visitorName = document.getElementById("visitorName");
    const greetingMessage = document.getElementById("greetingMessage");

    if (greetButton && visitorName && greetingMessage) {
        greetButton.addEventListener("click", function () {
            const name = visitorName.value.trim();

            if (name === "") {
                greetingMessage.textContent =
                    "Please enter your name!";
            } else {
                greetingMessage.textContent =
                    "Welcome to my website, " + name + "! 🎉";
            }
        });
    }


    // ========================================
    // 8. LIVE CLOCK
    // ========================================

    const clockElement = document.getElementById("clock");

    function updateClock() {
        if (clockElement) {
            clockElement.textContent = new Date().toLocaleString();
        }
    }

    updateClock();

    if (clockElement) {
        setInterval(updateClock, 1000);
    }


    // ========================================
    // 9. SCROLL PROGRESS BAR
    // ========================================

    const progressBar = document.getElementById("progressBar");

    if (progressBar) {
        function updateProgressBar() {
            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress = scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

            progressBar.style.width = progress + "%";
        }

        window.addEventListener("scroll", updateProgressBar);
        updateProgressBar();
    }


    // ========================================
    // 10. VISITOR COUNTER
    // ========================================

    const visitCountElement = document.getElementById("visitCount");

    if (visitCountElement) {
        try {
            let visits =
                Number(localStorage.getItem("visitCount")) || 0;

            visits++;

            localStorage.setItem("visitCount", visits);

            visitCountElement.textContent = visits;
        } catch (error) {
            visitCountElement.textContent = "1";
        }
    }


    // ========================================
    // 11. COPY EMAIL BUTTON
    // ========================================

    const copyEmailButton =
        document.getElementById("copyEmailButton");

    const copyMessage = document.getElementById("copyMessage");

    if (copyEmailButton) {
        copyEmailButton.addEventListener("click", async function () {
            const email = "yourname@example.com";

            try {
                await navigator.clipboard.writeText(email);

                if (copyMessage) {
                    copyMessage.textContent =
                        "Email copied successfully!";
                }
            } catch (error) {
                if (copyMessage) {
                    copyMessage.textContent =
                        "Copy failed. Please copy the email manually.";
                }
            }
        });
    }


    // ========================================
    // 12. MESSAGE CHARACTER COUNTER
    // ========================================

    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("charCount");

    if (messageInput && charCount) {
        function updateCharacterCount() {
            charCount.textContent = messageInput.value.length;
        }

        messageInput.addEventListener(
            "input",
            updateCharacterCount
        );

        updateCharacterCount();
    }


    // ========================================
    // 13. DEMO LOGIN
    // ========================================

    const loginButton = document.getElementById("loginButton");
    const usernameInput = document.getElementById("username");
    const demoPasswordInput =
        document.getElementById("demoPassword");

    const loginMessage = document.getElementById("loginMessage");

    if (
        loginButton &&
        usernameInput &&
        demoPasswordInput &&
        loginMessage
    ) {
        loginButton.addEventListener("click", function () {
            const username = usernameInput.value.trim();
            const password = demoPasswordInput.value;

            if (username === "" || password === "") {
                loginMessage.textContent =
                    "Please fill in both fields.";
            } else if (password === "1234") {
                loginMessage.textContent =
                    "Welcome, " + username + "! 🎉";
            } else {
                loginMessage.textContent =
                    "Incorrect demo password.";
            }
        });
    }


    // ========================================
    // 14. CALCULATOR
    // ========================================

    const calculateButton =
        document.getElementById("calculateButton");

    if (calculateButton) {
        calculateButton.addEventListener("click", function () {
            const number1 = document.getElementById("number1");
            const number2 = document.getElementById("number2");
            const operator = document.getElementById("operator");

            const result =
                document.getElementById("calculatorResult");

            if (!number1 || !number2 || !operator || !result) {
                return;
            }

            if (
                number1.value.trim() === "" ||
                number2.value.trim() === ""
            ) {
                result.textContent =
                    "Please enter both numbers.";
                return;
            }

            const a = Number(number1.value);
            const b = Number(number2.value);

            let answer;

            if (operator.value === "+") {
                answer = a + b;
            } else if (operator.value === "-") {
                answer = a - b;
            } else if (operator.value === "*") {
                answer = a * b;
            } else if (operator.value === "/") {
                if (b === 0) {
                    result.textContent =
                        "Cannot divide by zero.";
                    return;
                }

                answer = a / b;
            } else {
                result.textContent = "Invalid operator.";
                return;
            }

            result.textContent = "Result: " + answer;
        });
    }


    // ========================================
    // 15. CLEAR CALCULATOR
    // ========================================

    const clearButton = document.getElementById("clearButton");

    if (clearButton) {
        clearButton.addEventListener("click", function () {
            const number1 = document.getElementById("number1");
            const number2 = document.getElementById("number2");
            const operator = document.getElementById("operator");

            const result =
                document.getElementById("calculatorResult");

            if (number1) number1.value = "";
            if (number2) number2.value = "";
            if (operator) operator.value = "+";

            if (result) {
                result.textContent = "Result: ";
            }
        });
    }


    // ========================================
    // 16. RANDOM QUOTE GENERATOR
    // ========================================

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

    if (quoteButton && quoteText) {
        quoteButton.addEventListener("click", function () {
            const randomIndex =
                Math.floor(Math.random() * quotes.length);

            quoteText.textContent = quotes[randomIndex];
        });
    }


    // ========================================
    // 17. THEME COLOR PICKER
    // ========================================

    const themeColor = document.getElementById("themeColor");

    if (themeColor) {
        try {
            const savedColor = localStorage.getItem("accentColor");

            if (savedColor) {
                themeColor.value = savedColor;

                document.documentElement.style.setProperty(
                    "--accent-color",
                    savedColor
                );
            }
        } catch (error) {
            console.warn("Unable to load saved accent color.");
        }

        themeColor.addEventListener("input", function () {
            const selectedColor = themeColor.value;

            document.documentElement.style.setProperty(
                "--accent-color",
                selectedColor
            );

            try {
                localStorage.setItem(
                    "accentColor",
                    selectedColor
                );
            } catch (error) {
                console.warn("Unable to save accent color.");
            }
        });
    }


    // ========================================
    // 18. TYPING ANIMATION
    // ========================================

    const typingElement = document.getElementById("typing");

    if (typingElement) {
        const messages = [
            "I am a Computer Science student.",
            "I am learning Web Development.",
            "I want to become a Software Developer."
        ];

        let messageIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeMessage() {
            const currentMessage = messages[messageIndex];

            if (deleting) {
                characterIndex--;
            } else {
                characterIndex++;
            }

            typingElement.textContent =
                currentMessage.substring(0, characterIndex);

            let delay = deleting ? 50 : 100;

            if (
                !deleting &&
                characterIndex === currentMessage.length
            ) {
                deleting = true;
                delay = 1500;
            } else if (deleting && characterIndex === 0) {
                deleting = false;

                messageIndex =
                    (messageIndex + 1) % messages.length;

                delay = 500;
            }

            setTimeout(typeMessage, delay);
        }

        typeMessage();
    }


    // ========================================
    // 19. LOADING SCREEN
    // ========================================

    function hideLoader() {
        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
            loader.style.display = "none";
        }
    }

    // Hide the loader after the document is ready.
    hideLoader();

    // Also hide it when all resources finish loading.
    window.addEventListener("load", hideLoader);

});