document.addEventListener("DOMContentLoaded", function () {

    //oprava slideru pro mobil

if (document.getElementById('style-slider')) {
    var slider_style = tns({
        preventActionWhenRunning: 'true',
        preventScrollOnTouch: 'auto',
        container: "#style-slider",
        items: 5,
        autoHeight: false,
        axis: "vertical",
        mouseDrag: true,
        swipeAngle: 20,
        loop: false,
        speed: 700,
        nav: true,
        navPosition: "bottom",
        controls: true,
        slideBy: 'page',
        responsive: {
            320: {
                disable: true
            },
            992: {
                disable: false,
                items: 5,
                axis: "vertical",
                mouseDrag: true,
                swipeAngle: 20,
                loop: false,
                speed: 700,
                nav: true,
                navPosition: "bottom"
            }
        },
    });
}
var filterButton = document.getElementsByClassName('filter-tab')[0];
if (filterButton) {
    filterButton.onclick = function () {
        slider_style.refresh();
    };
}

if (document.getElementById('hp-product-slider')) {
    // https://github.com/ganlanyuan/tiny-slider
    var slider = tns({
        preventActionWhenRunning: 'true',
        preventScrollOnTouch: 'auto',
        container: "#hp-product-slider",
        slideBy: 1,
        items: 3,
        autoplay: false,
        gutter: 0,
        mouseDrag: true,
        swipeAngle: 20,
        speed: 700,
        nav: false,
        loop: false,
        //autoWidth: true,

        controlsText: [
            '<svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <title></title>\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="arror" fill="#000000">\n' +
            '            <path d="M6.78910369,6.46788991 L1.67486817,11.8073394 C1.55184519,11.93578 1.40246057,12 1.22671351,12 C1.05096646,12 0.901581838,11.93578 0.778558856,11.8073394 L0.198594004,11.2018349 C0.075571022,11.0733944 0.0096659251,10.9174313 0.000878712933,10.733945 C-0.00790849923,10.5504586 0.0492089832,10.3944956 0.172231965,10.266055 L4.25834797,6 L0.172231965,1.73394495 C0.0492089832,1.60550445 -0.00790849923,1.44954142 0.000878712933,1.26605505 C0.0096659251,1.08256867 0.075571022,0.926605645 0.198594004,0.798165138 L0.778558856,0.19266055 C0.901581838,0.0642200435 1.05096646,0 1.22671351,0 C1.40246057,0 1.55184519,0.0642200435 1.67486817,0.19266055 L6.78910369,5.53211009 C6.9297011,5.6605506 7,5.81651362 7,6 C7,6.18348638 6.9297011,6.3394494 6.78910369,6.46788991 Z" id=""></path>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>',
            '<svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n' +
            '    <title></title>\n' +
            '    <desc>Created with Sketch.</desc>\n' +
            '    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g id="arror" fill="#000000">\n' +
            '            <path d="M6.78910369,6.46788991 L1.67486817,11.8073394 C1.55184519,11.93578 1.40246057,12 1.22671351,12 C1.05096646,12 0.901581838,11.93578 0.778558856,11.8073394 L0.198594004,11.2018349 C0.075571022,11.0733944 0.0096659251,10.9174313 0.000878712933,10.733945 C-0.00790849923,10.5504586 0.0492089832,10.3944956 0.172231965,10.266055 L4.25834797,6 L0.172231965,1.73394495 C0.0492089832,1.60550445 -0.00790849923,1.44954142 0.000878712933,1.26605505 C0.0096659251,1.08256867 0.075571022,0.926605645 0.198594004,0.798165138 L0.778558856,0.19266055 C0.901581838,0.0642200435 1.05096646,0 1.22671351,0 C1.40246057,0 1.55184519,0.0642200435 1.67486817,0.19266055 L6.78910369,5.53211009 C6.9297011,5.6605506 7,5.81651362 7,6 C7,6.18348638 6.9297011,6.3394494 6.78910369,6.46788991 Z" id=""></path>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>'
        ],
        responsive: {
            320: {
                items: 1,
                fixedWidth: 320,
            },
            375: {
                items: 1,
                fixedWidth: 375,
            },
            992: {
                items: 3,
                fixedWidth: 480,
            }
        },
    });
}
if ($('.homepage').length > 0) {
    if (document.getElementById('hp-collection-slider')) {
        var slider_first = tns({
            preventActionWhenRunning: 'true',
            preventScrollOnTouch: 'auto',
            container: "#hp-collection-slider",
            items: 1,
            swipeAngle: 20,
            speed: 700,
            loop: false,

            center: true,
            mouseDrag: false,
            navContainer: "#thumbnails",
            navAsThumbnails: true,
            fixedWidth: 320,
            //gutter: 500,

            responsive: {
                375: {
                    loop: false,
                    center: true,
                    items: 1,
                    fixedWidth: 375,
                },
                376: {
                    loop: false,
                    center: true,
                    items: 1,
                    fixedWidth: 375,
                    gutter: 500,
                },
                992: {
                    center: false,
                    disable: false,
                    mouseDrag: true,
                    slideBy: "1",
                    nav: false,
                    items: 2,
                    fixedWidth: 497,
                    gutter: 0,
                    controls: true,
                    controlsText: [
                        '<svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                        '    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n' +
                        '    <title></title>\n' +
                        '    <desc>Created with Sketch.</desc>\n' +
                        '    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                        '        <g id="arror" fill="#000000">\n' +
                        '            <path d="M6.78910369,6.46788991 L1.67486817,11.8073394 C1.55184519,11.93578 1.40246057,12 1.22671351,12 C1.05096646,12 0.901581838,11.93578 0.778558856,11.8073394 L0.198594004,11.2018349 C0.075571022,11.0733944 0.0096659251,10.9174313 0.000878712933,10.733945 C-0.00790849923,10.5504586 0.0492089832,10.3944956 0.172231965,10.266055 L4.25834797,6 L0.172231965,1.73394495 C0.0492089832,1.60550445 -0.00790849923,1.44954142 0.000878712933,1.26605505 C0.0096659251,1.08256867 0.075571022,0.926605645 0.198594004,0.798165138 L0.778558856,0.19266055 C0.901581838,0.0642200435 1.05096646,0 1.22671351,0 C1.40246057,0 1.55184519,0.0642200435 1.67486817,0.19266055 L6.78910369,5.53211009 C6.9297011,5.6605506 7,5.81651362 7,6 C7,6.18348638 6.9297011,6.3394494 6.78910369,6.46788991 Z" id=""></path>\n' +
                        '        </g>\n' +
                        '    </g>\n' +
                        '</svg>',
                        '<svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                        '    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n' +
                        '    <title></title>\n' +
                        '    <desc>Created with Sketch.</desc>\n' +
                        '    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                        '        <g id="arror" fill="#000000">\n' +
                        '            <path d="M6.78910369,6.46788991 L1.67486817,11.8073394 C1.55184519,11.93578 1.40246057,12 1.22671351,12 C1.05096646,12 0.901581838,11.93578 0.778558856,11.8073394 L0.198594004,11.2018349 C0.075571022,11.0733944 0.0096659251,10.9174313 0.000878712933,10.733945 C-0.00790849923,10.5504586 0.0492089832,10.3944956 0.172231965,10.266055 L4.25834797,6 L0.172231965,1.73394495 C0.0492089832,1.60550445 -0.00790849923,1.44954142 0.000878712933,1.26605505 C0.0096659251,1.08256867 0.075571022,0.926605645 0.198594004,0.798165138 L0.778558856,0.19266055 C0.901581838,0.0642200435 1.05096646,0 1.22671351,0 C1.40246057,0 1.55184519,0.0642200435 1.67486817,0.19266055 L6.78910369,5.53211009 C6.9297011,5.6605506 7,5.81651362 7,6 C7,6.18348638 6.9297011,6.3394494 6.78910369,6.46788991 Z" id=""></path>\n' +
                        '        </g>\n' +
                        '    </g>\n' +
                        '</svg>'
                    ],
                }
            },
        });

        var thumbnails = tns({
            preventActionWhenRunning: 'true',
            preventScrollOnTouch: 'auto',
            container: '#thumbnails',
            loop: false,
            items: 5,
            nav: false,
            controls: false,
            fixedWidth: 60,
            axis: "vertical"
        });

        // let _prev = document.querySelector("[data-controls='prev']"),
        //     _next = document.querySelector("[data-controls='next']");
        //
        // _prev.addEventListener('click', () => {
        //     thumbnails.goTo('prev');
        // });
        // _next.addEventListener('click', () => {
        //     thumbnails.goTo('next');
        // });

        var slider_sec = tns({
            preventActionWhenRunning: 'true',
            preventScrollOnTouch: 'auto',
            container: "#hp-collection-slider-cards",
            slideBy: "1",
            items: 1,
            mouseDrag: true,
            swipeAngle: 20,
            speed: 700,
            nav: false,
            loop: false,

            responsive: {
                320: {
                    items: 1,
                    controls: false,
                    fixedWidth: 200,
                    gutter: 16,
                    edgePadding: 16,
                },
                375: {
                    items: 2,
                    controls: false,
                    fixedWidth: 200,
                    gutter: 16,
                    edgePadding: 16,
                },
                992: {
                    disable: true
                }
            },
        });
    }
}

if ($('.outfit-product-detail').length > 0) {
    if ($('#hp-collection-slider').length > 0)
        var slider_first = tns1({
            preventActionWhenRunning: 'true',
            preventScrollOnTouch: 'auto',
            container: "#hp-collection-slider",
            items: 1,
            swipeAngle: 20,
            speed: 700,
            loop: false,

            center: true,
            mouseDrag: false,
            navContainer: "#thumbnails",
            navAsThumbnails: true,
            fixedWidth: 320,
            //gutter: 500,

            responsive: {
                375: {
                    loop: false,
                    center: true,
                    items: 1,
                    fixedWidth: 375,
                },
                376: {
                    loop: false,
                    center: true,
                    items: 1,
                    fixedWidth: 375,
                    gutter: 500,
                },
                992: {
                    center: false,
                    disable: true,
                    mouseDrag: true,
                    slideBy: "1",
                    nav: false,
                    items: 2,
                    fixedWidth: 497,
                    gutter: 0,
                    controls: true,
                    controlsText: [
                        '<svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                        '    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n' +
                        '    <title></title>\n' +
                        '    <desc>Created with Sketch.</desc>\n' +
                        '    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                        '        <g id="arror" fill="#000000">\n' +
                        '            <path d="M6.78910369,6.46788991 L1.67486817,11.8073394 C1.55184519,11.93578 1.40246057,12 1.22671351,12 C1.05096646,12 0.901581838,11.93578 0.778558856,11.8073394 L0.198594004,11.2018349 C0.075571022,11.0733944 0.0096659251,10.9174313 0.000878712933,10.733945 C-0.00790849923,10.5504586 0.0492089832,10.3944956 0.172231965,10.266055 L4.25834797,6 L0.172231965,1.73394495 C0.0492089832,1.60550445 -0.00790849923,1.44954142 0.000878712933,1.26605505 C0.0096659251,1.08256867 0.075571022,0.926605645 0.198594004,0.798165138 L0.778558856,0.19266055 C0.901581838,0.0642200435 1.05096646,0 1.22671351,0 C1.40246057,0 1.55184519,0.0642200435 1.67486817,0.19266055 L6.78910369,5.53211009 C6.9297011,5.6605506 7,5.81651362 7,6 C7,6.18348638 6.9297011,6.3394494 6.78910369,6.46788991 Z" id=""></path>\n' +
                        '        </g>\n' +
                        '    </g>\n' +
                        '</svg>',
                        '<svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                        '    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n' +
                        '    <title></title>\n' +
                        '    <desc>Created with Sketch.</desc>\n' +
                        '    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                        '        <g id="arror" fill="#000000">\n' +
                        '            <path d="M6.78910369,6.46788991 L1.67486817,11.8073394 C1.55184519,11.93578 1.40246057,12 1.22671351,12 C1.05096646,12 0.901581838,11.93578 0.778558856,11.8073394 L0.198594004,11.2018349 C0.075571022,11.0733944 0.0096659251,10.9174313 0.000878712933,10.733945 C-0.00790849923,10.5504586 0.0492089832,10.3944956 0.172231965,10.266055 L4.25834797,6 L0.172231965,1.73394495 C0.0492089832,1.60550445 -0.00790849923,1.44954142 0.000878712933,1.26605505 C0.0096659251,1.08256867 0.075571022,0.926605645 0.198594004,0.798165138 L0.778558856,0.19266055 C0.901581838,0.0642200435 1.05096646,0 1.22671351,0 C1.40246057,0 1.55184519,0.0642200435 1.67486817,0.19266055 L6.78910369,5.53211009 C6.9297011,5.6605506 7,5.81651362 7,6 C7,6.18348638 6.9297011,6.3394494 6.78910369,6.46788991 Z" id=""></path>\n' +
                        '        </g>\n' +
                        '    </g>\n' +
                        '</svg>'
                    ],
                }
            },
        });


    var thumbnails = tns1({
        preventScrollOnTouch: 'auto',
        container: '#thumbnails',
        loop: false,
        items: 5,
        nav: false,
        controls: false,
        fixedWidth: 60,
        axis: "vertical"
    });

    var slider_sec = tns1({
        preventActionWhenRunning: 'true',
        preventScrollOnTouch: 'auto',
        container: "#hp-collection-slider-cards",
        slideBy: "1",
        items: 1,
        mouseDrag: true,
        swipeAngle: 20,
        speed: 700,
        nav: false,
        loop: false,

        responsive: {
            320: {
                items: 1,
                controls: false,
                fixedWidth: 200,
                gutter: 16,
                edgePadding: 16,
            },
            375: {
                items: 2,
                controls: false,
                fixedWidth: 200,
                gutter: 16,
                edgePadding: 16,
            },
            992: {
                disable: true
            }
        },
    });
}



});