(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Remove name attribute
        $('.tinvwl_add_to_wishlist_button').removeAttr('name');

        // Add Middle Next Previous Icon
        if ($('.liva-page-navigation .nav-previous').length) {
            var htmlToAdd = '<i class="ri-layout-grid-line"></i>';
            $('.liva-page-navigation .nav-previous').after(htmlToAdd);
        }

        // Form Submit
        $(".location-option .form-check-input").on('click', function() {
            $(".location-option form").submit();
        });

        // Mobile Menu
        $('.menu li.menu-item-has-children').on('click', function(e) {
            e.stopPropagation(); // Stop the event from bubbling up to parent elements

            var $element = $(this);
            var $submenu = $element.children('ul');

            if ($element.hasClass('open')) {
                $element.removeClass('open');
                $submenu.slideUp();
                $element.find('li').removeClass('open').find('ul').slideUp(); // Close nested menus
            } else {
                $element.addClass('open');
                $submenu.stop(true, true).slideDown(); // Open the current submenu
                $element.siblings('li').removeClass('open').children('ul').slideUp(); // Close other sibling menus
                $element.siblings('li').find('li').removeClass('open').find('ul').slideUp(); // Close nested menus of siblings
            }
        });

        $('.menu>ul>li.menu-item-has-children>a').append('<span class="holder"></span>');

        $('#wmc-currency').change(function() {
            $('.liva-currency-form').submit();
        });

        $('.woocommerce .widget_price_filter .price_slider_amount input').on('input', function() {
            $(this).val($(this).val().replace(/\D/g, ''));
        });

    });

    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
            // Days, Hrs, Min, Sec JS 
            var clockdiv = $(".clockdiv");
            var countDownDate = [];

            clockdiv.each(function(index) {
                var el = $(this);
                countDownDate[index] = {};
                countDownDate[index]['el'] = el;
                countDownDate[index]['time'] = new Date(el.data('date')).getTime();
                countDownDate[index]['days'] = 0;
                countDownDate[index]['hours'] = 0;
                countDownDate[index]['seconds'] = 0;
                countDownDate[index]['minutes'] = 0;
            });

            var countdownfunction = setInterval(function() {
                $.each(countDownDate, function(index, item) {
                    var now = new Date().getTime();
                    var distance = item['time'] - now;
                    item['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    item['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    item['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    item['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
                    if (distance < 0) {
                        item['el'].find('.days').html(0);
                        item['el'].find('.hours').html(0);
                        item['el'].find('.minutes').html(0);
                        item['el'].find('.seconds').html(0);
                    } else {
                        item['el'].find('.days').html(item['days']);
                        item['el'].find('.hours').html(item['hours']);
                        item['el'].find('.minutes').html(item['minutes']);
                        item['el'].find('.seconds').html(item['seconds']);
                    }
                });
            }, 1000);

            // Banner Slide JS
            var swiper = new Swiper(".banner-slide", {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                // speed: 5000,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev",
                    prevEl: ".next",
                },
                pagination: {
                    el: ".swiper-pagination-banner",
                    clickable: true,
                },
            });

            // Banner Slide Two JS
            var swiper = new Swiper(".banner-slide2", {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev2",
                    prevEl: ".next2",
                },
                pagination: {
                    el: ".swiper-pagination-banner-grocery",
                    clickable: true,
                },
            });

            // Banner Slide Three JS
            var swiper = new Swiper(".banner-slide3", {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev",
                    prevEl: ".next",
                },
                pagination: {
                    el: ".swiper-pagination-banner-healthy",
                    clickable: true,
                },
            });

            // Product Slider JS
            var swiper = new Swiper(".product-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev",
                    prevEl: ".next",
                },
                pagination: {
                    el: ".swiper-pagination-product",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Best Product Slider JS
            var swiper = new Swiper(".best-product-slide", {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev",
                    prevEl: ".next",
                },
                pagination: {
                    el: ".swiper-pagination-best-product",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 1,
                    },
                    1440: {
                        slidesPerView: 2,
                    },
                    1600: {
                        slidesPerView: 2,
                    },
                }
            });

            // Flash Product Slider JS
            var swiper = new Swiper(".flash-products-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: false,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev7",
                    prevEl: ".next7",
                },
                pagination: {
                    el: ".swiper-pagination-flash-products",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Flash Product Slider 2 JS
            var swiper = new Swiper(".flash-products-slide2", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: false,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev7",
                    prevEl: ".next7",
                },
                pagination: {
                    el: ".swiper-pagination-flash-products2",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Top Selling Slider JS
            var swiper = new Swiper(".top-selling-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev",
                    prevEl: ".next",
                },
                pagination: {
                    el: ".swiper-pagination-top-selling",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Specials Slider JS
            var swiper = new Swiper(".specials-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev4",
                    prevEl: ".next4",
                },
                pagination: {
                    el: ".swiper-pagination-specials",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Recommended Slider JS
            var swiper = new Swiper(".recommended-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev6",
                    prevEl: ".next6",
                },
                pagination: {
                    el: ".swiper-pagination-recommended",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Monthly Slider JS
            var swiper = new Swiper(".monthly-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev5",
                    prevEl: ".next5",
                },
                pagination: {
                    el: ".swiper-pagination-monthly",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                }
            });

            // Popular Categories Slider JS
            var swiper = new Swiper(".popular-categories-slide", {
                slidesPerView: 1,
                spaceBetween: -1,
                centeredSlides: false,
                preventClicks: true,
                loop: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: ".prev3",
                    prevEl: ".next3",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 6,
                    },
                    1440: {
                        slidesPerView: 7,
                    },
                    1600: {
                        slidesPerView: 8,
                    },
                }
            });
        });
    });

    $(window).on('load', function() {

        // Preloader
        $('#preloader').fadeOut();

        // Back to Top JS
        var getId = $("#backtotop");
        if (getId.length) {
            var topbutton = $("#backtotop");
            topbutton.on("click", function(e) {
                $("html, body").animate({
                    scrollTop: 0
                }, "smooth");
            });

            $(window).on("scroll", function() {
                if ($(document).scrollTop() > 200) {
                    topbutton.css("opacity", "1");
                } else {
                    topbutton.css("opacity", "0");
                }
            });
        }
    });

    // ScrollCue JS
    scrollCue.init();

    // Init BS Tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Background Images JS
    var elements = document.querySelectorAll("[data-background]");

    // Loop through each element
    elements.forEach(function(element) {
        // Get the value of the "data-background" attribute
        var backgroundValue = element.getAttribute("data-background");

        // Set the "background-image" CSS property
        element.style.backgroundImage = "url(" + backgroundValue + ")";
    });

    // Radius Range Slider JS
    try {
        const slider = document.getElementById('sliderPrice');
        const rangeMin = parseInt(slider.dataset.min);
        const rangeMax = parseInt(slider.dataset.max);
        const step = parseInt(slider.dataset.step);
        const filterInputs = document.querySelectorAll('input.filter__input');
        noUiSlider.create(slider, {
            start: [rangeMin, rangeMax],
            connect: true,
            step: step,
            range: {
                'min': rangeMin,
                'max': rangeMax
            },

            // make numbers whole
            format: {
                to: value => value,
                from: value => value
            }
        });

        // bind inputs with noUiSlider 
        slider.noUiSlider.on('update', (values, handle) => {
            filterInputs[handle].value = values[handle];
        });

        filterInputs.forEach((input, indexInput) => {
            input.addEventListener('change', () => {
                slider.noUiSlider.setHandle(indexInput, input.value);
            })
        });
    } catch (err) {}

    // Plus Minus JS
    try {
        var resultEl = document.querySelector(".resultSet"),
            plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
        for (var i = 0; i < plusMinusWidgets.length; i++) {
            plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
            plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
            plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
        }

        function clickHandler(event) {
            var countEl = event.target.parentNode.querySelector(".count");
            if (event.target.className.match(/\bminusBtn\b/)) {
                countEl.value = Number(countEl.value) - 1;
            } else if (event.target.className.match(/\bplusBtn\b/)) {
                countEl.value = Number(countEl.value) + 1;
            }
            triggerEvent(countEl, "change");
        };

        function changeHandler(event) {
            resultEl.value = 0;
            for (var i = 0; i < plusMinusWidgets.length; i++) {
                resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
            }
        };

        function triggerEvent(el, type) {
            if ('createEvent' in document) {
                var e = document.createEvent('HTMLEvents');
                e.initEvent(type, false, true);
                el.dispatchEvent(e);
            } else {
                var e = document.createEventObject();
                e.eventType = type;
                el.fireEvent('on' + e.eventType, e);
            }
        }
    } catch {}

    // Show/Hide Toggle
    const getSwitchToggleId = document.getElementById('switch-toggle');
    if (getSwitchToggleId) {
        const switchtoggle = document.querySelector(".switch-toggle");
        const savedTheme = localStorage.getItem("liva_theme");
        if (savedTheme) {
            document.body.setAttribute("data-theme", savedTheme);
        }
        switchtoggle.addEventListener("click", function() {
            if (document.body.getAttribute("data-theme") === "hide") {
                document.body.setAttribute("data-theme", "show");
                localStorage.setItem("liva_theme", "show");
            } else {
                document.body.setAttribute("data-theme", "hide");
                localStorage.setItem("liva_theme", "hide");
            }
        });
    }
}(jQuery));