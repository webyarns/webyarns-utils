$(() => {
    const ua = window.navigator.userAgent;
    const isIe = (ua.indexOf('MSIE ') > 0) || (ua.indexOf('Trident/') > 0) || (ua.indexOf('Edge/') > 0);
    if (isIe) {

        $("section").find('img[src$=".gif"]').each((i, e) => {
            e.setAttribute('original-src', e.getAttribute('src'));
            $(e).addClass("iereplay");
        });
        addEventListener('slidechanged', function (event) {
            const $current = $(event.currentSlide);
            $current.find('.iereplay').each((i, e) => {
                const oSrc = e.getAttribute('original-src');
                e.setAttribute('src', oSrc + "?load=" + new Date().getTime() + ")");
            });

        });
    }
});


