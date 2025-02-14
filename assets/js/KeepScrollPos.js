// enregistre la position du scroll y avant de cliquer sur un lien avec target="_blank"
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener("click", function () {
        localStorage.setItem("scrollPosition", window.scrollY);
        console.log("Position sauvegardée avant target=_blank : " + localStorage.getItem("scrollPosition"));
    });
});

window.onload = () => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
        window.scrollTo({ 
            top: parseInt(savedPosition), 
            behavior: "smooth" // Ajoute un scroll fluide
        });
    }
    localStorage.removeItem("scrollPosition");
};