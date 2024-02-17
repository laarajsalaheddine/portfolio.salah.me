document.addEventListener('DOMContentLoaded', function () {
    const downloadCVDropDown = document.getElementById('download-cv-dropdown-content');
    const downloadCV = document.getElementById('download-cv');
    /* **** Document event
        - Hides the dropdown menu
        - Hides the CV download btn
    */
    document.addEventListener("click", function (event) {
        const navbarTogglerBtn = document.querySelector('.lse-navbar-toggler');
        const navbarTogglerNav = document.getElementById('navbarToggler');
        const isNavbarToggler = event.target.classList.contains('lse-navbar-toggler') ||
            event.target.parentNode.classList.contains('lse-navbar-toggler');

        navbarTogglerBtn.classList.toggle("change", isNavbarToggler);
        navbarTogglerNav.classList.toggle("show", isNavbarToggler);

        if (!(event.target.parentNode.id.trim() == "download-cv" || event.target.id.trim() == "download-cv")) {
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



    downloadCV.addEventListener("click", function (event) {
        downloadCVDropDown.classList.toggle('d-none');
    });

    // document.body.onscroll = function () {
    //     let navBar = document.getElementById("navbarToggler");
    //     let fix_navbar_flag = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    //     navBar.classList.toggle('nav-bar-scroll-shadow', fix_navbar_flag);
    // };
});