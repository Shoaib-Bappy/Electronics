(function($) {
    "use strict";

    $(document).ready(function() {

        $('.location-option .location-list li > a').on('click', function(e) {
            e.preventDefault();
            $.cookie("location", $(this).data('slug'));
            location.reload(true);
        });

        /* popup location */
        if (!($.cookie('location')) && locationfilter.popup == 1) {
            $(".location-button").trigger("click");
        }

        /* Location search */
        const liveSearch = () => {
            let searchQuery = $('.location-input').val().toLowerCase();
            const locations = $('.location-list .location-item');

            locations.each(function() {
                const self = $(this);
                const title = self.find('.title1').text().toLowerCase();
                const description = self.find('.dec').text().toLowerCase();
                const parent = self.closest('li');

                if (title.includes(searchQuery) || description.includes(searchQuery)) {
                    parent.removeClass("d-none");
                } else {
                    parent.addClass("d-none");
                }
            });
        };

        let typingTimer;
        let typeInterval = 400;

        $('.location-input').on('keyup', () => {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(liveSearch, typeInterval);

            console.log('sss');
        });
    });

})(jQuery);