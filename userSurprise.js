const header = document.querySelector("header h1"); // declared ONCE

if (header) {
    header.style.transition = "opacity 1.5s ease";
    header.style.opacity = "0";

    window.addEventListener("load", () => {
        header.style.opacity = "1";
    });

    header.addEventListener("click", () => {
        header.textContent = "surprise! here's an easter egg :)";
    });
}

document.body.addEventListener("dblclick", () => {
    document.body.classList.toggle("dark-mode");
});

const backToTop = document.createElement("button");
backToTop.textContent = "↑ Back to Top";
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 16px;
    background: #e76f51;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: none;
    font-size: 0.9rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
`;

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});