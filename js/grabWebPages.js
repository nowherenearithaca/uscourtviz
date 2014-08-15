/**
 * Created by bradflyon on 6/4/14.
 */

// ../../phantomjs-1.9.7-macosx/bin/phantomjs ../grabWebPages.js

//var path = require('path')
//var childProcess = require('child_process')

//var phantom = require('phantom');

//var binPath = phantomjs.path;
//var require = patchRequire(global.require);

var dir = "courtpages";

//var courtListenerData = require('./courtListenerData').courtListenerData;

var fs = require('fs');

phantom.page.injectJs( './courtListenerData.js');



courtListenerData.push({citation:'Pat.App??', url:'http://www.uspto.gov/ip/boards/bpai/index.jsp'});
courtListenerData.push({citation:'Tra.App??', url:'http://www.uspto.gov/about/offices/ogc/ttab.jsp'});
courtListenerData.push({citation:'Fed. Cl.', url:'http://www.uscfc.uscourts.gov'});
courtListenerData.push({citation:'Ct. Intl. Trade', url:'http://www.cit.uscourts.gov/'});
courtListenerData.push({citation:'Vet. App.', url:'http://www.uscourts.cavc.gov/'});
courtListenerData.push({citation:'USMSPB??', url:'http://www.mspb.gov/'});
courtListenerData.push({citation:'ASBCA??', url:'http://www.asbca.mil/index.html'});
courtListenerData.push({citation:'Off. Comp.??', url:'http://www.compliance.gov/'});
courtListenerData.push({citation:'GAOCAP??', url:'http://www.gao.gov/legal/contract/appeals.html'});
courtListenerData.push({citation:'CBCA??', url:'http://www.cbca.gsa.gov/decisions/appeals.html'});


courtListenerData.push({citation:'A.C.C.A.??',url:'https://www.jagcnet.army.mil/ACCA#'});
courtListenerData.push({citation:'N.M.C.C.A.??',url:'http://www.jag.navy.mil/nmcca.htm'});
courtListenerData.push({citation:'C.G.C.C.A.??',url:'http://www.uscg.mil/Legal/cca/Court_of_Criminal_Appeals.asp'});
courtListenerData.push({citation:'A.F.C.C.A.??',url:'http://afcca.law.af.mil/content/index.php.html'});

var index = -1;

function getIt() {

    index++;
    if (index < courtListenerData.length) {

        var c = courtListenerData[index];

        if (c.url) {

            var s = c.citation;
            s = s.replace(/\./g, "_");
            s = s.replace(/ /g, "_");
            s = s.replace(/\?/g, "_");

            console.log(c.url);
            console.log(s);


            var filename = s + ".png";
            if (!fs.exists(filename)) {
                var page = require('webpage').create();
                page.open(c.url, function () {
                    page.render(filename);
                    console.log("  Got s" + s + "'");
                    //phantom.exit();
                    getIt();
                });
            }
            else {
                console.log("Skipping '" + filename + "'");
                getIt();
            }
        }
    }
}

getIt();