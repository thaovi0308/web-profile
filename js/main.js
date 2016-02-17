$(document).ready(function () {
            //remove class active of menu
            $('.main-nav li.open').removeClass("open");


            $("#box-cart").fancybox({
                'hideOnContentClick': true,
                'transitionIn': 'elastic',
                'transitionOut': 'elastic',
                'speedIn': 600,
                'speedOut': 200,
                'autoSize': 'true',
                'scrolling': 'no',
                'height': 'auto',
                'overlayShow': false,
                'beforeShow': function () {
                    //Scroll table content !IMPORTANT - jasonLe
                    $("#table-data-1").mCustomScrollbar({
                        scrollButtons: {
                            enable: true
                        },
                        scrollInertia: 90,
                        mouseWheel: {
                            scrollAmount: 100
                        }
                    });
                }

            });
            $(".datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
            $( ".spinner" ).spinner({
              min: 1
            });
});