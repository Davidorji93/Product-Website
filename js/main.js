    //  PRELOADER
    $(window).on('load',function(){
        setTimeout(function(){
            $(".preloader").fadeOut('slow');
        },600);
    });
     
     $(document).ready(function(){

    // // Add scrollspy to <body>
    //  $('body').scrollspy({target: ".navbar-nav", offset: 67});

    //  // Add smooth scrolling on all links inside the navbar
    //  $(".navbar-nav").on('click', function(event) {

    //  // Make sure this.hash has a value before overriding default behavior
    //  if (this.hash !== "") {

    //  // Prevent default anchor click behavior
    //  event.preventDefault();

    // // Store hash
    //  var hash = this.hash;

    // // Using jQuery's animate() method to add smooth page scroll
    // // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //  $('html, body').animate({
    //  scrollTop: $(hash).offset().top
    //  }, 800, function(){

    //     // Add hash (#) to URL when done scrolling (default click behavior)
    //     window.location.hash = hash;
    //     });

    // } // End if

    // });





                $('#product-carousel').owlCarousel({
                    loop:true,
                    margin:0,
                    nav:true,
                    dots:false,
                    autoplay:true,
                    smaertSpeed:1000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:4
                        }
                    }
                })
                $('#testimonial-carousel').owlCarousel({
                    loop:true,
                    margin:0,
                    nav:true,
                    dots:false,
                    autoplay:true,
                    smaertSpeed:1000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:2
                        }
                    }
                })
            })






























































