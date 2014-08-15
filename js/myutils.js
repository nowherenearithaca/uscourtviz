"use strict";

/**
 * Created by bradflyon on 5/3/14.
 */


if(!window.console) {
    window.console = { log: function() { /* do something */ } };
}


var isDefined = function(x) {
    return (!isUndefined(x));
};

var isUndefined = function(x) {
    if (typeof x ==="undefined") {
        return true;
    }
    else {
        return false;
    }
};

//http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var shuffleArray = function (array) {
 /**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

var addCommas = function(nStr, allowTranslate) {

    if (isUndefined(allowTranslate)) {
        allowTranslate = true;
    }

    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if (!allowTranslate) {
        return "<span class='notranslate'>" + x1 + x2 + "</span>";
    }
    else {
        return x1 + x2;
    }
};

var arrayContains = function(arr,value) {

    var bContains = false;
    arr.forEach(function(element) {
        if (element===value) {
            bContains = true;
        }
    });
    return bContains;
}

var closeAllTips = function () {
    $('.qtip').qtip('hide');
};

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

var getMiddleOfDiv = function(el) {
    var sTop = el.css("top");
    sTop = Number(sTop.substring(0, sTop.length - 2));
    return Number(sTop) + el.height()/2;
}
var getLeftOfDiv = function(el) {
    var s = el.css("left");
    s = Number(s.substring(0, s.length - 2));
    return Number(s);
}

if (typeof String.prototype.startsWith != 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function (str){
        return this.indexOf(str) == 0;
    };
}

function getTheStyleBasedOnCount(count, numberHues) {

    if (count <= 0) {
        return {width: 1, color: "#777", opacity: 0.7};
//            stroke: #333;
//            stroke-width: 1px;
//            opacity:0.7;

    }
    else {
        //var numberHues = 100;

        count = Math.min(count, numberHues);

        //var hueStart = 160, hueEnd = 0;
        var hueStart = 100, hueEnd = 0;
        var deltaHue = (hueEnd - hueStart) / (numberHues - 1);

        var widthDelta = 0.1;

        var theHue = hueStart + deltaHue * count;
        var rgbString = d3.hsl(theHue, 1, 0.6).toString();

        var width = Math.max(3, Math.min(30, count * widthDelta)).toFixed(0);

        var color = rgbString;

        return {width: width, color: color};
    }
}
