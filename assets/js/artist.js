
    let video=document.getElementById('video')
       let poster =document.getElementById('poster')
       let playBbtn =document.getElementById('playBbtn')
       let videoClose =document.getElementById('videoClose')
        function videoPlay(){
            video.classList.add("videoDisplayBolck");
            videoClose.classList.add("videoDisplayBolck");
            poster.classList.add("vbackground-video");
            playBbtn.classList.add("vbackground-video");
        }
        let videoCloseBtn =()=>{
            video.classList.remove("videoDisplayBolck");
            videoClose.classList.remove("videoDisplayBolck");
            poster.classList.remove("vbackground-video");
            playBbtn.classList.remove("vbackground-video");
        }
        // swiper slider 
        var swiper = new Swiper(".manswiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
            },
            effect: 'slide',
            loop:true,
            speed:2000,
        });