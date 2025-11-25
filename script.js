const body = document.body;
const themeToggle = document.getElementById("themeToggle");

// Theme cycling functionality
const themes = [
    { id: "glow", label: "Glow" },
    { id: "light", label: "Light" },
    { id: "sunset", label: "Sunset" },
    { id: "forest", label: "Forest" },
    { id: "midnight", label: "Midnight" },
    { id: "neon", label: "Neon" },
];

const storedTheme = localStorage.getItem("kv-theme");
const isStoredThemeValid = themes.some((theme) => theme.id === storedTheme);
let currentThemeIndex = isStoredThemeValid ? themes.findIndex((t) => t.id === storedTheme) : 0;

const applyTheme = (themeId) => {
    themes.forEach(({ id }) => body.classList.remove(`theme-${id}`));
    body.classList.add(`theme-${themeId}`);
    localStorage.setItem("kv-theme", themeId);
};

// Apply initial theme
applyTheme(themes[currentThemeIndex].id);

// Single click to cycle through themes
themeToggle?.addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex].id);
});

const heroGreeting = document.getElementById("heroGreeting");
if (heroGreeting) {
    const hour = new Date().getHours();
    const greeting =
        hour < 5 ? "Late night greetings" : hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
    heroGreeting.textContent = `${greeting}, I'm`;
}

const humanQuote = document.getElementById("humanQuote");
if (humanQuote) {
    const quotes = [
        "Listening first, then prototyping with intention.",
        "Translating complex systems into calm, human language.",
        "Pairing QA rigor with empathetic hand-offs.",
        "Designing experiments that respect a team's time.",
    ];
    let quoteIndex = 0;
    setInterval(() => {
        humanQuote.classList.add("fade");
        setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            humanQuote.textContent = quotes[quoteIndex];
            humanQuote.classList.remove("fade");
        }, 250);
    }, 4500);
}

document.getElementById("year").textContent = new Date().getFullYear();

// Optimized Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.05, rootMargin: "20px" }
);

document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

// Contact form handler
const contactForm = document.querySelector(".contact-form");
contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(contactForm).entries());
    contactForm.reset();
    const toast = document.createElement("div");
    toast.textContent = `Thanks ${formData.name || "there"}! I will respond shortly.`;
    toast.className = "toast";
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => toast.remove(), 4000);
});

const profileImage = document.querySelector(".hero-photo img");
if (profileImage) {
    const fallbackAvatar = encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
            <defs>
                <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stop-color='#7c5dff'/>
                    <stop offset='100%' stop-color='#5ef1ff'/>
                </linearGradient>
            </defs>
            <rect width='400' height='400' rx='48' fill='url(#grad)'/>
            <text x='50%' y='55%' text-anchor='middle' font-size='140' font-family='Space Grotesk, sans-serif' font-weight='700' fill='#ffffff'>KV</text>
        </svg>`
    );
    profileImage.addEventListener("error", () => {
        if (profileImage.dataset.fallback === "applied") return;
        profileImage.dataset.fallback = "applied";
        profileImage.src = `data:image/svg+xml;utf8,${fallbackAvatar}`;
    });
}

// Smooth scroll navigation
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
            const yOffset = -80;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    });
});


