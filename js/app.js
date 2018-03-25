// $('.feature-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

// $('.feature-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoWidth:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })


$(document).ready(function(){
    $('.feature-slider').owlCarousel({
        loop:true,
        nav:true,
        touchDrag:true,
        // autoWidth:true,
        smartSpeed:1000,
    });

});

$(document).ready(function(){
    $('.clients-slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        touchDrag:true,
        // autoWidth:true,
        smartSpeed:1000,
    });

        $('.small-blog-container').owlCarousel({
        items:3,
        loop:true,
        nav:true,
        touchDrag:true,
        // autoWidth:true,
        smartSpeed:1000,
    });

});

$(document).ready(function(){
    $('.portfolio-slider').owlCarousel({
        loop:true,
        nav:true,
        touchDrag:true,
        autoWidth:true,
        smartSpeed:1000,
        margin:0,
    });

});