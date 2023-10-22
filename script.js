function locomo() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
locomo()

function video() {
    var videocon = document.querySelector('#vid');
    var playbtn = document.querySelector('#play');


    videocon.addEventListener("mouseenter", function () {
        //  palybtn.style.opacity =1
        //  palybtn.style.scale =1
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })
    })


    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })


    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 75,
            top: dets.y - 75
        })
    })

}
function scooty() {
    var plybtn = document.querySelector('#ply');
    var scoty = document.querySelector('#page5')

    scoty.addEventListener("mouseenter", function () {
        //  palybtn.style.opacity =1
        //  palybtn.style.scale =1
        gsap.to(plybtn, {
            opacity: 1,
            scale: 1
        })
    })


    scoty.addEventListener("mouseleave", function () {
        gsap.to(plybtn, {
            opacity: 0,
            scale: 0
        })
    })


    scoty.addEventListener("mousemove", function (dets) {
        gsap.to(plybtn, {
            left: dets.x - 90,
            top: dets.y - 190
        })
    })

}
video()
scooty()

function load() {

    gsap.from(".text", {
        y: 30,
        // x:10,
        opacity: 0,
        delay: 0.5,
        duration: 1.4,
        stagger: 0.2
    })


    gsap.from("#vid", {
        scale: 0.8,
        opacity: 0,
        delay: 1.3,
        duration: 1,
        stagger: 0.2
    })


}
load()

function float() {
    var fl1 = document.querySelector('#p1');
    var fl2 = document.querySelector('#p2');
    var fl3 = document.querySelector('#p3');
    var flow1 = document.querySelector('#float1');
    var flow2 = document.querySelector('#float2');
    var flow3 = document.querySelector('#float3');

    fl1.addEventListener("mouseenter", function () {
        gsap.to(flow1, {
            scale: 1.2
        })
    })
    fl2.addEventListener("mouseenter", function () {
        gsap.to(flow2, {
            scale: 1.2
        })
    })
    fl3.addEventListener("mouseenter", function () {
        gsap.to(flow3, {
            scale: 1.2
        })
    })
    fl1.addEventListener("mouseleave", function () {
        gsap.to(flow1, {
            scale: 1
        })
    })
    fl2.addEventListener("mouseleave", function () {
        gsap.to(flow2, {
            scale: 1
        })
    })
    fl3.addEventListener("mouseleave", function () {
        gsap.to(flow3, {
            scale: 1
        })
    })


}
float()

gsap.to("#logo",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -10%",
        scrub:true
    }
})

gsap.to("#clogo",{
    transform:"translateY(-100%)",
   
    scrollTrigger:{
        trigger:"page1",
        scroller:"#main",
        // markers:true,
        start:"top 0",
        end:"top -10%",
        scrub:true
    }
})
