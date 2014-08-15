/**
 * Created by bradflyon on 5/3/14.
 */

//todo - include court seals?
//todo - show home pages of all the courts at the same time somehow
//todo - stream ALL live court stuff that is going on across all sites?
//todo - add "other sources of writs" to the left/right with note about what these are and how frequent they are
//todo - mouseover on the links to the Fed. Cir.

//TODO - add "Supreme Court has original jurisdiction" on left side (state vs state, US vs. state)

//TODO - change courtlistener search to be by date, most recent first...
//TODO - deal with images like on the b/d to prevent too much downloading - forgot exactly what I did

//TODO - streamline this process: the image --> reduce size with sips --> image2css
//TODO - add breakdown for Supreme court, too

//http://en.wikipedia.org/wiki/Procedures_of_the_Supreme_Court_of_the_United_States
//certiorari before judgment - http://en.wikipedia.org/wiki/Certiorari_before_judgment
//certified question - http://en.wikipedia.org/wiki/Certified_question#Certification_of_questions_to_the_United_States_Supreme_Court
// Certification of a question of law to the United States Supreme Court is another way,
// in addition to the writ of certiorari, direct appeal, and original jurisdiction,
// by which cases can be brought to the docket of the Supreme Court.
// It is a very infrequent procedure, and has happened only five times over the past six decades.[19]

//extraordinary writ
/*
Supreme Court by one of several methods, of which the first two account for the overwhelming majority of cases decided:
    By petition for a writ of certiorari, filed by a party to a case that has been decided by one of the United States courts of appeals or by the United States Court of Appeals for the Armed Forces.

    By petition for writ of certiorari with respect to a decision of one of the state courts (including courts of Puerto Rico and the District of Columbia), after all state appeals have been exhausted, where an issue of federal constitutional or statutory law is in question. The writ is usually issued to a state supreme court, but is occasionally issued to a state's intermediate appellate court for cases where the state supreme court denied certiorari or review and thereby refused to hear the appeal.

    These four as little divs on left...
    By petition for certiorari before judgment, which permits the Court to expedite a case pending before a United States court of appeals by accepting the case for review before the appellate court has decided it. However, Supreme Court Rule 11 provides that a case may be taken by the Court before judgment in a lower court "only upon a showing that the case is of such imperative public importance as to justify deviation from normal appellate practice and to require immediate determination in this Court."

    By appeal from certain decisions of United States district courts in certain cases involving redistricting of congressional or state legislative districts, or when specifically authorized in a particular statute.

    By a certified question or proposition of law from one of the United States Courts of Appeals, meaning that the Court of Appeals requests the Supreme Court to instruct it on how to decide the case. This procedure was once common but is now rarely invoked; the last certificate accepted for review was in 1981.

    By petition for an "extraordinary writ" such as mandamus, prohibition, or habeas corpus. These writs are rarely granted by the Supreme Court though they are more frequently granted by lower courts.
*/


var specialWaysToSupremeCourt = [];

d = {name:"petition for certiori before judgment",
        displayName:true,
        shortNameHtml:"petition for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Certiorari_before_judgment'>certiorari before judgment</a>"
        , info:"This " +
                "is a petition for a <a target='_blank' href='http://en.wikipedia.org/wiki/Writ_of_certiorari'>writ of certiorari</a> " +
                "in which the Supreme Court is asked to immediately review the decision of a United States District Court, " +
                " without an appeal having been decided by a United States Court of Appeals, " +
                "for the purpose of expediting the proceedings and obtaining a final decision. " +
                "<br/><br/>Certiorari before judgment is rarely granted. Well-known cases that have reached the Supreme Court via this route " +
                "include <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_v._Nixon'>the Nixon tapes in 1974</a>, " +
                " and the case in <a target='_blank' href='http://en.wikipedia.org/wiki/Ex_parte_Quirin'>1942 of eight German saboteurs in the United States during World War</a>."
        , infoSource:"http://en.wikipedia.org/wiki/Certiorari_before_judgment"};

specialWaysToSupremeCourt.push(d);

d = {name: "appeal from decisions of District Courts involving redistricting",
    displayName: true,
    shortNameHtml: "appeal of decisions <br/>involving redistricting",
    info:"",
    exampleCaseAudio: {name: "Baker v. Carr 1962", url: "http://www.oyez.org/cases/1960-1969/1960/1960_6"}

};

    specialWaysToSupremeCourt.push(d);

d = {name:"certified question or proposition of law from one of the United States Courts of Appeals",
        displayName:true,
    info:"This is a formal request from a United States court of appeals to the Supreme Court seeking instruction " +
            "for the proper decision of a case. " +
            "This is discussed in Rule 21 of the <a target='_blank' href='http://www.supremecourt.gov/ctrules/2013RulesoftheCourt.pdf'>Rules of the Supreme Court</a>;",

    infoSource:"http://en.wikipedia.org/wiki/Certified_question#Certification_of_questions_to_the_United_States_Supreme_Court",
    shortNameHtml:"certified question  <br/> from Court of Appeals"};

specialWaysToSupremeCourt.push(d);

d = {name:"petition for an \"extraordinary writ\"",
    displayName:true,
    info:"This is discussed in Rule 20 of the <a target='_blank' href='http://www.supremecourt.gov/ctrules/2013RulesoftheCourt.pdf'>Rules of the Supreme Court</a>;" +
          " the petition must show that: " +
            "<ul>" +
            "<li>the writ will be in aid of the Court's appellate jurisdiction</li>" +
            "<li>exceptional circumstances warrant the exercise of the Court's discretionary powers</li>" +
            "<li>adequate relief cannot be obtained in any other form or from any other court</li>" +
            "</ul>" +
            "TODO: get some examples" +
            "<br/>",

        infoSource:"http://www.supremecourt.gov/ctrules/2013RulesoftheCourt.pdf",
    shortNameHtml:"petition for an<br/> \"extraordinary writ\""};

specialWaysToSupremeCourt.push(d);




