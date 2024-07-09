
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.querySelector(".nav_open_btn");
            const nav = document.querySelector("nav");
            const about = document.querySelector("#nav_about");
            const projects = document.querySelector("#nav_projects");
            const navSection1Btn = document.querySelector("#nav_section1");

            
            window.addEventListener("scroll", function(){
            nav.classList.toggle('fixed', window.scrollY > 100);
            });

            // navSection1Btn.onclick = function(){
            //     btn.classList.toggle('nav_close_btn');
            //     nav.classList.toggle('open');
            //     if(window.scrollY < 100){
            //     nav.classList.toggle('fixed');
            // };
            //     document.body.classList.toggle('scroll_off');
            // }

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
        });
