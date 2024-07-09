  document.addEventListener('DOMContentLoaded', () => {
            const section1Btn = document.querySelector(".section1_btn");
            const navSection1Btn = document.querySelector(".nav_section1");
            const expandSection1 = document.querySelector(".expand_section1");
            const section1Div = document.querySelector(".section1");
            const section2Div = document.querySelector(".section2");
            const projectsDiv = document.querySelector("#projects");
            const aboutDiv = document.querySelector("#about");
            const btn = document.querySelector(".nav_open_btn");
            const nav = document.querySelector("nav");

            navSection1Btn.onclick = function(){
                btn.classList.toggle('nav_close_btn');
                nav.classList.toggle('open');
                if(window.scrollY < 100){
                nav.classList.toggle('fixed');
                }
                document.body.classList.toggle('scroll_off');

                section1Div.classList.toggle('expand');
                expandSection1.classList.toggle('collapse');
                aboutDiv.classList.toggle('collapse');
                section2Div.classList.toggle('collapse');
                // projectsDiv.classList.toggle('collapse');





                section1Btn.innerHTML = 'WORK WITH ME';
                document.querySelector('.expand .btn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
            }

            section1Btn.onclick = function(){
                section1Div.classList.toggle('expand');
                expandSection1.classList.toggle('collapse');
                aboutDiv.classList.toggle('collapse');
                section2Div.classList.toggle('collapse');
                // projectsDiv.classList.toggle('collapse');

                section1Btn.innerHTML = 'WORK WITH ME';
                document.querySelector('.expand .btn').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
            }
        });
