document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "Voltar ao Topo";
    document.body.appendChild(scrollButton);

    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";

    scrollButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });
});