var CourtVisualization = function(config) {


    var that = this;

    that.$mainWindow = $(window);

    var getThumbDivForSeal = function(court, width,height) {

        //we create a div with the right css class
        if (court.seal) {
            var sDiv = "<div style='position:absolute;background-size:contain;height:" + height + "px;width:" + width + "px;' class='";

            //replace the last "." with "_"
            var s = court.seal;
            s = s.replace(/\./g, "_")
            s = s.replace(/ /g, "_")
            s = s.replace(/200/g, "")
            s = s.replace(/225/g, "")
            s = s.replace(/240/g, "")
            s = s.replace(/241/g, "")
            s = s.replace(/243/g, "")
            s = s.replace(/244/g, "")
            s = s.replace(/245/g, "")
            s = s.replace(/249/g, "")
            console.log(s);
            // http://stackoverflow.com/questions/16538425/javascript-replace-last-occurrence-of-forward-slash
            //var index = s.lastIndexOf(".");
            //s = s.substr(0,index) + "_" + s.substr(index+1);
            sDiv +=  s  + "'></div>";

            return sDiv;
        }
        else {
            return "";
        }

    }

    var SEAL_DIR = "img/courtseals_resized";
    var JUDGE_PICS = "img/judge_pics_resized";
    var JUDGE_PIC_WIDTH = "200";
    //first we're just gonna set up a simple tree graph

    that.nodesExpandedNodes = [];

    var courtsByCitation = {};
    var courtListenerCourtsByCitation = {};


    var supremeCourt = {name: "Supreme Court",
                            displayName:true,
                            shortNameHtml:"Supreme Court",
                            shortName:"Supreme Court", abbrev:"scotus", citation:"SCOTUS", parent:"null", children:[], displayName:true
                            ,seal:"240px-Seal_of_the_United_States_Supreme_Court.svg.png"
                            ,sealSource:"http://en.wikipedia.org/wiki/File:Seal_of_the_United_States_Supreme_Court.svg"};

    var appealsWritBox = {name:"petitions for writs"
                            , html:"petitions for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>"
                            , isCourt:false
                            , isWritbox:true
                            , children:[]};


    supremeCourt.children.push(appealsWritBox);

    courtsByCitation[supremeCourt.citation] = supremeCourt;

    var usTaxCourt = {name:"United States Tax Court",
        citation:"Tax.Court??",
        shortNameHtml:"U.S. <br/>Tax Court",
        seal:'US-TaxCourt-Shield-BW.svg.png',
        sealSource:"http://commons.wikimedia.org/wiki/File:US-TaxCourt-Shield-BW.svg",
        url:"http://www.ustaxcourt.gov/",
        info:"The US Tax Court specializes in adjudicating disputes over federal income tax, " +
            "generally prior to the time at which formal tax assessments are made by the Internal Revenue Service." +
            "<br/>" +
            "Cases that are not \"Small Tax Court Cases\" can be appealed to the applicable geographical Court of Appeals, other than the " +
            "Court of Appeals for the Federal Circuit. ",
        infoSource:"http://en.wikipedia.org/wiki/United_States_Tax_Court"};

    courtsByCitation[usTaxCourt.citation] = usTaxCourt;




    var ordinals=["na","First","Second", "Third", "Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","DC", "Federal"];
    var seals   =["na",{s:"US-CourtOfAppeals-1stCircuit-Seal.svg.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-1stCircuit-Seal.svg"}
                      ,{s:"US-CourtOfAppeals-2ndCircuit-Seal.png",
                        src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-2ndCircuit-Seal.png"}
                        ,{s:"249px-US-CourtOfAppeals-3rdCircuit-Seal.svg.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-3rdCircuit-Seal.svg"}
                        ,{s:"US-CourtOfAppeals-4thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-4thCircuit-Seal.png"}
                        ,{s:"US-CourtOfAppeals-5thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-5thCircuit-Seal.png"}
                        ,{s:"US-CourtOfAppeals-6thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-6thCircuit-Seal.png"}
                        ,{s:"US-CourtOfAppeals-7thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-7thCircuit-Seal.png"}
                        ,{s:"243px-US-CourtOfAppeals-8thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-8thCircuit-Seal.png"}
                        ,{s: "241px-US-CourtOfAppeals-9thCircuit-Seal.svg.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-9thCircuit-Seal.svg"}
                        ,{s:"US-CourtOfAppeals-10thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-10thCircuit-Seal.png"}
                        ,{s:"US-CourtOfAppeals-11thCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-11thCircuit-Seal.png"}
                        ,{s:"US-CourtOfAppeals-DCCircuit-Seal.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-DCCircuit-Seal.png"}
                        ,{s:"240px-US-CourtOfAppeals-FederalCircuit-Seal.svg.png",
                            src:"http://en.wikipedia.org/wiki/File:US-CourtOfAppeals-FederalCircuit-Seal.svg"}
                    ];
    //not everyone will display their name by default - only on mouseover will that happen


    var caCitation=["na","1st Cir.","2d Cir.","3rd Cir.","4th Cir.","5th Cir.","6th Cir.","7th Cir.","8th Cir.","9th Cir."
        ,"10th Cir.","11th Cir.", "D.C. Cir.", "Fed. Cir."];
    var caAbbrev=["na","ca1", "ca2","ca3","ca4","ca5","ca6","ca7","ca8","ca9","ca10","ca11","cadc","cafc"];
    var courtsOfAppeal = [];
    var bankruptcyAppellatePanels = []
    var existingBAPs = [0,1,2,6,8,9,10];
    var bapsCitation= ["na","1st Cir. BAP","2d Cir. BAP","6th Cir. BAP","8th Cir. BAP","9th Cir. BAP","10th Cir. BAP"];

    var extraNoteInfoOnCourts = {};

    var sNoteFirstPart = "Appellate jurisdiction over district courts in ";
    extraNoteInfoOnCourts["1st Cir."] =  sNoteFirstPart + "Maine, " +
        "Massachusetts, New Hampshire, Puerto Rico, and Rhode Island.";
    extraNoteInfoOnCourts["2d Cir."] = sNoteFirstPart + "Connecticut, " +
        "New York, and Vermont.";
    extraNoteInfoOnCourts["3rd Cir."] = sNoteFirstPart  +
                        "Delaware, New Jersey, Pennsylvania, and the (territorial) court of the Virgin Islands.";

    extraNoteInfoOnCourts["4th Cir."] = sNoteFirstPart +
        "Maryland, North Carolina, South Carolina, and Virginia";

    extraNoteInfoOnCourts["5th Cir."] = sNoteFirstPart +
        "Louisiana, Mississippi, and Texas";

    extraNoteInfoOnCourts["6th Cir."] = sNoteFirstPart + "Kentucky, " +
                                        "Michigan, Ohio, and Tennessee.";

    extraNoteInfoOnCourts["7th Cir."] = sNoteFirstPart +
                                        "Illinois, Indiana, and Wisconsin.";

    extraNoteInfoOnCourts["8th Cir."] = sNoteFirstPart +
                                        "Arkansas, Iowa, Minnesota, Missouri, Nebraska, North Dakota, and South Dakota.";

    extraNoteInfoOnCourts["9th Cir."] = sNoteFirstPart +
                                    "Alaska, Arizona, California, Hawaii, Idaho, Montana, Nevada, Oregon, Washington, " +
                                    "and the territorial courts of Guam and the Northern Mariana Islands."

    extraNoteInfoOnCourts["10th Cir."] = sNoteFirstPart +
                                        "Colorado, Kansas, new Mexico, Oklahoma, Utah, and Wyoming.";

    extraNoteInfoOnCourts["11th Cir."] = sNoteFirstPart +
        "Alabama, Florida, and Georgia.";

    extraNoteInfoOnCourts["D.C. Cir."] = "Appellate jurisdiction over the district court in the District of Columbia.";

    extraNoteInfoOnCourts["Fed. Cir."] = "This court can hear certain appeals from all of the District Courts, " +
                                        " in addition to appeals from certain administrative agencies. " +
                                        "Jurisdiction is based upon subject matter (e.g., patents), and not geographic location.";


    var caURLS = ["na"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_First_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Second_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Third_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Fourth_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Fifth_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Sixth_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Seventh_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Eigth_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Ninth_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Tenth_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Eleventh_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_District_of_Columbia_Circuit"
                    ,"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Federal_Circuit"];


//    var districtCourts = [];
//
//    districtCourts[1] = [
//                            {state:"NH" ,
//                                courts:[{name:"District of New Hampshire", abbrev:"med", citation}]}
//                            {state:"ME" ,
//                                    courts:[{name:"District of Maine", abbrev:"med"}]}
//                            ,{state:"MA" ,
//                                courts:[{name:"District of Massachusetts", abbrev:"mad"}]}
//                        ];
//
//    districtCourts[2] = ["VT","NY","CT"];


    //console.log(supremeCourt.citation + ":" + judgesGroupedByCitation[supremeCourt.citation].nonSenior.length);
    console.log(supremeCourt.citation + ": D, R: " +
                        judgesGroupedByCitation[supremeCourt.citation].activeByParty["d"].length +
                        ", " +
                        judgesGroupedByCitation[supremeCourt.citation].activeByParty["r"].length);

    var districtCourtsOfAppeal = [];
    var courtOrder=[0,1,2,3,4,5,6,13,7,8,9,10,11,12]
    for (var j=1;j<14;j++) {

        var i = j; //courtOrder[j];


        //console.log(caCitation[i] + ", Non-Senior:" + judgesGroupedByCitation[caCitation[i]].nonSenior.length);
        //console.log(caCitation[i] + ", Senior:" + judgesGroupedByCitation[caCitation[i]].senior.length);
        //console.log(caCitation[i] + ", Inactive:" + judgesGroupedByCitation[caCitation[i]].inactive.length);

        console.log(caCitation[i]  + ": D, R: " +
            judgesGroupedByCitation[caCitation[i] ].activeByParty["d"].length +
            ", " +
            judgesGroupedByCitation[caCitation[i] ].activeByParty["r"].length);


        var appealCourtAbbrev = caAbbrev[i];
        var ca = ({name:"Court of Appeals for the " + ordinals[i] + " Circuit"
                                , abbrev:appealCourtAbbrev
                                , shortName:"Appeals " + caCitation[i]
                                , shortNameHtml:"Appeals <br/>" + caCitation[i]
                                , parent:supremeCourt.abbrev
                                , citation:caCitation[i]
                                , infoURL:caURLS[i]
                                , children:[]
                                , seal:seals[i].s
                                , sealSource:seals[i].src
                                , displayName:(i<15)
                             });

        //console.log(i + ", " + ca.name + ", " + ca.sealSource);


        if (i<13) {
            districtCourtsOfAppeal.push(ca);
        }
        appealsWritBox.children.push(ca);
        courtsByCitation[ca.citation] = ca;

//        if (i===11) {
//            ca.children.push({shortName: "", citation: "", isDummy: true});
//            ca.children.push({shortName: "", citation: "", isDummy: true});
//        }

            if (i===12) {
                ca.children.push({shortName: "", citation: "", isDummy: true});
                ca.children.push({shortName: "", citation: "", isDummy: true});
            //add dummy children - these are deleted later, but I want the spacing for Fed. Cir.
            //ca.children.push({shortName: "", citation: "", isDummy: true});
            ca.children.push({shortName: "", citation: "", isDummy: true});
            ca.children.push({shortName: "", citation: "", isDummy: true});
            ca.children.push({shortName: "", citation: "", isDummy: true});
            ca.children.push({shortName: "", citation: "", isDummy: true});
            ca.children.push({shortName: "", citation: "", isDummy: true});
        }

            if (i===13) {
            //I added sub-courts, so no need for this now
            //add dummy children - these are deleted later, but I want the spacing for Fed. Cir.
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
//            ca.children.push({shortName:"", citation:"",isDummy:true});
        }

//        if (arrayContains(existingBAPs,i)) {
//
//            var bap = {
//                name: "Bankruptcy Appellate Panel of the " + ordinals[i] + " Circuit",
//                abbrev: "bap" + i,
//                citation:bapsCitation[i],
//                parent: appealCourtAbbrev
//            };
//
//            ca.children.push(bap);
//            courtsByCitation[bap.citation] = bap;
//
//        }


    }

    var courtOfAppealsFederalCircuit = courtsByCitation['Fed. Cir.'];
//                                        {name:"Court of Appeals for the Federal Circuit"
//                                        , shortName: "Appeals Fed. Cir."
//                                        , shortNameHtml: "Appeals<br/> Fed. Cir."
//                                        , abbrev:"cafc"
//                                        , citation:"Fed. Cir."
//                                        , infoUrl:"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Federal_Circuit"
//                                        , wikiUrl:"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Federal_Circuit"
//                                        , children:[]
//                                        , summaryOfWhatItIs:"This court can hear certain appeals from <span>ALL</span> District Courts" +
//                                                        " (see <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_the_Federal_Circuit'>here</a> for more info)"}
//                                        ;
//    courtsByCitation[courtOfAppealsFederalCircuit.citation] = courtOfAppealsFederalCircuit;

    //supremeCourt.children.push(courtOfAppealsFederalCircuit);

    courtListenerData.forEach(function(c) {
        courtListenerCourtsByCitation[c.citation] = c;
    });

    var courtOfAppealsArmedForces = courtListenerCourtsByCitation["C.A.A.F."];
    courtOfAppealsArmedForces.shortNameHtml="Court of Appeals<br/>Armed Forces";
    courtOfAppealsArmedForces.displayName = true;
    courtOfAppealsArmedForces.children = [];
    courtsByCitation[courtOfAppealsArmedForces.citation] = courtOfAppealsArmedForces;
//        {name:"Court of Appeals for the Armed Forces"
//        , abbrev:"armfor"
//        , citation:"C.A.A.F."
//        , parent:supremeCourt
//        , children:[]
//        , url:'http://www.armfor.uscourts.gov/newcaaf/home.htm'
//        , seal
//    };


    //add the sub courts...
    d = {name:'United States Army Court of Criminal Appeals',
        citation:'A.C.C.A.??',
        info:'The Army Court of Criminal Appeals (ACCA) is an appellate court that reviews certain court martial convictions of Army personnel',
        jurisdiction:'Federal Special',
        infoSource:'http://en.wikipedia.org/wiki/Army_Court_of_Criminal_Appeals',
        url:'https://www.jagcnet.army.mil/ACCA#',
        note:"not in CourtListener"} ;

    courtOfAppealsArmedForces.children.push(d);
    courtsByCitation[d.citation] = d;

    d = {name:'Navy-Marine Corps Court of Criminal Appeals',
        citation:'N.M.C.C.A.??',
        seal:'nmcca_seal.png',
        sealSource:'http://www.jag.navy.mil/images/nmcca_seal.png',
        info:'The Navy-Marine Corps Court of Criminal Appeals (NMCCA) is the intermediate appellate court for criminal convictions in the United States Navy and the Marine Corps.',
        jurisdiction:'Federal Special',
        infoSource:'http://en.wikipedia.org/wiki/Navy-Marine_Corps_Court_of_Criminal_Appeals',
        url:'http://www.jag.navy.mil/nmcca.htm',
        note:"not in CourtListener"} ;

    courtOfAppealsArmedForces.children.push(d);
    courtsByCitation[d.citation] = d;

    d = {name:'Coast Guard Court of Criminal Appeals',
        citation:'C.G.C.C.A.??',
        info:'The Coast Guard Court of Criminal Appeals (CGCCA) is the intermediate appellate court for criminal convictions in the U.S. Coast Guard.',
        jurisdiction:'Federal Special',
        infoSource:'http://en.wikipedia.org/wiki/Coast_Guard_Court_of_Criminal_Appeals',
        url:'http://www.uscg.mil/Legal/cca/Court_of_Criminal_Appeals.asp',
        note:"not in CourtListener"};

    courtOfAppealsArmedForces.children.push(d);
    courtsByCitation[d.citation] = d;

    d = {name:'Air Force Court of Criminal Appeals',
        citation:'A.F.C.C.A.??',
        seal:'afcca_seal.jpg',
        sealSource:'http://afcca.law.af.mil/images/afcca_seal.jpg',
        info:"The Court hears and decides appeals of United States Air Force court-martial convictions and appeals <a target='_blank' href='http://en.wikipedia.org/wiki/Pendente_lite'><i>pendente lite</i></a>.",
        jurisdiction:'Federal Special',
        infoSource:'http://en.wikipedia.org/wiki/Air_Force_Court_of_Criminal_Appeals',
        url:'http://afcca.law.af.mil/content/index.php.html',
        note:"not in CourtListener"};

    courtOfAppealsArmedForces.children.push(d);
    courtsByCitation[d.citation] = d;



    //supremeCourt.children.push(courtOfAppealsArmedForces);

//    Court of Appeals for the Federal Circuit	11798	Federal Appellate	http://www.cafc.usco…	cafc	Fed. Cir.
//        Court of Appeals for the Armed Forces	554	Federal Special	http://www.armfor.us…	armfor	C.A.A.F.


    var districtCourtsAfterParse = [];
    //loop over the district courts...
    districtCourts.forEach(function(districtCourt) {

        var parent = courtsByCitation[districtCourt.parentCitation];

        if (isUndefined((parent))) {
            console.log(districtCourt);
        }

        var d = {name: districtCourt.name
                    , abbrev:districtCourt.courtListenerAbbrev
                    , citation: districtCourt.citation
                    , children:[]
                    , parent:parent
                    , wikiUrl:districtCourt.wikiUrl
                    , chiefJudge:districtCourt.chiefJudge
                    , chiefJudgeUrl:districtCourt.judgeUrl
                    , established:districtCourt.established
                    , numberJudges:districtCourt.judges
                    , numberMeetingPlaces:districtCourt.meetingPlaces
                    , seal: districtCourt.seal
                    , sealSource: districtCourt.sealSource
                    , judgesPic:districtCourt.judgesPic
                };

        //console.log(d.seal);

        courtsByCitation[d.citation] = d;
        districtCourtsAfterParse.push(d);
        parent.children.push(d);

    });

    var courtListenerByName = {};

    courtListenerData.forEach(function(courtListenerCourt) {

        //console.log(courtListenerCourt.citation);

        //this is used when loading state courts
        courtListenerByName[courtListenerCourt.name] = courtListenerCourt;
        //console.log(courtListenerCourt.name);

        var theCourt = courtsByCitation[courtListenerCourt.citation];

        if (isDefined(theCourt)) {

            //console.log("Found '" + theCourt.citation + "'");

            theCourt.courtListenerURL = courtListenerCourt.courtListenerURL;
            theCourt.url = courtListenerCourt.url;
            theCourt.courtListenerName = courtListenerCourt.name;
            theCourt.jurisdiction = courtListenerCourt.jurisdiction;

//            if (isDefined(courtListenerCourt.judgesPic)) {
//                if (isUndefined(theCourt.judgesPic)) {
//                    theCourt.judgesPic = courtListenerCourt.judgesPic;
//                    theCourt.judgesPicSource = courtListenerCourt.judgesPicSource;
//
//                }
//            }

        }
        else {
            //onsole.log("Undefined: " + courtListenerCourt.citation);
        }

    });

    //courtsByCitation["E.D. Cal."].jurisdiction = "Federal District";

    //make sure each district one we expect has info...
    var i=0;
    districtCourtsAfterParse.forEach(function(districtCourt) {
        if (isUndefined((districtCourt.jurisdiction))) {
            console.log("Did not find district court: " + districtCourt.citation);
            i++;
        }
        else {
            //console.log("DID find district court: " + districtCourt.citation);
        }
    });


    //deal with the state highest courts...
    stateHighestCourtsAfterParse = [];

    stateHighestCourts.forEach(function(stateHighestCourt) {

        //find the court in the court listener data set
        //console.log(stateHighestCourt);

        var parent = courtsByCitation["SCOTUS"];

        //find the court in the courtlistener set
        var courtListenerData = courtListenerByName[stateHighestCourt.name];


        var d = {name: stateHighestCourt.name
                , isStateCourt:true
                , citation: courtListenerData.citation
                , stateAbbrev: stateHighestCourt.stateAbbrev
                , stateWikiUrl: stateHighestCourt.stateWikiUrl
                , children:[]
                , parent:parent
                , wikiUrl:stateHighestCourt.courtWikiUrl
                , url: courtListenerData.url
                , numberJudges:stateHighestCourt.numberJudges
                , seal:courtListenerData.seal
                , sealSource:courtListenerData.sealSource
                , judgeTermLength:stateHighestCourt.judgeTermLength_years
        };

        courtsByCitation[d.citation] = d;
        stateHighestCourtsAfterParse.push(d);
        //parent.children.push(d);

    });

    var numberSubcourts = 0;
    //subcourts of stateHighestCourts/Courts of Last Resort
    courtListenerData.forEach(function(courtListenerCourt) {


        if (isDefined(courtListenerCourt.stateParent)) {

            var c = courtListenerCourt;
            var parentCitation = c.stateParent;
            var parentCourt = courtsByCitation[parentCitation];


//            {name:'First Department, Appellate Division of the Supreme Court of the State of New York',
//                stateParent:'N.Y.', jurisdiction:'State Appellate',
//                citation:'??',
//                url:'http://www.courts.state.ny.us/courts/ad1/index.shtml',
//                courtListenerURL:'NA'} ,


            //onsole.log(parentCitation);
            var d =
            {   name: c.name,
                seal: c.seal,
                sealSource: c.sealSource,
                isStateCourt: true,
                citation: c.citation,
                stateAbbrev: parentCourt.stateAbbrev,
                jurisdiction: c.jurisdiction,
                url: c.url,
                children: [],
                parent: parentCourt
            }

            numberSubcourts++;
            courtsByCitation[d.citation] = d;
            parentCourt.children.push(d);
        }

    });

    //lert(numberSubcourts);

    var specialCourtsThatAppealToFederalCourtOfAppeals = [];


        //Appeals to the court come from all federal district courts,

        //United States Court of Federal Claims,
        var d = {name: "United States Court of Federal Claims"
                    , citation:"Fed. Cl." //or C.F.C.
                    , info:"The United States Court of Federal Claims is a United States federal court that hears monetary claims against the U.S. government."
                    , infoSource:"http://en.wikipedia.org/wiki/United_States_Court_of_Federal_Claims"
                    , children:[]
                    , parent:courtOfAppealsFederalCircuit
                    , wikiUrl:"http://en.wikipedia.org/wiki/United_States_Court_of_Federal_Claims"
                    , seal:"240px-US-CourtOfFederalClaims-Seal_svg.png"
                    , sealSource:"http://en.wikipedia.org/wiki/File:US-CourtOfFederalClaims-Seal.svg"
                    , url:"http://www.uscfc.uscourts.gov"};

        specialCourtsThatAppealToFederalCourtOfAppeals.push(d);

        //citation:'Ct. Intl. Trade', url:'http://www.cit.uscourts.gov/'
        //the United States Court of International Trade,
        var d = {name: "United States Court of International Trade"
            , citation:"Ct. Intl. Trade"
            , info:"The United States Court of International Trade, established under Article III of the Constitution, has nationwide jurisdiction over civil actions arising out of the customs and international trade laws of the United States."
            , infoSource:"http://en.wikipedia.org/wiki/United_States_Court_of_International_Trade"
            , children:[]
            , parent:courtOfAppealsFederalCircuit
            , wikiUrl:"http://en.wikipedia.org/wiki/United_States_Court_of_International_Trade"
            , seal:"CourtSeal_InternationalTrade.png"
            , sealSource:"http://www.cit.uscourts.gov/Images/CourtSeal.png"
            , url:"http://www.cit.uscourts.gov/"};

        specialCourtsThatAppealToFederalCourtOfAppeals.push(d);


        //and the United States Court of Appeals for Veterans Claims.
        var d = {name: "United States Court of Appeals for Veterans Claims"
            , citation:"Vet. App."
            , info:"The court has exclusive national jurisdiction to provide independent, federal, judicial oversight and review of final decisions of the Board of Veterans' Appeals."
            , infoSource:"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_Veterans_Claims"
            , children:[]
            , parent:courtOfAppealsFederalCircuit
            , wikiUrl:"http://en.wikipedia.org/wiki/United_States_Court_of_Appeals_for_Veterans_Claims"
            , seal:"seal_CourtOfAppealsForVeteransClaims.png"
            , sealSource:"http://www.uscourts.cavc.gov/images/seal.png"
            , url:"http://www.uscourts.cavc.gov/"};

        specialCourtsThatAppealToFederalCourtOfAppeals.push(d);


    //including the United States Merit Systems Protection Board,
    var d = {name: "United States Merit Systems Protection Board"
        , citation:"USMSPB??"
        , info:"The Merit Systems Protection Board (MSPB) is an independent quasi-judicial agency established in 1979 to protect federal merit systems against partisan political and other prohibited personnel practices and to ensure adequate protection for federal employees against abuses by agency management."
        , infoSource:"http://en.wikipedia.org/wiki/United_States_Merit_Systems_Protection_Board"
        , children:[]
        , parent:courtOfAppealsFederalCircuit //note discrimination appeals are heard in federal district court
        , wikiUrl:"http://en.wikipedia.org/wiki/United_States_Merit_Systems_Protection_Board"
        , seal:"240px-US-MeritSystemsProtectionBoard-Seal_svg.png"
        , sealSource:"http://upload.wikimedia.org/wikipedia/commons/thumb/3/35/US-MeritSystemsProtectionBoard-Seal.svg/240px-US-MeritSystemsProtectionBoard-Seal.svg.png"
        , url:"http://www.mspb.gov/"};

    specialCourtsThatAppealToFederalCourtOfAppeals.push(d);

    //Armed Services Board of Contract Appeals    (ASBCA)
    var d = {name: "Armed Services Board of Contract Appeals"
        , citation:"ASBCA??"
        , info:"The Armed Services Board of Contract Appeals (or ASBCA) is an administrative tribunal within the United States government that hears certain claims arising from contracts between civilian providers of goods and services and agents of the United States military"
        , infoSource:"http://en.wikipedia.org/wiki/Armed_Services_Board_of_Contract_Appeals"
        , children:[]
        , parent:courtOfAppealsFederalCircuit
        , wikiUrl:"http://en.wikipedia.org/wiki/Armed_Services_Board_of_Contract_Appeals"
        , seal:"asbcaseal.png"
        , sealSource:"http://www.asbca.mil/asbcaseal.png"
        , url:"http://www.asbca.mil/index.html"};

    specialCourtsThatAppealToFederalCourtOfAppeals.push(d);


//    var d = {name: "Civilian Board of Contract Appeals"
//        , citation:"CBCA??"
//        , info:"The CBCA presides over various disputes involving Federal executive branch agencies. Its primary responsibility is to resolve contract disputes between government contractors and agencies under the Contract Disputes Act."
//        , infoSource:"http://www.cbca.gsa.gov"
//        , children:[]
//        , parent:courtOfAppealsFederalCircuit
//        , wikiUrl:"http://en.wikipedia.org/wiki/Civilian_Board_of_Contract_Appeals"
//        , seal:"cbca_color_seal_small.png"
//        , sealSource:"http://www.cbca.gsa.gov/img/cbca_color_seal_small.png"
//        , url:"http://www.cbca.gsa.gov/"};
//
//    specialCourtsThatAppealToFederalCourtOfAppeals.push(d);


    //Government Accountability Office Contract Appeals Board (GAOCAB)
    var d = {name: "Government Accountability Office Contract Appeals Board"
        , citation:"GAOCAP??"
        , info:"GAO's Contract Appeals Board considers appeals of decisions by contracting officers in various legislative branch agencies, including the Architect of the Capitol and the Government Printing Office."
        , infoSource:"http://www.gao.gov/legal/contract/appeals.html"
        , children:[]
        , parent:courtOfAppealsFederalCircuit
        , wikiUrl:"NA"
        , ignoreseal:"NA"
        , ignoresealSource:"NA"
        , url:"NA"};

    specialCourtsThatAppealToFederalCourtOfAppeals.push(d);

    //The Board of Contract Appeals decides disputes between contractors and executive agencies of the United States, including the Departments of State, Treasury, Commerce, and Education.
    //Civilian Board of Contract Appeals    (CBCA)

    var d = {name: "Postal Service Board of Contract Appeals"
        , citation:"Postal Service Board?"
        , info:""
        , infoSource:""
        , children:[]
        , parent:courtOfAppealsFederalCircuit
        , wikiUrl:"NA"
        , ignoreseal:"NA"
        , ignoresealSource:"NA"
        , url:"http://about.usps.com/who-we-are/judicial/board-contract-appeals-decisions/welcome.htm"};

    //I'm not 100% sure of this... I can't confirm it yet... May 12, 2014
    //specialCourtsThatAppealToFederalCourtOfAppeals.push(d);


    d = {name:"Civilian Board of Contract Appeals"
            , citation:"CBCA??"
            , info:'The Civilian Board of Contract Appeals (CBCA) is an independent tribunal housed within the General Services Administration. The CBCA presides over various disputes involving Federal executive branch agencies. Its primary responsibility is to resolve contract disputes between government contractors and agencies under the Contract Disputes Act. '
            , infoSource:'http://www.cbca.gsa.gov/index.html'
            , extraNote:'An application for fees and other expenses shall be filed within 30 calendar days of a final disposition in the underlying appeal. The Board\'s decision becomes final (for purposes of the timeliness of the filing of a cost application) when it is not appealed to the United States Court of Appeals for the Federal Circuit within the time permitted for appeal or, if the decision is appealed, when the time for petitioning the Supreme Court for certiorari has expired.'
            , extraNoteSource:'http://www.cbca.gsa.gov/howto/filing.html'
            , children:[]
            , parent:courtOfAppealsFederalCircuit
            , seal:'cbca_color_seal_small.png'
            , sealSource:'http://www.cbca.gsa.gov/img/cbca_color_seal_small.png'
            , url:'http://www.cbca.gsa.gov/decisions/appeals.html'
    }
    specialCourtsThatAppealToFederalCourtOfAppeals.push(d);

    specialCourtsThatAppealToFederalCourtOfAppeals.forEach(function(c) {
        c.specialCourtThatAppealsToFederalCourtOfAppeals = true;
        courtsByCitation[c.citation] = c;
        //c.displayName = true;
       courtOfAppealsFederalCircuit.children.push({isDummy:true});
       courtOfAppealsFederalCircuit.children.push(c);
    });

    //d={};

    //add the bankruptcy appellate panels
    courtListenerData.forEach(function(courtListenerCourt) {

        if (
            (courtListenerCourt.jurisdiction==='Federal Bankruptcy Panel')
            &&
            (courtListenerCourt.citation.indexOf('Cir.') > -1)
            ) {

                var bc = {
                    name:courtListenerCourt.name,
                    citation: courtListenerCourt.citation,
                    courtListenerURL : courtListenerCourt.courtListenerURL,
                    url : courtListenerCourt.url,
                    courtListenerName : courtListenerCourt.name,
                    jurisdiction : courtListenerCourt.jurisdiction,
                    isBankruptcyPanel:true,
                    children:[]
                };

                courtsByCitation[bc.citation] = bc;
                //peel off the parent
                var c = bc.citation;
                var parentCitation = c.substr(0, c.length-4);
                var parent = courtsByCitation[parentCitation];

                parent.hasBAP = true;
                parent.theBAP = bc;

                //add a dummy child
                bc.children.push({citation:"",isDummy:true});
                bc.children.push({citation:"",isDummy:true});

                bc.parent = parent;

                //console.log(bc);
                //console.log(parent);

                parent.children.push(bc);


        }
        else if (
                (courtListenerCourt.jurisdiction==="Federal Bankruptcy")
                &&
                (courtListenerCourt.citation.indexOf("Bankr.")>-1) //ignore Mass and Me ones from 1980/1981
            ){

            if (courtListenerCourt.citation !=="Bankr. D. Tenn.")  //ignore this older court here...
                {

                var bc = {
                    name: courtListenerCourt.name,
                    citation: courtListenerCourt.citation,
                    courtListenerURL: courtListenerCourt.courtListenerURL,
                    url: courtListenerCourt.url,
                    courtListenerName: courtListenerCourt.name,
                    jurisdiction: courtListenerCourt.jurisdiction,
                    isDistrictBankruptcyCourt: true
                };

                var cc = bc.citation;
                courtsByCitation[bc.citation] = bc;

                var parentCitation = cc.substr(6).trim();
                    if (cc==="Bankr. D.C.") {
                        parentCitation="D.D.C."; //special case
                    }
                    else if (cc==="Bankr. M.D. Penn.") {
                        parentCitation="M.D. Pa.";
                    }
                    else if (cc==="Bankr. N. Mar. I.") {
                        parentCitation="D.N. Mar. I.";
                    }
                    else if (cc==="Bankr. N.D. Okla") {
                        parentCitation="N.D. Okla.";
                    }
                    else if (cc==="Bankr. N.D.W. Va.") {
                        parentCitation = "N.D. W. Va.";
                    }
                    else if (cc==="Bankr. S.D.W. Va.") {
                        parentCitation = "S.D. W. Va.";
                    }
                    else if (cc=="Bankr. S.D. Florida") {
                        parentCitation="S.D. Fla.";
                    }

                //var parent = courtsByCitation[parentCitation];
                var parent = courtsByCitation[parentCitation];

                bc.parent = parent;

               // console.log(bc.citation);
               // console.log(bc);
               // console.log(parent);

                parent.children.push(bc);
            }

        }


    });


    //get extraThings
    //this is what can happen as you just see where it goes...
    courtListenerData.forEach(function(courtListenerCourt) {
        var court = courtsByCitation[courtListenerCourt.citation];
        if (isDefined(court)) {
                court.extraThings = courtListenerCourt.extraThings;
        }
    });



    //see about setting up the states


//Not dealt with: The court also takes appeals of certain administrative agencies' decisions,
//            the Boards of Contract Appeals,
//            the Board of Patent Appeals and Interferences,
//        and the Trademark Trial and Appeals Board.
//
//
//
//        Decisions of the United States International Trade Commission,
//            the Office of Compliance, an independent agency in the legislative branch,
//            and the Government Accountability Office Personnel Appeals Board,
//            and the Department of Justice Bureau of Justice Assistance also are reviewed by the court.


        //do a final sync with CourtListener...


    //console.log("Number not found: " + i);

    //M.D. Georgia or M.D. Ga
//    N.D.N.Y. or N.D.N.Y.
//    M.D. Pa. or M.D. Penn.
//    D. Md. or D. Maryland
//    N.D. W. Va. or N.D.W. Va.
//    S.D. W. Va. or S.D.W. Va
//    E.D. Wis.
//    D. Minn. or D. Minnesota
//    E.D. Cal.
//    D.N. Mar. I. or N. Mar. I.
//    D. Or. or D. Ore. full thing in districtCourts
//    D. Col. or D. Colo. full thing in districtCourts
//    E.D. Ok. or E.D. Okla. full thing in districtCourts
//    N.D. Ok. or N.D. Okla. full thing in districtCourts
//    W.D. Ok. or W.D. Okla. full thing in districtCourts
//    N.D. Fla. or N.D. Fl. full thing in districtCourts
//    M.D. Fla. or M.D. Fl. full thing in districtCourts
//    S.D. Fla. or S.D. Fl. full thing in districtCourts
//    M.D. Ga. or M.D. Georgia
        //console.log(supremeCourt);



    //onsole.log(stateHighestCourtsAfterParse);

    console.log("CourtListener courts not included...");
    //figure out which courtListener courts were not included...
        courtListenerData.forEach(function(courtListenerCourt) {
            var court = courtsByCitation[courtListenerCourt.citation];
            if (isUndefined(court)) {
                console.log(courtListenerCourt);
            }
        });
    console.log("Done CourtListener courts not included...");


    setUpChart(supremeCourt, "#graphArea", stateHighestCourtsAfterParse); //pass it down


    function setUpChart(rootCourt, containerSelector, stateNodes) {

        var margin = {top: 60, right: 50, bottom: 60, left: 10},
            width = $(containerSelector).width() - margin.left - margin.right,
            height = $(containerSelector).height() - margin.top - margin.bottom ;


        var diameter = width/2;

//        var birthYearRange = person.getBirthYearRange(20);
//        birthYearRange[0] -= 20;
        var theScale = d3.scale.linear()
            .domain([0,10])
            .range([0,height]);

        var yearFormatter = d3.format("f0");

//        yAxis = {};
//        ["right","left"].forEach(function(which) {
//            yAxis[which] = d3.svg
//                .axis()
//                .scale(theScale)
//                .orient(which)
//                .tickFormat(yearFormatter)
//                .ticks(15);
//        });

        //how much the top part takes (includes Appeals courts)
        var fractionOfHeightForTopPart = 0.2;

        var orientations = {
            "bottom-to-top": {
                size: [width, height],
                x: function(d) { return d.x; },
                y: function(d) {
                    console.log(d.y);
                    return height/2 - d.y;
                }
            }
            , "top-to-bottom": {
                size: [width, fractionOfHeightForTopPart*height],
                x: function(d) { return d.x; },
                y: function(d) {
                    return theScale(d.getLevel());
                }
            }
        };


        var orientation = orientations["top-to-bottom"];

        var htmlArea = d3.select("#svgArea").append("div")
                                    .attr("class","htmlArea")
        var svg = d3.select("#svgArea").append("svg")
            .attr("id","courtArea")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //.attr("viewBox","0 0 10 10")
        //.attr("stroke","black")
        //    .attr("stroke-width","3")
        var defs = svg.append("defs");
            defs.append("marker")
            .attr("id","endMarker")
            .attr("refX","2")
            .attr("refY","6")
            .attr("fill","#999")
            .attr("markerWidth","10")
            .attr("markerHeight","13")
            .attr("orient","auto")
            .append("path")
            .attr("d","M2,2 L2,11 L10,6 L2,2")
            .attr("fill","#999");

        defs.append("marker")
            .attr("id","noFillMarker")
            .attr("refX","2")
            .attr("refY","6")
            .attr("fill","none")
            .attr("markerWidth","10")
            .attr("markerHeight","13")
            .attr("orient","auto")
            .append("path")
            .attr("d","M2,2 L2,11 L10,6 L2,2")
            .attr("fill","#none");

        //.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");


        var root = rootCourt;
        o = orientation; //orientation.value;
//        var o = {
//            size: [width, fractionOfHeightForTopPart*height],
//            x: function(d) { return d.x; },
//            y: function(d) {
//                //console.log(d);
//
//                var initial = scotusY - 70 - d.y/4;
//                var r = 2000;
//
//                //if (d.depth>1) {
//                //    r = 1000;
//                //}
//
//
//                var c = (d.x - width / 2);
//                c = c * c;
//                //node.y = node.y - (r - Math.sqrt(r*r - c));
//                return initial + 0.5 * (r - Math.sqrt(r * r - c));
//            }
//        };


        var diagonal = d3.svg.diagonal.radial()
                                .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

        var tree = d3.layout.tree()
                        .size(o.size);
                        //didn't matter .separation(function(a, b) { return 4;});
            //.separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

        var allNodes = tree.nodes(root);

        //filter out the dummy nodes
        allNodes = allNodes.filter(function(node) {
            return (!isDefined(node.isDummy));
        })


        //find the node for Fed. Cir.?

        //filter out nonStateSupreme ones
        var nodesNonState = allNodes.filter(function(node) {
            return (!isDefined(node.isStateCourt) || (!node.isStateCourt));
        })

        //filter out nonStateSupreme ones
        var nodesState = allNodes.filter(function(node) {
            return (isDefined(node.isStateCourt) && (node.isStateCourt));
        })

        // var treeState = tree.nodes()

        //see about tweaking the level 2 nodes?
        //space out the fed. Cir. one on the right...
        nodesNonState.forEach(function(node) {
           if (node.citation===courtOfAppealsFederalCircuit.citation) {
               //we have some now... node.children=[]; //[node.children[5]];
           }


            node.y += 180; //(fractionOfHeightForTopPart)*height - 100;
            //node.y += 225;

            //console.log(node);
            //if (node.depth===1) {
            if (node.depth > 0) {
                node.originalY = node.y;


                //see about being smarter about this May 16, 2016 var r = 2000;

                var r = 1.8*that.$mainWindow.width();

//                if (node.depth===2) {
//                    r=2000;
//                }


                if (
                        (node.citation===courtOfAppealsFederalCircuit.citation)
                        ||
                        (node.specialCourtThatAppealsToFederalCourtOfAppeals)
                    )
                {
                    //we have some now... node.children=[]; //[node.children[5]];
                    node.x += 25;
                }


                var c = (node.x - width/2);
                c = c*c;
                //node.y = node.y - (r - Math.sqrt(r*r - c));
                node.y = node.y + 0.5*(r - Math.sqrt(r*r - c));

                if (node.depth === 1 ) {
                    node.y += 25;
                }
                if (node.depth === 2 ) {
                    node.y += 50;
                }
                if (node.depth === 3 ) {
                    node.y += 100;
                }
                if (node.depth === 4 ) {
                    node.y += 115;
                }

                //var center = {};
                //center.x = width/2;
                //center.y = -200;

                //var r = Math.sqrt( (width/2)*(width/2) + center.y * center.y);

            }
            if (node.depth>0) {
                if (node.citation !== courtOfAppealsFederalCircuit.citation) {
                    //node.x = node.x - 20;
                }

            }


        });

        var links = tree.links(nodesNonState);
        //links.forEach(function(l) {
            //l.source.y += 50;
            //l.target.y += 50;
        //});


        svg.selectAll(".link")
            .data(links)
            .enter().append("path")
            .filter(function(l) {
                //console.log(l);
                return ! (isDefined(l.source.isDummy) || isDefined(l.target.isDummy)); //d.citation !== "SCOTUS";
            })
            .attr("class", "link")
//            .classed("weHaveBAP", function(link) {
//                  return
//            })
            .classed("hideWhenFedCirMouseover",function(link) {
               return (link.source.isDistrictBankruptcyCourt || link.target.isDistrictBankruptcyCourt);
            })
            .classed("hideWhenTaxCourtMouseover",function(link) {
                return !(link.source.isWritbox || link.target.isWritbox);
            })
            .attr("stroke-dasharray", function(link) {
               if  (
                        ((link.source.parent.hasBAP) || (link.target.parent.hasBAP) ) &&
                       (link.source.isDistrictBankruptcyCourt || link.target.isDistrictBankruptcyCourt)) {
                   return "5 5";
               }
                else {
                    return "";
                }
            })
            .attr("d", d3.svg.diagonal())
            .attr("marker-mid","url(#MidMarker)");
            //.attr("style", function(d) {return "stroke:#333"})

        //make the connections to the BAP
        var linksToBAP = [];
        nodesNonState.forEach(function(node) {

            if ( (node.isDistrictBankruptcyCourt)
                 &&
                (node.parent.parent.hasBAP)) {

                var link = {};
                link.source = node;
                link.target = node.parent.parent.theBAP;

                node.multipleParents = [];
                node.multipleParents.push(node.parent.parent.theBAP);
                //let comment handle this... node.multipleParents.push(node.parent);
                node.multipleParentsComment = "Note that since there is a Bankruptcy Appellate Panel (BAP) for this circuit, " +
                                                "the BAP will hear appeals unless one of the parties makes an " +
                                                "<a target='_blank' href='http://en.wikipedia.org/wiki/Bankruptcy_Appellate_Panel#Procedures'>election</a> to have the appeal heard by the district court " +
                                                ", (which is the " + node.parent.name  + "). " +
                                                "See <a target='_blank' href='http://www.uscourts.gov/FEDERALCOURTS/UNDERSTANDINGTHEFEDERALCOURTS/CourtofAppeals/BankruptcyAppellatePanels.aspx'>here</a> for more info."
                linksToBAP.push(link);

            }


        });

        svg.selectAll(".linkToBAP")
            .data(linksToBAP)
            .enter().append("path")
            .classed("linkToBAP",true)
            .classed("hideWhenFedCirMouseover",true)
            .classed("hideWhenTaxCourtMouseover",true)
            .attr("d", d3.svg.diagonal());



        var theNodes = svg.selectAll(".node")
                            .data(nodesNonState);


        var theNodesHtml = htmlArea.selectAll(".nodeHtml")
                                        .data(nodesNonState);


        var theNodesHtmlImage = htmlArea.selectAll(".nodeImage")
            .data(nodesNonState);

        var theNodesWritBox = htmlArea.selectAll(".nodeWritBox")
            .data(nodesNonState);

        var theNodesEnter = theNodes.enter();
                            //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });


        //move depth 2 down here

        var districtCourtWritBox;

        //used for placement of titles
        var yValue = {};
        theNodesEnter.append("circle")
            .filter(function(d) {
                return (!d.isWritbox) && d.citation !== "SCOTUS" && isUndefined(d.seal);
            })
            .attr("class", "node")
            .classed("isBAP", function(d) {return isDefined(d.isBankruptcyPanel) && d.isBankruptcyPanel})
            .classed("isBankruptcyCourt", function(d) {return isDefined(d.isDistrictBankruptcyCourt) && d.isDistrictBankruptcyCourt})
            .classed("hideWhenFedCirMouseover",function(d) {return isDefined(d.isDistrictBankruptcyCourt) && d.isDistrictBankruptcyCourt})
            .classed("hasQtip",true)
            .classed("hideWhenTaxCourtMouseover","true")
            .attr("citation", function(d) {return d.citation;})
            .attr("r", function(d)  { return 4;})
            .attr("cx", function(d) {
                                        if (d.isWritbox) {
                                            districtCourtWritBox = d;
                                        }
                                        return d.x;
                                    })
            .attr("cy", function(d) {
                                        //console.log(d);
                                        if (isDefined(d.jurisdiction)) {
                                            yValue[d.jurisdiction] = d.y;
                                        }
//                                        if (d.depth===2) {
//                                            return d.y + 25;
//                                        }
//                                        else {
                                            return d.y;// + 40;
//                                        }
                                    });
            //.on("mouseenter", mouseEnterCircle);
            //.on("mouseleave", mouseLeaveCircle)

        //console.log(nodesNonState);


            theNodesHtmlImage.enter().append("div")
                .filter(function(d) {
                    return (  (d.jurisdiction==="Federal District") ||
                        (d.specialCourtThatAppealsToFederalCourtOfAppeals))
                        && (isDefined(d.seal));
                })
                .attr("class","districtCourtImageNode")
                .classed("hideWhenTaxCourtMouseover","true")
                .attr("citation", function(d) {return d.citation;})
                .classed("hasQtip",true)
                .style("position","absolute")
                .style("left", function(d) {
                    return (6 + d.x - 0) + "px";
                })
                .attr("originalLeft", function(d) {
                    return (6 + d.x - 0);
                })
                .style("top", function(d) {
                    return (margin.top - 4 + d.y) + "px";
                })
                .attr("originalTop", function(d) {
                    return (margin.top -4 +  d.y);
                })
                .html(function(d) {
                    return getThumbDivForSeal(d,8,8)
                });

//            var hoverImageWidth = 100;
//            theNodesHtmlImage.enter().append("img")
//            .filter(function(d) {
//                if (isUndefined(d.seal)) {
////                    console.log(d.name);
//                }
//                if (d.jurisdiction !== "Federal District") {
//                    //console.log(d.name);
//                }
//                return (  (d.jurisdiction==="Federal District") ||
//                            (d.specialCourtThatAppealsToFederalCourtOfAppeals))
//                        && (isDefined(d.seal));
//            })
//            .attr("class","districtCourtImageNode")
//            .classed("hideWhenTaxCourtMouseover","true")
//            .attr("citation", function(d) {return d.citation;})
//            .classed("hasQtip",true)
//            .style("left", function(d) {
//                return (6 + d.x - 0) + "px";
//            })
//            .attr("originalLeft", function(d) {
//                return (6 + d.x - 0);
//            })
//            .style("top", function(d) {
//                return (margin.top - 4 + d.y) + "px";
//            })
//            .attr("originalTop", function(d) {
//                return (margin.top -4 +  d.y);
//            })
//            .attr("border","2")
//            .attr("width","8")
//            .attr("src",function(d) {
//                    //console.log(d.seal);
//                        return SEAL_DIR + "/" + d.seal;
//            })
//            .on("mouseenter", function() {
//
//                return; //ignore scaling for now May 13, 2014
//                var obj = d3.select(this);
//                var citation = obj.attr("citation");
//                var left = obj.attr("originalLeft");
//                var top = obj.attr("originalTop");
//
//
//                obj.style("z-index","10000").transition().duration(200)
//                                .attr("width",hoverImageWidth)
//                                .style("left",(left - (hoverImageWidth-8)/2) + "px")
//                                .style("top",(top - (hoverImageWidth-8)/2) + "px");
//
//            })
//            .on("mouseleave", function() {
//                return; //ignore scaling for now May 13, 2014
//                    var obj = d3.select(this);
//                    var left = obj.attr("originalLeft");
//                    var top = obj.attr("originalTop");
//
//                    obj.transition().duration(200)
//                        .attr("width",8).style("z-index","2000")
//                        .style("left",(left - 0) + "px")
//                        .style("top",(top - 0) + "px");
//
//                });


        //not sure if I will use this
        function shrinkBackEnlargedSeals() {

            that.anyEnlargedSeals.forEach(function(obj) {
                //var obj = d3.select(this);
                var left = obj.attr("originalLeft");
                var top = obj.attr("originalTop");

                obj.transition().duration(200)
                    .attr("width",8).style("z-index","2000")
                    .style("left",(left - 0) + "px")
                    .style("top",(top - 0) + "px");
            });


        }

//        function mouseLeaveCircle() {
//
//            var obj = d3.select(this);
//            var currentR = obj.attr("currentR");
//            obj.attr("r",currentR);
//
//            that.nodesExpanded.push(obj);
//            obj.transition().duration(300).attr("r",currentR).style("fill","blue");
//
//        }


        var certMessage = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
        certMessage += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
        certMessage += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";
//        htmlArea.append("div")
//            .attr("class","writCertioriBox")
//            .style("left",(scotusX - 35)+"px")
//            .style("top",(scotusY + 90)+"px")
//            .classed("hasQtip",true)
//            .attr("title","writs of certiorari")
//            .attr("tooltip",certMessage)
//            //.style("width",100+"px")
//            //.style("height",20+"px")
//            .html("petitions for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>");

        var certMessageFederal = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
        certMessage += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
        certMessage += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";

        var writBoxXShift = 68;
        theNodesWritBox.enter().append("div")
            .filter(function(d) {
                //console.log(d.isWritbox);
                return (d.isWritbox);
            })
            .attr("class","writCertioriBox")
            .style("width","160px")
            .style("left", function(d) {
                        return (d.x - writBoxXShift) +"px"
            })
            .style("top", function(d) { //console.log(d.y + 50);
                                        return (d.y+40) +"px";})
            .classed("hasQtip",true)
            .attr("title","writs of certiorari from Federal Courts")
            .attr("tooltip",certMessageFederal)
            .html("<div class='boxForMainCourtType'>Federal</div>" +
                    "petitions for " +
                     "<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>");
                    //+"<br/>from Federal Appeals Courts");




        function mouseEnterCircle() {


            var obj = d3.select(this);
            var currentR = obj.attr("r");
            var citation = obj.attr("citation");
            obj.classed("isExpanded",true);
            var theCourt = courtsByCitation[citation];
            shrinkExpandedNodesButThisOne(theCourt);

            //that.nodesExpanded.push(obj);
            //obj.attr("currentR",currentR);

            obj.transition().duration(300).attr("r",6).style("fill","red");

        }

        function shrinkBackNodeForCourt(theCourt) {
            shrinkExpandedNodesButThisOne();

            //var node = d3.select(".node[citation='" + theCourt.citation + "']");
            //console.log(node);
            //shrinkBackNode(node);
        }

        function shrinkBackNode(node) {
            //onsole.log("shrinkBackNode");
            //var currentR = node.attr("currentR");
            //var citation = node.attr("citation");
            //if (isDefined(currentR)) {
            if (isDefined(node)) {
                node.attr("r", 4);
                //node.style("fill", "blue");
                //node.transition().duration(300).attr("r",4).style("fill","blue");
                //}
            }
        }

        function closeAllTips() {
            console.log("closeAllTips");
            $('div.qtip:visible').qtip('hide');
        }

        function shrinkExpandedNodesButThisOne(theCourt) {

            //onsole.log("shrinkAnyExpandedNodes");

            var theOnes = d3.selectAll(".node").attr("r",4); //.style("fill","blue");
            //closeAllTips();
            return;
            theOnes.forEach(function(node){
                var citation = node.citation;
                if ( (isUndefined(theCourt) ) || (  isDefined(citation) && (citation !== theCourt.citation))) {
                    //console.log(node);
                    shrinkBackNode(node);
                    //node.classed("isExpanded",false);
                }
            });
        }


        var divWidth = 50;
        var scotusX;
        var scotusY;

        var appealsFedCircuit = {};

        theNodesHtml.enter().append("div")
            .filter(function(d) {
                return isDefined((d.displayName));
            })
            .attr("class",function(d) {
                if (d.citation === "SCOTUS") {
                    return "scotusNameDiv"
                }
                else {
                    return "absDiv";//shortNameDiv"
                }
            })
            .style("left",function(d) {
                if (d.citation === "SCOTUS") {

                    scotusX = d.x;
                    return (-5 + margin.left + d.x - 140 / 2).toFixed(0) + "px";

                }
                else if (d.citation === courtOfAppealsFederalCircuit.citation) {
                    appealsFedCircuit.x = d.x;
                    return (-5 + margin.left + d.x - divWidth / 2).toFixed(0) + "px";
                }
                    else
                {
                    return (-5 + margin.left + d.x - divWidth / 2).toFixed(0) + "px";
                }
                 })
            .style("top",function(d) {
                //console.log(d);
                if (d.citation === "SCOTUS") {
                    //console.log(d);
                    scotusY = d.y;
                    return (margin.top + d.y - 60 ) + "px";

                }
                else if (d.depth == -11) {
                    appealsFedCircuit.y = d.y;
                    return ( d.y + 80) + "px";
                }
                else if (d.citation === courtOfAppealsFederalCircuit.citation) {
                    appealsFedCircuit.y = d.y;
                    return ( d.y + 40) + "px";
                }
                else {
                    return ( d.y + 40) + "px";
                    //return (margin.top + height*fractionOfHeightForTopPart - d.y - 20) + "px";
                }
            })
            .classed("hasQtip",true)
            .attr("citation",function(d) {return d.citation;})
            .style("iwidth",function(d) { if (d.citation === "SCOTUS") {
                                                return 76 + "px";
                                            } else if (d.displayName) {
                                                return divWidth + "px";}
                                            else {
                                                return "0";
                                            }
                                        })
            .html(function(d) { if (d.displayName) {    //console.log(d.shortNameHtml);
                if (d.citation == "SCOTUS") {
                    //console.log(d);
                    var s = "<table>";
                    s += "<tr><td style='vertical-align:middle;'>Supreme<br/>Court</td>";
                    if (isDefined(d.seal)) {
                        //s += "<td><img src='" + SEAL_DIR + "/" + d.seal + "' width='80'></td>";
                        s += "<td>";
                        s += "<div style='z-index:2000;position:relative;width:90px;height:90px;' class='sealAndJudges' citation='" + d.citation + "'>";
                        s += "<img style='padding-top:10px;' src='" + SEAL_DIR + "/" + d.seal + "' width='70'>";
                        s += "</td>";
                        //console.log(s);
                    }
                    s +="</tr></table>";
                    return s;
                }
                else {
                    var s = "<div style='margin-bottom:0px;' class='showCourtShortName'>" + d.shortNameHtml + "</div>";
                    //console.log(d);
                    if (isDefined(d.seal)) {
                        s += "<div style='z-index:2000;position:relative;width:60px;height:60px;' class='sealAndJudges' citation='" + d.citation + "'>";
                        s += "<img style='padding-top:8px;' src='" + SEAL_DIR + "/" + d.seal + "' width='44'>";
                        //console.log(s);
                        s += "</div>";
                    }
                    return s;
                }
                }
                else
                    {
                        return "";
                    }
                 })
            .on("mouseenter", function() {
                if (d3.select(this).attr("citation")===courtOfAppealsFederalCircuit.citation) {

                    d3.selectAll(".hideWhenFedCirMouseover").transition().duration(200)
                        .style("opacity",0.06);

                    d3.selectAll(".showWhenFedCirMouseover").transition().duration(200)
                        .style("opacity",1);

                }
            })
            .on("mouseleave", function() {
                    if (d3.select(this).attr("citation")===courtOfAppealsFederalCircuit.citation) {

                        d3.selectAll(".hideWhenFedCirMouseover").transition().duration(200)
                            .style("opacity",1);

                        d3.selectAll(".showWhenFedCirMouseover").transition().duration(200)
                            .style("opacity",0.0001);

                    }
                });


        //do SC judges separately - combine later if makes sense
        citation = supremeCourt.citation;
        var theSvg = d3.select(".sealAndJudges[citation='" + citation + "']")
            .insert("svg",":first-child")
            .style("width","100%")
            .style("height","100%")
            .style("left",0)
            .style("top",0)
            .style("z-index","-1")
            .style("position","absolute");

        theSvg.append("circle")
            .attr("cx","45")
            .attr("cy","45")
            .attr("r","45")
            .style("stroke","#dedede")
            .style("fill","white");

        //make circles for the judges
        var thisCourt = judgesGroupedByCitation[citation];
        var theChief = thisCourt.chiefJustice;
        console.log(theChief.nominatedBy.party.toLowerCase());
        theSvg.append("circle")
            .attr("cx","45")
            .attr("cy","5")
            .attr("r","5")
            .classed("party_" + theChief.nominatedBy.party.toLowerCase() ,true)


        var theRepublicans = thisCourt.activeByParty["r"];
        var theDemocrats = thisCourt.activeByParty["d"];

        var theParties = [theRepublicans, theDemocrats];

        theParties.forEach(function(p) {

            var k = 0;
            p.forEach(function(j){

                var party = j.nominatedBy.party.toLowerCase();

                k++;
                if (party==="r") {
                    var angle_degrees = 90 - 15*(k) - 8;
                }
                else {
                    var angle_degrees = 90 + 15*(k) + 8;
                }

                var angle_radians = angle_degrees * Math.PI/180;

                var cx = 0 + 45 + 40 * Math.cos(angle_radians);
                var cy = 0 + 45 - 40 * Math.sin(angle_radians);

                theSvg.append("circle")
                    .attr("cx",cx)
                    .attr("cy",cy)
                    .attr("r","4")
                    .classed("party_" + party ,true);

            });



        });

        for (var i=1;i<14;i++) {
            var citation = caCitation[i];

                console.log(citation);
                var theSvg = d3.select(".sealAndJudges[citation='" + citation + "']")
                    .insert("svg",":first-child")
                    .style("width","100%")
                    .style("height","100%")
                    .style("left",0)
                    .style("top",0)
                    .style("z-index","-1")
                    .style("position","absolute");

                theSvg.append("circle")
                    .attr("cx","30")
                    .attr("cy","30")
                    .attr("r","30")
                    .style("stroke","#dedede")
                    .style("fill","white");

                //make circles for the judges
                var thisCourt = judgesGroupedByCitation[citation];
                var theChief = thisCourt.chiefJustice;
                console.log(theChief.nominatedBy.party.toLowerCase());
                theSvg.append("circle")
                    .attr("cx","30")
                    .attr("cy","4")
                    .attr("r","4")
                    .classed("party_" + theChief.nominatedBy.party.toLowerCase() ,true)


                var theRepublicans = thisCourt.activeByParty["r"];
                var theDemocrats = thisCourt.activeByParty["d"];

                var theParties = [theRepublicans, theDemocrats];

                theParties.forEach(function(p) {

                    var k = 0;
                    p.forEach(function(j){

                            var party = j.nominatedBy.party.toLowerCase();

                            k++;
                            if (party==="r") {
                                var angle_degrees = 90 - 6*(k+2);
                            }
                            else {
                                var angle_degrees = 90 + 6*(k+2);
                            }

                            var angle_radians = angle_degrees * Math.PI/180;

                            var cx = 0 + 30 + 26 * Math.cos(angle_radians);
                            var cy = 0 + 30 - 26 * Math.sin(angle_radians);

                            theSvg.append("circle")
                                .attr("cx",cx)
                                .attr("cy",cy)
                                .attr("r","2")
                                .classed("party_" + party ,true);

                        });



                });

        }

//        if (true) {
//            svg.append("line")
//                .attr("class", "scotusAppealsEndLine")
//                .attr("x1", scotusX)
//                .attr("y1", scotusY + 4)
//                .attr("x2", scotusX)
//                .attr("y2", scotusY  + 0)
//                .attr("marker-end", "url(#endMarker)");
//        }


        //see about showing the judge info




        var certMessage = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
        certMessage += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
        certMessage += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";
//        htmlArea.append("div")
//            .attr("class","writCertioriBox")
//            .style("left",(scotusX - 35)+"px")
//            .style("top",(scotusY + 90)+"px")
//            .classed("hasQtip",true)
//            .attr("title","writs of certiorari")
//            .attr("tooltip",certMessage)
//            //.style("width",100+"px")
//            //.style("height",20+"px")
//            .html("petitions for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>");
//
//        htmlArea.append("div")
//            .attr("class","writCertioriBox")
//            .classed("hasQtip",true)
//            .attr("title","writs of certiorari")
//            .attr("tooltip",certMessage)
//            .style("left",(scotusX - 35)+"px")
//            .style("top",(scotusY - 45)+"px")
//            //.style("width",100+"px")
//            //.style("height",20+"px")
//            .html("petitions for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>");


        //draw a box where writs for SC go for Appeals


        //console.log(yValue["Federal District"]);
        if (false) {
            htmlArea.append("div")
                .attr("class", "sideTitle")
                .style("top", (35 + yValue["Federal District"]) + "px")
                .style("right", "35px")
                .html("Federal<br/>District<br/>Courts");
        }
        //create the titles on the side


        //add federal appeals court at bottom

        //courtOfAppealsFederalCircuit
        //var xForFederalCircuit = width/2;
        //var yForFederalCircuit = height - 100;

        if (true) {
            var federalDistrictNodes = nodesNonState.filter(function (d) {
                return (d.depth == 3) && isDefined(d.jurisdiction) && (d.jurisdiction.toLowerCase().indexOf('bank') < 0);

                //I don't know why this is not working
//            if  (isDefined(d.jurisdiction) && (d.jurisdiction=="Federal District")) {
//
//                return true;
//            }
//            else {
//
//
//                if (isDefined(d.jurisdiction)) {
//                    var i;
//                    for (i=0;i< d.jurisdiction.length;i++) {
//                        console.log(d.jurisdiction.substr(i,1));
//                    }
//                    console.log(d.jurisdiction.trim() == "Federal District".trim());
//                }
//                console.log("'" + d.jurisdiction + "'");
//                console.log("'" + d.jurisdiction + "'" + ", " + "Federal District");
//                console.log('Federal District' == "Federal District");
//                //console.log(d.jurisdiction.trim() == "Federal District".trim());
//                console.log(d);
//                return false;
//
//            }
            });

            var otherLinks = []
            var parentNode = {x: appealsFedCircuit.x, y: appealsFedCircuit.y +400};

            var linesData = [];

            var yShiftForLineForAppealsToFederalCircuit = 120;
            federalDistrictNodes.forEach(function (fdNode) {

                //console.log(fdNode);
                otherLinks.push({source: parentNode, target: fdNode});

//                var lineData = [
//                    {x: fdNode.x, y: fdNode.y}
//                    ,
//                    {x: appealsFedCircuit.x, y: fdNode.y}
//                    , {x: appealsFedCircuit.x, y: appealsFedCircuit.y +125}
//                    ];


                var lineData = [
                    {x: fdNode.x, y: fdNode.y},
                    {x: fdNode.x, y: appealsFedCircuit.y +yShiftForLineForAppealsToFederalCircuit},
                    {x: appealsFedCircuit.x, y: appealsFedCircuit.y +yShiftForLineForAppealsToFederalCircuit}
                ];



                //,
                //{x: appealsFedCircuit.x,y: appealsFedCircuit.y +300}

                linesData.push(lineData);

            });

            var lineFunction = d3.svg.line()
                .x(function (d) {
                    return d.x;
                })
                .y(function (d) {
                    return d.y;
                })
                .interpolate("basis");

            if (true) { //hide for the moment while looking at bankruptcy stuff May 11
                svg.selectAll(".pointToFederalCircuit")
                    .data(linesData)
                    .enter()
                    .append("path")
                    .attr("class", "pointToFederalCircuit")
                    .classed("showWhenFedCirMouseover",true)
                    .style("opacity",0)
                    .attr("d", function (d) {
                        return lineFunction(d);
                    })
                    .attr("stroke", "black")
                    .attr("stroke-width", "0.4")
                    //.attr("stroke-dasharray", "5 5")
                    .attr("fill", "none");
                //.attr("marker-end", "url(#endMarker)");
            //this is if Fed Cir is in middle
//            var lineData = [
//                {x: appealsFedCircuit.x, y: appealsFedCircuit.y + 140}
//                ,
//                {x: appealsFedCircuit.x, y: appealsFedCircuit.y + 40}
//                ,
//                {x: appealsFedCircuit.x, y: appealsFedCircuit.y}
//            ];

            //this for when Fed Cir is on the right
            var lineData = [
                {x: appealsFedCircuit.x, y: appealsFedCircuit.y + yShiftForLineForAppealsToFederalCircuit} //125}
                ,
                {x: appealsFedCircuit.x, y: appealsFedCircuit.y + 40}
                ,
                {x: appealsFedCircuit.x, y: appealsFedCircuit.y}
            ];


            var linkToFedAppealsNote = "In some cases, appeals are heard by the Court of Appeals for the Federal Circuit instead of the District Appellate court.";
            svg.append("path")
                .attr("d", lineFunction(lineData))
                .attr("stroke", "#777")
                .attr("stroke-width", "1")
                .attr("fill", "none")
                .classed("hasQtip",true)
                .classed("linkToFedAppeals",true)
                .classed("showWhenFedCirMouseover",true)
                .style("opacity",0)
                .attr("title","Appeals to Court of Appeals for the Federal Circuit")
                .attr("tooltip",linkToFedAppealsNote)
                .attr("marker-mid", "url(#endMarker)");

            }


            //manually add things for the state nodes across the top

            //console.log(stateNodes);

            //53 at the moment alert(stateNodes.length);

            //need to set up things relative to where the Supreme Court ended up

            var o = {
                size: [0.95*width, height],
                xold: function(d) { return scotusX +  0.95*(d.x-width/2); },
                x: function(d) {
                    var theX = d.x - (statesWritBox.x  - appealsWritBox.x);
                    d.shiftedX = theX;
                    return theX; }, //d.x - (statesWritBox.x  - appealsWritBox.x); },
                y: function(d) {
                    //console.log(d);

                    //console.log(scotusY);
                    //console.log(d);
                    //if (isUndefined(d.depth)) {
                    //    console.log(d);
                    //}
                    //console.log(d.y);
                    //this setting of "initial" is why it's messing u
                    //  when the height of the window is large
                    var initial = scotusY - d.y/4 - 60;
                    // May 16, 2014 var r = 1900;
                    var r = 1.8*that.$mainWindow.width();

                    //if (d.depth>1) {
                    //    r = 1000;
                    //}


                    var c = (d.x - width / 2);
                    c = c * c;
                    var theY = initial + 0.5 * (r - Math.sqrt(r * r - c));
                    //node.y = node.y - (r - Math.sqrt(r*r - c));
                    d.shiftedY = theY;
                    return theY; //initial + 0.5 * (r - Math.sqrt(r * r - c));
                }
            };


            var tree = d3.layout.tree()
                .size(o.size);

            var scotusForStateNodes = {depth:0, children:[]};
            var statesWritBox = {name:"petitions for writs"
                , html:appealsWritBox.html
                , isWritbox:true
                , isCourt:false
                , depth:1
                , children:[]};

            scotusForStateNodes.children.push(statesWritBox);

            statesWritBox.children = stateNodes;
            stateNodes.forEach(function(node) {
                if (node.children.length===0) {
                    node.children.push({name:"",isDummy:true});
                    node.children.push({name:"",isDummy:true});
                }

                if (isUndefined(node.parent)) {
                    console.log(node);
                }
            });

            var treeStates = tree.nodes(scotusForStateNodes);
            treeStates = treeStates.filter(function(node) {
                return (!isDefined(node.isDummy));
            });

            //var stateCourtWritBox =


            var theNodesTreeStates = svg.append("g")
                                        .selectAll(".node")
                                        .data(treeStates);

            var theStateNodesWritBox =  htmlArea
                                            .selectAll(".stateNodeWritBox")
                                            .data(treeStates);

            var theStateNodesHtmlImages =  htmlArea
                .selectAll(".stateNodeImage")
                .data(treeStates);



            var nodeRadius = 4;
            var theStateNodesEnter = theNodesTreeStates.enter();
            theStateNodesEnter.append("circle")
                .filter(function(d) {
                    //console.log(d)
                    return d.depth>0; //d.citation !== "SCOTUS";
                })
                .attr("class", "node")
                .classed("hasQtip",true)
                .attr("citation", function(d) {return d.citation;})
                .attr("r", function(d)  { return nodeRadius;})
                .attr("cx", o.x)
                .attr("cy", o.y);


            hoverImageWidth = 100;
            //.append("img")
            theStateNodesHtmlImages.enter()
                .append("div")
                .filter(function(d) {
                    return (isDefined(d.seal));
                })
                .attr("class","stateCourtImageNode")
                .classed("stateNodeImage",true)
                .attr("citation", function(d) {return d.citation;})
                .classed("hasQtip",true)
                .style("position","absolute")
                .style("left", function(d) {
                    return (6 + o.x(d) - 0) + "px";
                })
                .attr("originalLeft", function(d) {
                    return (6 + o.x(d) - 0);
                })
                .style("top", function(d) {
                    return (margin.top -nodeRadius + o.y(d)) + "px";
                })
                .attr("originalTop", function(d) {
                    return (margin.top - nodeRadius+ o.y(d));
                })
                .attr("border","2")
                .attr("width",2*nodeRadius)
                .attr("src",function(d) {
                    return SEAL_DIR + "/" + d.seal;
                })
                .html(function(d) {
                    return getThumbDivForSeal(d,8,8);
                });
//                .on("mouseenter", function() {
//                    return;
//
//                    var obj = d3.select(this);
//                    var left = obj.attr("originalLeft");
//                    var top = obj.attr("originalTop");
//                    obj.style("z-index","10000").transition().duration(200)
//                        .attr("width",hoverImageWidth)
//                        .style("left",(left - (hoverImageWidth-2*nodeRadius)/2) + "px")
//                        .style("top",(top - (hoverImageWidth-2*nodeRadius)/2) + "px");
//
//                })
//                .on("mouseleave", function() {
//                    return;
//
//                    var obj = d3.select(this);
//                    var left = obj.attr("originalLeft");
//                    var top = obj.attr("originalTop");
//
//                    obj.transition().duration(200)
//                        .attr("width",2*nodeRadius).style("z-index","2000")
//                        .style("left",(left - 0) + "px")
//                        .style("top",(top - 0) + "px");
//
//                });

            var stateLinks = tree.links(treeStates);
            stateLinks.forEach(function(l)  {
                //console.log(l.source.depth + ", " + l.target.depth);
                //console.log(l.target.depth);
               if (isUndefined(l.target.depth) || isUndefined(l.source.depth)) {
                   console.log(l); //.target.depth + ", " + l.source.depth);
               }
            });
            //console.log(links);

            //alert("What is going on? weird no-deth oink here...");

            svg.append("g").selectAll(".link")
                .data(stateLinks)
                .enter()
                .append("path")
                .filter(function(l) {
                    //console.log(l);
                    return ! (isDefined(l.source.isDummy) || isDefined(l.target.isDummy)); //d.citation !== "SCOTUS";
                })
                .attr("class", "link")
                .attr("class", "lightlink")
                .attr("d", d3.svg.diagonal().projection(function(d) {
                                                                        //console.log("link...");
                                                                        //console.log(d);
                                                                        //console.log([o.x(d), o.y(d)]);
                                                                        return [o.x(d), o.y(d)];
                                                                    }))
                .attr("marker-mid","url(#MidMarker)");


            var certMessageState = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
            certMessage += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
            certMessage += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";

            theStateNodesWritBox.enter().append("div")
                .filter(function(d) {
                    //console.log(d.isWritbox);
                    return (d.isWritbox);
                })
                .attr("class","writCertioriBox")
                .style("width","160px")
                .style("left", function(d) {
                    console.log(statesWritBox.shiftedX);
                    return (statesWritBox.shiftedX - writBoxXShift) +"px"
                })
                .style("top", function(d) {
                    console.log(statesWritBox.shiftedY);
                    return (statesWritBox.shiftedY + 50) +"px";})
                .classed("hasQtip",true)
                .attr("title","writs of certiorari from <a href='http://en.wikipedia.org/wiki/Court_of_last_resort' " +
                            "  target='_blank'>State Courts of last Resort</a>")
                .attr("tooltip",certMessageState)
                .html("<div class='boxForMainCourtType'>State</div>" +
                    "petitions for " +
                    "<a target='_blank' " +
                            "href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>" +
                            "writs of certiorari</a>"); // +
                            //"<br/> from <a href='http://en.wikipedia.org/wiki/Court_of_last_resort' " +
                            //"  target='_blank'>State Courts of last Resort</a>");

                //    "<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>");
                //
                //.html("petitions for <a target='_blank' " +
                //            "href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>" +
                //            "writs of certiorari</a>" +
                //            "<br/> from <a href='http://en.wikipedia.org/wiki/Court_of_last_resort' " +
                //            "  target='_blank'>State Courts of last Resort</a>");



        if (false) { //initial state stuff I was playing with
            var dx = 0.8 * (width / 53);
            var middleI = 27;

            svg.selectAll(".stateSupremeCourt")
                .data(stateNodes)
                .enter()
                .append("circle")
                .attr("class", "stateSupremeCourt")
                .attr("citation", function (d) {
                    return d.citation;
                })
                .classed("hasQtip", true)
                .classed("node", true)
                .on("mouseenter", mouseEnterCircle)
                .attr("r", 4)
                .attr("cx", function (d, i) {
                    d.x = 0.08 * width + dx * (i + 1);
                    //console.log(d.x);
                    return d.x;
                })
                .attr("cy", function (d, i) {

                    //May 16, 2014 var r = 1000;
                    var r = 0.5*that.$mainWindow.width();

                    var c = (d.x - width / 2);
                    c = c * c;
                    //node.y = node.y - (r - Math.sqrt(r*r - c));
                    d.y = 0 + 0.5 * (r - Math.sqrt(r * r - c));

                    return d.y;
                });

            var parentNode = {x: scotusX, y: scotusY};

            var stateLinesData = [];

            stateNodes.forEach(function (stateNode) {

                //otherLinks.push({source: parentNode, target: stateNode});

                var lineData = [
                    {x: stateNode.x, y: stateNode.y},
                    {x: scotusX, y: scotusY - 77}
                ];

                linesData.push(lineData);

            });

            var lineFunction = d3.svg.line()
                .x(function (d) {
                    return d.x;
                })
                .y(function (d) {
                    return d.y;
                })
                .interpolate("basis");

            svg.selectAll(".pointToSupremeCourt")
                .data(linesData)
                .enter()
                .append("path")
                .attr("class", "pointToSupremeCourt")
                .attr("d", function (d) {
                    return lineFunction(d);
                })
                .attr("stroke", "black")
                .attr("stroke-width", "0.25")
                .attr("ignorestroke-dasharray", "5 5")
                .attr("fill", "none");
            //.attr("marker-end", "url(#endMarker)");

            svg.append("line")
                .attr("class", "scotusAppealsEndLine")
                .attr("x1", scotusX)
                .attr("y1", scotusY - 77)
                .attr("x2", scotusX)
                .attr("y2", scotusY - 74)
                .attr("marker-end", "url(#endMarker)");

        }


            //console.log(federalDistrictNodes);

//            svg.selectAll(".federalCircuitAppeals")
//                .data(otherLinks)
//                .enter().append("path")
//                .attr("class", "federalCircuitAppeals")
//                .attr("d", d3.svg.diagonal())
//                .attr("marker-mid", "url(#MidMarker)");


//            svg.append("line")
//                .attr("class", "federalCircuitAppealsEndLine")
//                .attr("x1", xForFederalCircuit)
//                .attr("y1", yForFederalCircuit - 10)
//                .attr("x2", xForFederalCircuit)
//                .attr("y2", yForFederalCircuit - 6)
//                .attr("marker-end", "url(#endMarker)");

//        var federalCircuitCircle = svg.append("circle")
//            .attr("class", "node")
//            .attr("r", 5)
//            .attr("cx", xForFederalCircuit)
//            .attr("cy", yForFederalCircuit);

//            htmlArea.append("div")
//                .attr("class", "appealsFederalCircuitTitle")
//                .style("left", (xForFederalCircuit + divWidth / 2 - 10) + "px")
//                .style("top", (yForFederalCircuit + 71) + "px")
//                .style("width", divWidth)
//                .classed("hasQtip", true)
//                .attr("citation", courtOfAppealsFederalCircuit.citation)
//                .html(courtOfAppealsFederalCircuit.shortNameHtml);

//            htmlArea.append("div")
//                .attr("class", "infoAppealsFederalCircuitTitle")
//                .style("left", (xForFederalCircuit + divWidth / 2 - 180) + "px")
//                .style("top", (yForFederalCircuit + 80 + $('.appealsFederalCircuitTitle').height()) + "px")
//                .style("width", "400")
//                .html(courtOfAppealsFederalCircuit.summaryOfWhatItIs);


//            var lineData = [
//                {x: xForFederalCircuit, y: yForFederalCircuit + 35}
//                ,
//                {x: width + 60, y: yForFederalCircuit + 35}
//                ,
//                {x: width + 60, y: 0 - 40}
//                ,
//                {x: width / 2, y: 0 - 40}
//            ];
            var lineFunction = d3.svg.line()
                .x(function (d) {
                    return d.x;
                })
                .y(function (d) {
                    return d.y;
                })
                .interpolate("basis");
//            svg.append("path")
//                .attr("d", lineFunction(lineData))
//                .attr("stroke", "#777")
//                .attr("stroke-width", "1")
//                .attr("fill", "none")
//                .attr("marker-mid", "url(#endMarker)");

            //add line from Federal Circuit to Supreme court
        }


        var certMessageOtherSources = "TBD";
        //create box for writs of certiori from other sources
//        var writBoxOtherSources = htmlArea.append("div")
//            .attr("class","writCertioriBox")
//            .style("width","100px")
//            .style("left", (scotusX + 160) + "px")
//            .style("top", (scotusY + 20) + "px")
//            .classed("hasQtip",true)
//            .attr("title","writs of certiorari")
//            .attr("tooltip",certMessageOtherSources)
//            .html("petitions for <a target='_blank' " +
//                "href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>" +
//                "writs of certiorari</a>" +
//                "<br/> from other sources");

        //set up the Armed Forced stuff on the right
        //courtOfAppealsArmedForces
        var treeOther = d3.layout.tree()
            .size(o.size);

        tree.separation(function (a, b) {
            return (a.depth ==2 && b.depth==2) ? 2 : 1;
        });
        var scotusForOtherSources = {depth:0, children:[]};
        var writBoxOtherSources = {name:"petitions for writs from other sources"
            , html:appealsWritBox.html
            , isWritbox:true
            , isCourt:false
            , depth:1
            , children:[]};

        scotusForOtherSources.children.push(writBoxOtherSources);
        writBoxOtherSources.children.push(courtOfAppealsArmedForces);
        //writBoxOtherSources.children.push({name:"?", shortNameHtml:"??", displayName:true, height:20, width:20});

        var otherSourcesWidth = width/3;
        var otherSourcesHeight = height/4;

        //var scotusMid = $('#display_SCOTUS').height()/2;
        //console.log(scotusMid);

        var orientationLeftToRight = {size: [otherSourcesHeight, otherSourcesWidth],
            y: function(d) {
                //d.shiftedY = scotusY - 0 + (otherSourcesHeight/2 - d.x);
                d.shiftedY = scotusY  + otherSourcesHeight/2.5 -  d.x;
                return d.shiftedY;
                },
            x: function(d) {
                d.shiftedX = scotusX + 50 +  d.y;
                return d.shiftedX;
            }};

        var o = orientationLeftToRight;
        var treeOther = d3.layout.tree().size(o.size);

        var treeOtherSources = treeOther.nodes(scotusForOtherSources);
        var linksOtherSources = treeOther.links(treeOtherSources);

        var treeNodesOtherSources = svg.append("g")
            .selectAll(".node")
            .data(treeOtherSources);

        var writBoxOtherSourcesArea =  htmlArea
            .selectAll(".otherSourcesNodeWritBox")
            .data(treeOtherSources);


        var theNodesHtmlOther =  htmlArea
            .selectAll(".otherSourcesCourtDisplayInfo")
            .data(treeOtherSources);

        var theOtherNodesHtmlImages = htmlArea
            .selectAll(".otherSourcesSealForNode")
            .data(treeOtherSources);

        //let's get going with the "other" ones
        var theOtherNodesEnter = treeNodesOtherSources.enter();
        theOtherNodesEnter.append("circle")
            .filter(function(d) {
                return d.depth>0 && (!d.displayName) ; //d.citation !== "SCOTUS";
            })
            .attr("class", "node")
            .classed("hasQtip",true)
            .attr("citation", function(d) {console.log(d.citation);
                                           return d.citation;})
            .attr("r", function(d)  { return nodeRadius;})
            .attr("cx", o.x)
            .attr("cy", o.y);

        svg.append("g").selectAll(".link")
            .data(linksOtherSources)
            .enter()
            .append("path")
            .filter(function(l) {
                //console.log(l);
                return ! (isDefined(l.source.isDummy) || isDefined(l.target.isDummy)); //d.citation !== "SCOTUS";
            })
            .attr("class", "link")
            .attr("class", "lightlink")
            .attr("d", d3.svg.diagonal().projection(function(d) {
                //console.log("link...");
                //console.log(d);
                //console.log([o.x(d), o.y(d)]);
                return [o.x(d), o.y(d)];
            }))
            .attr("marker-mid","url(#MidMarker)");


        theOtherNodesHtmlImages.enter()
            .append("img")
            .filter(function(d) {
                return (d.depth>2 && isDefined(d.seal));
            })
            .attr("class","stateCourtImageNode")
            .classed("stateNodeImage",true)
            .attr("citation", function(d) {return d.citation;})
            .classed("hasQtip",true)
            .style("left", function(d) {
                return (6 + o.x(d) - 0) + "px";
            })
            .style("top", function(d) {
                return (margin.top -nodeRadius + o.y(d)) + "px";
            })
            .attr("border","2")
            .attr("width",2*nodeRadius)
            .attr("src",function(d) {
                return SEAL_DIR + "/" + d.seal;
            })

        //put the writbox div on top of that node...
        //console.log(writBoxOtherSources);

        writBoxOtherSourcesArea.enter().append("div")
            .filter(function(d) {
                return (d.isWritbox);
            })
            .attr("class","writCertioriBox")
            .style("width","150px")
            .style("left", function(d) {
                //console.log(statesWritBox.shiftedX);
                return (writBoxOtherSources.shiftedX - 50) +"px"
            })
            .style("top", function(d) {
                //console.log(statesWritBox.shiftedY);
                return (writBoxOtherSources.shiftedY - 20 + margin.top) +"px";})
            .classed("hasQtip",true)
            .attr("title","writs of certiorari")
            .attr("tooltip",certMessage)
            .html("<div class='boxForMainCourtType'>Armed Forces</div>" +
                "petitions for <a target='_blank' " +
                "href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>" +
                "writs of certiorari</a>");

//            .html("petitions for <a target='_blank' " +
//                "href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>" +
//                "writs of certiorari</a>" +
//                "<br/> from other sources");

//    .html("<div class='boxForMainCourtType'>State</div>" +
//            "petitions for " +
//            "<a target='_blank' " +
//            "href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>" +
//            "writs of certiorari</a>"); // +


        theNodesHtmlOther.enter().append("div")
            .filter(function(d) {
                return (d.depth===2);
            })
            .attr("class",function(d) {
                if (d.citation === "SCOTUS") {
                    return "scotusNameDiv"
                }
                else {
                    return "absDiv";//shortNameDiv"
                }
            })
            .style("left",function(d) {
                    return (d.shiftedX).toFixed(0) + "px";
            })
            .style("top",function(d) {
                    if (d.height) {
                        return (d.shiftedY + 30 + d.height) + "px";
                    }
                    else {
                        return (d.shiftedY + 40) + "px";
                    }
            })
            .classed("hasQtip",true)
            .attr("citation",function(d) {return d.citation;})
            .style("width",function(d) { if (d.width) {
                                                return d.width + "px";
                                            }
                                            else {
                                        return "80px";}
            })//divWidth + "px";})
            .attr("id",function(d) { return "display_" + d.citation;})
            .html(function(d) {
                if (d.displayName) {    //console.log(d.shortNameHtml);
                    if (d.citation == "SCOTUS") {
                        //console.log(d);
                        var s = "<table>";
                        s += "<tr><td style='vertical-align:middle;'>Supreme<br/>Court</td>";
                        if (isDefined(d.seal)) {
                            s += "<td><img src='" + SEAL_DIR + "/" + d.seal + "' width='80'></td>";
                            //console.log(s);
                        }
                        s += "</tr></table>";
                        return s;
                    }
                    else {
                        var s = "<div class='showCourtShortName'>" + d.shortNameHtml + "</div>";
                        return s;
                    }
                }
            });



        //specialWaysToSupremeCourt
        var scotusForRareScenarios = {depth:0, children:[]};
        var writBoxRareScenarios = {name:"rare scenarios"
            , html:"Other routes to Supreme Court"
            , isWritbox:true
            , isCourt:false
            , depth:1
            , shortNameHtml:"Other routes to <br/>Supreme Court"
            , children:[]};

        specialWaysToSupremeCourt.forEach(function(r) {
            writBoxRareScenarios.children.push(r);
        });
        scotusForRareScenarios.children.push(writBoxRareScenarios);

        var rareSourcesWidth = width/3;
        var rareSourcesHeight = height/4;

        var orientationRightToLeft = {size: [rareSourcesHeight, rareSourcesWidth],
            y: function(d) {
                d.shiftedY = scotusY - 15 + (rareSourcesHeight/2 - d.x);
                return d.shiftedY;
            },
            x: function(d) {
                d.shiftedX = scotusX -  d.y;
                return d.shiftedX;
            }};

        var o = orientationRightToLeft;
        var treeRare = d3.layout.tree().size(o.size);

        var treeRareSources = treeRare.nodes(scotusForRareScenarios);
        var linksRareSources = treeRare.links(treeRareSources);

        //console.log(treeRareSources);

        var treeNodesRareSources = svg.append("g")
            .selectAll(".node")
            .data(treeRareSources);

        var writBoxRareSourcesArea =  htmlArea
            .selectAll(".rareSourcesNodeWritBox")
            .data(treeRareSources);

        var theNodesHtmlRare =  htmlArea
            .selectAll(".rareSourcesCourtDisplayInfo")
            .data(treeRareSources);

        var theRareNodesEnter = treeNodesRareSources.enter();
        theRareNodesEnter.append("circle")
            .filter(function(d) {
                return d.depth>0 ; //&& (!d.displayName) ; //d.citation !== "SCOTUS";
            })
            .attr("class", "node")
            .classed("hasQtip",true)
            .attr("r", function(d)  { return nodeRadius;})
            .attr("cx", o.x)
            .attr("cy", o.y);


        svg.append("g").selectAll(".link")
            .data(linksRareSources)
            .enter()
            .append("path")
            .filter(function(l) {
                return ! (isDefined(l.source.isDummy) || isDefined(l.target.isDummy)); //d.citation !== "SCOTUS";
            })
            .attr("class", "link")
            .attr("class", "lightlink")
            .attr("d", d3.svg.diagonal().projection(function(d) {
                return [o.x(d), o.y(d)];
            }))
            .attr("marker-mid","url(#MidMarker)");


        theNodesHtmlRare.enter().append("div")
            .filter(function(d) {
                return (d.depth > 0);
            })
            .attr("class",function(d) {
                if (d.isWritbox) {
                    return "writCertioriBox";
                }
                else {
                    return "rareSourcesCourtDisplayInfo";
                }
            })
            .style("width",function(d) {
                if (d.isWritbox) {
                    return "100px";
                }
                else {
                    return "125px";
                }
            })
            .style("left", function(d) {
                //console.log(statesWritBox.shiftedX);
                if (d.isWritbox) {
                    return (d.shiftedX - 40) + "px"
                }
                else {
                    return (d.shiftedX - 70) + "px"
                }
            })
            .style("top", function(d) {
                return (d.shiftedY  + margin.top - 15) +"px";})
            .classed("hasQtip", function(d) {
                if (!d.info) {
                    return false;
                }
                else {
                    return true;
                }
            })
            .attr("title",function(d) {
                return d.name;
            })
            .attr("tooltip",function(d) {
                if (!d.info) {
                    return "";
                }
                else {
                    return d.info + " (<a target='_blank' href='" + d.infoSource + "'>source</a>)";
                }
            })
            .html(function(d) {
                return d.shortNameHtml;
            });


        //tax court stuff
//        htmlArea.append("img")
//            .attr("class","districtCourtImageNode")
//            .attr("citation", usTaxCourt.citation)
//            .classed("hasQtip",true)
//            .style("left", (width/2 - 60) + "px")
//            .style("top", (height - 25 + "px"))
//            .attr("border","2")
//            .attr("width","65")
//            .attr("src",SEAL_DIR + "/" + usTaxCourt.seal)
//            .on("mouseenter", function() {
//                d3.selectAll(".linkFromTaxCourt")
//                        .transition().duration(200)
//                        .style("opacity",1);
//
////                d3.selectAll(".hideWhenFedCirMouseover").transition().duration(200)
////                    .style("opacity",0.06);
//
//                d3.selectAll(".hideWhenTaxCourtMouseover").transition().duration(200)
//                    .style("opacity",0.06);
//            })
//            .on("mouseleave", function() {
//                    d3.selectAll(".linkFromTaxCourt")
//                        .transition().duration(200)
//                        .style("opacity",0.001);
//                d3.selectAll(".hideWhenTaxCourtMouseover").transition().duration(200)
//                    .style("opacity",1);
//                });
//
//
//
//        usTaxCourt.x = width/2 - 25;
//        usTaxCourt.y = height - 20;
//        var taxLinks = [];
//        districtCourtsOfAppeal.forEach(function(c) {
//
//            var cNew = {x: c.x, y: c.y + 40};
//            var link = {source:usTaxCourt, target:cNew};
//            taxLinks.push(link);
//
//        });
//
//        svg.append("g").selectAll(".linkFromTaxCourt")
//            .data(taxLinks)
//            .enter()
//            .append("path")
//            .classed("linkFromTaxCourt",true)
//            .attr("d", d3.svg.diagonal())
//            .attr("marker-start","url(#MidMarker)");




        $('.hasQtip').each(function() {
            var citation = $(this).attr("citation");
            var theCourt = courtsByCitation[citation];
            if (isDefined(theCourt)) {

                var theTitle = theCourt.name;

                //var citation = "";
                var parentInfo="";
                if (theCourt.seal) {
                    theTitle = "<table class='popupTitle'><tr><td><img class='popupTitle' src='" + SEAL_DIR + "/" + theCourt.seal + "' width='75'></td><td><div class='popupTitleText'>" + theTitle + "</div></td></tr></table>";
                }
                $(this).qtip({
                    content: {
                        text: makeToolTipContentForCourt(theCourt),
                        position: { viewport: $(window) },
                        adjust: {screen: true},
                        my: "center",
                        at: "center",
                        button: "x",
                        title: theTitle
                    }, hide: {
                        event: false
                    }
                    , position: { viewport: $(window) }
                    , events: {
                        hide:function() {
                                            shrinkBackNodeForCourt(theCourt);

                        },
                        show: function() {
                            closeAllTips();
                        },
                        render: function() {
                                        closeAllTips();
                                        shrinkExpandedNodesButThisOne(theCourt);

                                        //shrinkAnyExpandedNodes();
                        }
                    }            });
            }
            else {
                $(this).qtip({
                    content: {
                        text: $(this).attr('tooltip'),
                        position: { viewport: $(window) },
                        adjust: {screen: true},
                        my: "center",
                        at: "center",
                        button: "x",
                        title: $(this).attr("title")
                    }, hide: {
                        event: false
                    }
                    , position: { viewport: $(window) }
                    , events: {
                        show: function() {
                            closeAllTips();
                        },
                        render: function() {
                            closeAllTips();
                        }
                    }            });

            }
        });





    }

    function makeToolTipContentForCourt(theCourt) {

        if (isUndefined(theCourt)) {
            return "";
        }
        var s="";

        var theJudges = judgesGroupedByCitation[theCourt.citation];

        //console.log(theCourt);

        var extraInfo = extraNoteInfoOnCourts[theCourt.citation];
        s += "<table class='courtInfoTable'>";

        if (extraInfo) {
            //s += "<div class='courtExtraInfo'>" + extraInfo + "</div>";
            s  += "<tr><td class='bold middle'>Info</td><td>" + extraInfo + "</td></tr>";
        }

        if (theCourt.info) {
            var a = "";
            if (theCourt.infoSource) {
                a += " (<a target='_blank' href='" + theCourt.infoSource + "'>source</a>)"
            }
            s  += "<tr><td class='bold middle'>Info</td><td>" + theCourt.info + a + "</td></tr>";
        }


        if (theCourt.chiefJudge) {

            s += "<tr class='underline'>";

            s += "<td class='bold'><div>Chief Judge</div></td>";

            if (theCourt.chiefJudgeUrl) {
                //s += "<br/>";
                //s += "<div><a target='_blank' href='" + theCourt.chiefJudgeUrl + "'>" + theCourt.chiefJudge +"</a>, Chief Judge</div";
                s += "<td><a target='_blank' href='" + theCourt.chiefJudgeUrl + "'>" + theCourt.chiefJudge +"</a></td>";
            }
            else {
                //s += "<br/>";
                s += "<div>Chief Judge: " + theCourt.chiefJudge + "</div";
                s += "<td>" + theCourt.chiefJudge + "</td>";
            }

            s += "</tr>";
        }

        if (theJudges) {

            s += "<tr class='underline'>";
            s += "<td class='bold'>Chief Justice</td>";
            s += "<td ><a target='_blank' href='" + theJudges.chiefJustice.url + "'>" + theJudges.chiefJustice.name  + "</a></td>";
            s += "</tr>";

            s += "<tr class='underline'>";
            s += "<td class='bold'>Judges</td>";

            s += "<td>";

            s += "<table class='judgesInfo'>"
                s += "<tr>";
                s += "<td class='bold'>Total Active</td>";
                s += "<td >" + theJudges.active.length + "</td>";
                s += "</tr>";

            s += "<tr>";
            s += "<td class='bold'>Nominated by <br/>Republican President</td>";
            s += "<td style='padding:4px;'>" + theJudges.activeByParty["r"].length + "</td>";
            s += "</tr>";
            s += "<tr>";
            s += "<td class='bold'>Nominated by <br/>Democrat President</td>";
            s += "<td style='padding:4px;'>" + theJudges.activeByParty["d"].length + "</td>";
            s += "</tr>";

            s += "</table></td>";
            s += "</td>";
            s += "</tr>";

        }


        if (theCourt.extraThings && theCourt.extraThings.judgesPic) {

            var width = JUDGE_PIC_WIDTH;
            if (theCourt.citation ==='SCOTUS') {
                width = width; //need to tweak qtip width for this if going to use larger...
            }
            else {

            }
            s += "<tr><td class='bold'>Justices (<a target='_blank' href='" + theCourt.extraThings.judgesPic.urlSource + "'>source</a>)</td>";
            s += "<td><img width='" + width + "' src='" + JUDGE_PICS + "/" + theCourt.extraThings.judgesPic.url + "'>";
            s += "</tr>";
        }


        if (isDefined(theCourt.citation)) {
            s  += "<tr><td class='bold'>Citation</td><td>'" + theCourt.citation + "'</td></tr>";
        }
        if (isDefined(theCourt.parent)) {
            if (theCourt.parent.isWritbox) {
                s  += "<tr><td class='bold'>Appellate Court</td><td>" + supremeCourt.name + "</td></tr>";
            }
            else {
                if (isDefined(theCourt.multipleParents)) {
                    s += "<tr><td class='bold'>Appellate Court</td>";
                    s += "<td>";
                    var tt = ""
                    theCourt.multipleParents.forEach(function(p) {
                        if (tt.length>0) {
                            tt += "; <br/>";
                        }
                        tt += p.name;
                    });
                    s += tt;
                    s += "<br/><span class='multiplePanelNote'>" + theCourt.multipleParentsComment + "</span>";
                    s += "</td></tr>";
                }
                else {
                    if (isDefined(theCourt.parent.name)) {
                        s += "<tr><td class='bold'>Appellate Court</td><td>" + theCourt.parent.name + "</td></tr>";
                    }
                }
            }
        }

        //if (s.length>0) {
        //    s += "<br/>";
        //}

        var links=[{name:"Wikipedia", url:theCourt.wikiUrl},
                    {name:"Govt Site", url:theCourt.url},
                        {name:"Cases on Court Listener", url:theCourt.courtListenerURL}
        ];

        links = links.filter(function(link) {
            return (isDefined(link.url));
        })

        if (links.length>0) {
            s += "<tr>";
            s+= "<td class='bold middle center'>Links</td>";

            s += "<td><table>";

            links.forEach(function(link) {
                if (isDefined(link.url)) {

                    s += "<tr>";

                        s += "<td><a target='_blank' href='" + link.url + "'>" + link.name + "</td>";

                    s += "</tr>";
                }
            });


            if (isDefined(theCourt.seal) && isDefined(theCourt.sealSource) ) {
                s  += "<tr><td><a target='_blank' href='" + theCourt.sealSource + "'>Seal Image Source</a></td></tr>";
            }
            else {
                //console.log(theCourt);
            }

            s += "</table></td>";
            s += "</tr>";
        }



//        s += "<div><a target='_blank' href='" + theCourt.wikiUrl + "'>Wikipedia Article" + "</a></div";
//        if (theCourt.url) {
//            s += "<br/>";
//            s += "<div><a target='_blank' href='" + theCourt.url + "'>.gov Site" + "</a></div";
//        }
//        if (theCourt.courtListenerURL) {
//            s += "<br/>";
//            s += "<div><a target='_blank' href='" + theCourt.courtListenerURL + "'>erCases on Court Listen" + "</a></div";
//        }

        s += "</table>";

        return s;

    }


};
