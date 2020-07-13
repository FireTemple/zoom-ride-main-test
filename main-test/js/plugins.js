// Fancybox,Isotope,Menu, and other plugins minified

(function ($) {
    "use strict";
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        var limoking_touch_device = !0
    } else {
        var limoking_touch_device = !1
    }
    $.extend({
        getUrlVars: function () {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1]
            }
            return vars
        }, getUrlVar: function (name) {
            return $.getUrlVars()[name]
        }
    });

    function limoking_set_item_outer_nav() {
        $('.blog-item-wrapper > .limoking-nav-container').each(function () {
            var container = $(this).siblings('.blog-item-holder');
            var child = $(this).children();
            child.css({'top': container.position().top, 'bottom': 'auto', height: container.height() - 50})
        });
        $('.portfolio-item-wrapper > .limoking-nav-container').each(function () {
            var container = $(this).siblings('.portfolio-item-holder');
            var child = $(this).children();
            child.css({'top': container.position().top, 'bottom': 'auto', height: container.height() - 40})
        })
    }

    $.fn.limoking_flexslider = function () {
        if (typeof ($.fn.lmk_flexslider) == 'function') {
            $(this).each(function () {
                var flex_attr = {
                    animation: 'fade',
                    animationLoop: !0,
                    prevText: '<i class="icon-angle-left" ></i>',
                    nextText: '<i class="icon-angle-right" ></i>',
                    useCSS: !1
                };
                if ($(this).attr('data-pausetime')) {
                    flex_attr.slideshowSpeed = parseInt($(this).attr('data-pausetime'))
                }
                if ($(this).attr('data-slidespeed')) {
                    flex_attr.animationSpeed = parseInt($(this).attr('data-slidespeed'))
                }
                if ($(this).attr('data-type') == 'carousel') {
                    flex_attr.move = 1;
                    flex_attr.animation = 'slide';
                    if ($(this).closest('.limoking-item-no-space').length > 0) {
                        flex_attr.itemWidth = $(this).width() / parseInt($(this).attr('data-columns'));
                        flex_attr.itemMargin = 0
                    } else {
                        flex_attr.itemWidth = (($(this).width() + 30) / parseInt($(this).attr('data-columns'))) - 30;
                        flex_attr.itemMargin = 30
                    }
                } else {
                    if ($(this).attr('data-effect')) {
                        flex_attr.animation = $(this).attr('data-effect')
                    }
                }
                if ($(this).attr('data-columns')) {
                    flex_attr.minItems = parseInt($(this).attr('data-columns'));
                    flex_attr.maxItems = parseInt($(this).attr('data-columns'))
                }
                if ($(this).attr('data-nav-container')) {
                    var flex_parent = $(this).parents('.' + $(this).attr('data-nav-container')).siblings('.limoking-nav-container');
                    if (flex_parent.find('.limoking-flex-prev').length > 0 || flex_parent.find('.limoking-flex-next').length > 0) {
                        flex_attr.controlNav = !1;
                        flex_attr.directionNav = !1;
                        flex_attr.start = function (slider) {
                            flex_parent.find('.limoking-flex-next').click(function () {
                                slider.flexAnimate(slider.getTarget("next"), !0)
                            });
                            flex_parent.find('.limoking-flex-prev').click(function () {
                                slider.flexAnimate(slider.getTarget("prev"), !0)
                            });
                            limoking_set_item_outer_nav();
                            $(window).resize(function () {
                                limoking_set_item_outer_nav()
                            })
                        }
                    } else {
                        flex_attr.controlNav = !1;
                        flex_attr.controlsContainer = flex_parent.find('.nav-container')
                    }
                }
                $(this).lmk_flexslider(flex_attr)
            })
        }
    }
    $.fn.limoking_nivoslider = function () {
        if (typeof ($.fn.nivoSlider) == 'function') {
            $(this).each(function () {
                var nivo_attr = {};
                if ($(this).attr('data-pausetime')) {
                    nivo_attr.pauseTime = parseInt($(this).attr('data-pausetime'))
                }
                if ($(this).attr('data-slidespeed')) {
                    nivo_attr.animSpeed = parseInt($(this).attr('data-slidespeed'))
                }
                if ($(this).attr('data-effect')) {
                    nivo_attr.effect = $(this).attr('data-effect')
                }
                $(this).nivoSlider(nivo_attr)
            })
        }
    }
    $.fn.limoking_isotope = function () {
        if (!$(this).is('[data-layout="masonry"]')) {
            $(this).find('.limoking-modern-portfolio.limoking-item').each(function () {
                $(this).css('margin-bottom', parseInt($(this).css('margin-right')) * 2)
            })
        }
        if (typeof ($.fn.isotope) == 'function') {
            $(this).each(function () {
                var layout = ($(this).attr('data-layout')) ? $(this).attr('data-layout') : 'fitRows';
                if (layout == 'fitRows') return;
                var isotope_element = $(this);
                isotope_element.children('.clear').remove();
                isotope_element.isotope({layoutMode: layout});
                $(window).resize(function () {
                    isotope_element.find('.limoking-modern-portfolio.limoking-item').each(function () {
                        $(this).css('margin-bottom', parseInt($(this).css('margin-right')) * 2)
                    });
                    isotope_element.isotope()
                })
            })
        }
    }
    $.fn.limoking_fancybox = function () {
        if (typeof ($.fn.fancybox) == 'function') {
            var fancybox_attr = {
                nextMethod: 'resizeIn',
                nextSpeed: 250,
                prevMethod: !1,
                prevSpeed: 250,
                helpers: {media: {}}
            };
            if (typeof ($.fancybox.helpers.thumbs) == 'object') {
                fancybox_attr.helpers.thumbs = {width: 50, height: 50}
            }
            $(this).fancybox(fancybox_attr)
        }
    }
    $.fn.limoking_fluid_video = function () {
        $(this).find('iframe[src*="youtube"], iframe[src*="vimeo"]').each(function () {
            if ($(this).closest('.ls-container, .master-slider').length <= 0) {
                if (($(this).is('embed') && $(this).parent('object').length) || $(this).parent('.fluid-width-video-wrapper').length) {
                    return
                }
                if (!$(this).attr('id')) {
                    $(this).attr('id', 'limoking-video-' + Math.floor(Math.random() * 999999))
                }
                var ratio = $(this).height() / $(this).width();
                $(this).removeAttr('height').removeAttr('width');
                try {
                    $(this).wrap('<div class="limoking-fluid-video-wrapper"></div>').parent().css('padding-top', (ratio * 100) + "%");
                    $(this).attr('src', $(this).attr('src'))
                } catch (e) {
                }
            }
        })
    }
    $.fn.limoking_pie_chart = function () {
        if (typeof ($.fn.easyPieChart) == 'function') {
            $(this).each(function () {
                var limoking_chart = $(this);
                $(this).easyPieChart({
                    animate: 1200,
                    lineWidth: limoking_chart.attr('data-linewidth') ? parseInt(limoking_chart.attr('data-linewidth')) : 8,
                    size: limoking_chart.attr('data-size') ? parseInt(limoking_chart.attr('data-size')) : 155,
                    barColor: limoking_chart.attr('data-color') ? limoking_chart.attr('data-color') : '#a9e16e',
                    trackColor: limoking_chart.attr('data-bg-color') ? limoking_chart.attr('data-bg-color') : '#f2f2f2',
                    backgroundColor: limoking_chart.attr('data-background'),
                    scaleColor: !1,
                    lineCap: 'square'
                });
                if ($.browser.msie && (parseInt($.browser.version) <= 8)) return;

                function limit_limoking_chart_size() {
                    if (limoking_chart.parent().width() < parseInt(limoking_chart.attr('data-size'))) {
                        var max_width = limoking_chart.parent().width() + 'px';
                        limoking_chart.css({'max-width': max_width, 'max-height': max_width})
                    }
                }

                limit_limoking_chart_size();
                $(window).resize(function () {
                    limit_limoking_chart_size()
                })
            })
        }
    }
    $.fn.limoking_init_menu_item = function () {
        $(this).find('.limoking-menu-item-content').each(function () {
            var item_width = $(this).width();
            var title_width = $(this).children('.limoking-menu-title').width();
            var price_width = $(this).children('.limoking-menu-price').width();
            if (item_width - title_width - price_width - 40 > 0) {
                $(this).children('.limoking-list-menu-gimmick').css({
                    width: item_width - title_width - price_width - 40,
                    left: title_width + 20
                })
            } else {
                $(this).children('.limoking-list-menu-gimmick').css('width', 0)
            }
        })
    }
    $.fn.column_service_hover_height = function () {
        var max_height = 0;
        $(this).css('height', 'auto');
        $(this).each(function () {
            if ($(this).height() > max_height) {
                max_height = $(this).height()
            }
        });
        $(this).css('height', max_height)
    }
    $(document).ready(function () {
        $('.limoking-list-menu ').limoking_init_menu_item();
        $(window).resize(function () {
            $('.limoking-list-menu ').limoking_init_menu_item()
        });
        $('body').limoking_fluid_video();
        $('.limoking-top-woocommerce-wrapper').click(function () {
            var right_pos = $(this).closest('.limoking-header-container').width() - $(this).position().left - $(this).outerWidth(!0);
            $(this).children('.limoking-top-woocommerce').css('right', right_pos).slideToggle(200)
        });
        $('.limoking-accordion-item').each(function () {
            var multiple_tab = $(this).hasClass('limoking-multiple-tab');
            $(this).children('.accordion-tab').children('.accordion-title').click(function () {
                var current_tab = $(this).parent();
                if (current_tab.hasClass('active')) {
                    current_tab.removeClass('pre-active');
                    $(this).children('i').removeClass('icon-minus').addClass('icon-plus');
                    $(this).siblings('.accordion-content').slideUp(function () {
                        current_tab.removeClass('active')
                    })
                } else {
                    current_tab.addClass('pre-active');
                    $(this).children('i').removeClass('icon-plus').addClass('icon-minus');
                    $(this).siblings('.accordion-content').slideDown(function () {
                        current_tab.addClass('active')
                    })
                }
                if (!multiple_tab) {
                    current_tab.siblings().removeClass('pre-active');
                    current_tab.siblings().children('.accordion-title').children('i').removeClass('icon-minus').addClass('icon-plus');
                    current_tab.siblings().children('.accordion-content').slideUp(function () {
                        $(this).parent().removeClass('active')
                    })
                }
            })
        });
        $('.tab-title-wrapper').children().click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var selected_index = $(this).index() + 1;
            $(this).parent().siblings('.tab-content-wrapper').children(':nth-child(' + selected_index + ')').each(function () {
                $(this).siblings().removeClass('active').hide();
                $(this).fadeIn(function () {
                    $(this).addClass('active')
                })
            })
        });
        var inital_tab = $.getUrlVar('tab');
        if (inital_tab) {
            $('#' + inital_tab.replace(',', ', #')).each(function () {
                $(this).trigger('click')
            })
        }
        $('.limoking-code-item .limoking-code-title').click(function () {
            var parent = $(this).parent();
            if (parent.hasClass('active')) {
                $(this).children('i').removeClass('icon-minus').addClass('icon-plus');
                $(this).siblings('.limoking-code-content').slideUp(function () {
                    parent.removeClass('active')
                })
            } else {
                $(this).children('i').removeClass('icon-plus').addClass('icon-minus');
                $(this).siblings('.limoking-code-content').slideDown(function () {
                    parent.addClass('active')
                })
            }
        });
        $('.limoking-parallax-wrapper').each(function () {
            if ($(this).hasClass('limoking-background-image')) {
                var parallax_section = $(this);
                var parallax_speed = parseFloat(parallax_section.attr('data-bgspeed'));
                if (parallax_speed == 0 || limoking_touch_device) return;
                if (parallax_speed == -1) {
                    parallax_section.css('background-attachment', 'fixed');
                    parallax_section.css('background-position', 'center center');
                    return
                }
                $(window).scroll(function () {
                    if (($(window).scrollTop() + $(window).height() > parallax_section.offset().top) && ($(window).scrollTop() < parallax_section.offset().top + parallax_section.outerHeight())) {
                        var scroll_pos = 0;
                        if ($(window).height() > parallax_section.offset().top) {
                            scroll_pos = $(window).scrollTop()
                        } else {
                            scroll_pos = $(window).scrollTop() + $(window).height() - parallax_section.offset().top
                        }
                        parallax_section.css('background-position', 'center ' + (-scroll_pos * parallax_speed) + 'px')
                    }
                })
            } else if ($(this).hasClass('limoking-background-video')) {
                if (typeof ($.fn.mb_YTPlayer) == 'function') {
                    $(this).children('.limoking-bg-player').mb_YTPlayer()
                }
            } else {
                return
            }
        });
        if (typeof ($.fn.superfish) == 'function') {
            $('#limoking-main-navigation .sf-mega > ul').each(function () {
                $(this).children('li').each(function () {
                    var current_item = $(this);
                    current_item.replaceWith($('<div />').addClass('sf-mega-section').addClass(current_item.attr('data-column')).attr('data-size', current_item.attr('data-size')).html($('<div />').addClass('sf-mega-section-inner').addClass(current_item.attr('class')).attr('id', current_item.attr('id')).html(current_item.html())))
                });
                $(this).replaceWith(this.innerHTML)
            });
            $('#limoking-main-navigation .sf-mega').each(function () {
                var sf_mega = $(this);
                $(this).show();
                var row = 0;
                var column = 0;
                var max_height = 0;
                sf_mega.children('.sf-mega-section').each(function () {
                    if (column % 60 == 0) {
                        if (row != 0) {
                            sf_mega.children('[data-row="' + row + '"]').children('.sf-mega-section-inner').height(max_height - 50);
                            max_height = 0
                        }
                        row++;
                        $(this).addClass('first-column')
                    }
                    $(this).attr('data-row', row);
                    column += eval('60*' + $(this).attr('data-size'));
                    if ($(this).height() > max_height) {
                        max_height = $(this).height()
                    }
                });
                sf_mega.children('[data-row="' + row + '"]').children('.sf-mega-section-inner').height(max_height - 50)
            });
            $('#limoking-main-navigation').superfish({speed: 'fast'})
        }
        if (typeof ($.fn.dlmenu) == 'function') {
            $('#limoking-responsive-navigation').each(function () {
                $(this).find('.dl-submenu').each(function () {
                    if ($(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#') {
                        var parent_nav = $('<li class="menu-item limoking-parent-menu"></li>');
                        parent_nav.append($(this).siblings('a').clone());
                        $(this).prepend(parent_nav)
                    }
                });
                $(this).dlmenu()
            })
        }
        $('.limoking-gallery-thumbnail').each(function () {
            var thumbnail_container = $(this).children('.limoking-gallery-thumbnail-container');
            $(this).find('.gallery-item').click(function () {
                var selected_slide = thumbnail_container.children('[data-id="' + $(this).attr('data-id') + '"]');
                if (selected_slide.css('display') == 'block') return !1;
                var image_width = selected_slide.children('img').attr('width');
                var image_ratio = selected_slide.children('img').attr('height') / image_width;
                var temp_height = image_ratio * Math.min(thumbnail_container.width(), image_width);
                thumbnail_container.animate({'height': temp_height});
                selected_slide.fadeIn().siblings().hide();
                return !1
            });
            $(window).resize(function () {
                thumbnail_container.css('height', 'auto')
            })
        });
        $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').not('[data-rel="fancybox"], [href*="pinterest"]').attr('data-rel', 'fancybox');
        $('[data-rel="fancybox"]').limoking_fancybox();
        $('.limoking-image-link-shortcode').hover(function () {
            var hover_opacity = 0.8;
            if ($(this).parent('.limoking-link-type-content').length > 0) {
                hover_opacity = 0.5
            }
            $(this).find('.limoking-image-link-overlay').animate({opacity: hover_opacity}, 150);
            $(this).find('.limoking-image-link-icon').animate({opacity: 1}, 150);
            var frame_content = $(this).find('.limoking-image-frame-content');
            if (frame_content.length > 0) {
                frame_content.css('margin-top', -frame_content.height() / 2).animate({opacity: 1}, 150)
            }
        }, function () {
            $(this).find('.limoking-image-link-overlay').animate({opacity: 0}, 150);
            $(this).find('.limoking-image-link-icon').animate({opacity: 0}, 150);
            $(this).find('.limoking-image-frame-content').animate({opacity: 0}, 150)
        });
        $('.limoking-personnel-item.round-style .personnel-item').each(function () {
            var current_item = $(this);

            function limoking_set_round_personnel_height() {
                current_item.find('.personnel-item-inner').each(function () {
                    $(this).css('margin-top', -($(this).height() / 2))
                })
            }

            limoking_set_round_personnel_height();
            $(window).resize(function () {
                limoking_set_round_personnel_height()
            })
        });
        $('.limoking-personnel-item.round-style .personnel-item').hover(function () {
            $(this).find('.personnel-author-image').animate({'opacity': 0.05}, 200);
            $(this).find('.personnel-item-inner').animate({'opacity': 1}, 200)
        }, function () {
            $(this).find('.personnel-author-image').animate({'opacity': 1}, 200);
            $(this).find('.personnel-item-inner').animate({'opacity': 0}, 200)
        });
        $('.limoking-price-table-item').each(function () {
            var price_table = $(this);

            function set_price_table_height() {
                var max_height = 0;
                var price_content = price_table.find('.price-content');
                price_content.css('height', 'auto');
                price_content.each(function () {
                    if (max_height < $(this).height()) {
                        max_height = $(this).height()
                    }
                });
                price_content.css('height', max_height)
            }

            set_price_table_height()
            $(window).resize(function () {
                set_price_table_height()
            })
        });
        $('form').submit(function () {
            var has_default = !1;
            $(this).find('input[data-default]').each(function () {
                if ($(this).attr('aria-required') != 'true') {
                    if ($(this).val() == $(this).attr('data-default')) $(this).val('')
                } else {
                    if ($(this).val() == $(this).attr('data-default')) has_default = !0
                }
            });
            if (has_default) return !1
        });
        $('#limoking-menu-search-button').click(function () {
            var right_pos = $(this).closest('.limoking-header-container').width() - $(this).position().left - $(this).outerWidth(!0);
            $(this).siblings('#limoking-menu-search').css('right', right_pos).slideToggle(200)
        });
        $('.search-text input[data-default], .limoking-comments-area input[data-default]').each(function () {
            var default_value = $(this).attr("data-default");
            $(this).val(default_value);
            $(this).live("blur", function () {
                if ($(this).val() == "") {
                    $(this).val(default_value)
                }
            }).live("focus", function () {
                if ($(this).val() == default_value) {
                    $(this).val("")
                }
            })
        });
        if (window.location.hash && $(window.location.hash).length > 0) {
            $('html, body').animate({scrollTop: $(window.location.hash).offset().top - 70}, 500)
        }
        $('.limoking-navigation a[href*="#"], .limoking-responsive-navigation a[href*="#"]').click(function () {
            if ($(this).attr('href').length > 0) {
                var item_id = $(this.hash);
                if ($('body').hasClass('home')) {
                    if (item_id.length > 0) {
                        if (this.hash == "#main") {
                            $('html, body').animate({scrollTop: 0}, 500)
                        } else {
                            $('html, body').animate({scrollTop: item_id.offset().top - 70}, 500)
                        }
                        return !1
                    }
                } else {
                    window.location.replace($('.body-wrapper').attr('data-home') + '/' + this.hash)
                }
            }
        });
        if (!limoking_touch_device && (!$.browser.msie || (parseInt($.browser.version) > 8))) {
            $('.content-wrapper img').each(function () {
                if ($(this).closest('.limoking-ux, .ls-wp-container, .product, .flexslider, .nivoSlider').length) return;
                var ux_item = $(this);
                if (ux_item.offset().top > $(window).scrollTop() + $(window).height()) {
                    ux_item.css({'opacity': 0})
                } else {
                    return
                }
                $(window).scroll(function () {
                    if ($(window).scrollTop() + $(window).height() > ux_item.offset().top + 100) {
                        ux_item.animate({'opacity': 1}, 1200)
                    }
                })
            });
            $('.limoking-ux').each(function () {
                var ux_item = $(this);
                if (ux_item.hasClass('limoking-chart') || ux_item.hasClass('limoking-skill-bar')) {
                    if (ux_item.offset().top < $(window).scrollTop() + $(window).height()) {
                        if (ux_item.hasClass('limoking-chart') && (!$.browser.msie || (parseInt($.browser.version) > 8))) {
                            ux_item.limoking_pie_chart()
                        } else if (ux_item.hasClass('limoking-skill-bar')) {
                            ux_item.children('.limoking-skill-bar-progress').each(function () {
                                if ($(this).attr('data-percent')) {
                                    $(this).animate({width: $(this).attr('data-percent') + '%'}, 1200, 'easeOutQuart')
                                }
                            })
                        }
                        return
                    }
                } else if (ux_item.offset().top > $(window).scrollTop() + $(window).height()) {
                    ux_item.css({'opacity': 0, 'padding-top': 20, 'margin-bottom': -20})
                } else {
                    return
                }
                $(window).scroll(function () {
                    if ($(window).scrollTop() + $(window).height() > ux_item.offset().top + 100) {
                        if (ux_item.hasClass('limoking-chart') && (!$.browser.msie || (parseInt($.browser.version) > 8))) {
                            ux_item.limoking_pie_chart()
                        } else if (ux_item.hasClass('limoking-skill-bar')) {
                            ux_item.children('.limoking-skill-bar-progress').each(function () {
                                if ($(this).attr('data-percent')) {
                                    $(this).animate({width: $(this).attr('data-percent') + '%'}, 1200, 'easeOutQuart')
                                }
                            })
                        } else {
                            ux_item.animate({'opacity': 1, 'padding-top': 0, 'margin-bottom': 0}, 1200)
                        }
                    }
                })
            })
        } else {
            if (!$.browser.msie || (parseInt($.browser.version) > 8)) {
                $('.limoking-chart').limoking_pie_chart()
            }
            $('.limoking-skill-bar-progress').each(function () {
                if ($(this).attr('data-percent')) {
                    $(this).animate({width: $(this).attr('data-percent') + '%'}, 1200, 'easeOutQuart')
                }
            })
        }
        $('.nivoSlider').limoking_nivoslider();
        $('.flexslider').limoking_flexslider()
    });
    $(window).load(function () {
        $('.limoking-item-title-wrapper.limoking-center-divider').on('generate_divider', function () {
            var head_inner = $(this).find('.limoking-item-title-head-inner');
            var divider_item = head_inner.children('.limoking-item-title-center-divider');
            var title_item = head_inner.children('.limoking-item-title');
            if (((head_inner.width() - title_item.width()) / 2) - divider_item.width() - 25 > 0) {
                divider_item.show();
                divider_item.each(function () {
                    if ($(this).is('.limoking-left')) {
                        $(this).css('margin-right', title_item.width() / 2 + 25)
                    } else if ($(this).is('.limoking-right')) {
                        $(this).css('margin-left', title_item.width() / 2 + 25)
                    }
                })
            } else {
                divider_item.hide()
            }
        });
        $('.limoking-item-title-wrapper.limoking-left-divider').on('generate_divider', function () {
            var head_inner = $(this).find('.limoking-item-title-head-inner');
            var divider_item = head_inner.children('.limoking-item-title-left-divider');
            var title_item = head_inner.children('.limoking-item-title');
            var right_item = head_inner.children('.limoking-nav-title');
            var item_width = head_inner.width() - title_item.width() - right_item.width() - 45;
            if (item_width > 0) {
                divider_item.show();
                divider_item.css({'margin-left': title_item.width() + 25, 'width': item_width})
            } else {
                divider_item.hide()
            }
        });
        $('.limoking-item-title-wrapper').trigger('generate_divider');
        $(window).resize(function () {
            $('.limoking-item-title-wrapper').trigger('generate_divider')
        });
        $('.limoking-isotope').limoking_isotope();
        if ($.browser.msie && (parseInt($.browser.version) <= 8)) {
            $('.limoking-chart').limoking_pie_chart()
        }
        $('.limoking-column-service-item.limoking-type-2-hover').column_service_hover_height();
        $(window).resize(function () {
            $('.limoking-column-service-item.limoking-type-2-hover').column_service_hover_height()
        });
        if (!limoking_touch_device) {

            var slide_nav = $('#limoking-navigation-gimmick');
            var slide_nav_padding = parseInt(slide_nav.css('padding-left'));
            var current_pos = 0;
            var current_menu_width = 0;
            if ($('.NoGimmick').position()) {
                slide_nav.css({'display': "none"});
            }
            slide_nav.on('setNavGimmickPosition', function () {
                current_pos = $('#limoking-main-navigation > ul').position().left + slide_nav_padding;
                current_menu_width = $('#limoking-main-navigation > ul > li:first-child > a').width();
                slide_nav.css({'left': current_pos - slide_nav_padding, 'width': current_menu_width});
                $('#limoking-main-navigation > ul > li.current-menu-item, #limoking-main-navigation > ul > li.current-menu-ancestor, #greennature-main-navigation > ul > li.current_page_item, #greennature-main-navigation > ul > li.current_page_ancestor').each(function () {
                    var padding = parseInt($(this).children('a').css('padding-left'));
                    current_pos = $(this).position().left + padding;
                    padding += parseInt($(this).children('a').css('padding-right'));
                    current_menu_width = $(this).width() - padding;
                    slide_nav.css({'width': current_menu_width, 'left': current_pos - slide_nav_padding})
                })
            });
            slide_nav.trigger('setNavGimmickPosition');
            $(window).resize(function () {
                slide_nav.trigger('setNavGimmickPosition')
            });
            $('#limoking-main-navigation > ul > li').hover(function () {
                slide_nav.css({'display':"inline-block"});
                var padding_left = parseInt($(this).children('a').css('padding-left'));
                var padding_right = parseInt($(this).children('a').css('padding-right'));
                slide_nav.animate({
                        // "display": 'inline-block',
                        'width': jQuery(this).width() - (padding_left + padding_right),
                        'left': jQuery(this).position().left + padding_left - slide_nav_padding,

                    }
                    , {queue: !1, easing: 'easeOutQuad', duration: 250});

            }, function () {
                slide_nav.animate({'width': current_menu_width, 'left': current_pos - slide_nav_padding}, {
                    queue: !1,
                    easing: 'easeOutQuad',
                    duration: 250
                })
            })
        }
        $('.body-wrapper.float-menu').each(function () {
            var sub_area = $('#limoking-header-substitute');
            var main_area = sub_area.siblings('.limoking-header-inner');
            var header_wrapper = sub_area.closest('.limoking-header-wrapper');
            if (main_area.length > 0) {
                $(window).scroll(function () {
                    if (main_area.hasClass('limoking-fixed-header') && ($(this).scrollTop() <= header_wrapper.offset().top + header_wrapper.height() + 30 || $(this).width() < 959)) {
                        var clone = main_area.clone().appendTo('body');
                        clone.slideUp(100, function () {
                            $(this).remove()
                        });
                        main_area.removeClass('limoking-fixed-header').insertAfter(sub_area.height(0))
                    } else if (!main_area.hasClass('limoking-fixed-header') && $(this).width() > 959 && $(this).scrollTop() > header_wrapper.offset().top + header_wrapper.height() + 30) {
                        sub_area.height(main_area.height());
                        $('body').append(main_area.addClass('limoking-fixed-header').css('display', 'none'));
                        main_area.slideDown(200)
                    }
                })
            }
        });
        $(window).trigger('resize');
        $(window).trigger('scroll')
    })
})(jQuery)