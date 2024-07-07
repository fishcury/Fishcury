
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.querySelector(".nav_open_btn");
            const nav = document.querySelector("nav");
            const about = document.querySelector("#nav_about");
            const projects = document.querySelector("#nav_projects");
            const aboutBtn = document.querySelector(".about_btn");
            const expandAbout = document.querySelector(".expand_about");
            const section1 = document.querySelector(".section1");
            const section2 = document.querySelector(".section2");
            const projectsDiv = document.querySelector("#projects");
            const aboutDiv = document.querySelector("#about");

            
            window.addEventListener("scroll", function(){
            nav.classList.toggle('fixed', window.scrollY > 100);
            });

            btn.onclick = function(){
                btn.classList.toggle('nav_close_btn');
                nav.classList.toggle('open');
                if(window.scrollY < 100){
                nav.classList.toggle('fixed');
            };
                document.body.classList.toggle('scroll_off');
            };

            about.onclick = function(){
                btn.classList.toggle('nav_close_btn');
                nav.classList.toggle('open');
                if(window.scrollY < 100){
                nav.classList.toggle('fixed');
            };
                document.body.classList.toggle('scroll_off');
            }
            projects.onclick = function(){
                btn.classList.toggle('nav_close_btn');
                nav.classList.toggle('open');
                if(window.scrollY < 100){
                nav.classList.toggle('fixed');
            };
                document.body.classList.toggle('scroll_off');
            }
            aboutBtn.onclick = function(){
                expandAbout.classList.toggle('expand');
                section1.classList.toggle('collapse');
                section2.classList.toggle('collapse');
                projectsDiv.classList.toggle('collapse');
                aboutDiv.classList.toggle('about_page');
            }
        });
