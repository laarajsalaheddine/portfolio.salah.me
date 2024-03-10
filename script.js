document.addEventListener('DOMContentLoaded', function () {
    const downloadCVDropDown = document.getElementById('download-cv-dropdown-content');
    const linksContent = document.getElementById('links-content');
    const resumeDownload = document.getElementById('resume-download');
    const linksCTA = document.getElementById('links-cta');
    const navBar = document.getElementById("navbarToggler");
    const navbarNavMenu = document.querySelector('ul.navbar-nav');

    document.addEventListener("click", function (event) {
        const navbarTogglerNav = document.getElementById('navbarToggler');
        const isNavbarToggler = event.target.classList.contains('burger-btn-navbar-toggler') ||
            event.target.parentNode.classList.contains('burger-btn-navbar-toggler');

        navbarTogglerNav.classList.toggle("show", isNavbarToggler);
        navbarTogglerNav.classList.toggle("nav-bar-scroll-shadow", isNavbarToggler);

        if (!(event.target.parentNode.id.trim() == "resume-download" || event.target.id.trim() == "resume-download")) {
            downloadCVDropDown.classList.add('d-none');
        }
        if (!(event.target.parentNode.id.trim() == "links-cta" || event.target.id.trim() == "links-cta")) {
            linksContent.classList.add('d-none');
        }
    });

    document.querySelectorAll('li.nav-item').forEach(element => {
        element.addEventListener("click", function (event) {
            document.querySelector('li.active').classList.remove("active");
            element.classList.add("active");
        });
    });
    resumeDownload.addEventListener("click", function (event) {
        if (downloadCVDropDown.classList.contains('d-none')) {
            downloadCVDropDown.classList.remove('d-none');
        }
    });
    linksCTA.addEventListener("click", function (event) {
        if (linksContent.classList.contains('d-none')) {
            linksContent.classList.remove('d-none');
        }
    });
    document.querySelectorAll('#nav-tabs-container li.nav-item').forEach(tabElt => {
        tabElt.addEventListener("click", function (e) {
            const tabId = e.target.getAttribute('data-tab-content-id');

            document.querySelector('#nav-tabs-container a.active').classList.remove("active");

            tabElt.querySelector('a').classList.add("active");

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove("d-block");
                content.classList.add("d-none");
            });

            document.getElementById(tabId).classList.remove("d-none");
            document.getElementById(tabId).classList.add("d-block");
        });
    });

    document.body.onscroll = function () {
        let fix_navbar_flag = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
        navBar.classList.toggle('nav-bar-scroll-shadow', fix_navbar_flag);
    };
});