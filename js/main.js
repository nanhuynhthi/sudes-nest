(function () {
    //km header
    document.addEventListener('DOMContentLoaded', function () {
        var index = 0,
            stop = false,
            liEls = document.querySelectorAll('.js-promo > li'),
            num = liEls.length;

        if (num === 0) return; // Nếu không có phần tử nào thì không chạy

        function shippingflipInX() {
            if (stop) return;
            liEls.forEach(el => el.classList.add('see-none'));
            liEls.forEach(el => el.classList.remove('animated', 'flipInX', 'see-block'));

            index = (index + 1) % num; // Lặp vòng nếu đến cuối
            liEls[index].classList.remove('see-none');
            liEls[index].classList.add('animated', 'flipInX', 'see-block');
        }

        var hdtimer = setInterval(shippingflipInX, 5000);

        var promoEl = document.querySelector('.js-promo');
        if (promoEl) {
            promoEl.addEventListener('mouseover', function () {
                stop = true;
                clearInterval(hdtimer);
            });

            promoEl.addEventListener('mouseout', function () {
                stop = false;
                hdtimer = setInterval(shippingflipInX, 5000);
            });
        }
    });

    //mes footer zalo, face
    $(function(){
		var i = 1;
		var n = $('.ser-icon .process .item').length;
		var len = $('.ser-icon .process').width()/n;
		var pos = new WebKitCSSMatrix($('.ser-icon .process').css('transform'));
		$('.ser-icon').removeClass('unsee');
		function nextFrame(){
			if(i < n) {
				i++;
				var pos2=new WebKitCSSMatrix($('.ser-icon .process').css('transform'));
				$('.ser-icon .process').css('transform','translateX('+(pos2.m41-len)+'px)');
				setTimeout(nextFrame, 800);
			}else{
				$('.ser-icon').addClass('unsee');
				i=1;
				$('.ser-icon .process').css('transform','translateX('+(pos.m41)+'px)');
				setTimeout(beginFrame, 2000);
			}
		};
		function beginFrame(){
			$('.ser-icon').removeClass('unsee');
			setTimeout(nextFrame, 900);
		};
		setTimeout(beginFrame, 2000);
		$('.close-icon').click(function(event){
			$('.element').toggleClass('unsee');
		});
	});

    $(function(){
    //tab menu sp
        const header = document.querySelector('header.header');
        let headerHeight = header.offsetHeight;
        let resizeWindow = window.innerWidth;
        let offsetStickyHeader = header.offsetHeight;
        let offsetStickyDown = 0;
        let resizeTimer;

        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content-mb');

        const handleResize = () => {
            if (resizeTimer) clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => {
                const newWidth = window.innerWidth;

                if (resizeWindow !== newWidth) {
                    header.classList.remove('hSticky');
                    header.style.minHeight = '';

                    headerHeight = header.offsetHeight;
                    header.style.minHeight = `${headerHeight}px`;

                    resizeWindow = newWidth;
                }
            }, 200);
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > offsetStickyHeader && scrollTop > offsetStickyDown) {
                header.classList.add('hSticky');
            }

            if (scrollTop <= offsetStickyDown && scrollTop <= offsetStickyHeader) {
                header.classList.remove('hSticky');
            }

            offsetStickyDown = scrollTop;
        };

        const handleTabClick = (tabLink) => {
            const tabId = tabLink.dataset.tab;

            tabLinks.forEach((link) => link.classList.remove('active'));
            tabLink.classList.add('active');

            tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        };

        const initializeTabs = () => {
            if (window.innerWidth <= 991) {
                const tabMenu1 = document.getElementById('tab-menu-1');
                const tabLinkMenu1 = document.querySelector('.tab-link[data-tab="tab-menu-1"]');

                tabMenu1.classList.add('active');
                tabLinkMenu1.classList.add('active');

                tabLinks.forEach((tabLink) => {
                    tabLink.addEventListener('click', () => handleTabClick(tabLink));
                });
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        tabLinks.forEach((tabLink) => {
            tabLink.addEventListener('click', () => handleTabClick(tabLink));
        });

        document.addEventListener('DOMContentLoaded', initializeTabs);
    });
})();

//main server

$(document).ready(function ($) {
	"use strict";
	awe_backtotop();
});


