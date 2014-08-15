/**
 * Created by bradflyon on 6/18/14.
 */

//woohoo - this works June 18, 2014

var getCases = function(url, thingWithCallback) {

    console.log("getCases: " + url);
    //var url = "https://www.courtlistener.com/api/rest/v1/opinion/?order_by=dateFiled+desc&format=jsonp&callback=?";
    //good one... var url = "https://www.courtlistener.com/api/rest/v1/opinion/?date_filed__gt=2014-06-08&order_by=-date_filed&format=jsonp&callback=?";
//            ignorejsonpcallback: eqfeed_callback,


//    window.eqfeed_callback = function(data) {
//        console.log("eqfeed_callback: success with getting info");
//        console.log(data);
//    };

//    ignorejsonpcallback: eqfeed_callback,
    $.ajax({
            url:url,
            dataType: 'jsonp',
            jsonp: true,
            error:  function(err) {
                console.log("Error");
                console.log(err);
                //that.setTimerForNextCallCheckingQuakes();
                //that.checkingForEarthquakes = false;
                //that.setTimerForNextQuakeCheck();
            },
            success: function(data) {

                //console.log("success with results");
                var theCases = [];

                var objects = data.objects;
                for (var i=0;i<objects.length;i++) {
                    var theCase = objects[i];
                    var piecesOfCourtApiUrl = theCase.court.split("/");
                    var theCourtListenerAbbreviation = "";

                    for (var j=piecesOfCourtApiUrl.length-1;j>=0;j--) {
                        if (piecesOfCourtApiUrl[j].trim().length>0) {
                            if (theCourtListenerAbbreviation.length===0) {
                                theCourtListenerAbbreviation = piecesOfCourtApiUrl[j].trim();
                            }
                        }
                    }

                    console.log("Court had case: " + theCourtListenerAbbreviation);
                    theCases.push({courtListenerAbbreviation:theCourtListenerAbbreviation,
                                      theCase:theCase});


                    console.log(theCase);

                }
                thingWithCallback.newCasesFromCourtListener(theCases);


                //console.log(data);
                //    that.processEarthquakes(data);
                //    that.checkingForEarthquakes = false;
                //    that.setTimerForNextQuakeCheck();
            }
    });

};