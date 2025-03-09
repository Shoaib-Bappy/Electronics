jQuery(document).ready(function($) {
    "use strict";

    // Function to update the cart number
    function cartNumberAjax() {
        $.ajax({
            url: liva_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'liva_ajax_cart_count'
            },
            success: function(response) {
                $('.liva-cart-number').html(response);
            }
        });
    }

    // Function to update the cart total
    function cartTotalAjax() {
        $.ajax({
            url: liva_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'liva_ajax_cart_total'
            },
            success: function(response) {
                $('.liva-cart-total').html(response);
            }
        });
    }

    // Function to update the cart content
    function update_cart_info() {
        $.ajax({
            url: liva_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'liva_ajax_cart_content',
                beforeSend: function() {
                    $('.middle-header-rt .cart-dropdown').append('<div class="liva-ajax-loading"></div>');
                },
            },
            success: function(response) {
                $('.liva-header-cart-content').html(response);
                cartNumberAjax();
                cartTotalAjax();
            }
        });
    }

    // Event delegation for dynamically loaded elements
    $(document).on('click', '.liva-cart-remove', function() {
        var livaCartId = $(this).attr('id');

        $.ajax({
            url: liva_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'liva_ajax_cart_delete',
                liva_cart_id: livaCartId
            },
            success: function(response) {
                $('.liva-header-cart-content .cart-dropdown').html(response);
                update_cart_info();
            }
        });
    });

    // Initial call to update cart information
    update_cart_info();

    // Trigger update_cart_info when an item is added or removed from the cart
    $('body').on('added_to_cart removed_from_cart', function() {
        update_cart_info();
    });

});