$(document).ready(function(){
    $('.dropdown-toggle').click(function() {
        $(this).parent().toggleClass('open'); 	
    }); 
    $('.close-pop').click(function() {
        $('#popup-cart').removeClass('opencart');
        $('body').removeClass('opacitycart');
    });
    $(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
        hidePopup('.awe-popup'); 	
        setTimeout(function(){
            $('.loading').removeClass('loaded-content');
        },500);
        return false;
    })
});

var wDWs = $(window).width();

$(document).ready(function(){
    if (wDWs < 767) {
        $('.footer-click h4').click(function(e){
            $(this).toggleClass('cls_mn').next().slideToggle();
            $(this).next('ul').toggleClass("current");
        });
    }
    if (wDWs >= 992) {
        $('.header .header-menu').mouseenter(function () {
            var template_nav_cate = $('script[data-template="header_nav_cate"]').html();
            if (template_nav_cate) {
                $('div[data-section="header_nav_cate"]').html(template_nav_cate);
            }
            $('script[data-template="header_nav"]').each(function () {
                var template_nav = $(this).html();
                var section = $(this).closest('li[data-section="header_nav"]');
                if (template_nav) {
                    $(this).replaceWith(template_nav);
                }
            });
            
        });
    }
    if (wDWs <= 991) {
        $('.menu-bar').on('click', function(){
            $('.opacity_menu').addClass('current');
        })
        $('.opacity_menu').on('click', function(){
            $('.opacity_menu').removeClass('current');
        })
        $('.header-action-item.search-mobile').click(function(e){
            e.preventDefault();
            $('.search-mobile.search_form').toggleClass('open');
        });
        $('.input-group-btn .search-close').click(function(e){
            e.preventDefault();
            $('.search-mobile.search_form').toggleClass('open');
        });

        $('#btn-menu-mobile').on('click', function(){
            var template_nav_cate = $('script[data-template="header_nav_cate"]').html();
            if(template_nav_cate) {
                $('div[data-section="header_nav_cate"]').html(template_nav_cate);
            }
            $('script[data-template="header_nav"]').each(function() {
                var template_nav = $(this).html();
                var section = $(this).closest('li[data-section="header_nav"]');
                if (template_nav) {
                    $(this).replaceWith(template_nav);
                }
            });
            
            $('#nav li > .open_mnu').off().click(function(e){
                $(this).closest('li').find('> .dropdown-menu').slideToggle("fast");
                $(this).closest('li').toggleClass("current");
                $(this).closest('li').find('> .dropdown-menu').toggleClass("current");
                $(this).toggleClass('current');
                return false;  
            });
            $('.sudes-main-cate li > .open_mnu').off().click(function(e){
                $(this).closest('li').find('> .menu-child').slideToggle("fast");
                $(this).closest('li').toggleClass("current");
                $(this).closest('li').find('> .menu-child').toggleClass("current");
                $(this).toggleClass('current');
                return false;  
            });
            $('.header-menu').addClass('current');
            $('.mobile-nav-overflow').toggleClass('open');

        });
        $('.header-menu .title_menu .close-mb-menu').on('click', function(){
            $(this).closest('.header-menu').removeClass('current');
            $('.mobile-nav-overflow').toggleClass('open');

        });
        $('.mobile-nav-overflow').on('click', function(){
            $('.header-menu').removeClass('current');
            $(this).toggleClass('open');
        });
    }
});

function awe_backtotop() { 
	$(window).scroll(function() {
		$(this).scrollTop() > 200 ? $('.backtop').addClass('show') : $('.backtop').removeClass('show')
	});
	$('.backtop').click(function() {
		return $("body,html").animate({
			scrollTop: 0
		}, 800), !1
	});
} window.awe_backtotop=awe_backtotop;

