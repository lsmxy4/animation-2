const tl =anime.timeline({
    defaults: {
        duration: 750,
        easing: 'easeOutBounce'
    }
});

tl.add({
    targets:'.star path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing:'easeInOutSine',
    duration:1500,
    // delay:function(el, i){return i*250},
    loop:true,
    direction:'alternate'
});

tl.add({
    targets:'.ico',
    opacity: 1
})

const path = anime.path('.star path')

anime({
    targets:'.ico',
    translateX:path('x'),
    translateY:path('y'),
    rotate:path('angle'),
    easing:'linear',
    loop:true,
    duration:10000
})