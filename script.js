document.addEventListener('DOMContentLoaded', function () {
    const downloadCVDropDown = document.getElementById('download-cv-dropdown-content');
    const downloadCV = document.getElementById('download-cv');
    function handleScriptError(target) {
        target.setAttribute("src", `./${target.getAttribute('data-library')}.min.js`);
        target.setAttribute("crossorigin", "");
        target.setAttribute("integrity", "");
    }
    function handleStyleTagError(target) {
        target.setAttribute("href", `./${target.getAttribute('data-library')}.min.js`);
        target.setAttribute("crossorigin", "");
        target.setAttribute("integrity", "");
    }

    document.addEventListener("click", function (event) {
        const navbarTogglerBtn = document.querySelector('.lse-navbar-toggler');
        const navbarTogglerNav = document.getElementById('navbarToggler');

        const isNavbarToggler = event.target.classList.contains('lse-navbar-toggler') ||
            event.target.parentNode.classList.contains('lse-navbar-toggler');

        if (event.target.parentNode != downloadCV) {
            downloadCVDropDown.classList.add("d-none");
        }
        navbarTogglerBtn.classList.toggle("change", isNavbarToggler);
        navbarTogglerNav.classList.toggle("show", isNavbarToggler);
    });

    document.querySelectorAll('li.nav-item').forEach(element => {
        element.addEventListener("click", function (event) {
            document.querySelector('li.active').classList.remove("active");
            element.classList.add("active");
        });
    });

    downloadCV.addEventListener("click", function (event) {
        downloadCVDropDown.classList.toggle('d-none');
    });
});