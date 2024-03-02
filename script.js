document.addEventListener('DOMContentLoaded', function () {
    const downloadCVDropDown = document.getElementById('download-cv-dropdown-content');
    const resumeDownload = document.getElementById('resume-download');
    const navBar = document.getElementById("navbarToggler");
    const navbarTogglerBtn = document.querySelector('.lse-navbar-toggler');
    document.addEventListener("click", function (event) {

        const navbarTogglerNav = document.getElementById('navbarToggler');
        const isNavbarToggler = event.target.classList.contains('lse-navbar-toggler') ||
            event.target.parentNode.classList.contains('lse-navbar-toggler');

        navbarTogglerBtn.classList.toggle("change", isNavbarToggler);
        navbarTogglerNav.classList.toggle("show", isNavbarToggler);
        navbarTogglerNav.classList.toggle("nav-bar-scroll-shadow", isNavbarToggler);

        if (!(event.target.parentNode.id.trim() == "resume-download" || event.target.id.trim() == "resume-download")) {
            downloadCVDropDown.classList.add('d-none');
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



    // downloadCV.addEventListener("click", function (event) {
    //     downloadCVDropDown.classList.toggle('d-none');
    // });


    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        console.log("--- is mobile view");
        // must check if the 
        if (navbarTogglerBtn.classList.contains('change')) {
            navBar.classList.add('nav-bar-scroll-shadow');
        }
    } else {
        console.log("is not -----");
        document.body.onscroll = function () {
            let fix_navbar_flag = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
            navBar.classList.toggle('nav-bar-scroll-shadow', fix_navbar_flag);
        };
    }
});