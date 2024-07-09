document.addEventListener('DOMContentLoaded', () => {
    const section1Btn = document.querySelector(".section1_btn");
    const projectsBtn = document.querySelector(".projects_btn");
    const aboutBtn = document.querySelector(".about_btn");
    const expandAbout = document.querySelector(".expand_about");
    const section1Div = document.querySelector(".section1");
    const section2Div = document.querySelector(".section2");
    const projectsDiv = document.querySelector("#projects");
    const aboutDiv = document.querySelector("#about");

    aboutBtn.onclick = function(){
        expandAbout.classList.toggle('expand');
        section1Div.classList.toggle('collapse');
        section2Div.classList.toggle('collapse');
        projectsDiv.classList.toggle('collapse');
        aboutDiv.classList.toggle('about_page');
    }
    projectsBtn.onclick = function(){
        // expandAbout.classList.toggle('expand');
        section1Div.classList.toggle('collapse');
        section2Div.classList.toggle('collapse');
        aboutDiv.classList.toggle('collapse');
        // aboutDiv.classList.toggle('about_page');
    }
});
