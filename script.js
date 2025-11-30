// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
//Download PDF
function downloadResume() {
    const link = document.createElement("a");
    link.href = "Seepana_Sweta_Resume.pdf";  
    link.download = "Seepana_Sweta_Resume.pdf";  
    link.click();
}
//Skills
function toggleSkill(header) {
    const box = header.parentElement;

    // Close all other boxes
    document.querySelectorAll(".skill-box").forEach(b => {
        if (b !== box) b.classList.remove("active");
    });

    // Toggle this one
    box.classList.toggle("active");
}