$(document).ready(function(){
    $('.dropdown-toggle').click(function() {
        $(this).parent().toggleClass('open'); 	
    }); 
    $('.btn-close').click(function() {
        $(this).parents('.dropdown').toggleClass('open');
    }); 
    $(document).on('keydown','#qty, .number-sidebar',function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
    $(document).on('click','.qtyplus',function(e){
        e.preventDefault();   
        fieldName = $(this).attr('data-field'); 
        var currentVal = parseInt($('input[data-field='+fieldName+']').val());
        if (!isNaN(currentVal)) { 
            $('input[data-field='+fieldName+']').val(currentVal + 1);
        } else {
            $('input[data-field='+fieldName+']').val(0);
        }
    });
    $(document).on('click','.qtyminus',function(e){
        e.preventDefault(); 
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[data-field='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 1) {          
            $('input[data-field='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[data-field='+fieldName+']').val(1);
        }
    });
    $('.open-filters').click(function(e){
        e.stopPropagation();
        $(this).toggleClass('openf');
        $('.dqdt-sidebar').toggleClass('openf');
        $('.opacity_sidebar').toggleClass('openf');
    });
    $('.opacity_sidebar').click(function(e){
        $('.opacity_sidebar').removeClass('openf');
        $('.dqdt-sidebar, .open-filters').removeClass('openf')
    });
    $('.menubutton').click(function(e){
        e.stopPropagation();
        $('.wrapmenu_right').toggleClass('open_sidebar_menu');
        $('.opacity_menu').toggleClass('open_opacity');
    });
    $('.opacity_menu').click(function(e){
        $('.wrapmenu_right').removeClass('open_sidebar_menu');
        $('.opacity_menu').removeClass('open_opacity');
    });
    $(".menubar_pc").click(function(){ 
        $('.wrapmenu_full').slideToggle('fast');
        $('.wrapmenu_full, .cloed').toggleClass('open_menu');
        $('.dqdt-sidebar, .open-filters').removeClass('openf')
    });
    $(".cloed").click(function(){ 
        $(this).toggleClass('open_menu');
        $('.wrapmenu_full').slideToggle('fast');
    });
    $(".opacity_menu").click(function(){ 
        $('.opacity_menu').removeClass('open_opacity');
    });
    if ($('.dqdt-sidebar').hasClass('openf')) {
        $('.wrapmenu_full').removeClass('open_menu');
    } 
    $('.ul_collections li > svg').click(function(){
        $(this).parent().toggleClass('current');
        $(this).toggleClass('fa-angle-down fa-angle-right');
        $(this).next('ul').slideToggle("fast");
        $(this).next('div').slideToggle("fast");
    });
    $('.searchion').mouseover(function() {
        $('.searchmini input').focus();                    
    })
    $('.quenmk').on('click', function() {
        $('#login').toggleClass('hidden');
        $('.h_recover').slideToggle();
    });
    $('a[data-toggle="collapse"]').click(function(e){
        if ($(window).width() >= 767) { 
            e.preventDefault();
            e.stopPropagation();
        }    
    });

    $('body').click(function(event) {
        if (!$(event.target).closest('.collection-selector').length) {
            $('.list_search').css('display','none');
        };
    });


    /*JS XEM THÊM MENU DANH MỤC SP*/
    $('.xemthem').click(function(e){
        e.preventDefault();
        $('ul.ul_menu>li').css('display','block');
        $(this).hide();
        $('.thugon').show();
    })
    $('.thugon').click(function(e){
        e.preventDefault();
        $('ul.ul_menu>li').css('display','none');
        $(this).hide();
        $('.xemthem').show();
    })
    $('.ul_menu .lev-1').click(function(e){
        var lil = $('.ul_menu .lev-1').length;
        var divHeight = $('.list_menu_header').height();
        if(lil = 2){
            $('.ul_menu .ul_content_right_1').css('min-height', divHeight);
        }
    });
    window.onload = function(e){ 
        var lil = $('.ul_menu .lev-1').length;
        var vw = $(window).width();
        if(lil < 9 && vw < 1500 && vw > 1200){
            $('li.hidden-lgg').remove();
        }
    }

    /*click bộ lọc*/
    $('.bolocs').click(function(e){
        e.stopPropagation();
        $('.aside-filter').slideToggle();
    });
    $('.aside-filter').click(function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $('.aside-filter').slideUp();
    });
});
function callback_toggle() {
	$('.bolocs').click(function(e) {
		e.stopPropagation();
		$('.aside-filter').toggleClass('show');
	});
	$('.aside-filter').click(function(e) {
		e.stopPropagation();
	});
}
if (wDWs > 992) {
	function horizontalNav() {
		return {
			wrapper: $('.navigation-horizontal'),
			navigation: $('.navigation-horizontal .nav'),
			item: $('.navigation-horizontal .nav .nav-item'),
			totalStep: 0,
			onCalcNavOverView: function(){
				let itemHeight = this.item.eq(0).outerWidth(),
					lilength = this.item.length,
					total = 0;
				for (var i = 0; i < lilength; i++) {
					itemHeight = this.item.eq(i).outerWidth();
					total += itemHeight;
				}
				return Math.ceil(total)
			},
			onCalcTotal: function(){
				let  navHeight = this.navigation.width();
				return Math.ceil(navHeight)
			},
			init:function(){
				this.totalStep = this.onCalcNavOverView();
				this.totalTo = this.onCalcTotal();
				if(this.totalStep > this.totalTo){
					this.wrapper.addClass('overflow')
				} 
			}
		}	
	}
}

$(document).ready(function ($) {
	if(window.matchMedia('(min-width: 992px)').matches){
		horizontalNav().init()
		$(window).on('resize',()=>horizontalNav().init())
		var margin_left = 0;
		$('#prev').on('click', function(e) {
			e.preventDefault();
			animateMargin(190);
		});
		$('#next').on('click', function(e) {
			e.preventDefault();
			animateMargin(-190);
		});
		const animateMargin = ( amount ) => {
			margin_left = Math.min(0, Math.max( getMaxMargin(), margin_left + amount ));
			$('ul.nav').animate({
				'margin-left': margin_left
			}, 300);
		};
		const getMaxMargin = () => 
		$('ul.nav').parent().width() - $('ul.nav')[0].scrollWidth;
	}
});

$(document).ready(function(){
	$('.header_tim_kiem .search-bar input.input-group-field, .search-mobile .search-bar input.input-group-field').focus(function(eventClick) {
		eventClick.stopPropagation();
		$('.search-suggest').addClass('open');
	});

	$(document).click( function(eventClick){
		if ( !$(eventClick.target).closest('.header_tim_kiem .search-bar, .search-mobile .search-bar').length ) {
			$('.search-suggest').removeClass('open');
		}
	});


    $('.show-all-col .view-all-col').click(function(e){
        $(this).toggleClass('d-none');
        $('.show-all-col .aside-content-all').slideToggle();
        $('.aside-content-sub').slideToggle();
        $('.show-all-col .less-all-col').toggleClass('d-none');
    });

    $('.show-all-col .less-all-col').click(function(e){
        $(this).toggleClass('d-none');
        $('.aside-content-sub').slideToggle();
        $('.show-all-col .aside-content-all').slideToggle();
        $('.show-all-col .view-all-col').toggleClass('d-none');
    });

    // theme.alert = (function() {
    //     var $alert = $('#js-global-alert'),
    //         $title = $('#js-global-alert .alert-heading'),
    //         $content = $('#js-global-alert .alert-content'),
    //         close = '#js-global-alert .close';
    //     var timeoutID = null;
    // });

	// $(document).on('click', close, function() {
	// 	$alert.removeClass('active');
	// });

});

$(document).ready(function(){
	$(document).on('click', '.js-copy',function(e){
		e.preventDefault();
		var copyText = $(this).attr('data-copy');
		var copyTextarea = document.createElement("textarea");
		copyTextarea.textContent = copyText;
		copyTextarea.style.position = "fixed";
		document.body.appendChild(copyTextarea);
		copyTextarea.select();
		document.execCommand("copy"); 
		document.body.removeChild(copyTextarea);
		var cur_text = $(this).text();
		var $cur_btn = $(this);
		$(this).addClass("iscopied");
		$(this).text("Đã lưu");
		setTimeout(function(){
			$cur_btn.removeClass("iscopied");
			$cur_btn.text(cur_text);
		},1500)
	})
	$('.info-button').click(function() {
		var code = $(this).attr('data-coupon'),
			time = $(this).attr('data-time'),
			dieukien = $(this).attr('data-content');
		$('.popup-coupon .code').html(code);
		$('.popup-coupon .time').html(time);
		$('.popup-coupon .dieukien').html(dieukien);
		$('.popup-coupon, .backdrop__body-backdrop___1rvky').addClass('active'); 

	});
	$(document).on('click','.backdrop__body-backdrop___1rvky, .close-popup-coupon', function() {   
		$('.backdrop__body-backdrop___1rvky,.popup-coupon').removeClass('active');
		return false;
	})
});