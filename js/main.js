// slider reviews
$('.reviews-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: 
    `<div class="slick-arrow slick-prev">
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.4262 26.5022L41.2959 3.78638C42.1641 2.92041 42.1641 1.51545 41.2959 0.649478C40.4278 -0.216493 39.0184 -0.216493 38.1502 0.649478L11.6855 24.8211C11.2216 25.2828 11.025 25.8969 11.0559 26.5C11.025 27.1053 11.2216 27.7171 11.6855 28.1789L38.1502 52.3505C39.0184 53.2164 40.4278 53.2164 41.2959 52.3505C42.1641 51.4845 42.1641 50.0795 41.2959 49.2136L16.4262 26.5022Z" fill="black"/>
    </svg>
    </div>`,
    nextArrow:
    `<div class="slick-arrow slick-next">
    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.5738 26.5022L11.7041 3.78638C10.8359 2.92041 10.8359 1.51545 11.7041 0.649478C12.5722 -0.216493 13.9816 -0.216493 14.8498 0.649478L41.3145 24.8211C41.7784 25.2828 41.975 25.8969 41.9441 26.5C41.975 27.1053 41.7784 27.7171 41.3145 28.1789L14.8498 52.3505C13.9816 53.2164 12.5722 53.2164 11.7041 52.3505C10.8359 51.4845 10.8359 50.0795 11.7041 49.2136L36.5738 26.5022Z" fill="black"/>
    </svg>    
    </div>`,
    });
    // gsap
    const timelinePreview = gsap.timeline({})

    timelinePreview.from('.preview__info',{
        x:-400,
        duration:2,
        opacity:0,
        ease:"back.out(1.5)",
    })

    gsap.from('#about-us__info-1',{
        x:400,
        opacity:0,
        scrollTrigger:{
                // markers:true,
                trigger:'#about-us__info-1',  
                start:'top 80%',
                end:'bottom 80%',
                opacity:1,
                scrub:1.5, 
                toggleActions:'play reverse play reverse',
                }
    })

    gsap.from('#about-us__info-2',{
        x:-400,
        opacity:0,
        scrollTrigger:{
                // markers:true,
                trigger:'#about-us__info-2',  
                start:'top 80%',
                end:'bottom 80%',
                opacity:1,
                scrub:1.5, 
                toggleActions:'play reverse play reverse',
                }
    })

        gsap.from('.card-activities--first',{
        stagger:0.3,
        opacity:0,
        y:200,
        scrollTrigger:{
            // markers:true,
            trigger: '.card-activities--first',
            start: 'top 70%',
            end:'20% 50%',
            scrub:1.5,
            toggleActions: 'play none none reverse',
        }
    })

    gsap.from('.card-activities--second',{
        stagger:0.3,
        opacity:0,
        y:200,
        scrollTrigger:{
            // markers:true,
            trigger: '.card-activities--second',
            start: 'top 90%',
            end:'30% 60%',
            scrub:1.5,
            toggleActions: 'play none none reverse',
        }
    })

    gsap.from('.contacts__info',{
        x:-400,
        opacity:0,
        scrollTrigger:{
                // markers:true,
                trigger:'.contacts__info',  
                start:'top 80%',
                end:'bottom 80%',
                opacity:1,
                scrub:1.5, 
                toggleActions:'play reverse play reverse',
                }
    })