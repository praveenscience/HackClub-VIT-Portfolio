(function($) {
    "use strict";

    $('[data-parallax]').each(function() {
        var $this   = $(this);
        var image   = new Image();
        image.src   = $this.attr('data-parallax');
        image.onload = function() {
            $this.css({backgroundImage: "url('" + this.src + "')", backgroundRepeat: "repeat"});
            $this.data('parallax-width', this.naturalWidth);
            $this.data('parallax-height', this.naturalHeight);
            $this.triggerHandler('parallax-update');
        };
        $(window).bind('scroll', function() {
            $this.triggerHandler('parallax-update');
        });
        $(window).bind('resize', function() {
            $this.triggerHandler('parallax-update');
        });
    }).bind('parallax-update', function() {
        var $this   = $(this);
        if("undefined" === typeof $this.data('parallax-width') || "undefined" === typeof $this.data('parallax-height')) {
            return;
        }
        var vieww   = $this.outerWidth(true);
        var viewh   = $this.outerHeight(true);
        var natw    = $this.data('parallax-width');
        var nath    = $this.data('parallax-height');
        var speed   = "undefined" === typeof $this.attr('data-parallax-speed') ? 0.5 : Math.min(1, parseFloat($this.attr('data-parallax-speed')));
        var scroll  = Math.min(1, Math.max(-1, ($(window).scrollTop() - $this.offset().top) / viewh));
        var width   = vieww;
        var height  = Math.ceil(width * nath / natw);
        if(height < viewh) {
            height  = viewh;
            width   = Math.ceil(height * natw / nath);
        }
        var left    = Math.round((vieww - width) / 2);
        var top     = Math.round((viewh - height) / 2) + scroll * speed * viewh;
        $this.css({backgroundSize: width + 'px ' + height + 'px', backgroundPosition: left + 'px ' + top + 'px'});
    });
    setTimeout(function() {
        $('[data-parallax]').triggerHandler('parallax-update');
    }, 1500);
})(jQuery);