

let nav1 = document.querySelector(".nav1 ")
gsap.from(".nav1 ",{
    opacity: 0,
        y: -15,
        duration: 0.8,
        delay:0.5,
        stagger: 0.3, // One after another
        // ease: "power2.out"
})
let nav2 = document.querySelector(".nav2 ul li a")
gsap.from(".nav2 ul li a",{
        opacity: 0,
        y: -10,
        duration: 0.5,
        // delay:0.5,
        stagger: 0.2, 
        ease: "bounce.out"
})

// let welcome = document.querySelector("#welcome h1")
// gsap.from("#welcome h1",{
//         opacity: 0,
//         x: -10,
//         duration: 0.5,
//         delay:0.5,
//         // stagger: 0.2, 
//         // ease: "bounce.out"
// })
setTimeout(() => {
    gsap.from("#welcome h1", {
        opacity: 0,
        y: -10,
        duration: 0.8,
        delay: 0.5,
        // stagger: 0.2, 
        ease: "power2.out"
    });
}, 100);
setTimeout(() => {
    gsap.from("#welcome p", {
        opacity: 0,
        y: -10,
        duration: 0.8,
        delay: 0.5,
        // stagger: 0.2, 
        ease: "power2.out"
    });
}, 200);

document.addEventListener("mouseenter", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#ourservices", {
        opacity: 0,
        y: 50,
        duration: 1,
        // stagger: 0.3, // Animate each service one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#ourservices", // The section that triggers animation
            scroll:"main",
            // markers: true,
            // start: "top 50%", // Animation starts when the top of .services_section reaches 80% of the viewport
            toggleActions: "play none none none" // Play animation only once
        }
    });
});

document.addEventListener("mouseenter", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".carall", {
        opacity: 0,
        y:-50,
        duration: 1,
        stagger: 0.3, // Animate each service one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#ourservices", // The section that triggers animation
            scroll:"main",
            // markers: true,
            // start: "top 50%", // Animation starts when the top of .services_section reaches 80% of the viewport
            toggleActions: "play none none none" // Play animation only once
        }
    });
});
document.addEventListener("mouseenter", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".carall2 ", {
        opacity: 0,
        y:-50,
        duration: 1,
        stagger: 0.3, // Animate each service one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".carall2", // The section that triggers animation
            scroll:"main",
            // markers: true,
            // start: "top 50%", // Animation starts when the top of .services_section reaches 80% of the viewport
            toggleActions: "play none none none" // Play animation only once
        }
    });
})

document.addEventListener("mouseenter", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#ourservices2", {
        opacity: 0,
        y:-50,
        duration: 1,
        stagger: 0.3, // Animate each service one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#ourservices2", // The section that triggers animation
            scroll:"main",
            // markers: true,
            start: "top 50%", // Animation starts when the top of .services_section reaches 80% of the viewport
            toggleActions: "play none none none" // Play animation only once
        }
    });
})
document.addEventListener("mouseenter", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#ourservices2 .content3", {
        opacity: 0,
        y:-50,
        duration: 1,
        stagger: 0.3, // Animate each service one after another
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#ourservices2", // The section that triggers animation
            scroll:"main",
            // markers: true,
            start: "top 50%", // Animation starts when the top of .services_section reaches 80% of the viewport
            toggleActions: "play none none none" // Play animation only once
        }
    });
})

// counter all java-script 
$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });

    // project container all animation gsap 
let project = document.querySelector("#projecthead")
    document.addEventListener("mouseenter", function () {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from("#projecthead", {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#projecthead",
                start: "top 30%", 
                // markers:true,
                toggleActions: "play none none none", 
            }
        });
    });
    
    // custmer slider owl carowsal
    
    
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots: true,
            autoplay: true,       // Auto play slides
            autoplayTimeout: 3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
    });
