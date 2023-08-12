$(document).ready(function() {
    $("a[href*=#]").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});



var rew = 1;
var outtt = 0;

$(document).ready(function() {

    $('.openmodal').click(function() {

        $('#apply').arcticmodal();

        return false;
    });



    setTimeout(function(){
        startMiniPopup();
    }, 10000);

        $('body').mouseleave(function() {
        if (outtt == 0) {
            $('#apply').arcticmodal();
            outtt = 2;
        }
    });



    $('.confident-link').click(function() {
        $('.hidden-conf').show();
        if ($(window).height() < 760) {
            $('.conf-info').css({
                'height': ($(window).height() - 120),
                'overflow-y': 'scroll'
            });

        };


        return false;
    });
    $('.close-conf').click(function() {
        $('.hidden-conf').hide();
    });
    if ($('select').length) {
    } else {
        $('.c-s').css({ 'display': 'none' });
    }
    GetCount();

    $('.block12 .arrow').click(function() {

        var rewCount = $('.block12 .rew').length;

        rew++;
        if(rew>rewCount) rew=1;

        $('.block12 .rew').hide();
        $('.block12 .rew'+rew).show();


        return false;
    });

});

var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 30 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    amount = timerSec;
    timerSec = timerSec - 1;
    dateNow = new Date();
    delete dateNow;
    if (amount < 0) {
        $('.hours').html('00');
        $('.mins').html('00');
        $('.secs').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        days = 0;
        hours = 0;
        mins = Math.floor(amount / 60);
        secs = Math.floor(amount - mins * 60);
        if (days < 10) days = '0' + hours;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        $('.hours').html(hours);
        $('.mins').html(mins);
        $('.secs').html(secs);
        setTimeout("GetCount()", 1000);
    }
}

var online = 537;
var count = 23;
var currentPopup = 0;

function startMiniPopup() {

    if (currentPopup <= $('.popup-mini .item').length - 1) {
        var item = $('.popup-mini .item').eq(currentPopup);
        currentPopup++;

        if ($(item).hasClass('type1')) {
            count--;
            $('.count').html(count);
            $(item).show();

        }

        if ($(item).hasClass('type2')) {
            count--;
            $('.count').html(count);
            $(item).show();
        }

        if ($(item).hasClass('type4')) {
            online+=Math.floor((Math.random() * 5) + 1);
            $('.online').html(online);
            $(item).show();
        }

        setTimeout(function() {
            $(item).hide();

            setTimeout(function() {
                startMiniPopup();
            }, Math.floor((Math.random() * 10) + 5)*1000);
        }, 3000);

    }

}

