document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section, .project-card, .skill");

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});