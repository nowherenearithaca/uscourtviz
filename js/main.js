

var opts = {
    lines: 13, // The number of lines to draw
    length: 10, // The length of each line
    width: 5, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#1C94C4', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '30', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};
var spinner = new Spinner(opts);


var theViz;

// David Walsh's thing
// http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};

var debouncedResize = debounce(function () {
        theViz.reRenderAfterResize();
    },
    250);

function showProgressBar() {
    $('#loadingDiv').animate({"opacity":1}, function() {
        $(this).css("z-index","100000");
    });
}
function hideProgressBar() {
    $('#loadingDiv').animate({"opacity":0}, function() {
        $(this).css("z-index","-100000");
    });
}


$(document).ready(function() {

//    SHB.build({
//       elementID:'shb_custom',
//        buttons: {
//            fbShare: true,
//            plusShare:true,
//            pinterest:true,
//            tweet: true
//        },
//        pref: {
//            title: "Exploring the US Court System",
//            desc: "Exploring the US Court System",
//            via:"@bflyon"
//        }
//    });

    window.addEventListener('load', function() {
        new FastClick(document.body);
    }, false);

    window.addEventListener('resize', debouncedResize);

    $('#doPlayback').button().click(function(event) {
        theViz.analyzePeriod({begin_mm_dd_yy:'01/01/2002'}); //it only goes up to about the first half of 2013 at the moment
    });

    $('#doPlaybackCurrentCourt').button().click(function(event) {
        theViz.analyzePeriod({begin_mm_dd_yy:'08/07/2010'});
    });

    $('#stopPlayback').button().click(function(event) {
        theViz.cancelPlayback(); //it only goes up to about the first half of 2013 at the moment
    });

    $('#chkInteractWithCourtListener').button().click(function () {
        theViz.doNextCheckOfCourtListener();
        //setInteractWithCourtListener($(this).is(":checked"));
        //console.log("worldTweetMap.showPossiblySensitive: " + worldTweetMap.showPossiblySensitive);
    });

    $('#btnMissingScraperInfo').button().click(function(event) {
        theViz.highlightMissingScrapers();
    });

    $('#btnShowPages').button().click(function(event) {
        theViz.showPages();
    });

    var datepicker = $('#datepicker').datepicker();
    datepicker.datepicker("setDate", new Date());


    var headerBottom = $('#copyright').position().top + $('#copyright').height();
    $('#mainContent').css('top', (headerBottom + 5) + "px");

    var config={datepicker:datepicker,
                showProgressBar: showProgressBar,
                hideProgressBar: hideProgressBar};

    //config.tableSelector = "#theDataTable";

    theViz = new CourtVisualization(config);

    hideProgressBar();
    //$('#loadingDiv').animate({"opacity":0});
    //theViz.showWebPages();


});

