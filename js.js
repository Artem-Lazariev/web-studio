document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const contactLink = document.getElementById("contactLink");
    const closeBtn = document.getElementById("modalClose");

    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});