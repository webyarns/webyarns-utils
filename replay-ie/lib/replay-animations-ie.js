$(() => {
    const ua = window.navigator.userAgent;
    const isIe = (ua.indexOf('MSIE ') > 0) || (ua.indexOf('Trident/') > 0) || (ua.indexOf('Edge/') > 0);
    if (isIe) {

        class SubsequentImagePreloader {

            constructor(src){
                this.srcBase = src + '?reload=';
                this.counter = 0;
                this.nextAvailable = this.getImage();
            }

            getNextImage(){
                const available = this.nextAvailable;
                this.nextAvailable = this.getImage();
                return available;
            }

            getImage() {
                const i  = new Image();
                i.src = this.srcBase + new Date().getTime();
                return i;
            }
        }

        const imageMap = {};

        $("section").find('img[src$=".gif"]').each((i, e) => {
            if (!e.id) e.id = '_' + Math.random().toString(36).substr(2, 9);
            const id = e.id;
            if (imageMap[id] !== undefined)
                console.error("duplicate id found for image",id);
            imageMap[id] = new SubsequentImagePreloader(e.getAttribute('src'));
            $(e).addClass("iereplay");
        });
        addEventListener('slidechanged', function (event) {
            const $current = $(event.currentSlide);

            $current.find('.iereplay').each((i, e) => {
                const nextSrc = imageMap[e.id].getNextImage().src;
                e.setAttribute('src', nextSrc);
                console.log("changed to ", nextSrc)
            });

        });
    }
});


