document.addEventListener('DOMContentLoaded', function () {
    const downloadCVDropDown = document.getElementById('download-cv-dropdown-content');
    const downloadCV = document.getElementById('download-cv');
    document.addEventListener("click", function (event) {
        const navbarTogglerBtn = document.querySelector('.lse-navbar-toggler');
        const navbarTogglerNav = document.getElementById('navbarToggler');
        const isNavbarToggler = event.target.classList.contains('lse-navbar-toggler') ||
            event.target.parentNode.classList.contains('lse-navbar-toggler');
            
        navbarTogglerBtn.classList.toggle("change", isNavbarToggler);
        navbarTogglerNav.classList.toggle("show", isNavbarToggler);
        
        if(!(event.target.parentNode.id.trim() == "download-cv" || event.target.id.trim() == "download-cv")){
            downloadCVDropDown.classList.add('d-none');   
        }
    });

    document.querySelectorAll('li.nav-item').forEach(element => {
        element.addEventListener("click", function (event) {
            document.querySelector('li.active').classList.remove("active");
            element.classList.add("active");
        });
    });

    document.querySelectorAll('#nav-tabs-container li.nav-item').forEach(tabElt => {
        tabElt.addEventListener("click", function () {
            console.log("tabElt triggered");
            document.querySelector('#nav-tabs-container a.active').classList.remove("active");
            tabElt.querySelector('a').classList.add("active");
        });
    });


    downloadCV.addEventListener("click", function (event) {
        downloadCVDropDown.classList.toggle('d-none');
    });
});