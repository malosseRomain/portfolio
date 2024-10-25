function switchProjectPage() {
    const currentProjectNumber = parseInt(window.location.pathname.match(/Project(\d+)\.html$/)[1]);
    const totalProjects = 8;
    const nextProjectNumber = (currentProjectNumber % totalProjects) + 1;
    const prevProjectNumber = (currentProjectNumber === 1) ? totalProjects : currentProjectNumber - 1;

    document.getElementById('nextProject').href = `Project${nextProjectNumber}.html`;
    document.getElementById('prevProject').href = `Project${prevProjectNumber}.html`;
}

window.addEventListener('load', switchProjectPage);
