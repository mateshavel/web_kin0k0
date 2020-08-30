$(document).ready(function () {
    //
    // if (BrowserDetect.browser == "Explorer"){ //If browser is IE
    //     if (BrowserDetect.version < 10){ //purely for testing
    //         console.log("less than 10");
    //         $('body').append(vCheckModal);
    //         $('#modalPreference').modal({
    //             backdrop: true,
    //             backdrop: 'static',
    //             show: true
    //         })
    //     }
    // }


    //Scroll To
    $(".scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 300)
    });


    // when the DOM is ready

        // get the anchor link buttons
        const menuBtn = $('.nav.nav-stacked');
        // when each button is clicked
        menuBtn.click(()=>{
            // set a short timeout before taking action
            // so as to allow hash to be set
            setTimeout(()=>{
                // call removeHash function after set timeout
                removeHash();
            }, 5); // 5 millisecond timeout in this case
        });

        // removeHash function
        // uses HTML5 history API to manipulate the location bar
        function removeHash(){
            history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }





    if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("SCROLL");
    } else {
        $(".navbar").removeClass("SCROLL");
    }


    $("#my-menu").mmenu({
        "slidingSubmenus": false,

        extensions: [
            "fullscreen",
            "theme-white",
            // "border-offset",
            "border-none",
            "multiline"
        ],
        "navbars": [
            {
                "position": "top",
                "content": [

                    "close"
                ]
            }
        ],
        "navbar": false
    });


    var API = $("#my-menu").data("mmenu");

    $("#hamburger").click(function () {
        API.open();
    });

    $("#hamburger").click(function () {
        API.close();
    });


    //navbar style
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            $(".navbar").addClass("SCROLL");
        } else {
            $(".navbar").removeClass("SCROLL");
        }

    });

    //menu hover
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
            $(this).toggleClass('open');
        }
    );

    //cloce info box
    $(".js-info-box-close").click(function () {
        $(".info-box").addClass("hidden");
        $("body").addClass("size-change");
    });

    //add wishlist
    $('.js-add-wish-list').on('click', function (event) {
        event.preventDefault();
        $(this).closest(".product-card-heart-btn").toggleClass("active");
    });

    //hover change img on product card
    $(".hover-color-2").hover(function (e) {
        var sku = $(this).data('sku');
        if (sku != null) {
            var image = $(".product-card-img img[data-sku='" + sku + "'] ");
            var allimages = $(image).closest(".product-card-img").find('img');
            $(allimages).each(function (i) {
                $(this).css("display", "none");
            });
            $(image).css("display", "block");
        }
    }, function () {
        $(".img-hover-2").css("display", "none");
        $(".img-hover-1").css("display", "block");
    });

    $(".hover-color-3").hover(function (e) {
        var sku = $(this).data('sku');
        if (sku != null) {
            var image = $(".product-card-img img[data-sku='" + sku + "'] ");
            var allimages = $(image).closest(".product-card-img").find('img');
            $(allimages).each(function (i) {
                $(this).css("display", "none");
            });
            $(image).css("display", "block");
        }
    }, function () {
        $(".img-hover-3").css("display", "none");
        $(".img-hover-1").css("display", "block");
    });

    /*$(".hover-color-3").hover(function (event) {
        event.preventDefault();
        $(".img-hover-3").css("display", "block");
        $(".img-hover-1").css("display", "none");
    }, function () {
        $(".img-hover-3").css("display", "none");
        $(".img-hover-1").css("display", "block");
    });*/


    //sticky
    var sticky = new Sticky('[data-sticky]');

    //active class for radio buttons
    var header = document.getElementById("js-radio-delivery");
    var btns = header.getElementsByClassName("radio-delivery");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active-delivery");
            current[0].className = current[0].className.replace(" active-delivery", "");
            this.className += " active-delivery";
        });
    }

    //active class for radio buttons
    var headerRadioPayment = document.getElementById("js-radio-payment");
    var btnsRadioPayment = headerRadioPayment.getElementsByClassName("radio-payment");
    for (var e = 0; e < btnsRadioPayment.length; e++) {
        btnsRadioPayment[e].addEventListener("click", function () {
            var currentRadioPayment = document.getElementsByClassName("active-payment");
            currentRadioPayment[0].className = currentRadioPayment[0].className.replace(" active-payment", "");
            this.className += " active-payment";
        });
    }


});


//show checkbox hidden div
var checkoutLogin = document.getElementById("js-toggle-shop-checkout-login");
if (checkoutLogin) {
    checkoutLogin.onclick = function () {
        showCheckoutLogin();
    };
}

function showCheckoutLogin() {
    document.getElementById("js-shop-checkout-login-hidden").classList.toggle("show");
}

//show checkbox hidden div
var corporateInfo = document.getElementById("js-toggle-shop-checkout-corporate-info");
if (corporateInfo) {
    corporateInfo.onclick = function () {
        showCheckoutCorporateInfo();
    };
}

function showCheckoutCorporateInfo() {
    document.getElementById("js-shop-checkout-corporate-info-hidden").classList.toggle("show");
}

//show checkbox hidden div
var anotherAddress = document.getElementById("js-toggle-shop-checkout-another-address");
if (anotherAddress) {
    anotherAddress.onclick = function () {
        showCheckoutAnotherAddress();
    };
}

function showCheckoutAnotherAddress() {
    document.getElementById("js-shop-checkout-another-address-hidden").classList.toggle("show");
}


//map
function initMap() {
    var uluru = {lat: 50.0320726, lng: 14.4888075};
    var map = new google.maps.Map(document.getElementById('js-contact-map'), {
        zoom: 16,
        center: uluru,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'Kinoko/media/Kinoko/icons/pointer.svg'
    });
}

