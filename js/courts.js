"use strict";

/**
 * Created by bradflyon on 5/3/14.
 */

//do this TODO - just go straight to end of time
//TODO - focus on this court's stuff
//TODO - update judge distribution as you progress in time
//TODO - D3 viz in the qtip (and then qtip for that)

//DONE - include court seals?
//DONE - show home pages of all the courts at the same time somehow
//todo - stream ALL live court stuff that is going on across all sites?
//todo - add "other sources of writs" to the left/right with note about what these are and how frequent they are
//DONE - mouseover on the links to the Fed. Cir.

//DONE - add "Supreme Court has original jurisdiction" on left side (state vs state, US vs. state)

//TODO - change courtlistener search to be by date, most recent first...
//DONE - deal with images like on the b/d to prevent too much downloading - forgot exactly what I did

//TODO - streamline this process: the image --> reduce size with sips --> image2css
//TODO - add breakdown for Supreme court, too


//FYI Default units of svg are pixels
//TODO Confirm if px and svg line up in the relevant element




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


    var d = {name:"Original Jurisdiction",
        displayName:true,
        shortNameHtml:"<a target='_blank' href='http://en.wikipedia.org/wiki/Article_Three_of_the_United_States_Constitution#Clause_2:_Original_and_appellate_jurisdiction'>Original<br/> Jurisdiction</a>",
        info:"There are certain cases in which the Supreme Court has <a target='_blank' href='http://en.wikipedia.org/wiki/Original_jurisdiction'>original jurisdiction</a>" +
            " to hear a case; this means that \"the parties can bring such disputes directly to the Supreme Court\" (<a target='_blank' href='http://www.law.cornell.edu/wex/original_jurisdiction'>definition from Legal Information Institute)</a>." +
            "<br/><br/>The scenarios for which this can happen are specified in " +
            "<a target='_blank' href='http://en.wikipedia.org/wiki/Article_Three_of_the_United_States_Constitution#Clause_2:_Original_and_appellate_jurisdiction'>Section 2, Clause 2, of Article Three of the US Constitution</a>: " +
                "cases affecting ambassadors, ministers and consuls, and controversies because at least one state is a party (this includes the scenarios where the United States has a controversy with a state).",
        infoSource:"http://en.wikipedia.org/wiki/Article_Three_of_the_United_States_Constitution#Clause_2:_Original_and_appellate_jurisdiction",
        idForPlayback:"originalJurisdiction",
        citation:"boxOriginalJurisdiction"
        };

    specialWaysToSupremeCourt.push(d);

    var boxOriginalJurisdiction = d;

    d = {name:"petition for certiori before judgment",
            displayName:true,
            shortNameHtml:"petition for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Certiorari_before_judgment'>certiorari before judgment</a>",
            info:"This " +
                    "is a petition for a <a target='_blank' href='http://en.wikipedia.org/wiki/Writ_of_certiorari'>writ of certiorari</a> " +
                    "in which the Supreme Court is asked to immediately review the decision of a United States District Court, " +
                    " without an appeal having been decided by a United States Court of Appeals, " +
                    "for the purpose of expediting the proceedings and obtaining a final decision. " +
                    "<br/><br/>Certiorari before judgment is rarely granted. Well-known cases that have reached the Supreme Court via this route " +
                    "include <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_v._Nixon'>the Nixon tapes in 1974</a>, " +
                    " and the case in <a target='_blank' href='http://en.wikipedia.org/wiki/Ex_parte_Quirin'>1942 of eight German saboteurs in the United States during World War II</a>.",
            infoSource:"http://en.wikipedia.org/wiki/Certiorari_before_judgment"};

    specialWaysToSupremeCourt.push(d);

    d = {name: "appeal from decisions of District Courts involving <a target='_blank' href='http://en.wikipedia.org/wiki/Redistricting'>redistricting</a>",
        displayName: true,
        shortNameHtml: "appeal of decisions <br/>involving <a target='_blank' href='http://en.wikipedia.org/wiki/Redistricting'>redistricting</a>",
        info:"The Supreme Court may hear cases involving <a target='_blank' href='http://en.wikipedia.org/wiki/Redistricting'>redistricting</a>; " +
                " <a href='http://en.wikipedia.org/wiki/Baker_v._Carr'>Baker v. Carr (1962)</a> was a landmark case, whereby " +
                "the Supreme Court decided that redistricting issues/questions were indeed " +
                "<a target='_blank' href='http://en.wikipedia.org/wiki/Justiciability'>'justiciable'</a> by the Supreme Court, " +
                "instead of being a <a target='_blank' href='http://en.wikipedia.org/wiki/Political_question'>'political question'</a> " +
                " and hence not a question that could be resolved by the federal courts",
        infoSource:"http://en.wikipedia.org/wiki/Baker_v._Carr",
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


//OBE - figure out link source/target who is higher level usually

var CourtVisualization = function(config) {


    var that = this;

    that.interactWithCourtListener = false;

    that.datepicker = config.datepicker;


    var attributeNameForHighlightingCourtDuringPlayback = "id-for-playback";
    var attributeNameForHighlightingLinkDuringPlayback = "id-for-bottom-of-link-for-playback";
    var delayForQtipPopup_ms = 500;

    var testAttributeName="id-for-playback-source";
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
            //console.log(s);
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
    var JUDGE_PIC_WIDTH = "250";
    //first we're just gonna set up a simple tree graph

    that.nodesExpandedNodes = [];

    var courtsByCitation = {};
    var courtListenerCourtsByCitation = {};

    courtListenerData.forEach(function(c) {
        courtListenerCourtsByCitation[c.citation] = c;
    });


    var supremeCourt = {name: "Supreme Court",
                            displayName:true,
                            shortNameHtml:"Supreme Court",
                            shortName:"Supreme Court", abbrev:"scotus", citation:"SCOTUS", parent:"null", children:[],
                            seal:"240px-Seal_of_the_United_States_Supreme_Court.svg.png",
                            sealSource:"http://en.wikipedia.org/wiki/File:Seal_of_the_United_States_Supreme_Court.svg"};

    var appealsWritBox = {name:"petitions for writs",
                            html:"petitions for <br/><a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>writs of certiorari</a>",
                            isCourt:false,
                            isWritbox:true,
                            citation:'appealsWritBox',
                            children:[]};


    supremeCourt.children.push(appealsWritBox);

    courtsByCitation[supremeCourt.citation] = supremeCourt;

    var usTaxCourt = {name:"United States Tax Court",
        citation:"Tax Ct.",
        scdbId:9,
        courtListenerCourt:courtListenerCourtsByCitation["Tax Ct."],
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
    //var existingBAPs = [0,1,2,6,8,9,10];
    var existingBAPs = [0,1,6,8,9,10];
   // var bapsCitation= ["na","1st Cir. BAP","2d Cir. BAP","6th Cir. BAP","8th Cir. BAP","9th Cir. BAP","10th Cir. BAP"];
    //there is no BAP for the 2n circuit
    var bapsCitation= ["na","1st Cir. BAP","6th Cir. BAP","8th Cir. BAP","9th Cir. BAP","10th Cir. BAP"];

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

        ca.courtListenerCourt = courtListenerCourtsByCitation[ca.citation];

        if (ca.courtListenerCourt) {
            ca.populationInfo = ca.courtListenerCourt.populationInfo; //boy this needs to be consolidated better
        }

        if (i<13) {
            districtCourtsOfAppeal.push(ca);
        }
        appealsWritBox.children.push(ca);
        ca.parent = appealsWritBox;
        courtsByCitation[ca.citation] = ca;


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

    var courtOfAppealsArmedForces = courtListenerCourtsByCitation["C.A.A.F."];
    courtOfAppealsArmedForces.shortNameHtml="Court of Appeals<br/>Armed Forces";
    courtOfAppealsArmedForces.displayName = true;
    courtOfAppealsArmedForces.children = [];

    courtsByCitation[courtOfAppealsArmedForces.citation] = courtOfAppealsArmedForces;


    //add the sub courts...
    d = {name:'United States Army Court of Criminal Appeals',
        citation:'A.C.C.A.??',
        info:'The Army Court of Criminal Appeals (ACCA) is an appellate court that reviews certain court martial convictions of Army personnel',
        jurisdiction:'Federal Special',
        infoSource:'http://en.wikipedia.org/wiki/Army_Court_of_Criminal_Appeals',
        url:'https://www.jagcnet.army.mil/ACCA#',
        note:"not in CourtListener"} ;

    courtOfAppealsArmedForces.children.push(d);
    d.parent = courtOfAppealsArmedForces;
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
    d.parent = courtOfAppealsArmedForces;
    courtsByCitation[d.citation] = d;

    d = {name:'Coast Guard Court of Criminal Appeals',
        citation:'C.G.C.C.A.??',
        info:'The Coast Guard Court of Criminal Appeals (CGCCA) is the intermediate appellate court for criminal convictions in the U.S. Coast Guard.',
        jurisdiction:'Federal Special',
        infoSource:'http://en.wikipedia.org/wiki/Coast_Guard_Court_of_Criminal_Appeals',
        url:'http://www.uscg.mil/Legal/cca/Court_of_Criminal_Appeals.asp',
        note:"not in CourtListener"};

    courtOfAppealsArmedForces.children.push(d);
    d.parent = courtOfAppealsArmedForces;
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
    d.parent = courtOfAppealsArmedForces;
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
                    , myDistrictCourt:districtCourt
                    , courtListenerCourt:courtListenerCourtsByCitation[districtCourt.citation]
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
            theCourt.courtListenerCourt = courtListenerCourt;



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
    var stateHighestCourtsAfterParse = [];

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
                , state:stateHighestCourt.state

                , children:[]
                , parent:parent
                , wikiUrl:stateHighestCourt.courtWikiUrl
                , url: courtListenerData.url
                , numberJudges:stateHighestCourt.numberJudges
                , seal:courtListenerData.seal
                , sealSource:courtListenerData.sealSource
                , judgeTermLength:stateHighestCourt.judgeTermLength_years
                , courtListenerCourt:courtListenerData
        };

        courtsByCitation[d.citation] = d;
        stateHighestCourtsAfterParse.push(d);


        //parent.children.push(d);

    });

    var highestStateCourtsByStateName = {};
    stateHighestCourtsAfterParse.forEach(function(c) {
        var theListOfHighestCourts = highestStateCourtsByStateName[c.state];
        if (!theListOfHighestCourts) {
            theListOfHighestCourts = [];
        }
        theListOfHighestCourts.push(c);
        highestStateCourtsByStateName[c.state] = theListOfHighestCourts;

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
                state:parentCourt.state,
                citation: c.citation,
                stateAbbrev: parentCourt.stateAbbrev,
                jurisdiction: c.jurisdiction,
                url: c.url,
                children: [],
                parent: parentCourt,
                courtListenerCourt:c
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
        var d = {name: "Board of Patent Appeals and Interferences"
            , citation:"Pat.App??" //or C.F.C.
            , info:"The Board of Patent Appeals and Interferences (BPAI) is an administrative law body of the United States Patent and Trademark Office (USPTO), which decides issues of patentability."
            , infoSource:"http://en.wikipedia.org/wiki/Board_of_Patent_Appeals_and_Interferences"
            , children:[]
            , parent:courtOfAppealsFederalCircuit
            , wikiUrl:"http://en.wikipedia.org/wiki/Board_of_Patent_Appeals_and_Interferences"
            , url:"http://www.uspto.gov/ip/boards/bpai/index.jsp"};

        specialCourtsThatAppealToFederalCourtOfAppeals.push(d);

    var d = {name: "Trademark Trial and Appeal Board"
        , citation:"Tra.App??" //or C.F.C.
        , info:"The Trademark Trial and Appeal Board (TTAB) is a body within the United States Patent and Trademark Office (USPTO) responsible for hearing and deciding certain kinds of cases involving trademarks. These include appeals from decisions by USPTO Examiners denying registration of marks, and opposition proceedings filed against trademark applications."
        , infoSource:"http://en.wikipedia.org/wiki/Trademark_Trial_and_Appeal_Board"
        , children:[]
        , parent:courtOfAppealsFederalCircuit
        , wikiUrl:"http://en.wikipedia.org/wiki/Trademark_Trial_and_Appeal_Board"
        , url:"http://www.uspto.gov/about/offices/ogc/ttab.jsp"};

    specialCourtsThatAppealToFederalCourtOfAppeals.push(d);



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

        d.courtListenerCourt = courtListenerCourtsByCitation[d.citation];
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

        d.courtListenerCourt = courtListenerCourtsByCitation[d.citation];
        //console.log(d.courtListenerCourt);
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

        d.courtListenerCourt = courtListenerCourtsByCitation[d.citation];
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

    var d = {name: "Office of Compliance"
        , citation:"Off. Comp.??"
        , info:"The Office of Compliance (OOC) is an independent, non-partisan agency established to administer " +
                 "and enforce the <a target='_blank' href='http://en.wikipedia.org/wiki/Congressional_Accountability_Act_of_1995'>Congressional Accountability Act (CAA)</a>"
        , infoSource:"http://www.compliance.gov/about-the-ooc/"
        , children:[]
        , parent:courtOfAppealsFederalCircuit
        , wikiUrl:"http://en.wikipedia.org/wiki/United_States_Congress_Office_of_Compliance"
        , seal:"office_of_compliance_logo.png"
        , sealSource:"http://www.compliance.gov/wp-content/themes/ooc/images/logo.png"
        , url:"http://www.compliance.gov/"};

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
        //, wikiUrl:"NA"
        , ignoreseal:"NA"
        , ignoresealSource:"NA"
        , url:"http://www.gao.gov/legal/contract/appeals.html"};

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

       console.log("{citation:'" + c.citation + "', url:'" + c.url + "'},");

    });

//    var specialForGettingWebPages = specialCourtsThatAppealToFederalCourtOfAppeals.map(function(c) {
//       return {citation: c.citation, url: c.url};
//    });
//    console.log(specialForGettingWebPages);


    //d={};

    //add the bankruptcy appellate panels
    courtListenerData.forEach(function(courtListenerCourt) {

        if (
            (courtListenerCourt.jurisdiction==='Federal Bankruptcy Panel')
            &&
            (courtListenerCourt.citation.indexOf('Cir.') > -1)
            ) {


                console.log(courtListenerCourt.name);

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

//    console.log("CourtListener courts not included...");
//    //figure out which courtListener courts were not included...
//        courtListenerData.forEach(function(courtListenerCourt) {
//            var court = courtsByCitation[courtListenerCourt.citation];
//            if (isUndefined(court)) {
//                console.log(courtListenerCourt);
//            }
//        });
//    console.log("Done CourtListener courts not included...");


    //setUpChart(supremeCourt, "#graphArea", stateHighestCourtsAfterParse); //pass it down


    that.reRenderAfterResize = function rerenderAfterResize() {

        //return;

        //main axes don't scale well by default - reset the domain thing?

        //there's a lot of stuff to be careful about this
        //I can't just remove existing stuff and redraw, as there is
        //state stuff to keep up with, possibly
        console.log("reRenderAfterResize");

        //$progressBarText.html("Rendering...").fadeIn();
        config.showProgressBar("Rendering");
        //$('#loadingDiv').show();

        //delete everything
        d3.select('#svgArea').selectAll('*').remove();

        //then redraw it
        setUpChart(supremeCourt, "#svgArea", stateHighestCourtsAfterParse); //pass it down

        config.hideProgressBar();
        //$('#loadingDiv').stop().fadeOut();
        //$progressBarText.stop().fadeOut();

    }


    //this is called the first time we run through this

    setUpChart(supremeCourt, "#svgArea", stateHighestCourtsAfterParse); //pass it down



    function setUpChart(rootCourt, containerSelector, stateNodes) {


        //$(containerSelector).html("");

        var margin = {top: 60, right: 50, bottom: 10, left: 50},
            width = $(containerSelector).width() - margin.left - margin.right,
            height = $(containerSelector).height() - margin.top - margin.bottom ;

        $(containerSelector).css("margin-left",margin.left);

        var diameter = width/2;

        //everything is relative to this... maybe eventually May 17, 2014 10:36pm
        function getScotusCenter() {
            return {x:width/2, y:height/2};
        }

//        var birthYearRange = person.getBirthYearRange(20);
//        birthYearRange[0] -= 20;

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

//        var orientations = {
//            "bottom-to-top": {
//                size: [width, height],
//                x: function(d) { return d.x; },
//                y: function(d) {
//                    console.log(d.y);
//                    return height/2 - d.y;
//                }
//            }
//            , "top-to-bottom": {
//                size: [width, fractionOfHeightForTopPart*height],
//                x: function(d) { return d.x; },
//                y: function(d) {
//                    return theScale(d.getLevel());
//                }
//            }
//        };


        //var orientation = orientations["top-to-bottom"];


        var htmlArea = d3.select("#svgArea").append("div")
                                    .attr("class","htmlArea");


//        htmlArea.append("div")
//            .style("position","absolute")
//            .style("text-align","center")
//            .style("z-index", "5000")
//            .attr("id","debugPlayBackArea")
//            .html("Debug Area");

        var svg = d3.select("#svgArea").append("svg")
            .attr("id","courtArea")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height)
            .append("g");
            //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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

        var root = rootCourt;
        o =  { size: [width, height/2]};

        var tree = d3.layout.tree()
                        .size(o.size);
                        //didn't matter .separation(function(a, b) { return 4;});

        var allNodes = tree.nodes(root);

        //filter out the dummy nodes that were used for spacing
        allNodes = allNodes.filter(function(node) {
            return (!isDefined(node.isDummy));
        });

        //filter out non-state ones
        var nodesNonState = allNodes.filter(function(node) {
            return (!isDefined(node.isStateCourt) || (!node.isStateCourt));
        });

        that.nodesNonState = nodesNonState; //this is also used when showing home pages

        //filter out nonStateSupreme ones
        var nodesState = allNodes.filter(function(node) {
            return (isDefined(node.isStateCourt) && (node.isStateCourt));
        });

        //some crude stuff to shift things in Y for non-state nodes
        //it doesn't work all the time and I need to fix it
        function getNonStateBaseY(nodeDepth) {

            if (nodeDepth === 0 ) {
                return height/2 - 100;
            }
            else if (nodeDepth===1) {
                return (getNonStateBaseY(0) + 90); //90);// + 0.5*(r - Math.sqrt(r*r - c*c));
            }
            else if (nodeDepth===2) {
                return (getNonStateBaseY(1) + 90);// + 0.5*(r - Math.sqrt(r*r - c*c));
            }
            else if (nodeDepth===3) {
                return (getNonStateBaseY(2) + 70);// + 0.5*(r - Math.sqrt(r*r - c*c));
            }
            else if (nodeDepth===4) {
                return (getNonStateBaseY(3) + 35);// + 0.5*(r - Math.sqrt(r*r - c*c));
            }
        }

        function getRadiusNonState() {
            return 1.8*that.$mainWindow.width();
        }

        var maxYNonState = {};
        var minYNonState = {};
        //see about tweaking the level 2 nodes?
        //space out the fed. Cir. one on the right...
        nodesNonState.forEach(function(node) {
           if (node.citation===courtOfAppealsFederalCircuit.citation) {
               //we have some now... node.children=[]; //[node.children[5]];
           }

            node.x = node.x + (width/2 - supremeCourt.x);

            if (node.depth===1) {
                node.x = width/2;//being slightly off was driving me crazy...
            }

            if (node.depth >= 0) {
                node.originalY = node.y;

                //see about being smarter about this May 16, 2016 var r = 2000;

                if (
                        (node.citation===courtOfAppealsFederalCircuit.citation)
                        ||
                        (node.specialCourtThatAppealsToFederalCourtOfAppeals===true)
                    )
                {
                    //we have some now... node.children=[]; //[node.children[5]];
                    node.x += 25;
                }


                var r = 0.5*getRadiusNonState();
                var c = (node.x - width/2);

                var deltaY;
                if (node.depth == 0 ) {
                    deltaY = 0;
                }
                else {
                    deltaY = 0.5*(r - Math.sqrt(r*r - c*c));
                    deltaY = -deltaY; //this spaces the link curves a little better
                }

                //what I need to do is have the max y = windowHeight - blah
                //when deltaY is negative, it can put it up to much when the screen is wide...
                node.y = getNonStateBaseY(node.depth) + deltaY;
                if (node.depth===2) {
                    console.log(node.depth + ", " + deltaY + ", " + node.y);
                }


                if (isUndefined(maxYNonState[node.depth])) {
                    maxYNonState[node.depth] = -1;
                }
                if (isUndefined(minYNonState[node.depth])) {
                    minYNonState[node.depth] = 100000000;
                }
                maxYNonState[node.depth] = Math.max(maxYNonState[node.depth],node.y);
                minYNonState[node.depth] = Math.min(minYNonState[node.depth],node.y);

            }
            if (node.depth>0) {
                if (node.citation !== courtOfAppealsFederalCircuit.citation) {
                    //node.x = node.x - 20;
                }
            }

        });
        console.log(height);
        [0,1,2,3,4].forEach(function(i) {
           console.log("Depth " + i + ", minY, maxY are " + minYNonState[i] + ", " + maxYNonState[i]);
        });


        var maxYNonStateSpecialCourtThatAppealsToFederalCourtOfAppeals = -1;

        var shiftY = height - maxYNonState[4] - 20; //some gap at bottom
        if (shiftY>0) {

            maxYNonState[2] = -1;
            maxYNonState[3] = -1;
            maxYNonState[4] = -1;

            minYNonState[2] = 1000000;
            minYNonState[3] = 1000000;
            minYNonState[4] = 1000000;

            nodesNonState.forEach(function(node) {
                if (node.depth>1) {
                    node.y += shiftY;
                    maxYNonState[node.depth] = Math.max(maxYNonState[node.depth],node.y);
                    minYNonState[node.depth] = Math.min(minYNonState[node.depth],node.y);

                    if (node.specialCourtThatAppealsToFederalCourtOfAppeals) {
                        maxYNonStateSpecialCourtThatAppealsToFederalCourtOfAppeals =
                                Math.max(maxYNonStateSpecialCourtThatAppealsToFederalCourtOfAppeals,node.y);
                    }

                }
            });

        }

        var links = tree.links(nodesNonState);

        svg.selectAll(".link")
            .data(links)
            .enter().append("path")
            .filter(function(l) {
                //console.log(l);
                return ! (isDefined(l.source.isDummy) || isDefined(l.target.isDummy)); //d.citation !== "SCOTUS";
            })
            .classed("link",true)
            .classed("hideWhenFedCirMouseover",function(link) {
               return (link.source.isDistrictBankruptcyCourt || link.target.isDistrictBankruptcyCourt);
            })
            .classed("hideWhenTaxCourtMouseover",function(link) {
                return !(link.source.isWritbox || link.target.isWritbox);
            })
            .attr(attributeNameForHighlightingLinkDuringPlayback,function(link) {
                //ideally, we can highlight all links between the node
                //  and the Supreme Court
//                how to do this?
//                    when we need to highlight it/update width,
//                    we will know where we are starting... can we walk back to the sc at that time?
//                I am a little confused about which is target and which is source
//                hopefully it is consistent
                //console.log("dForPlaybackSource: " + link.source.citation);
                return link.target.citation;
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
            .classed("link",true)
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
                //&& d.citation !== "SCOTUS"
                return (!d.isWritbox)  && isUndefined(d.seal);
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

            var nodeRadius = 4;
            theNodesHtmlImage.enter().append("div")
                .filter(function(d) {
                    return (  (d.citation != supremeCourt.citation)) &&
                            (  (  (d.jurisdiction==="Federal District") ||
                                  (d.specialCourtThatAppealsToFederalCourtOfAppeals===true)
                                )
                                ||
                                (   (d.jurisdiction!="Federal Appellate")
                                     &&
                                     (isDefined(d.seal))
                                    )
                            );
                })
                .attr("class","districtCourtImageNode")
                .classed("hideWhenTaxCourtMouseover","true")
                .attr("citation", function(d) {return d.citation;})
                .classed("hasQtip",true)
                //.attr(attributeNameForHighlightingCourtDuringPlayback, function(d) {return d.citation;})
                .style("position","absolute")
                .style("width",function(d) {
                    if (d.jurisdiction!=="Federal Appellate") {
                        return (2*nodeRadius) + "px";
                    }
                    else {
                        return 0;
                    }})
                //.style("height",(2*nodeRadius) + "px")
                //.style("border-radius", (3*nodeRadius) + "px")
                //.style("background","none")
                .style("left", function(d) {
                    return (-nodeRadius + d.x - 0) + "px";
                })
                .attr("originalLeft", function(d) {
                    return (-nodeRadius + d.x - 0);
                })
                .style("top", function(d) {
                    return (-nodeRadius + d.y) + "px";
                })
                .attr("originalTop", function(d) {
                    return ( -nodeRadius +  d.y);
                })
                .html(function(d) {
                    //console.log(d);
                    //console.log("hello"=="hello");
                    //console.log(d.jurisdiction);
                    //console.log(d.jurisdiction.length);
                    //console.log(d.jurisdiction.toLowerCase() === "Federal Appellate".toLowerCase());
                    if (d.jurisdiction!=="Federal Appellate") {
                        var s = "<div class='circlediv' " + attributeNameForHighlightingCourtDuringPlayback + "='" + d.citation + "' " +
                                "style='position:absolute;border-radius:" + (2*nodeRadius) + "px; width:" + (2 * nodeRadius) + "px;height:" + (2 * nodeRadius) + "px;z-index:5001;'></div>";
                        return   s + getThumbDivForSeal(d, 2 * nodeRadius, 2 * nodeRadius);
                    }
                    else {
                        return "";
                    }
                });


//        //not sure if I will use this
//        function shrinkBackEnlargedSeals() {
//
//            that.anyEnlargedSeals.forEach(function(obj) {
//                //var obj = d3.select(this);
//                var left = obj.attr("originalLeft");
//                var top = obj.attr("originalTop");
//
//                obj.transition().duration(200)
//                    .attr("width",8).style("z-index","2000")
//                    .style("left",(left - 0) + "px")
//                    .style("top",(top - 0) + "px");
//            });
//        }


        var certMessage = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
        certMessage += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
        certMessage += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";

        var certMessageFederal = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
        certMessage += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
        certMessage += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";

        var writBoxXShift = 75;
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
                                        return (d.y - 20) +"px";})
            .classed("hasQtip",true)
            .attr("title","writs of certiorari from Federal Courts")
            .attr("tooltip",certMessageFederal)
            .attr("id","labelPetitionsFederal")
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
            //$('.qtip').remove();
            $('div.qtip:visible').qtip('hide');
            //$('div.qtip:visible').remove();
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
        var scotusTop;

        var appealsFedCircuit = {};

        theNodesHtml.enter().append("div")
            .filter(function(d) {
                return isDefined((d.displayName));
            })
            .attr(attributeNameForHighlightingCourtDuringPlayback, function(d) {
                //only do the SCOTUS div at the moment
                if (d.citation === "SCOTUS") {
                    return d.citation;
                }
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
                    return (-5 +  d.x - 140 / 2).toFixed(0) + "px";

                }
                else if (d.citation === courtOfAppealsFederalCircuit.citation) {
                    appealsFedCircuit.x = d.x;
                    return (-5 +  d.x - divWidth / 2).toFixed(0) + "px";
                }
                    else
                {
                    return (-5 +  d.x - divWidth / 2).toFixed(0) + "px";
                }
                 })
            .style("top",function(d) {
                //console.log(d);
                if (d.citation === "SCOTUS") {
                    //console.log(d);
                    scotusY = d.y;
                    scotusTop = d.y - 40;
                    return scotusTop + "px";

                }
                else if (d.depth == -11) {
                    appealsFedCircuit.y = d.y;
                    return ( d.y + 80) + "px";
                }
                else if (d.citation === courtOfAppealsFederalCircuit.citation) {
                    appealsFedCircuit.y = d.y;
                    return ( d.y - 40) + "px";
                }
                else {
                    return ( d.y - 40) + "px";
                    //return (margin.top + height*fractionOfHeightForTopPart - d.y - 20) + "px";
                }
            })
            .attr("id", function(d) {
                if (d.citation===supremeCourt.citation) {
                    return "scotusMainDiv";
                }
                else {
                    return "div_" + d.citation; //not used yet
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
                    s += "<div id='whereInPlaybackWeAre'></div>";
                    return s;
                }
                else {
                    var s = "<div style='margin-bottom:0px;' " + attributeNameForHighlightingCourtDuringPlayback + "='" + d.citation + "' class='showCourtShortName'>" + d.shortNameHtml + "</div>";
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

                //console.log(citation);
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
                //console.log(theChief.nominatedBy.party.toLowerCase());
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

            console.log("height: " + height);
            var o = {
                size: [width, height/2],
                xold: function(d) { return scotusX +  0.95*(d.x-width/2); },
                ignorex: function(d) {
                    var theX = d.x - (statesWritBox.x  - appealsWritBox.x);
                    d.shiftedX = theX;
                    return theX; }, //d.x - (statesWritBox.x  - appealsWritBox.x); },
                ignorey: function(d) {
                    //console.log(d);

                    //console.log(scotusY);
                    //console.log(d);
                    //if (isUndefined(d.depth)) {
                    //    console.log(d);
                    //}
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

                    //console.log(d);


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
                , citation:"statesWritBox"
                , children:[]};

            scotusForStateNodes.children.push(statesWritBox);


            statesWritBox.children = stateNodes;
            stateNodes.forEach(function(node) {
                node.parent = statesWritBox;
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

            that.treeStates = treeStates;
            //var stateCourtWritBox =


            console.log(width/2 + ", " + scotusX + ", " + rootCourt.x  + ", " + scotusForStateNodes.x);

            var getStateBaseY = function (nodeDepth) {

                if (nodeDepth === 0 ) {
                    return scotusY ;
                }
                else if (nodeDepth===1) {
                    return (getStateBaseY(0) - 75);// + 0.5*(r - Math.sqrt(r*r - c*c));
                }
                else if (nodeDepth===2) {

                    var amountAvailable = getStateBaseY(1); // -10 + (height/2) - getBaseY(1);
                    //return (getBaseY(1) - 60);// + 0.5*(r - Math.sqrt(r*r - c*c));
                    return getStateBaseY(1) - amountAvailable/2; //(getBaseY(1) - (height/2);// + 0.5*(r - Math.sqrt(r*r - c*c));
                }
                else if (nodeDepth===3) {
                    var amountAvailable =  getStateBaseY(2);
                    return (getStateBaseY(2) - amountAvailable/2);// + 0.5*(r - Math.sqrt(r*r - c*c));
                }
            }



            //adjust the locations of the nodes...
            treeStates.forEach(function(node) {

                node.x =   node.x + (width/2 - scotusForStateNodes.x); // + (rootCourt.x - scotusForStateNodes.x);

                if (node.depth >= 0) {

                    node.originalY = node.y;

                    //see about being smarter about this May 16, 2016 var r = 2000;

                    var r = 1.8*that.$mainWindow.width();

                    var maxYChange = function(w) {

                        var c = 1.25* w/2;
                        return  0.5*(r - Math.sqrt(r*r - c*c));
                    };

                    var c = (node.x - width/2);
                    //node.y = node.y + 0.5*(r - Math.sqrt(r*r - c));

                    if (node.depth === 0 ) {
                        //node.y += 25;
                        node.y = getStateBaseY(node.depth);
                        //node.y = height/2 - 50; //height - (maxYChange(width) + 50 + 30 + 60 + 80 + 80) + 0.5*(r - Math.sqrt(r*r - c*c));
                    }
                    if (node.depth === 1 ) {
                        node.y = getStateBaseY(node.depth) + 0.5*(r - Math.sqrt(r*r - c*c));;
                        //node.y = height - (maxYChange(width) + 50 + 30 + 60 + 80) + 0.5*(r - Math.sqrt(r*r - c*c));
                    }
                    if (node.depth === 2 ) {
                        //node.y += 50;
                        node.y = getStateBaseY(node.depth) + 0.5*(r - Math.sqrt(r*r - c*c)); //height - (maxYChange(width) + 50 + 30 + 60) + 0.5*(r - Math.sqrt(r*r - c*c));
                    }
                    if (node.depth === 3 ) {
                        //node.y += 100;
                        //node.y = height - (maxYChange(width) + 50 + 30) + 0.5*(r - Math.sqrt(r*r - c*c));
                        node.y = getStateBaseY(node.depth) + 0.5*(r - Math.sqrt(r*r - c*c)); //height - (maxYChange(width) + 50 + 30 + 60) + 0.5*(r - Math.sqrt(r*r - c*c));
                    }
                    if (node.depth === 4 ) {
                        //console.log("maxYChange: " + maxYChange(width));
                        //node.y = height - (maxYChange(width) + 50) + 0.5*(r - Math.sqrt(r*r - c*c));
                        node.y = getStateBaseY(node.depth) + 0.5*(r - Math.sqrt(r*r - c*c)); //height - (maxYChange(width) + 50 + 30 + 60) + 0.5*(r - Math.sqrt(r*r - c*c));
                        //node.y = height - (maxYChange(width) + 10);
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
                    return d.depth>2 && (isUndefined(d.seal)); //d.citation !== "SCOTUS";
                })
                .attr("class", "node")
                .classed("hasQtip",true)
                .attr("citation", function(d) {return d.citation;})
                .attr("r", function(d)  { return nodeRadius;})
                .attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                })

//        .attr("cx", o.x)
//                .attr("cy", o.y);

            var hoverImageWidth = 100;
            //.append("img")
            theStateNodesHtmlImages.enter()
                .append("div")
                .filter(function(d) {
                    return false && (isDefined(d.seal));
                })
                .attr(attributeNameForHighlightingCourtDuringPlayback, function(d) {return d.citation;})
                .attr("class","stateCourtImageNode")
                .classed("stateNodeImage",true)
                .attr("citation", function(d) {return d.citation;})
                .classed("hasQtip",true)
                .style("position","absolute")
                .style("left", function(d) {
                    return (-nodeRadius + d.x - 0) + "px";
                })
                .attr("originalLeft", function(d) {
                    return (-nodeRadius + d.x - 0);
                })
                .style("top", function(d) {
                    return (-nodeRadius + d.y) + "px";
                })
                .attr("originalTop", function(d) {
                    return ( - nodeRadius+ d.y);
                })
                .attr("border","2")
                .attr("width",2*nodeRadius)
                .attr("src",function(d) {
                    return SEAL_DIR + "/" + d.seal;
                })
                .html(function(d) {
                    return getThumbDivForSeal(d,8,8);
                });

            theStateNodesHtmlImages.enter()
                .append("div")
                .filter(function(d) {
                    return d.depth===2;
                })
                .attr(attributeNameForHighlightingCourtDuringPlayback, function(d) {return d.citation;})
                .attr("class","stateCourtLabelNode")
                .attr("citation", function(d) {return d.citation;})
                .classed("hasQtip",true)
                .style("position","absolute")
                .style("left", function(d) {
                    return (-2*nodeRadius + d.x - 0) + "px";
                })
                .style("top", function(d) {
                    return (-2*nodeRadius + d.y) + "px";
                })
                .attr("border","2")
                .attr("width",2*nodeRadius)
                .attr("src",function(d) {
                    return SEAL_DIR + "/" + d.seal;
                })
                .html(function(d) {
                    return d.stateAbbrev;
                });



            //}

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
                .classed("link",true)
                .classed("lightlink",true)
                .attr(attributeNameForHighlightingLinkDuringPlayback,function(link) {
                    return link.target.citation;
                })
                .attr("d", d3.svg.diagonal()) //.projection(function(d) {
                                              //                        //console.log("link...");
                                              //                          //console.log(d);
                                              //                          //console.log([o.x(d), o.y(d)]);
                                              //                          return [o.x(d), o.y(d)];
                                              //                      }))
                .attr("marker-mid","url(#MidMarker)");


            var certMessageState = "Nearly all cases come before the Supreme Court by way of petitions for writs of certiorari, commonly referred to as 'cert'.";
            certMessageState += "The Supreme Court will usually receive about 7000 petitions every year, but decide to hear only about 100 ";
            certMessageState += "(<a target='_blank' href='http://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States#Case_selection'>Wikipedia</a>).";

            theStateNodesWritBox.enter().append("div")
                .filter(function(d) {
                    //console.log(d.isWritbox);
                    return (d.isWritbox);
                })
                .attr("class","writCertioriBox")
                .style("width","160px")
                .style("left", function(d) {
                    //console.log(statesWritBox.shiftedX);
                    //return (statesWritBox.shiftedX - writBoxXShift) +"px"
                    //return (statesWritBox.shiftedX - writBoxXShift) +"px"
                    return (d.x - writBoxXShift) +"px"

                })
                .style("top", function(d) {
                    console.log(statesWritBox.shiftedY);
                    //return (statesWritBox.shiftedY + 50) +"px";})
                    return (statesWritBox.y - 15) +"px";})
                .classed("hasQtip",true)
                .attr("title","writs of certiorari from <a href='http://en.wikipedia.org/wiki/Court_of_last_resort' " +
                            "  target='_blank'>State Courts of last Resort</a>")
                .attr("tooltip",certMessageState)
                .attr("id","labelPetitionsState")
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


        //label across the top
        /* not working
        var baseYForAppellateCourts = getStateBaseY(3);


        var svgStateAppellate = theSvg.append("g");
        var r = 1.8*that.$mainWindow.width()/10;
        theta1 =  Math.PI/2 +  Math.atan2(width/2,r);
        theta2 = Math.PI/2;

        //console.log(theta1 * 180/Math.PI);

        var arc = d3.svg.arc().innerRadius(r)
            .outerRadius(r+1)
            .startAngle(theta1)
            .endAngle(theta2);

            svgStateAppellate.append("defs")
            .append("path")
            .attr("d", arc)
            .attr("id","arcForAppellateCourt")
            .attr("transform","translate(" + 500 + ", " + 100 + ")");

        svgStateAppellate.append("text")
                .style("font-size","14px")
                .append("textPath")
                .attr("xlink:href","#arcForAppellateCourt")
                .text("State Appellate Courts");
        */
//        svg.append("use")
//            .attr("xlink:href", "#arcForAppellateCourt")
//            //.style("stroke", "black")
//            .style("fill", "none");


//            var maxYChange = function(w) {
//                var c = 1.25* w/2;
//                return  0.5*(r - Math.sqrt(r*r - c*c));
//            };


            var maxYChange = function(w,r) {
                var c = 1.25* w/2;
                return  0.5*(r - Math.sqrt(r*r - c*c));
            };

            var r = 1.8*width; //that.$mainWindow.width();
            var startY = getStateBaseY(3);
            var maxY = maxYChange(width/2,r);

            //console.log(maxY);

            that.labelStateAppellateCourts =
                htmlArea.append("div")
                .style("position","absolute")
                .style("left","-48px")
                .style("ignorefont-weight","bold")
                .style("top",(margin.top +  maxY/2) + "px")
                .style("font-size","10px")
                .classed("hasQtip",true)
                .attr("id","labelStateAppellateCourts")
                .attr("title","State Appellate Courts")
                .attr("tooltip","Shown here are the appellate courts for each state. " +
                        "In some cases, there are one or more <a target='_blank' href='http://en.wikipedia.org/wiki/Appellate_court'>Intermediate Appellate Courts</a>," +
                        "and in some cases a state may have more than one <a target='_blank' href='http://en.wikipedia.org/wiki/Court_of_last_resort'>Courts of Last Resort</a> " +
                        "(in those cases, there is usually one for civil and one for criminal appeals; also they might not be referred to as a \"supreme court\")."
                        )
                .html("<a target='_blank' href='http://en.wikipedia.org/wiki/Appellate_court#United_States'>State<br/>Appellate<br/>Courts</a>");

            var startYNonState = getNonStateBaseY(3);
            var r = getRadiusNonState();
            maxY = maxYChange(width/2,r);

            //var theY = maxYNonState[3] - 10;
            var theY = minYNonState[3] - 10;

            that.labelDistrictCourts = htmlArea.append("div")
                .style("position","absolute")
                .style("left","-48px")
                .style("ignorefont-weight","bold")
                .style("top",(  theY) + "px")
                .classed("hasQtip",true)
                .attr("id","labelDistrictCourts")
                .attr("title","United States District Courts")
                .attr("tooltip","The district courts are the general trial courts of the federal court system. " +
                                "While the United States Supreme Court was established by the consitution, " +
                                "the district courts were established by Congress; i.e., there is no constitutional requirement " +
                                "that the district courts exist at all. " +
                                "<br/><br/>" +
                                "There are a total of 94 district courts: 89 districts in the 50 states, as well as " +
                                " district courts in the District of Columbia and Puerto Rico, " +
                                " and territorial courts in the United States Virgin Islands, " +
                                "Guam, and the Northern Mariana Islands " +
                                "(see <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_district_court'>here</a> " +
                                "for more information).")
                .style("font-size","10px")
                .html("<a target='_blank' href='http://en.wikipedia.org/wiki/United_States_district_court'>District<br/>Courts</a>");

            var theY = minYNonState[4];

            that.labelBankruptcyCourts = htmlArea.append("div")
                .style("position","absolute")
                .style("left","-48px")
                .style("ignorefont-weight","bold")
                .style("top",(  theY) + "px")
                .classed("hasQtip",true)
                .style("font-size","10px")
                .attr("id","labelBankruptcyCourts")
                .attr("title","Bankruptcy Courts")
                .attr("tooltip","The bankruptcy courts function as units of the district courts, " +
                                "and have subject matter jurisdiction over bankruptcy cases." +
                                " Most proceedings are held before a bankruptcy judge, " +
                                "whose decisions are subject to appeals in district court, or may be taken to " +
                                "the Bankruptcy Appellate Panel (BAP) for the relevant circuit if one exists " +
                                " (see <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_bankruptcy_court'>here</a> for more information).")
                .html("<a target='_blank' href='http://en.wikipedia.org/wiki/United_States_bankruptcy_court'>Bankruptcy<br/>Courts</a>");

            theY = 5 + maxYNonStateSpecialCourtThatAppealsToFederalCourtOfAppeals; //minYNonState[2] + 25; //15;
            var theX = courtOfAppealsFederalCircuit.x;

            that.labelOtherCourts = htmlArea.append("div")
                .style("position","absolute")
                .style("left",( theX - 15) + "px")
                .style("ignorefont-weight","bold")
                .style("top",(  theY) + "px")
                .style("font-size","10px")
                .attr("id","labelOtherCourts")
                .classed("hasQtip",true)
                .classed("hideWhenFedCirMouseover",true)
                .attr("tooltip",  "There are a variety of courts (besides the district courts) and administrative boards for which decisions can be appealed to " +
                                "the <a target='_blank' href='http://www.cafc.uscourts.gov/'>Court of Appeals for the Federal Circuit</a>. " +
                                "These include the <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_Court_of_Federal_Claims'>U.S. Court of Federal Claims</a> " +
                                " (that hears monetary claims against the U.S. government), " +
                                "the <a target='_blank' href='http://en.wikipedia.org/wiki/United_States_Court_of_International_Trade'>U.S. Court of International Trade</a>" +
                                ", the <a target='_blank' href='http://en.wikipedia.org/wiki/Board_of_Patent_Appeals_and_Interferences'>Board of Patent Appeals and Interferences</a>" +
                    ", and various administrative appeals boards."
                            )
                .attr("title", "Other Courts/Boards that can Appeal to the <a target='_blank' href='http://www.cafc.uscourts.gov/'>Court of Appeals for the Federal Circuit</a>")
                .style("font-weight","bold")
                .html("Other<br/>Courts/Boards");



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
        var scotusForOtherSources = {depth:0, children:[], citation:supremeCourt.citation};
        var writBoxOtherSources = {name:"petitions for writs from other sources"
            , html:appealsWritBox.html
            , isWritbox:true
            , isCourt:false
            , depth:1
            , citation:'writBoxOtherSources'
            , children:[]};

        scotusForOtherSources.children.push(writBoxOtherSources);

        writBoxOtherSources.parent = scotusForOtherSources;
        writBoxOtherSources.children.push(courtOfAppealsArmedForces);
        writBoxOtherSources.children.forEach(function(c) {
            c.parent =  writBoxOtherSources;
        });
        courtOfAppealsArmedForces.parent = writBoxOtherSources;

        //writBoxOtherSources.children.push({name:"?", shortNameHtml:"??", displayName:true, height:20, width:20});


        var elMainSupremeCourtDiv = $('#scotusMainDiv');
        var sTopForMainSupremeCourtDiv = elMainSupremeCourtDiv.css("top");
        sTopForMainSupremeCourtDiv = Number(sTopForMainSupremeCourtDiv.substring(0, sTopForMainSupremeCourtDiv.length - 2));

        console.log("sTopForMainSupremeCourtDiv = " + sTopForMainSupremeCourtDiv);
        console.log("elMainSupremeCourtDiv.height() = " + elMainSupremeCourtDiv.height());

        var middleOfMainSupremeCourtDiv = (sTopForMainSupremeCourtDiv + elMainSupremeCourtDiv.height()/2);
        console.log("middleOfMainSupremeCourtDiv = " + middleOfMainSupremeCourtDiv);

        var elStateWriteBox = $('#labelPetitionsState');
        var elFederalWriteBox = $('#labelPetitionsFederal');

        var sTopForSideBoxes = elStateWriteBox.css("top");
        sTopForSideBoxes = Number(sTopForSideBoxes.substring(0, sTopForSideBoxes.length - 2)) +
                                    0.5*elStateWriteBox.height();

        var sBottomForSideBoxes = elFederalWriteBox.css("top");
        sBottomForSideBoxes = Number(sBottomForSideBoxes.substring(0, sBottomForSideBoxes.length - 2)) +
                                    1*elFederalWriteBox.height();

        console.log(sTopForSideBoxes + ", " + sBottomForSideBoxes);
        var heightOfAreaForSideBoxes = Math.abs(Number(sTopForSideBoxes) - Number(sBottomForSideBoxes));

        //we want it centered in the middle of the main Supreme Court Div
        var extraYShiftForSideBoxes = 0; //0.75*elStateWriteBox.height();



        var otherSourcesWidth = width/3;
        var otherSourcesHeight = height/4;


        var otherSourcesWidth = (width<1000)? (width - (getLeftOfDiv(elMainSupremeCourtDiv) + elMainSupremeCourtDiv.width())) : width/3; //-25 + getLeftOfDiv(elMainSupremeCourtDiv);

        // 0 --> sTop
        // heightOfAreaForSideBoxes/2 --> middle of main Supreme Court div
        var getYForSideThings = function(y) {

            var m = (middleOfMainSupremeCourtDiv-sTopForSideBoxes)/(heightOfAreaForSideBoxes/2);
            return  sTopForSideBoxes + m * y;

        };


        //var scotusMid = $('#display_SCOTUS').height()/2;
        //console.log(scotusMid);

        //var rareSourcesWidth = width/3;
        //var rareSourcesHeight = height/4;

//        var scaleForY = d3.scale.linear()
//            .domain([0,heightOfAreaForSideBoxes])
//            .range([sTopForSideBoxes, ])

        var orientationLeftToRight = {size: [heightOfAreaForSideBoxes, otherSourcesWidth], //otherSourcesHeight, otherSourcesWidth],
            y: function(d) {
                //d.shiftedY = scotusY - 0 + (otherSourcesHeight/2 - d.x);
                //d.shiftedY = scotusY  + otherSourcesHeight/2.5 -  d.x;
                //d.shiftedY = scotusY  + otherSourcesHeight/2 -  d.x;
                //heightOfAreaForSideBoxes

                d.shiftedY = getYForSideThings(d.x);
                //var m = (middleOfMainSupremeCourtDiv-sTopForSideBoxes)/(heightOfAreaForSideBoxes/2);
                //d.shiftedY = sTopForSideBoxes + m * d.x;

                //console.log(heightOfAreaForSideBoxes + ", " + d.x + ", " + d.shiftedY);

                //d.shiftedY = sTopForSideBoxes + extraYShiftForSideBoxes + d.x;
                return d.shiftedY;
                },
            x: function(d) {
                d.shiftedX = scotusX + 60 +  d.y;
                return d.shiftedX;
            }};

        var o = orientationLeftToRight;
        var treeOther = d3.layout.tree().size(o.size);

        var treeOtherSources = treeOther.nodes(scotusForOtherSources);
        var linksOtherSources = treeOther.links(treeOtherSources);

        that.treeOtherSources = treeOtherSources;
        that.oForOther = o;

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
                return d.depth>0 && (!d.displayName); // && (isUndefined(d.seal)); //d.citation !== "SCOTUS";
            })
            .attr("class", "node")
            .classed("hasQtip",true)
            .attr("citation", function(d) {if (isUndefined(d.citation)) {
                                            console.log(d);
                                            }
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
            .classed("link",true)
            .classed("lightlink",true)
            .attr(attributeNameForHighlightingLinkDuringPlayback,function(link) {
                console.log("Other sources: " + link.target.citation);
                return link.target.citation;
            })
            .attr("d", d3.svg.diagonal().projection(function(d) {
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
                return (-nodeRadius + o.x(d) - 0) + "px";
            })
            .style("top", function(d) {
                return (-nodeRadius + o.y(d)) + "px";
            })
            .attr("border","2")
            .attr("width",2.5*nodeRadius)
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
            .style("width","120px")
            .style("left", function(d) {
                //console.log(statesWritBox.shiftedX);
                return (writBoxOtherSources.shiftedX - 50) +"px"
            })
            .style("top", function(d) {
                //console.log(statesWritBox.shiftedY);
                return (writBoxOtherSources.shiftedY - 20 ) +"px";})
            .classed("hasQtip",true)
            .attr("title","writs of certiorari")
            .attr("tooltip",certMessage)
            .attr("id","labelWritBoxArmedForces")
            .html("<div class='boxForMainCourtType'>Armed Forces</div>" +
                "petitions for <br/><a target='_blank' " +
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



        var el = $('#labelWritBoxArmedForces');
        //console.log('getMiddleOfDiv(el) = ' + getMiddleOfDiv(el));
        //console.log("middleOfMainSupremeCourtDiv = " + middleOfMainSupremeCourtDiv);
        el.css("top","-=" + (getMiddleOfDiv(el) - middleOfMainSupremeCourtDiv) + "px");

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
            .attr(attributeNameForHighlightingCourtDuringPlayback, function(d) {return d.citation;})
            .style("left",function(d) {
                    return (d.shiftedX).toFixed(0) + "px";
            })
            .style("top",function(d) {
                    if (d.height) {
                        return (d.shiftedY + 30 + d.height) + "px";
                    }
                    else {
                        //return (d.shiftedY + 40) + "px";
                        return (d.shiftedY - 20) + "px";
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
                        var s = "<div " + attributeNameForHighlightingCourtDuringPlayback + "='" + d.citation + "' class='showCourtShortName'>" + d.shortNameHtml + "</div>";
                        return s;
                    }
                }
            });



        //specialWaysToSupremeCourt
        var scotusForRareScenarios = {depth:0, children:[], citation:supremeCourt.citation};
        var writBoxRareScenarios = {name:"rare scenarios"
            , html:"Other routes to Supreme Court"
            , isWritbox:true
            , isCourt:false
            , depth:1
            , citation:'writBoxRareScenarios'
            , shortNameHtml:"Other routes to <br/>Supreme Court"
            , children:[]};

        specialWaysToSupremeCourt.forEach(function(r) {
            writBoxRareScenarios.children.push(r);
            r.parent = writBoxRareScenarios;
            r.isSpecialNonCourtThing = true;
            if (r.citation) {
                courtsByCitation[r.citation] = r;
            }
        });
        scotusForRareScenarios.children.push(writBoxRareScenarios);
        writBoxRareScenarios.parent = scotusForRareScenarios;
        courtsByCitation[writBoxRareScenarios] = writBoxRareScenarios;


        //the four boxes need to be placed so that they don't overlap in the y direction

        //min y is the middle of the state box
        //max y is the middle of the federal box


        var rareSourcesWidth = (width<1000)? -0 + getLeftOfDiv(elMainSupremeCourtDiv) : width/3; //-25 + getLeftOfDiv(elMainSupremeCourtDiv);
        //var rareSourcesHeight = heightOfAreaForSideBoxes; //height/4;//heightOfArea; //height/4;


        var orientationRightToLeft = {size: [heightOfAreaForSideBoxes, rareSourcesWidth],
            y: function(d,i) {
                //if (isUndefined(d.shiftedY)) { // this causes problems when we are redrawing due to window size change
                                                // we need to reset it - I think I was doing this for
                                                // (unverified) performance reasons
                if (true) {
                            //
                    if (d.depth <= -1) {
                        //console.log("dx = " + d.x);
                        d.shiftedY = scotusY; //scotusY - height/8 - d.x; //heightOfArea/2;// - d.x; // heightOfArea/2; // scotusY- height/4 - d.x; //(rareSourcesHeight / 2 - d.x);
                        d.shiftedY = sTopForSideBoxes + d.x;
                    }
                    else {
//                        console.log(d);
//                        console.log("i: " + i);
//                        d.shiftedY = sTop + i * (heightOfArea);//  scotusY - (rareSourcesHeight / 2 - d.x);
                        //heightOfAreaForSideBoxes
                        d.shiftedY = getYForSideThings(d.x);
                        //d.shiftedY = sTopForSideBoxes + extraYShiftForSideBoxes + d.x;
                    }
                }
                //d.shiftedY = sTop + extraYShift + d.x;
                return d.shiftedY; //d.x; //d.shiftedY;
            },
            x: function(d,i) {
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
            .classed("link",true)
            .classed("lightlink",true)
            .attr(attributeNameForHighlightingLinkDuringPlayback,function(link) {
                return link.target.citation;
            })
            .attr("d", d3.svg.diagonal().projection(function(d) {
                return [o.x(d), o.y(d)];
            }))
            .attr("marker-mid","url(#MidMarker)");


        theNodesHtmlRare.enter().append("div")
            .filter(function(d) {
                return (d.depth > 0);
            })
            .attr(attributeNameForHighlightingCourtDuringPlayback, function(d) {return d.idForPlayback;})
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
                return (d.shiftedY   - 15) +"px";})
            .classed("hasQtip", function(d) {
                if (!d.info) {
                    return false;
                }
                else {
                    return true;
                }
            })
            .attr("id", function(d) {
                if (d.isWritbox) {
                    return "labelWritBoxOtherRoutes";
                }
                else {
                    return "rare_" + d.citation;
                }
            })
            .attr("title",function(d) {
                return d.name;
            })
            .attr("associatedCourtCitation",function(d) {
                return d.citation;
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

        var el = $('#labelWritBoxOtherRoutes');
        console.log('getMiddleOfDiv(el) = ' + getMiddleOfDiv(el));
        console.log("middleOfMainSupremeCourtDiv = " + middleOfMainSupremeCourtDiv);
        el.css("top","-=" + (getMiddleOfDiv(el) - middleOfMainSupremeCourtDiv) + "px");

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



        console.log($('#doPlayback'));
        ['#doPlayback', '#doPlaybackCurrentCourt','#btnMissingScraperInfo','#btnShowPages'].forEach(function(s) {
            $(s).qtip({
                style: {width:300},
                content: {
                    text: $(s).attr('tooltip'),
                    adjust: {screen: true},
                    my: "center",
                    at: "center",
                    button: "x",
                    title: $(s).attr("title")
                },
                hide: {event: false },
                ignorehide: { when: 'inactive', delay: 1000 },
                position: { viewport: $(window) }, events: {
                    show: function () {
                        closeAllTips();
                    },
                    render: function () {
                        closeAllTips();
                    },
                    ignorehide: { when: 'inactive', delay: 1000 }
                }

            });
        });


        $('.hasQtip').each(function() {
            var citation = $(this).attr("citation");
            var theCourt = courtsByCitation[citation];

            var usedAssoc = false;
            if (!theCourt) {
                //console.log("setup qtip");
                //console.log($(this));
                //console.log($(this).attr("associatedcourtcitation"));
                theCourt = courtsByCitation[$(this).attr("associatedcourtcitation")];
                //console.log(theCourt);
                usedAssoc = true;
            }

            if (isDefined(theCourt)) {

                if (usedAssoc) {
                    //console.log("Used assoc.......");
                }
                var theTitle = theCourt.name;
                var tooltip = $(this).attr('tooltip');
                var citation = "" + ($(this).attr("citation"));

                //var citation = "";
                var parentInfo="";
                if (theCourt.seal) {
                    theTitle = "<table class='popupTitle'><tr><td><img class='popupTitle' src='" + SEAL_DIR + "/" + theCourt.seal + "' width='75'></td><td><div class='popupTitleText'>" + theTitle + "</div></td></tr></table>";
                }
                $(this).qtip({
                    style:{
                        width:550
                    },
                    show: {delay:delayForQtipPopup_ms},
                    content: {
                        text: makeToolTipContentForCourt(theCourt),
                        position: { viewport: $(window) },
                        adjust: {screen: true},
                        my: "center",
                        at: "center",
                        button: "x",
                        title: theTitle
                    },
                    hide: {event: false }
                    , ignorehide: { when: 'inactive', delay: 5000 }

                    , position: { viewport: $(window)
                                    , adjust: {method:"shift shift"}}
                    , events: {
                        hide:function() {
                                            shrinkBackNodeForCourt(theCourt);

                        },
                        show: function() {
                            closeAllTips();
                            if (!theCourt.casesThatWentThrough || theCourt.casesThatWentThrough.length==0) {
                                if (theCourt.extraThings && theCourt.extraThings.judgesPic) {
                                    $(this).qtip('option', 'style.width', "400");
                                }
                                else {
                                    $(this).qtip('option', 'style.width', "280");
                                }
                            }
                            else {
                                $(this).qtip('option', 'style.width', "400");
                            }
                            //not working $(this).qtip('option', 'style.opacity', "0.5");
                            $(this).qtip('option','content.text',makeToolTipContentForCourt(theCourt));

                            //console.log("is state court: " + theCourt.isStateCourt);
                            if (theCourt.isStateCourt  && theCourt.state) {
                                $('.courtStructure').qtip('destroy');
                                makeToolTipForStateCourtStructure('.courtStructure', theCourt.state);
                            }

                            updatePopupDatatableOfCases(theCourt);
                            //$this.content.text="Hello";
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
                    style:{
                        width:550
                    },
                    content: {
                        text: $(this).attr('tooltip'),
                        position: { viewport: $(window) },
                        adjust: {screen: true},
                        my: "center",
                        at: "center",
                        button: "x",
                        title: $(this).attr("title")
                    }, ignorehide: {
                        event: false
                    }
                    , show: {delay:delayForQtipPopup_ms}
                    , hide: { when: 'inactive', delay: 5000 }
                    , position: { viewport: $(window)
                        , adjust: {method:"shift shift"}}
                    , events: {
                        show: function() {
                            closeAllTips();

                            //if (citation.length>0) {
                            //    $(this).qtip('option','content.text',makeToolTipContentForThing(theCourt, tooltip));
                            //}
                        },
                        render: function() {
                            closeAllTips();
                        }
                    }            });

            }
        });




    }

    var createToolTipContentForStateCourtStructure = function(stateName) {

        //we just return the image element
        //<img width="628" height="783"
        // style="WIDTH: 628px; HEIGHT: 783px" class="displayed" border="0"
        // alt="Illinois Court Structure" src="/~/media/Microsites/Images/CSP/State_Structure_Charts/illinois.ashx?w=628&amp;h=783&amp;as=1"

        //http://www.courtstatistics.org/~/media/Microsites/Images/CSP/State_Structure_Charts/arkansas.ashx?w=653&h=965&as=1
        //http://www.courtstatistics.org/~/media/Microsites/Images/CSP/State_Structure_Charts/AL.ashx?w=756&h=1002&as=1

        var whatToUse = stateName.trim().toLowerCase().replace(" ","");
        if (stateToStateAbbrevForStructure[whatToUse]) {
            whatToUse = stateToStateAbbrevForStructure[whatToUse].toLowerCase();
        }

       //width="628" height="783"
        //?w=628&amp;h=783&amp;as=1
        var s = '<img  ';
        s += ' src="http://www.courtstatistics.org/~/media/Microsites/Images/CSP/State_Structure_Charts/' + whatToUse + '.ashx"';
        s += ' alt = "' + stateName + ' Court Structure" ';
        s += ">";

        console.log(s);

        return s;
    };

    var makeToolTipForStateCourtStructure = function(elementSelector, stateName) {

        console.log("Make tooltip for courtstructure for '" + stateName + "'");

        $(elementSelector).qtip({
            style:{
                width:800
            },
            show: {delay:delayForQtipPopup_ms},
            content: {
                text: createToolTipContentForStateCourtStructure(stateName),
                position: { viewport: $(window) },
                ignoreadjust: {screen: true},
                ignoremy: "center",
                ignoreat: "center",
                button: "x",
                title: "Court Information from the <a href='" + "http://www.courtstatistics.org" + "' target='_blank'>Court Statistics Project</a>"
            },
            hide: {event: false }
            , position: { viewport: $(window)
                , adjust: {method:"shift shift"}}
            , events: {
                hide:function() {
                    //shrinkBackNodeForCourt(theCourt);

                },
                show: function() {
                    //this one will be showing when the state one is... closeAllTips();
//                    if (!theCourt.casesThatWentThrough || theCourt.casesThatWentThrough.length==0) {
//                        if (theCourt.extraThings && theCourt.extraThings.judgesPic) {
//                            $(this).qtip('option', 'style.width', "400");
//                        }
//                        else {
//                            $(this).qtip('option', 'style.width', "280");
//                        }
//                    }
//                    else {
//                        $(this).qtip('option', 'style.width', "400");
//                    }
                    //not working $(this).qtip('option', 'style.opacity', "0.5");
                    $(this).qtip('option','content.text',createToolTipContentForStateCourtStructure(stateName));
                    //$this.content.text="Hello";
                },
                render: function() {
                    //don't do this for the court structure one... closeAllTips();
                    //shrinkExpandedNodesButThisOne(theCourt);
                    //shrinkAnyExpandedNodes();
                }
            }
        });
    };


    function makeToolTipContentForThing(citation, tooltip) {

        var theCourt = courtsByCitation[citation];
        //alert(tooltip);
        var s = "";
        if (isDefined(that.latestPeriodModeled) && theCourt.casesThatWentThrough) {
            s += "<table class='courtInfoTable'>";
            //(" + that.latestPeriodModeled.period + ")
            s  += "<tr><td class='bold middle'>SCOTUS Decisions</td><td><span qtip-source='" + theCourt.citation + "'>" + theCourt.casesThatWentThrough.length + "</span></td></tr>";

//            s  += "<tr><td class='bold middle'>SCOTUS Decisions as <a target='_blank' href='http://scdb.wustl.edu/documentation.php?var=caseSource' >Source of Case</a></td><td><span qtip-source='" + theCourt.citation + "'>" + theCourt.casesThatWentThrough_source.length + "</span></td></tr>";
//            s  += "<tr><td class='bold middle'>SCOTUS Decisions as <a target='_blank' href='http://scdb.wustl.edu/documentation.php?var=caseOrigin' >Origin of Case</a></td><td><span qtip-origin='" + theCourt.citation + "'>" + theCourt.casesThatWentThrough_origin.length + "</span></td></tr>";
            s += "</table>";

        }

        return s + tooltip;;

    }

    function getSelector(s,theCourt) {
        return (s + theCourt.citation.trim().replace(/ /g, "_").replace(/\./g,"_")).toLowerCase();
    }
    function makeToolTipContentForCourt(theCourt) {

        var needCourtStructureToolTip = false;

        if (isUndefined(theCourt)) {
            return "";
        }

        //console.log("makeToolTipContentForCourt: " + theCourt.citation);

        var s="";

        var theJudges = judgesGroupedByCitation[theCourt.citation];

        //console.log(theCourt);


        that.gSelectorSourceCourtDataTable = "sourceCourtDataTable";
        that.gSelectorOriginCourtDataTable = "originCourtDataTable";
        that.gSelectorAllCasesCourtDataTable ="allCasesCourtDataTable";

        var extraInfo = extraNoteInfoOnCourts[theCourt.citation];
        s += "<table class='courtInfoTable'>";

        if (theCourt.isStateCourt) {
            var structureImageURL = getURLForCourtStructureImageURLForStateCourt(theCourt.state);

            if (structureImageURL.length>0) {

                //wait - doh - we can't do create the extra tooltip until the tooltip is actually shown...
                needCourtStructureToolTip = true; //have to wait until element exists in dom before we actually add the tooltip
                s  += "<tr><td>" +
                    "<div class='bold'>Court Structure Image" +
                    "   " +
                    "</div>" +
                    "</td>";

                s += "<td>" + "<a class='courtStructure'>Mouseover to view image</a>" +
                              " <br/> (from the <a href='http://www.courtstatistics.org' target='_blank'>Court Statistics Project</a>)" +
                      "</td>";
                s += "</tr>";

                //make a tooltip on the fly that links to image
                //<img width="628" height="783"
                // style="WIDTH: 628px; HEIGHT: 783px" class="displayed" border="0"
                // alt="Illinois Court Structure" src="/~/media/Microsites/Images/CSP/State_Structure_Charts/illinois.ashx?w=628&amp;h=783&amp;as=1"
                //>

            }
        }


        var sNote = "";
        if (theCourt.isStateCourt &&  theCourt.casesThatWentThrough &&  theCourt.casesThatWentThrough.length>0) {
            sNote = "<br/><i> (for state courts, source/origin may be a lower court)</i>";
        }


        if (isDefined(that.latestPeriodModeled) && theCourt.casesThatWentThrough) {
            console.log(that.latestPeriodModeled);
            //(" + that.latestPeriodModeled.period + ")
//            s  += "<tr><td class='bold middle'>SCOTUS Decisions as <a target='_blank' href='http://scdb.wustl.edu/documentation.php?var=caseSource' >Source of Case</a> </td><td class='center'><span qtip-source='" + theCourt.citation + "'>" + theCourt.casesThatWentThrough_source.length + "</span></td></tr>";



            if (
                    (theCourt.casesThatWentThrough_source.length==0)
                    && (theCourt.casesThatWentThrough_origin.length==0)
                        && (theCourt.casesThatWentThrough.length > 0)

                )
            {
                var sCasesPerPopulation = "";
                if (theCourt.populationInfo) {
                    sCasesPerPopulation = " (" + theCourt.casesThatWentThrough.length/theCourt.populationInfo.population + ")";
                }
                console.log(theCourt.citation + ", " + sCasesPerPopulation);

                s  += "<tr><td colspan='2'>" +
                    "<div class='center bold'>SCOTUS Decisions: " + theCourt.casesThatWentThrough.length + sCasesPerPopulation + "</div>";

                s += "<table class='showCasesTable display cell-border' id='" + getSelector(that.gSelectorAllCasesCourtDataTable, theCourt) + "'></table>";
                s += "</td></tr>";
            }
            else {

                var sCasesPerPopulation = "";
                //if (theCourt.populationInfo) {
                //    sCasesPerPopulation = " (" + theCourt.casesThatWentThrough.length/theCourt.populationInfo.population + ")";
                //}
                //console.log(theCourt.citation + ", " + sCasesPerPopulation);

                s  += "<tr><td colspan='2'>" +
                    "<div class='center bold'>SCOTUS Decisions as <a target='_blank' href='http://scdb.wustl.edu/documentation.php?var=caseSource' >Source of Case</a>: " + theCourt.casesThatWentThrough_source.length + sNote + sCasesPerPopulation + "</div>";

                if (theCourt.casesThatWentThrough_source.length > 0) {
                    s += "<table class='showCasesTable display cell-border' id='" + getSelector(that.gSelectorSourceCourtDataTable, theCourt) + "'></table>";
                }

                s += "</td></tr>";
                if ((theCourt.casesThatWentThrough_source.length > 0)
                    &&
                    (theCourt.casesThatWentThrough_origin.length > 0)
                    ) {
                    s += "<tr><td colspan='2'>&nbsp;</td></tr>";
                }

                s += "<tr><td colspan='2'>" +
                    "<div class='center bold'>SCOTUS Decisions as <a target='_blank' href='http://scdb.wustl.edu/documentation.php?var=caseOrigin' >Origin of Case</a>: " + theCourt.casesThatWentThrough_origin.length + sNote + "</div>";

                if (theCourt.casesThatWentThrough_origin.length > 0) {
                    s += "<table class='showCasesTable display cell-border' id='" + getSelector(that.gSelectorOriginCourtDataTable, theCourt) + "'></table>";
                }
                s += "</td></tr>";
            }

//            s  += "<tr><td class='bold middle'>SCOTUS Decisions as <a target='_blank' href='http://scdb.wustl.edu/documentation.php?var=caseOrigin' >Origin of Case</a> </td><td class='center'><span qtip-origin='" + theCourt.citation + "'>" + theCourt.casesThatWentThrough_origin.length + "</span></td></tr>";
            //s  += "<tr><td colspan='2'><table class='showCasesTable display' id='" + that.gSelectorOriginCourtDataTable + "'></table></td></tr>";
        }
        else {
            //s  += "<tr><td class='bold middle'>Cases this Period</td><td>0</td></tr>";
        }



        s  += "<tr><td class='bold middle'>" +
            " Has Scraper?" +
            "</td>" +
            "<td>" +
            (isDefined(hasScraperByCourtListenerCourtName[theCourt.courtListenerAbbreviation])? "Yes":"No")
            "</td></tr>";

        if (theCourt.opinionsFromToday) {
            var sNote = "";
            var numberOpinions = theCourt.opinionsFromToday.length;
            if (numberOpinions===0) {
                sNote = " (Note that there might not be a scraper for this court yet)";
            }
            if (numberOpinions>=20) {
                numberOpinions = "&ge; 20";
                sNote = " (API returns max. of 20)";
            }

            s  += "<tr><td class='bold middle'>" +
                     " <a href='" + that.getCourtListenerUrlForCourtAndDate(theCourt,moment(getDateForSearch())) + "'" +
                     " target='_blank'>Opinions back to " + getDateFromDatePickerForDisplay() + "</a>" +
                      "</td>" +
                      "<td><i>" +
                      "<a href='" + that.getCourtListenerUrlForCourtAndDate(theCourt,moment(getDateForSearch())) + "' target='_blank'>" +
                                    numberOpinions + sNote + "</a></i>" +
                        "</td></tr>";
        }
        else {
            s  += "<tr><td class='bold middle'>Opinions back to " + getDateFromDatePickerForDisplay() + "</td><td><i>No results yet available</i></td></tr>";
        }

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


        if (theCourt.populationInfo) {
            s += "<tr class='underline'>";
            s += "<td class='bold'>Population</td>";
            s += "<td>" + addCommas(theCourt.populationInfo.population) + " (<a target='_blank' href='" + theCourt.populationInfo.source + "'>source</a>)</td>";
            s += "</tr>";
        }

        if (theJudges) {

            s += "<tr class='underline'>";
            s += "<td class='bold'>Chief Justice</td>";
            s += "<td >";
                s += "<a target='_blank' href='" + theJudges.chiefJustice.url + "'>" + theJudges.chiefJustice.name  + "</a>";
                s += " (nominated by " + theJudges.chiefJustice.nominatedBy.name + ", confirmed in " + theJudges.chiefJustice.nominatedBy.year + ")";
            s += "</td>";
            s += "</tr>";

            s += "<tr class='underline'>";
            s += "<td class='bold'>Judges</td>";

            s += "<td class=''>";

//            s += "<table class='judgesInfo'>"
//                s += "<tr>";
//                s += "<td class=''>Total Active</td>";
//                s += "<td >" + theJudges.active.length + "</td>";
//                s += "</tr>";
//
//            s += "<tr>";
//            s += "<td class=''>Nominated by <br/>Republican President</td>";
//            s += "<td style='padding:4px;'>" + theJudges.activeByParty["r"].length + "</td>";
//            s += "</tr>";
//            s += "<tr>";
//            s += "<td class=''>Nominated by <br/>Democrat President</td>";
//            s += "<td style='padding:4px;'>" + theJudges.activeByParty["d"].length + "</td>";
//            s += "</tr>";
//
//            s += "</table>";

            //s += "<ul style='padding-left:5px;'>";

                s += "<div class='judgeHangIndent'>" + theJudges.active.length + " active" + "</div>";
                s += "<div class='judgeHangIndent' style='margin-left:5px;'>" + theJudges.activeByParty["d"].length + " nominated by Democrat president" + "</div>";
                s += "<div class='judgeHangIndent' style='margin-left:5px;'>" + theJudges.activeByParty["r"].length + " nominated by Republican president" + "</div>";

            //s += "</ul>";

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


        var isSpecialNonCourtThing = (theCourt.isSpecialNonCourtThing);

        if (isDefined(theCourt.citation) && (!isSpecialNonCourtThing)) {
            s  += "<tr><td class='bold'>Citation/Abbrev.</td><td>'" + theCourt.citation + "'</td></tr>";
        }
        if (isDefined(theCourt.parent) && (!isSpecialNonCourtThing)) {
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

        //var links=[{name:"Wikipedia", url:theCourt.wikiUrl},
        //            {name:"Govt Site", url:theCourt.url},
        //                {name:"Cases on Court Listener", url:theCourt.courtListenerURL}
        //];

        var links = [];
        if (isDefined(theCourt.wikiUrl)) {
            links.push({name:"Wikipedia", url:theCourt.wikiUrl});
        }
        if (isDefined(theCourt.url)) {
            links.push({name:"Govt Site", url:theCourt.url});
        }
        if (isDefined(theCourt.courtListenerURL)) {
            links.push({name:"Cases on Court Listener", url:theCourt.courtListenerURL +
                "&stat_Precedential=on&stat_Non-Precedential=on&stat_Errata=on&stat_Separate+Opinion=on&stat_In-chambers=on&stat_Relating-to+orders=on&stat_Unknown+Status=on"});
        }
        else if (isDefined(theCourt.courtListenerCourt)) {
            links.push({name:"Cases on Court Listener", url:theCourt.courtListenerCourt.courtListenerURL +
                "&stat_Precedential=on&stat_Non-Precedential=on&stat_Errata=on&stat_Separate+Opinion=on&stat_In-chambers=on&stat_Relating-to+orders=on&stat_Unknown+Status=on"});
        }


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

    //load the supreme court cases

    //this file contains the latest data set for supreme court decisions
    //from



    //set up courts organized by scdbId for the ones that can do that

    var courtsByScDbId = {};
    var arrayOfCourtsWithScDbId= [];
    for (var property in courtsByCitation) {
        if (courtsByCitation.hasOwnProperty(property)) {
            var possibleCourt = courtsByCitation[property];
            if (isDefined(possibleCourt.scdbId)) {
                courtsByScDbId[possibleCourt.scdbId] = possibleCourt;
                arrayOfCourtsWithScDbId.push(possibleCourt);
            }
            else if (isDefined(possibleCourt.courtListenerCourt) && isDefined( possibleCourt.courtListenerCourt.scdbId)) {
                possibleCourt.scdbId = possibleCourt.courtListenerCourt.scdbId;
                courtsByScDbId[possibleCourt.courtListenerCourt.scdbId] = possibleCourt;
                arrayOfCourtsWithScDbId.push(possibleCourt);
            }
            else if (isDefined(possibleCourt.myDistrictCourt) && isDefined( possibleCourt.myDistrictCourt.scdbId)) {
                possibleCourt.scdbId = possibleCourt.myDistrictCourt.scdbId;
                courtsByScDbId[possibleCourt.myDistrictCourt.scdbId] = possibleCourt;
                arrayOfCourtsWithScDbId.push(possibleCourt);
            }
            else {
                //console.log("No scDbId: '" + possibleCourt.citation + "', " + possibleCourt.name);
            }
        }
    }
    //console.log(courtsByScDbId);
    arrayOfCourtsWithScDbId.forEach(function(c) {
       //console.log(c.citation + ", " + c.name);
    });



    var s = "[";
    var bHaveWrittenOne = false;

    var numberCourts=0;
    that.courtsByCourtListenerAbbreviation = {};
    that.courtsByCitation = courtsByCitation;

    that.courtListenerShortNames = []; //for randomizing calling it
        for (var citation in courtsByCitation) {

        if (courtsByCitation.hasOwnProperty(citation)) {
            //console.log(courtsByCitation[citation]);
            numberCourts++;

            var theCourt = courtsByCitation[citation];



            //grab the identifier for the court
            var foundIt = false;
            if (theCourt.courtListenerURL || theCourt.courtListenerCourt) {

                var uri;
                if (theCourt.courtListenerURL) {
                    uri = new URI(theCourt.courtListenerURL);
                }
                else {
                    uri = new URI(theCourt.courtListenerCourt.courtListenerURL);
                }

                var queryParameters = uri.query().split("&");
                for (var i=0;i<queryParameters.length;i++) {
                    var qName = queryParameters[i];
                    if (qName.startsWith("court_")) {
                        var theShortCourtName = qName.replace("court_","");
                        theShortCourtName = theShortCourtName.replace("=on","");
                        //console.log(theShortCourtName);
                        foundIt = true;

                        theCourt.courtListenerAbbreviation = theShortCourtName;
                        if (that.courtsByCourtListenerAbbreviation[theShortCourtName]) {
                            console.log("Duplicate: '" + theShortCourtName + "'");
                            console.log(theCourt);
                        }
                        else {
                            that.courtsByCourtListenerAbbreviation[theShortCourtName] = theCourt;
                            that.courtListenerShortNames.push(theShortCourtName);
                        }


                    }
                }
                //https://www.courtlistener.com/?q=&court_bap9=on&order_by=score+desc
                if (!foundIt) {
                    console.log("Not found: " + theCourt.courtListenerURL);
                    console.log(theCourt);
                }

            }

            //this was used to get info for Mike
            // As of Aug 1, 2014, only about 120 courts have seals I've rounded up
            //console.log(theCourt.name);
            if (theCourt.seal) {

                if (bHaveWrittenOne) {
                    s += ", " + String.fromCharCode(13);
                }
                var o = {abbrev: theCourt.courtListenerAbbreviation || "NotFound", name:theCourt.name, seal:theCourt.seal, sealSource:theCourt.sealSource, citation:theCourt.citation};
                s += JSON.stringify(o);
                bHaveWrittenOne = true;

            }


        }
    }
    //onsole.log("Number courts: " + numberCourts);
    //onsole.log(s);

    //console.log(that.courtListenerShortNames);
    that.courtListenerShortNames = shuffleArray(that.courtListenerShortNames);
    that.nextIndexStartToGetCourtInfo = 0; //used when we will be going to get info from CourtListener
    //console.log(that.courtListenerShortNames);

    //need to be able to take a case and find the court

    //1) look for scdbid
    //2) look up by state

// Stuff here is start for grabbing what we need to visualize the pattern of case decisions
//May 23, 2014
// citing SCDB:
// Harold J. Spaeth, Sara Benesh, Lee Epstein, Andrew D. Martin, Jeffrey A. Segal, and Theodore J. Ruger.
//  2013. Supreme Court Database, Version 2013 Release 01. URL: http://supremecourtdatabase.org. Last accessed: May 23, 2014.


    d3.selectAll('.link')
        .on("mouseenter", function(d) {
            if (d.casesThatWentThrough) {
                //TODO - display qtip with info
                console.log(d.casesThatWentThrough.length);
            }
            else {
            }
        })
        .on("mouseleave", function(d) {
        });

    function createDisplayHtmlForCourtCases(thing) {
        //this will create the popup text displayed when you mouseover something
        //that has cases stored with it somehow
    }


    function getCourtStyle(courtData, scCase) {
        //this will return the style for divs based on current properties
        //it will also update props used later for mouseover
    }
    //this will style the link curve between two courts based on the current values,
    // AND it will update props for the current link (to be made use of later for
    // mouseover

    function resetLinkCounters(linkData) {
        linkData.casesThatWentThrough = [];
        linkData.timesUsed = 0;

    }
    function updateLinkCounters(linkData, scCase) {
        if (!linkData.casesThatWentThrough) {
            linkData.casesThatWentThrough = [];
        }
        if (scCase) {
            linkData.casesThatWentThrough.push(scCase);
        }
//        else {
//            //reset
//            linkData.casesThatWentThrough = [];
//            linkData.timesUsed = 0;
//        }
    }

    function getLinkStyle(linkData) {

//        if (!linkData.casesThatWentThrough) {
//            linkData.casesThatWentThrough = [];
//        }
//        if (scCase) {
//            linkData.casesThatWentThrough.push(scCase);
//        }
//        else {
//            //reset
//            linkData.casesThatWentThrough = [];
//            linkData.timesUsed = 0;
//        }

//            return {"stroke-width": (linkData.timesUsed + 1) / 4 + "px",
//                "opacity": Math.min(1, (linkData.timesUsed + 1) / 5),
//                "stroke": "#ff0000"
//            };

        var calcStyle = getStyleBasedOnCount(linkData.timesUsed);

        var s =  "stroke-width: " + calcStyle.width + "px; ";
        //s += "opacity: " + Math.min(1, (linkData.timesUsed + 1) / 3) + "; ";
        s += "stroke: " + calcStyle.color +";";

        return s;

    }

    function getStyleBasedOnCount(count) {

        if (count <=0) {
            return {width: 1, color: "#777", opacity:0.7};
//            stroke: #333;
//            stroke-width: 1px;
//            opacity:0.7;

        }
        else {
            var numberHues = 100;

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


    that.getCurrentPeriodIdRunning = function() {
        if ( (that.theTimerId) &&  (that.latestPeriodModeled)) {
            that.latestPeriodModeled.period = "Jan 1, " + that.latestPeriodModeled.minyear + " to " + moment(that.currentDay).format("MMM D, YYYY");
        }
    }
    that.cancelPlayback = function() {

        $('#stopPlayback').animate({opacity:0});
        //update period...
        if ( (that.theTimerId) &&  (that.latestPeriodModeled)) {
            that.latestPeriodModeled.period = "Jan 1, " + that.latestPeriodModeled.minyear + " to " + moment(that.currentDay).format("MMM D, YYYY");
        }
        clearTimeout(that.theTimerId);
        that.theTimerId = null;

    };

    that.resetForPlayback = function() {

        closeAllTips();

        if ($('#opinionsGe').is(":visible")) {
            $('#opinionsGe').fadeOut();
        }

        that.stopShowingThoseWithMissingScrapers();
        $('#currentModeledPeriod').html("");

        d3.selectAll('.link')
            .attr("style",function(l) {
                resetLinkCounters(l)
                return getLinkStyle(l);
            });

        d3.selectAll(".link")
            .attr("timesUsed", function (link) {
                link.timesUsed = 0;
                link.timesUsedTo = {};
                link.timesUsedTo[supremeCourt.citation] = 0;
                return link.timesUsed;
            })
            ;//.style("opacity", 0.8);

        //that.allSupremeCourtCasesAvailable.forEach(function(c) {

        for (var citation in courtsByCitation) {

            if (courtsByCitation.hasOwnProperty(citation)) {
                var c = courtsByCitation[citation];
                c.casesThatWentThrough = [];
                c.casesThatWentThrough_source = [];
                c.casesThatWentThrough_origin = [];

                var color = getStyleBasedOnCount(c.casesThatWentThrough.length).color;
                d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + c.citation + "']")
                    .style({background: "#FFFFFF"});
                d3.selectAll(".circlediv[" + attributeNameForHighlightingCourtDuringPlayback + "='" + c.citation + "']")
                    .style({opacity: 0});

                //d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + c.citation + "']")
                //    .style({"border": "1px solid " + color})
            }
        }

        d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + boxOriginalJurisdiction.idForPlayback + "']")
            .style({background: "#FFFFFF"});


    };

    //this grabs out the cases from the period,
    // and then loops through them
    that.isAnalyzing = false;

    var borderColorHadCase = "#FFAAAA";
    var linkColorHadCase = "#FF6666";
    var backgroundColorFlashCase = "#FF9999";

    that.flashCourt = function(c, duration) {
        d3.select("[" + attributeNameForHighlightingCourtDuringPlayback + "='" +  c.citation + "']")
            .style({"background":backgroundColorFlashCase})
            .transition().duration(duration)
            .style({"background":"#FFFFFF"});

    }


    that.analyzePeriod = function(options) { //minYear,maxYear) {

        //{begin_mm_dd_yy:'08/07/2010'}

        if (that.isAnalyzing) {
            return;
        }

        that.isAnalyzing = true;
        //be smarter about the reference for this - duh
        var target = document.getElementById('spinner');
        console.log(target);
        spinner.spin(target);
        console.log(spinner);

        that.cancelPlayback();
        that.latestPeriodModeled = {};
        that.resetForPlayback();

        //that.latestPeriodModeled.minyear = minYear;
        $('#stopPlayback').animate({opacity:1});

        //get the min date
        var minDate = new Date(options.begin_mm_dd_yy);
        var maxDate;
        if (!options.end_mm_dd_yy) {
            maxDate = new Date('12/31/2012');
        }
        else {
            maxDate = new Date(options.end_mm_dd_yy);
        }
        //get the maxdate

        that.latestPeriodModeled.period = minDate.format("m/d/yyyy") + " to " + maxDate.format("m/d/yyyy");
        $('#currentModeledPeriod').html('SC Decisions, ' + that.latestPeriodModeled.period);

//        if (!maxYear || (maxYear <0)) {
//            that.latestPeriodModeled.period=minYear + " to Latest Available (2013)";
//            maxYear = 2100; //get them all... well, works for the next 85 years or so
//
//        }
//        else {
//            that.latestPeriodModeled.period=minYear + " to " + maxYear
//        }

        //var minYear = 2002;
        var timeToRunThroughAll_seconds = 10;
        var howlongFlashNonSupremeCourt_ms = 100;

        //var startDate = Date.parse('1/1/1980');

        that.allSupremeCourtCasesAvailable.forEach(function(c) {
            c.dateDecidedDate = new Date(c.dateDecision);
        });

        //get the cases decided for the selected period
        var selectedSupremeCourtCases = that.allSupremeCourtCasesAvailable.filter(function(d) {
            //console.log(d.dateDecision);
            return (d.dateDecidedDate >= minDate && d.dateDecidedDate <= maxDate);
            //var year = d.dateDecision.split('/')[2];
            //d.yearDecided = year;
            //d.dateDecidedDate = Date.parse(d.dateDecision);
            //return (year >= minYear) && (year <= maxYear);
        });

        //console.log(subset);

//        selectedSupremeCourtCases.forEach(function(c) {
//            console.log(c);
//        });

        var originalJurisdiction = selectedSupremeCourtCases.filter(function(d) {
            return d.jurisdiction==9;
        });

        var countByType = {};
        mannerSupremeCourtTakesCase.forEach(function(m) {
            countByType[m.id] = 0;
        });

        //need to attach things to the scCase as we need to


        var knownMissingInfoCases = {};
        //scdb has some "known missing data" cases
        //these can possibly be dealt with manually to go find the info
        knownMissingInfoCases['2008-030-01'] = true;
        knownMissingInfoCases['2006-069-01'] = true;
        knownMissingInfoCases['2005-043-01'] = true;
        knownMissingInfoCases['2000-017-01'] = true;
        knownMissingInfoCases['1999-045-01'] = true;
        knownMissingInfoCases['1997-100-01'] = true;
        knownMissingInfoCases['1998-010-01'] = true; //this is an "In re"
        knownMissingInfoCases['1998-033-01'] = true;
        knownMissingInfoCases['1998-040-01'] = true;
        knownMissingInfoCases['1998-064-01'] = true;
        knownMissingInfoCases['1998-082-01'] = true;
        knownMissingInfoCases['1998-093-01'] = true;
        knownMissingInfoCases['1999-006-01'] = true;
        knownMissingInfoCases['1999-003-01'] = true;
        knownMissingInfoCases['1999-002-01'] = true;
        knownMissingInfoCases['1999-005-01'] = true;
        knownMissingInfoCases['1999-004-01'] = true;
        knownMissingInfoCases['1999-008-01'] = true;
        knownMissingInfoCases['1999-007-01'] = true;

        selectedSupremeCourtCases.forEach(function(scCase) {
            //console.log("");
            //console.log(scCase.caseName);
            //console.log(scCase.sctCite);
            //console.log(scCase.certReason);

            if (Number(scCase.jurisdiction)===9) {
                //TODO - attach things to the box for original jurisdiction
                console.log("%c Original Jurisdiction Case", 'color:red;');
                scCase.isOriginalJurisdiction = true;
            }
            else if (knownMissingInfoCases[scCase.docketId]) {
                scCase.knownMissing = true;

                console.log("%c Known Missing Data", 'color:red;');

            }
            else {

                var manner = mannerSupremeCourtTakesCaseById[scCase.jurisdiction].value + ", " + (scCase.certReason ? certReasonById[scCase.certReason].name : "");
                //console.log(scCase.jurisdiction + ", " + manner);
                countByType[scCase.jurisdiction] = countByType[scCase.jurisdiction] + 1;

                var scCaseId = scCase.caseId;

                var idOfCaseSource = scCase.caseSource;
                var idOfCaseSourceState = scCase.caseSourceState;
                var idOfCaseOrigin = scCase.caseOrigin;
                var idOfCaseOriginState = scCase.caseOriginState;


                var originCourt = courtsByScDbId[idOfCaseOrigin];

                if (originCourt) {

                    //console.log("Origin: " + idOfCaseOrigin);
                    if ((!originCourt) && (idOfCaseOrigin.trim().length > 0)) {
                        console.log("Could not find origin court " + idOfCaseOrigin + " (" + scCase.caseName + ", " + scCase.dateDecision + ")");
                        //console.log(scCase);
                    }
                    else if (originCourt) {
                        console.log(manner + ", Origin: " + originCourt.name);
                    }
                    scCase.originCourt = originCourt;
                }
                else {
                    //console.log(originCourt);
                    var stateCourt = getStateCourt(idOfCaseOrigin, idOfCaseOriginState);
                    console.log(stateCourt);
                    //console.log(manner + ", Origin: " + getStateCourtInfo(manner, idOfCaseOrigin, idOfCaseOriginState));
                    scCase.originCourt = stateCourt;

                }
                //if (scCase.caseSourceState.trim().length===0) {
                var sourceCourt = courtsByScDbId[idOfCaseSource];
                if (sourceCourt) {
                    if ((!sourceCourt) && (idOfCaseSource.trim().length > 0)) {
                        console.log("Could not find source court " + idOfCaseSource);
                        console.log(scCase);
                    }
                    else if (sourceCourt) {
                        console.log(manner + ", Source: " + sourceCourt.name);

                    }
                    scCase.sourceCourt = sourceCourt;
                    //console.log("Source: " + idOfCaseSource);
                    //console.log(sourceCourt);
                }
                else {
                    var stateCourt = getStateCourt(idOfCaseOrigin, idOfCaseOriginState);
                    if (!stateCourt) {
                        console.log("%c" + manner + "; Expected state court for source - NONE FOUND", 'color:red;');
                    }
                    else {
                        console.log(stateCourt);
                    }
                    scCase.sourceCourt = stateCourt;
                    //console.log(manner + ", Source: " + getStateCourtInfo(manner, idOfCaseSource, idOfCaseSourceState));
                }
                //var originCourt = courtsByScDbId[idOfCaseOrigin];

                //console.log(scCaseId + ", jurisdiction: " + scCase.jurisdiction + ", origin:" + idOfCaseOrigin + ", originState:" + idOfCaseOriginState +
                //                    ", source:" + idOfCaseSource + ", sourceState:" + idOfCaseSourceState);
            }
        });

        //we are now in a position to "play" the data on the graph, if anything makes sense

        selectedSupremeCourtCases.forEach(function(scCase) {

            if ((scCase.isOriginalJurisdiction)
                ||
                (scCase.knownMissing)
                ||
                (scCase.sourceCourt)
                ) {
            }
            else {

                console.log("Case did not get set correctly: " + scCase.caseName);
            }
        });

        selectedSupremeCourtCases = selectedSupremeCourtCases.filter(function(c) {
            return (!c.knownMissing);
        });

        selectedSupremeCourtCases.sort(function(a,b) {

            return (a.dateDecidedDate.getTime() -  b.dateDecidedDate.getTime());

        } );


        that.latestPeriodModeled.period.theCasesIncluded = selectedSupremeCourtCases;

        var scCasesIndexedByDay = {};
        selectedSupremeCourtCases.forEach(function(c) {
            var key = c.dateDecidedDate.format("mm/dd/yyyy");
            var thisList = scCasesIndexedByDay[key];
            if (!thisList) {
                thisList = [];
            }
            thisList.push(c);
            scCasesIndexedByDay[key] = thisList;

        });
        var theDatesSeen = selectedSupremeCourtCases.map(function(c) {
            //console.log(c.dateDecidedDate.format("mm/dd/yyyy"));
            return c.dateDecidedDate;
        });

        var uniqueDays = {};
        theDatesSeen.forEach(function(d) {
            var s =  d.format("mm/dd/yyyy");
            uniqueDays[s] = s;
        });
        var uniqueDaysArray = [];
        for (var property in uniqueDays) {
            if (uniqueDays.hasOwnProperty(property)) {
                uniqueDaysArray.push(property);
            }
        }
        var minDate = selectedSupremeCourtCases[0].dateDecidedDate;
        var maxDate = selectedSupremeCourtCases[selectedSupremeCourtCases.length-1].dateDecidedDate;

        var MS_IN_DAY = 1000*60*60*24;
        var numberDays = (maxDate.getTime() - minDate.getTime())/MS_IN_DAY;

        numberDays = Math.ceil(numberDays);

        //run through them all in a
        var realTimeBetweenDays_ms = (timeToRunThroughAll_seconds*1000) / numberDays;

        console.log("Number Days, realTimeBetweenDays_ms: " + numberDays + ", " + realTimeBetweenDays_ms);
        $('#debugPlayBackArea').html("Number Days, realTimeBetweenDays_ms: " + numberDays + ", " + realTimeBetweenDays_ms);

        var theTimerId;
        var fadeOutDuration_ms = 1000;


//        next - flash case name?
//            sound based on the writ type?
//            long sound for original jurisdiction... or stay
//        original jurisdiction needs longer duration anyway so you can see courtOfAppealsFederalCircuitsince so rare
//        the music of the supreme court
//        each court gets its own note


        //mousing over a link will show all cases that went through the link
        //mousing over a court div/image will show the cases that involved this court
        //  (based on the data I can wrangle together)
        //this is for when I was animating it as ir progressed, which did not provide as much insight as
        //  I had hoped.  I used it as the starting place for the loop.

        function processNextDay() {
            var theDate = that.currentDay;
            var key = theDate.format("mm/dd/yyyy");

            //need to be able to highlight the links between a thing and the supreme court
            //increment counters/viz for number times used for links and courts

            var theCases = scCasesIndexedByDay[key];
            if (theCases) {
                //console.log(key);
                //still get some difference in spacing even with monospace font
                // .replace(' 0','  '
                $('#whereInPlaybackWeAre').html( moment(theDate).format("MMM DD, YYYY").replace(' 0','  '));
                //console.log(key + ": " + theCases.length);
                for (var i=0;i < theCases.length;i++) {
                    if (theCases[i].isOriginalJurisdiction) {
                        //console.log(key + ": " + "Original: " + theCases[i].caseName);

                        var sourceCourt = boxOriginalJurisdiction;


                        console.log("original jurisdiction");
                        console.log(boxOriginalJurisdiction);

                        if (isUndefined(sourceCourt.casesThatWentThrough)) {
                            sourceCourt.casesThatWentThrough = [];
                        }
                        if (isUndefined(sourceCourt.casesThatWentThrough_origin)) {
                            sourceCourt.casesThatWentThrough_origin = [];
                        }
                        if (isUndefined(sourceCourt.casesThatWentThrough_source)) {
                            sourceCourt.casesThatWentThrough_source = [];
                        }


                        sourceCourt.casesThatWentThrough.push(theCases[i]);
                        //if the qtip is showing
                        //$('.courtInfoTable [qtip-source="' + sourceCourt.citation + '"]').html(sourceCourt.casesThatWentThrough.length);

                        var color = getStyleBasedOnCount(sourceCourt.casesThatWentThrough.length).color;

                        //.style({"border": "1px solid " + color})
                        d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + boxOriginalJurisdiction.idForPlayback + "']")
                            .style({background:d3.rgb(color).brighter().toString()})
                            .transition().duration(howlongFlashNonSupremeCourt_ms)
                            .style({background:color});
                            //.style({background:"#ffffff"});

//                        d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + c.citation + "']")
//                            .style({"border": "1px solid " + color})

                        var selector='path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + boxOriginalJurisdiction.citation + '"]';
                        if (sourceCourt.parent) {
                            selector += ', path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + sourceCourt.parent.citation + '"]';
                        }

                        d3.selectAll(selector)
                            .attr("timesUsed", function(l) {
                                l.timesUsed++;
                                return l.timesUsed;
                            })
                            .attr("style", function (link) {
                                        updateLinkCounters(link, theCases[i]);
                                        return getLinkStyle(link); //, theCases[i])
                            });

                        that.flashCourt(supremeCourt,100);

                    }
                    else {
                        var sourceCourt;
                        var originCourt;

                        //console.log(theCases[i]);

                        if (!theCases[i].sourceCourt.theHighStateCourt) {
                            //console.log(theCases[i]);
                            //console.log(key + ": " + theCases[i].sourceCourt.name);
                            sourceCourt = theCases[i].sourceCourt;
                            originCourt = theCases[i].originCourt;
                        }
                        else {
                            sourceCourt = theCases[i].sourceCourt.theHighStateCourt;
                        }

                        var originIsSource = false;
                        if (sourceCourt && originCourt && (sourceCourt.citation==originCourt.citation)) {
                            originIsSource = true;
                        }

                        var haveFlashedCourt = false;
                        var otherCourt;
                        [{court:sourceCourt, isSource:true}, {court:originCourt,isOrigin:true}].forEach(function(courtInfo) {
                            //console.log(sourceCourt);
                            //console.log($("[idForPlayback='" +  sourceCourt.citation + "']").length);
                            var court = courtInfo.court;
                            if (courtInfo.isSource) {
                                otherCourt = originCourt;
                            }
                            else {
                                otherCourt = sourceCourt;
                            }
                            if (isDefined(court)) {

                                if (isUndefined(court.casesThatWentThrough)) {
                                    court.casesThatWentThrough = [];
                                }
                                if (isUndefined(court.casesThatWentThrough_origin)) {
                                    court.casesThatWentThrough_origin = [];
                                }
                                if (isUndefined(court.casesThatWentThrough_source)) {
                                    court.casesThatWentThrough_source = [];
                                }

                                //console.log(court);
                                court.casesThatWentThrough.push(theCases[i]);
                                if (courtInfo.isSource) {
                                    court.casesThatWentThrough_source.push(theCases[i]);
                                    //if the qtip is showing
                                    $('.courtInfoTable [qtip-source="' + court.citation + '"]').html(court.casesThatWentThrough_source.length);
                                }
                                if (courtInfo.isOrigin) {
                                    court.casesThatWentThrough_origin.push(theCases[i]);
                                    $('.courtInfoTable [qtip-origin="' + court.citation + '"]').html(court.casesThatWentThrough_origin.length);
                                }

                                //doh - don't flash/count it twice if origin is source
                                if ( !haveFlashedCourt || (!originIsSource)) {

                                    haveFlashedCourt = true;
                                    var color = getStyleBasedOnCount(court.casesThatWentThrough.length).color;

                                    d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
                                        .style({background: d3.rgb(color).brighter().toString(), opacity:1})
                                        .transition().duration(howlongFlashNonSupremeCourt_ms)
                                        .style({background: color});
//                                        .style({background: color, opacity: "1"})
//                                        .transition().duration(howlongFlashNonSupremeCourt_ms)
//                                        .style("background", "#ffffff");

                                    d3.selectAll(".circlediv[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
                                        .style({background: d3.rgb(color).brighter().toString(),opacity:1})
                                        .transition().duration(howlongFlashNonSupremeCourt_ms)
                                        .style("opacity", "0");

                                    //.style({"border": "1px solid " + color})

//                                d3.selectAll(".circlediv[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
//                                    .transition().duration(howlongFlashNonSupremeCourt_ms)
//                                    .style("opacity", "0");

                                    //update link if origin is not source...
                                    //if (!originIsSource) {
                                        var selector = 'path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + court.citation + '"]';
                                        if ( (court.parent) &&
                                            (  (!otherCourt)
                                                ||
                                               (otherCourt) && (court.parent.citation!=otherCourt.citation)
                                                )
                                            ){
                                            selector += ', path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + court.parent.citation + '"]';
                                            //console.log(selector);
                                        }
                                        d3.selectAll(selector)
                                            .attr("timesUsed", function (l) {
                                                l.timesUsed++;
                                                return l.timesUsed;
                                            })
                                            .attr("style", function (link) {
                                                updateLinkCounters(link, theCases[i]);
                                                return getLinkStyle(link); //, theCases[i])
                                                //return getLinkStyle(link, theCases[i])
                                            });
                                    //}
                                }
                            }

                        });
                        that.flashCourt(supremeCourt, 100);
                    }
                }
            }
            that.currentDay.setDate(that.currentDay.getDate() + 1);
            if (that.currentDay <= maxDate) {
                that.theTimerId = setTimeout(processNextDay,realTimeBetweenDays_ms);
            }
            else {
                clearTimeout(that.theTimerId);
                $('#whereInPlaybackWeAre').animate({opacity:0},5000);
                $('#stopPlayback').animate({opacity:0});
            }
        }

        function loopThroughTheDays() {

            //we go over the days, and then at the end transition colors and widths
            uniqueDaysArray.forEach(function(theKey)
            {

                //var theDate = that.currentDay;
                var key = theKey; //theDate.format("mm/dd/yyyy");
                //console.log(key);

                var theCases = scCasesIndexedByDay[key];
                if (theCases) {
                    //$('#whereInPlaybackWeAre').html(moment(theDate).format("MMM DD, YYYY").replace(' 0', '  '));
                    //console.log(key + ": " + theCases.length);
                    for (var i = 0; i < theCases.length; i++) {
                        if (theCases[i].isOriginalJurisdiction) {
                            //console.log(key + ": " + "Original: " + theCases[i].caseName);

                            var sourceCourt = boxOriginalJurisdiction;

                            if (isUndefined(sourceCourt.casesThatWentThrough)) {
                                sourceCourt.casesThatWentThrough = [];
                            }
                            if (isUndefined(sourceCourt.casesThatWentThrough_origin)) {
                                sourceCourt.casesThatWentThrough_origin = [];
                            }
                            if (isUndefined(sourceCourt.casesThatWentThrough_source)) {
                                sourceCourt.casesThatWentThrough_source = [];
                            }

                            sourceCourt.casesThatWentThrough.push(theCases[i]);

                            var color = getStyleBasedOnCount(sourceCourt.casesThatWentThrough.length).color;

                            //.style({"border": "1px solid " + color})
//                            d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + boxOriginalJurisdiction.idForPlayback + "']")
//                                .style({background: color})
//                                .transition().duration(howlongFlashNonSupremeCourt_ms)
//                                .style({background: "#ffffff", "border": "1px solid " + color});

                            var selector = 'path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + boxOriginalJurisdiction.citation + '"]';
                            if (sourceCourt.parent) {
                                selector += ', path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + sourceCourt.parent.citation + '"]';
                            }

                            d3.selectAll(selector)
                                .attr("timesUsed", function (l) {
                                    l.timesUsed++;
                                    return l.timesUsed;
                                })
                                .each(function(l) {
                                    updateLinkCounters(l, theCases[i]);
                                });
//                                .attr("style", function (link) {
//                                    updateLinkCounters(link, theCases[i]);
//                                    return getLinkStyle(link); //, theCases[i])
//                                    //return getLinkStyle(link, theCases[i])
//                                });

                            //flashCourt(supremeCourt, 100);

                        }
                        else {
                            var sourceCourt;
                            var originCourt;

                            //console.log(theCases[i]);

                            if (!theCases[i].sourceCourt.theHighStateCourt) {
                                //console.log(theCases[i]);
                                //console.log(key + ": " + theCases[i].sourceCourt.name);
                                sourceCourt = theCases[i].sourceCourt;
                                originCourt = theCases[i].originCourt;
                            }
                            else {
                                sourceCourt = theCases[i].sourceCourt.theHighStateCourt;
                            }

                            var originIsSource = false;
                            if (sourceCourt && originCourt && (sourceCourt.citation == originCourt.citation)) {
                                originIsSource = true;
                            }

                            [
                                {court: sourceCourt, isSource: true},
                                {court: originCourt, isOrigin: true}
                            ].forEach(function (courtInfo) {
                                //console.log(sourceCourt);
                                //console.log($("[idForPlayback='" +  sourceCourt.citation + "']").length);
                                court = courtInfo.court;
                                var otherCourt;
                                if (courtInfo.isSource) {
                                    otherCourt = originCourt;
                                }
                                else {
                                    otherCourt = sourceCourt;
                                }

                                if (isDefined(court)) {

                                    if (isUndefined(court.casesThatWentThrough)) {
                                        court.casesThatWentThrough = [];
                                    }
                                    if (isUndefined(court.casesThatWentThrough_origin)) {
                                        court.casesThatWentThrough_origin = [];
                                    }
                                    if (isUndefined(court.casesThatWentThrough_source)) {
                                        court.casesThatWentThrough_source = [];
                                    }

                                    //console.log(court);
                                    court.casesThatWentThrough.push(theCases[i]);
                                    if (courtInfo.isSource) {
                                        court.casesThatWentThrough_source.push(theCases[i]);
                                        //if the qtip is showing
                                        //$('.courtInfoTable [qtip-source="' + court.citation + '"]').html(court.casesThatWentThrough_source.length);
                                    }
                                    if (courtInfo.isOrigin) {
                                        court.casesThatWentThrough_origin.push(theCases[i]);
                                        //$('.courtInfoTable [qtip-origin="' + court.citation + '"]').html(court.casesThatWentThrough_origin.length);
                                    }

                                    //doh - don't flash/count it twice if origin is source
                                    if (!originIsSource) {

                                        var color = getStyleBasedOnCount(court.casesThatWentThrough.length).color;

//                                        d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
//                                            .style({background: color, opacity: "1"})
//                                            .transition().duration(howlongFlashNonSupremeCourt_ms)
//                                            .style("background", "#ffffff");

                                        //.style({"border": "1px solid " + color})

//                                        d3.selectAll(".circlediv[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
//                                            .transition().duration(howlongFlashNonSupremeCourt_ms)
//                                            .style("opacity", "0");

                                        var selector = 'path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + court.citation + '"]';
//                                        if (court.parent) {
//                                            selector += ', path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + court.parent.citation + '"]';
//                                            //console.log(selector);
//                                        }
                                        if ( (court.parent) &&
                                            (  (!otherCourt)
                                                ||
                                                (otherCourt) && (court.parent.citation!=otherCourt.citation)
                                                )
                                            ){
                                            selector += ', path.link[' + attributeNameForHighlightingLinkDuringPlayback + '="' + court.parent.citation + '"]';
                                            //console.log(selector);
                                        }
                                        d3.selectAll(selector)
                                            .attr("timesUsed", function (l) {
                                                l.timesUsed++;
                                                return l.timesUsed;
                                            })
                                            .each(function(l) {
                                                updateLinkCounters(l, theCases[i]);
                                            });
//                                            .attr("style", function (link) {
//                                                updateLinkCounters(link, theCases[i]);
//                                                return getLinkStyle(link); //, theCases[i])
//                                                //return getLinkStyle(link, theCases[i])
//                                            });
                                    }
                                }
                            });
                            //flashCourt(supremeCourt, 100);
                        }
                    }
                }
            });

            //transition links and other colors
            var selector = 'path.link[' + attributeNameForHighlightingLinkDuringPlayback + ']';

            d3.selectAll(selector)
                .transition().duration(1000)
                .style("stroke-width", function(l) {
                    return getStyleBasedOnCount(l.timesUsed).width + "px";
                })
                .style("stroke", function(l) {
                    return getStyleBasedOnCount(l.timesUsed).color;
                });

            for (var property in courtsByCitation) {
                if (courtsByCitation.hasOwnProperty(property)) {
                    var court = courtsByCitation[property];
                    if (court.casesThatWentThrough && court.casesThatWentThrough.length>0) {
                        console.log(court);
                        var color = getStyleBasedOnCount(court.casesThatWentThrough.length).color;
                        d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
                            .transition().duration(1000)
                            .style({background: color, opacity: 1})
                    }
                }
            }
            var color = getStyleBasedOnCount(boxOriginalJurisdiction.casesThatWentThrough.length).color;

            //.style({"border": "1px solid " + color})
            d3.selectAll("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + boxOriginalJurisdiction.idForPlayback + "']")
                .transition().duration(1000)
                .style({background: color, opacity: 1});


        } //function to loop over the days

        var stepThroughOneDayAtTime = false;// not animating it for now
        //this loop works
        if (stepThroughOneDayAtTime) {
            that.currentDay = minDate;
            //let's do a test highlight to start seeing how we might want to show this
            //console.log(selectedSupremeCourtCases);
            //do it all in one minute
            var latestSCCaseIndexDealtWith = 0;
            var differenceBetweenHighlight_ms = selectedSupremeCourtCases.length/(60*1000);

            clearTimeout(theTimerId);
            //reset counters

            $('#whereInPlaybackWeAre').animate({opacity: 1});

            //this starts the playback
            setTimeout(processNextDay, realTimeBetweenDays_ms);
        }
        else {
            //loop over it, then transition curve sizes and colors
            loopThroughTheDays();
        }
        console.log(minDate.format("mm/dd/yyyy"));
        console.log(maxDate.format("mm/dd/yyyy"));


        console.log("Original Jurisdiction (ALL cases): " + originalJurisdiction.length);
        console.log("Total cases: " + selectedSupremeCourtCases.length);

        mannerSupremeCourtTakesCase.forEach(function(m) {
            if (countByType[m.id]>0) {
                console.log(m.value + ": " + countByType[m.id]);
            }
        });

        that.isAnalyzing = false;
        spinner.stop();

    };



    //var allSupremeCourtCasesAvailable;
    //load the data - once loaded, we show the playback options
    d3.csv("scdb/SCDB_2013_01_caseCentered_Citation.csv", function(error, data) {


        that.allSupremeCourtCasesAvailable = data;

        //show the controls
        $('#playbackArea').animate({opacity:1},500);
        $('#doPlaybackCurrentCourt').animate({opacity:1},500);
        $('#doPlayback').animate({opacity:1},500);
        console.log("Done loading");

    });

    //finding state court
    //if state only has one supreme court, then there ya go
    //don't worry about appellate courts for the moment - might need to research them and add data directly
    //this returns the state highest court (or courts) if it can be found, with extra info
    // to be used for tracking things down later...
    function getStateCourt(caseInfo, caseState) {

        var theState = scdbStatesById[caseState];
        if (!theState) {
            return;
        }
        var stateName = theState.state;

            // State Supreme Court
            // courtType = "State Supreme Court";
            var theHighestCourtsForState = highestStateCourtsByStateName[stateName];
            if (!theHighestCourtsForState) {
                return "No highest court: '" + stateName + "'";
            }
            if (theHighestCourtsForState.length===1) {
                if  (Number(caseInfo) === 300) {
                    return {foundUniqueCourt: true,
                        isStateIntermediateAppellateCourt:false,
                        theCourt: theHighestCourtsForState[0]};
                }
                else if  (Number(caseInfo) === 301) {
                    return {foundUniqueCourt: false,
                            reasonNotUnique:"Need to hook up to state intermediate appellate courts",
                            isStateIntermediateAppellateCourt:true,
                        theHighStateCourt: theHighestCourtsForState[0]};
                }
                else if  (Number(caseInfo) === 302) {
                    return {foundUniqueCourt: false,
                        reasonNotUnique:"Need to add trial courts",
                        isStateTrialCourt:true,
                        theHighStateCourt: theHighestCourtsForState[0]};
                }
            }
            else {
                if  (Number(caseInfo) === 300) {
                    return {foundUniqueCourt: false,
                        isStateIntermediateAppellateCourt:false,
                        reasonNotUnique:"This state has more than one supreme court",
                        theCourt: theHighestCourtsForState};
                }
                else if  (Number(caseInfo) === 301) {
                    return {foundUniqueCourt: false,
                        reasonNotUnique:"Need to hook up to state intermediate appellate courts",
                        isStateIntermediateAppellateCourt:true,
                        theHighStateCourt: theHighestCourtsForState};
                }
                else if  (Number(caseInfo) === 302) {
                    return {foundUniqueCourt: false,
                        reasonNotUnique:"Need to add trial courts",
                        isStateTrialCourt:true,
                        theHighStateCourt: theHighestCourtsForState};
                }
            }
        }

    function getStateCourtInfo(manner, caseInfo, caseState) {

        var theState = scdbStatesById[caseState];
        if (!theState) {
            return "Could not get state: '" + caseState + ";, Court type: '" + courtType + "'";
        }
        else {
            var stateName = scdbStatesById[caseState].state;
            var courtType = "";
            if (Number(caseInfo) === 300) {
                // State Supreme Court
                courtType = "State Supreme Court";
            }
            else if (Number(caseInfo) === 301) {
                // State Appellate Court
                courtType = "State Appellate Court";
            }
            else if (Number(caseInfo) === 302) {
                // State Trial Court
                courtType = "State Trial Court";
            }

            return "State: " + stateName + ", Court type:  " + courtType;
        }
    }


    that.showWebPages = function() {
        //return;
        $("#graphArea").fadeOut(function() {

            $('#webpageImagesArea').css({"z-index": 1000});

            var testShowWebPagesArea = d3.select("#webpageImagesArea").append("div")
                                            .attr("class","htmlArea");

            var xShift = 50;
            var yShift = 50;
            var levelYShift = 35;//70
            var nodeRadius = 4;

            var imageWidth = 30;
            var imageHeight= 40;
            var xScaleFactor = (imageWidth/25)*4;
            //states

            testShowWebPagesArea.selectAll(".courtStateWebSite")
                .data(that.treeStates)
                .enter()
                .append("div")
                .filter(function(d) {
                    return d.depth > 1;
                })
                .attr("citation",function(d) {
                    return d.citation;
                })
                .classed("hasQtip","true")
                .style("position","absolute")
                .style("left",function(d) {
                    return (xShift + (-2*nodeRadius + d.x) + xScaleFactor) + "px";
                })
                .style("top", function(d) {
                    return ( (-2*nodeRadius + d.y) + (3 - d.depth)*levelYShift)+ "px";
                })
                .html(function(d) {
                    return "<a href='" + d.courtListenerCourt.url + "' target='_blank'>" +
                        "<img style='height:" + imageHeight + "'px;overflow:hide;' src='img/courtpages_100/" + getFilenameForCourtPageImage(d.courtListenerCourt) + "' width='" + imageWidth + "' height='" + imageWidth + "'>" +
                        "</a>";
                });


            //scotus

            //federal and below
            testShowWebPagesArea.selectAll(".courtFederalWebSite")
                .data(that.nodesNonState)
                .enter()
                .append("div")
                .filter(function(d) {
                    return (isDefined(d.courtListenerCourt) && isDefined(d.courtListenerCourt.url))
                    //need to grab down the other courts not in CourtListener data...
                    ||
                     (isDefined(d.url));
                })
                .attr("citation",function(d) {
                    //console.log("federal: '" + d.citation + "'");
                    return d.citation;
                })
                .classed("hasQtip","true")
                .classed("isScotusPage",function(d) {return d.citation===supremeCourt.citation;})
                .style("position","absolute")
                .style("left",function(d) {
                    if (d.citation===supremeCourt.citation) {
                        return "435px";
                    }
                    else {
                        return (xShift + (-2 * nodeRadius + d.x) + xScaleFactor) + "px";
                        //return ((-2*nodeRadius + d.x)*8) + "px";
                    }
                })
                .style("top", function(d) {
                    var shift = 0;
                    if (d.depth==0) {
                        console.log("depth = 0 " + d.citation);
                        shift = 30;//90; //70*(imageWidth/50);
                    }
                    else {
                        shift = yShift + (d.depth-2)*levelYShift;
                    }
                    if (d.citation===supremeCourt.citation) {
                        return "205px"; //( (-2 * nodeRadius + d.y) + shift) + "px";
                    }
                    else {
                        return ( (-2 * nodeRadius + d.y) + shift) + "px";
                    }
                })
                .html(function(d) {
                    var url, court;
                    if (isDefined(d.courtListenerCourt) && isDefined(d.courtListenerCourt.url)) {
                        url = d.courtListenerCourt.url;
                        court = d.courtListenerCourt;
                    }
                    else {
                        court = courtsByCitation[d.citation];
                        url = d.url;
                    }
                    if (d.citation===supremeCourt.citation) {
                        return "<a href='" + url.trim() + "' target='_blank'>" +
                            //"<img style='height:100px;overflow:hide;' src='js/courtpages_100/" + getFilenameForCourtPageImage(d.courtListenerCourt) + "' width='50' height='50'>" +
                            "<img src='img/courtpages_100/" + getFilenameForCourtPageImage(court) + "' width='250'>" +
                            "</a>";
                    }
                    else {
                        return "<a href='" + url.trim() + "' target='_blank'>" +
                            //"<img style='height:100px;overflow:hide;' src='js/courtpages_100/" + getFilenameForCourtPageImage(d.courtListenerCourt) + "' width='50' height='50'>" +
                            "<img style='height:" + imageHeight + "'px;overflow:none;' src='img/courtpages_100/" + getFilenameForCourtPageImage(court) + "' width='" + imageWidth + "' height='" + imageWidth + "'>" +
                            "</a>";
                    }
                });



            testShowWebPagesArea.selectAll(".courtOtherSources")
                .data(that.treeOtherSources)
                .enter()
                .append("div")
                .filter(function(d) {
                    return (isDefined(d.courtListenerCourt) && isDefined(d.courtListenerCourt.url))
                        //need to grab down the other courts not in CourtListener data...
                        ||
                        (isDefined(d.url));
                })
                .attr("citation",function(d) {
                    //console.log("federal: '" + d.citation + "'");
                    return d.citation;
                })
                .classed("hasQtip","true")
                .style("position","absolute")

                .style("left", function(d) {
                    return (0 + that.oForOther.x(d) - 0) + "px";
                })
                .style("top", function(d) {
                    return (45 + that.oForOther.y(d)) + "px";
                })
                .html(function(d) {
                    var url, court;
                    if (isDefined(d.courtListenerCourt) && isDefined(d.courtListenerCourt.url)) {
                        url = d.courtListenerCourt.url;
                        court = d.courtListenerCourt;
                    }
                    else {
                        court = courtsByCitation[d.citation];
                        url = d.url;
                    }

                    return "<a href='" + url.trim() + "' target='_blank'>" +
                        //"<img style='height:100px;overflow:hide;' src='js/courtpages_100/" + getFilenameForCourtPageImage(d.courtListenerCourt) + "' width='50' height='50'>" +
                        "<img style='height:height:" + imageHeight + "'px;overflow:hide;' src='img/courtpages_100/" + getFilenameForCourtPageImage(court) + "' width='" + imageWidth + "' height='" + imageWidth + "'>" +
                        "</a>";
                });


            //console.log(that.labelStateAppellateCourts);
            //$('#labelStateAppellateCourts').html("State<br/>Appellate<br/>Courts");
            var el = $('#labelStateAppellateCourts');
            el.css("left",0);
            console.log(el.css("top"));
            el.css("top","+=25px");
            console.log(el.css("top"));
            $("#webpageImagesArea").append(el);


            el = $('#labelDistrictCourts');
            el.css("left",0);
            el.css("top","+=80px");
            $("#webpageImagesArea").append(el);

            el = $('#labelBankruptcyCourts');
            el.css("left",0);
            el.css("top","+=88px");
            $("#webpageImagesArea").append(el);

            el = $('#labelDistrictCourts').clone();
            el.css("top","-=100px");
            el.html(el.html().replace('District<br>Courts','Circuit<br/>Courts<br/>of Appeal'));
            $("#webpageImagesArea").append(el);


            el = $('#labelOtherCourts');
            //el.css("left",0);
            el.css("top","+=115px");
            el.css("left","+=50px");
            $("#webpageImagesArea").append(el);

            el = $('#labelOtherCourts').clone();
            el.css("top","-=280px");
            el.css("left","-=60px");
            el.html("Armed<br/>Forces<br/>Courts");
            $("#webpageImagesArea").append(el);


            $('#infoDiv').html("");
            $('#header').html("Home Pages of the United States Judicial System");

            $('.hasQtip').each(function() {
            var citation = $(this).attr("citation");
            var theCourt = courtsByCitation[citation];

            var usedAssoc = false;
            if (!theCourt) {
                //console.log("setup qtip");
                //console.log($(this));
                //console.log($(this).attr("associatedcourtcitation"));
                theCourt = courtsByCitation[$(this).attr("associatedcourtcitation")];
                //console.log(theCourt);
                usedAssoc = true;
            }

            if (isDefined(theCourt)) {

                if (usedAssoc) {
                    //console.log("Used assoc.......");
                }
                var theTitle = theCourt.name;
                var tooltip = $(this).attr('tooltip');
                var citation = "" + ($(this).attr("citation"));

                //var citation = "";
                var parentInfo="";
                if (theCourt.seal) {
                    theTitle = "<table class='popupTitle'><tr><td><img class='popupTitle' src='" + SEAL_DIR + "/" + theCourt.seal + "' width='75'></td><td><div class='popupTitleText'>" + theTitle + "</div></td></tr></table>";
                }
                $(this).qtip({
                    style:{
                        width:550
                    },
                    show: {delay:delayForQtipPopup_ms},
                    content: {
                        text: makeToolTipContentForCourt(theCourt),
                        position: { viewport: $(window) },
                        adjust: {screen: true},
                        my: "center",
                        at: "center",
                        button: "x",
                        title: theTitle
                    },
                    hide: {event: false }
                    , ignorehide: { when: 'inactive', delay: 5000 }

                    , position: { viewport: $(window)
                        , adjust: {method:"shift shift"}}
                    , events: {
                        hide:function() {
                            //shrinkBackNodeForCourt(theCourt);

                        },
                        show: function() {
                            console.log("show tooltip");
                            closeAllTips();
                            if (!theCourt.casesThatWentThrough || theCourt.casesThatWentThrough.length==0) {
                                if (theCourt.extraThings && theCourt.extraThings.judgesPic) {
                                    $(this).qtip('option', 'style.width', "400");
                                }
                                else {
                                    $(this).qtip('option', 'style.width', "280");
                                }
                            }
                            else {
                                $(this).qtip('option', 'style.width', "400");
                            }
                            console.log("is state court: " + theCourt.isStateCourt);
                            if (theCourt.isStateCourt && theCourt.state) {
                                console.log(theCourt);
                                $('.courtStructure').qtip('destroy');
                                makeToolTipForStateCourtStructure('.courtStructure', theCourt.state);
                            }
                            //not working $(this).qtip('option', 'style.opacity', "0.5");
                            $(this).qtip('option','content.text',makeToolTipContentForCourt(theCourt));
                            updatePopupDatatableOfCases(theCourt);
                            //$this.content.text="Hello";
                        },
                        render: function() {
                            closeAllTips();
                            console.log("is state court: " + theCourt.isStateCourt);
                            if (theCourt.isStateCourt && theCourt.state) {
                                $('.courtStructure').qtip('destroy');
                                makeToolTipForStateCourtStructure('.courtStructure', theCourt.state);
                            }
                            //shrinkExpandedNodesButThisOne(theCourt);
                            //shrinkAnyExpandedNodes();
                        }
                    }            });
            }
            else {
                $(this).qtip({
                    style:{
                        width:550
                    },
                    content: {
                        text: $(this).attr('tooltip'),
                        position: { viewport: $(window) },
                        adjust: {screen: true},
                        my: "center",
                        at: "center",
                        button: "x",
                        title: $(this).attr("title")
                    }, ignorehide: {
                        event: false
                    }
                    , show: {delay:delayForQtipPopup_ms}
                    , hide: { when: 'inactive', delay: 5000 }
                    , position: { viewport: $(window)
                        , adjust: {method:"shift shift"}}
                    , events: {
                        show: function() {
                            closeAllTips();

                            //if (citation.length>0) {
                            //    $(this).qtip('option','content.text',makeToolTipContentForThing(theCourt, tooltip));
                            //}
                        },
                        render: function() {
                            closeAllTips();
                        }
                    }            });

            }
        });

        });


    }

    function createDataTable(theData, theColumnsInfo, theSelector) {

        console.log(theSelector);
        var table =  $(theSelector).dataTable({
                    destroy:true
                    , "searching":false
                    , "bInfo":false
                    ,  bSort:(theData && theData.length>0)
                    , "sDom": 'lfrtip'
                    ,"data": theData
                    , "columns": theColumnsInfo
                    , "bPaginate": false
                    , "lengthChange" : false
                    , scrollY:"150px"

                    , scrollCollapse:true
                    , "isScrollX": "100%", "isScrollXInner": "100%"
            }
            );

        setTimeout(function ()
        {
            //oTable.fnAdjustColumnSizing();
            table.fnAdjustColumnSizing(); //see if it works...
        }, 30 );
        //table.columns.adjust();
        //jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
    }

    //TODO - do people really contribute to election fund thing?  apparently...

    function getSmallObjectArrayAndMakeDataTable(arr, selector) {

        var test = arr.map(function(scCase) {

            console.log(scCase);
            //console.log(selector);

            //console.log(scCase.certReason);
            //var s = "https://www.google.com/search?q=" +  encodeURIComponent(scCase.caseName) + "&ie=UTF-8";
            var s = "https://www.courtlistener.com/?q=" +  encodeURIComponent(scCase.caseName)
            var certReason = "NA";
            if (certReasonById[scCase.certReason]) {
                certReason = certReasonById[scCase.certReason].name;
            }
            var issue = "NA";
            if (issueById[scCase.issue]) {
                issue = issueById[scCase.issue].name;
            }

            var disposition = "NA";
            if (dispositionById[scCase.caseDisposition]){
                disposition = dispositionById[scCase.caseDisposition].name;
            }

            return {
                //http://www.supremecourt.gov/Search.aspx?FileName=/docketfiles/

                "caseName":"<a target='_blank' href='" + s + "'>" + scCase.caseName + "</a>", //09-350.ZO.html'scCase.caseName,
                "issue": issue,
                "disposition":disposition,
                "dateDecision":scCase.dateDecision,
                "certReason":certReason};
        });

        console.log(test);
        createDataTable(test, [
                {title:"Date", "data": "dateDecision"}
                , {sWidth:'180px', title:"Case", "data": "caseName"}
                , {sWidth:'100px', title:"Result", "data":"disposition", sClass:"center"}
                , {sWidth:'180px', title:"Issue", "data":"issue", sClass:"casePadLeft"}]
            , selector);
    }

    //display stuff on the cases in the array
    function updatePopupDatatableOfCases (theCourt) {


        if (
            (!theCourt.casesThatWentThrough_source || theCourt.casesThatWentThrough_source.length == 0)
            &&
            (!theCourt.casesThatWentThrough_origin || theCourt.casesThatWentThrough_origin.length == 0)
            &&
            (theCourt.casesThatWentThrough && theCourt.casesThatWentThrough.length > 0)
            )
        {
            //this is one where there are just cases,
            getSmallObjectArrayAndMakeDataTable(theCourt.casesThatWentThrough, '#' + getSelector(that.gSelectorAllCasesCourtDataTable,theCourt) );
        }

        if (theCourt.casesThatWentThrough_source && theCourt.casesThatWentThrough_source.length > 0) {

            console.log(theCourt.casesThatWentThrough_source);

//            var test = theCourt.casesThatWentThrough_source.map(function(scCase) {
//                return {"caseName":scCase.caseName};
//            });
            getSmallObjectArrayAndMakeDataTable(theCourt.casesThatWentThrough_source, '#' + getSelector(that.gSelectorSourceCourtDataTable,theCourt) );
//                    ,{sWidth:'100px', title:"Cert Reason", "data":"certReason"}

//            console.log(test);
//
//            that.sourceSCTable =
//                $('#' + that.gSelectorSourceCourtDataTable).dataTable({
//                        destroy:true
//                , "searching":false
//                , "bInfo":false
//                , bSort:true
//                , "sDom": 'lfrtip'
//                , "scrollCollapse":true
//                ,"data": test
//                        , "columns": [
//                            {"data": "caseName"}
//                            ,{"data": "certReason"}
//                            ,{"data":"issue"}]
//                , "bPaginate": false
//                , "lengthChange" : false
//                , scrollY:"100px"
//                , scrollCollapse:true
//                , fnDrawCallback: function() {
//                            //$("#" + that.gSelectorSourceCourtDataTable + " thead").remove();
//                            //$("#" + that.gSelectorSourceCourtDataTable + " .dataTables_scrollHead").remove();
//                        }
//                }
//            );
        }
        if (theCourt.casesThatWentThrough_origin && theCourt.casesThatWentThrough_origin.length > 0) {

            //console.log(theCourt.casesThatWentThrough_source);

            getSmallObjectArrayAndMakeDataTable(theCourt.casesThatWentThrough_origin, '#' + getSelector(that.gSelectorOriginCourtDataTable,theCourt));

//            var test = theCourt.casesThatWentThrough_origin.map(function(scCase) {
//                console.log(scCase.certReason);
//                //07-214.htmhttp://www.law.cornell.edu/supct/html/
//                var s = "https://www.google.com/search?q=" +  encodeURIComponent(scCase.caseName) + "&ie=UTF-8";
//                return {
//                    "caseName":"<a target='_blank' href='" + s + "'>" + scCase.caseName + "</a>", //09-350.ZO.html'scCase.caseName,
//                        "issue": issueById[scCase.issue].name,
//                    "certReason":certReasonById[scCase.certReason].name};
//            });
//
//            createDataTable(test, [{sWidth:'180px', title:"Case", "data": "caseName"}
//                    ,{sWidth:'100px', title:"Cert Reason", "data":"certReason"}
//                    ,{sWidth:'180px', title:"Issue", "data":"issue"}]
//                , '#' + that.gSelectorOriginCourtDataTable);
//
//            console.log(test);

//            that.originSCTable =
//                $('#' + that.gSelectorOriginCourtDataTable).dataTable({
//                        destroy:true
//                        , "searching":false
//                        , "bInfo":false
//                        , bSort:true
//                        , "sDom": 'lfrtip'
//                        , "scrollCollapse":true
//                        ,"data": test
//                        , "columns": [
//                            {"data": "caseName"}
//                            ,{"data":"certReason"}
//                            ,{"data":"issue"}]
//                        , "bPaginate": false
//                        , "lengthChange" : false
//                        , scrollY:"100px"
//                        , scrollCollapse:true
//                        , fnDrawCallback: function() {
//                            //$("#" + that.gSelectorOriginCourtDataTable + " thead").remove();
//                            //$("#" + that.gSelectorOriginCourtDataTable + "_wrapper .dataTables_scrollHead").remove();
//
//                        }
//                    }
//                );
        }

    }

//    //this creates the html to display
//    function getDisplayInfoForSCCase(c) {
//
//            // case name for google search
//            // decision type
//            // date argued
//            // date decided
//            // petitioner
//            // issue/legal provision
//            // vote coalition
//            // decision direction
//            // manner in which court takes Jurisdiction
//            // issue - 278 of them
//            // issueArea
//
//        var summary =  {caseName: c.name
//                             dateDecided: c.dateDecidedDate
//                            , manner:mannerSupremeCourtTakesCaseById[c.certReason]
//                            , issueName: issueById[c.issue]
//                            , issueAreaName:  issueArea[c.issueArea]};
//
//
//        use datatable that takes an array
//    }
//



    that.getDateFormatForCourtListenerSearch = function(theDate) {
        var dateString= theDate.format("YYYY-MM-DD");
        return dateString;
    };

    that.getCourtListenerUrlForCourtAndDate = function(court, theDate) {

        //var url = "https://www.courtlistener.com/?q=&stat_Precedential=on&stat_Non-Precedential=on";
        var url = "https://www.courtlistener.com/?q=&stat_Precedential=on&stat_Non-Precedential=on&stat_Errata=on&stat_Separate+Opinion=on&stat_In-chambers=on&stat_Relating-to+orders=on&stat_Unknown+Status=on";
        url +=  "&filed_after=" + that.getDateFormatForCourtListenerSearch(theDate);
        url +=  "&order_by=dateFiled+desc";
        url += "&court=" + court.courtListenerAbbreviation;

        return url;

    };
    that.getCourtListenerUrlForDate = function(theDate) {

        //var url = "https://www.courtlistener.com/?q=&stat_Precedential=on&stat_Non-Precedential=on";
        var url = "https://www.courtlistener.com/?q=&stat_Precedential=on&stat_Non-Precedential=on&stat_Errata=on&stat_Separate+Opinion=on&stat_In-chambers=on&stat_Relating-to+orders=on&stat_Unknown+Status=on";
        url +=  "&filed_after=" + that.getDateFormatForCourtListenerSearch(theDate);
        url +=  "&order_by=dateFiled+desc";

        return url;

    };

    //using function and not var so that it is defined sooner... for now
    function getDateForSearch() {
        var aDate = that.datepicker.datepicker("getDate");
        return aDate;
    };

    function getDateFromDatePickerForDisplay() {
        var dateString= moment().format("M/DD/YYYY");
        if (that.datepicker) {
            var aDate = getDateForSearch();;
            dateString = moment(aDate).format("M/DD/YYYY");
        }
        return dateString;
    };

    var getDateStringForSearch = function() {

        var dateString= moment().format("YYYY-MM-DD");
        if (that.datepicker) {
            var aDate = getDateForSearch();;
            dateString = moment(aDate).format("YYYY-MM-DD");
            //console.log("Date string: " + dateString);
        }

        return dateString;

    };

    //call this periodically - for now, rarely because I want ALL data
    that.currentCourtListenerUpdateInterval_ms = 60*60*1000;
    that.doNextCheckOfCourtListener = function() {

        //if (that.interactWithCourtListener) {

            that.resetForPlayback();
            that.opinionsToday = 0;

            //let's try getting them all
            var numberToCheckAtATime =  that.courtListenerShortNames.length;

            $("#linkToOpinionsToday").attr("href",that.getCourtListenerUrlForDate(moment(getDateForSearch())));
            $('#opinionsTodayInfo').animate({"opacity":1});

            var dateString = getDateStringForSearch();

            for (var i = 0; i < numberToCheckAtATime; i++) {

                var courtAbbrev = that.courtListenerShortNames[that.nextIndexStartToGetCourtInfo];
                if (that.courtsByCourtListenerAbbreviation[courtAbbrev]) {
                    var c = that.courtsByCourtListenerAbbreviation[courtAbbrev];
                    //if (!c.opinionsFromToday) {
                    //    c.opinionsFromToday = [];
                    //}
                    c.opinionsFromToday = []; //just reset for now...
                }
                //whoops - wrong url - use the api, duh
                //var url = "https://www.courtlistener.com/?q=&court_" + courtAbbrev + "=on&order_by=dateFiled+desc";
                //good one... var url = "https://www.courtlistener.com/api/rest/v1/opinion/?date_filed__gt=2014-06-08&order_by=-date_filed&format=jsonp&callback=?";

                var url = "https://www.courtlistener.com/api/rest/v1/opinion/?date_filed__gte=" + dateString + "&court=" + courtAbbrev + "&order_by=-date_filed&format=jsonp&callback=?";

                //somehow mark the ones that don't have a scraper?



                console.log("url: " + url);

                getCases(url, that);

                that.nextIndexStartToGetCourtInfo++;
                if (that.nextIndexStartToGetCourtInfo >= that.courtListenerShortNames.length) {
                    that.nextIndexStartToGetCourtInfo = 0;
                }

            }
    };

        //that.courtListenerShortNames
        //that.nextIndexStartToGetCourtInfo

        //set the timer to check again
        //that.setTimerForNextCallToGetCourtListenerData(that.currentCourtListenerUpdateInterval_ms);
    //};

//    that.setInteractWithCourtListener = function(value) {
//
//        that.interactWithCourtListener = value;
//        if (value) {
//            that.resetTimerAndGetCasesFromCourtListener();
//        }
//        else {
//            that.stopCheckingCourtListener()
//        }
//
//    };

//    that.resetTimerAndGetCasesFromCourtListener = function() {
//
//        that.setTimerForNextCallToGetCourtListenerData(0);
//
//    };


    that.highlightMissingScrapers = function() {


        for (var citation in courtsByCitation) {

            if (courtsByCitation.hasOwnProperty(citation)) {
                //console.log(courtsByCitation[citation]);
                var court = courtsByCitation[citation];

                if (isDefined(court.courtListenerAbbreviation)
                    &&
                    isDefined(hasScraperByCourtListenerCourtName[court.courtListenerAbbreviation])
                    ) {

                    //scraper exists

                }
                else {

                    //console.log(shortName);
                    //var court = that.courtsByCourtListenerAbbreviation[shortName];

                    d3.select("[" + attributeNameForHighlightingCourtDuringPlayback + "='" + court.citation + "']")
                        .classed("missingScraper", true);
//                        .style({"background": "#FF0000"})
//                        .style({"border-color": "#000"})
//                        .style("stroke-width", "1px")
//                        .style("border-width", "1px")
//                        .style("stroke", "#000");

                    d3.select(".node[citation='" + court.citation + "']")
                        .classed("missingScraper", true);

                    d3.select(".stateNodeImage[citation='" + court.citation + "']")
                        .classed("missingScraper", true);

                }

            }

            //};
        }
    };

    that.stopShowingThoseWithMissingScrapers = function() {
        console.log("stopShowingThoseWithMissingScrapers");
        d3.selectAll(".node, .stateNodeImage, [" + attributeNameForHighlightingCourtDuringPlayback + "]")
            .classed("missingScraper",false);
        //,
    };

    that.flashForNewCase = function(court, theCase) {
        var duration_ms = 10*60*1000;


        console.log("Has case: " + court.name);
        var numberHues = 10;
        var theStyleInfo = getTheStyleBasedOnCount(court.opinionsFromToday.length,numberHues);

        d3.select("[" + attributeNameForHighlightingCourtDuringPlayback + "='" +  court.citation + "']")
            .style({"background":theStyleInfo.color})
            .style({"border-color":"#000"})
            .style("stroke-width","1px")
            .style("border-width","1px")
            .style("stroke","#000");
            //.style("z-index","10000")
            //.style("border","2px solid red");
            //.transition().duration(duration_ms)
            //.style({"background":"#FFFFFF"});

        d3.select(".node[citation='" + court.citation + "']")
                    .style("stroke","#000")
                    //.style("fill",d3.rgb(theStyleInfo.color).brighter().toString())
                    .style("fill",theStyleInfo.color) //d3.rgb(theStyleInfo.color).brighter().toString())
                    .style("stroke-width","1px");


    }


    that.updateOpinionsToday = function(n) {
        $('#opinionsToday').html(n);
    };

    that.newCasesFromCourtListener = function(theCases) {
        //console.log(theCases);
        //if (that.interactWithCourtListener) {

            //console.log("New cases");

            if (theCases.length>=20) {
                if (!$('#opinionsGe').is(":visible")) {
                    $('#opinionsGe').fadeIn();
                }
            }

            theCases.forEach(function (theCase) {
                var c = that.courtsByCourtListenerAbbreviation[theCase.courtListenerAbbreviation];
                if (c) {
                    that.opinionsToday++;
                    that.updateOpinionsToday(that.opinionsToday);
                    //next: figure out how to flash the nodes, too
                    //        and how we want to do with this
                    if (!c.opinionsFromToday) {
                        c.opinionsFromToday = [];
                    }
                    c.opinionsFromToday.push(theCase);
                    that.flashForNewCase(c, theCase); //5000);
                    //console.log(theCase.courtListenerAbbreviation);
                }
                else {
                    console.log("cannot find it: '" + theCase.courtListenerAbbreviation + "'")
                }
            });
        //}

    };


    that.getAllCourtsInArray = function() {
        var theCourts = [];
        for (var citation in courtsByCitation) {

            if (courtsByCitation.hasOwnProperty(citation)) {
                var court = courtsByCitation[citation];
                theCourts.push(court);
            }
        }
        return theCourts;
    };


    that.getSummaryOfDescriptiveTextHtml = function() {

        var descriptions = that.getObjectDescriptiveTextArray();

        var s = "<table>";

        descriptions.forEach(function(d) {
            s += "<tr><td>" + d.name + "</td><td>" + d.description + "</td></tr>";
        });

        s += "</table>";

        return s;

    };

    that.getSummaryOfDescriptiveText = function() {

        var descriptions = that.getObjectDescriptiveTextArray();

        var s = "";

        descriptions.forEach(function(d) {
            s += d.name + " : " + d.description + "\n";
        });
        
        return s;

    };

    that.getObjectDescriptiveTextArray = function() {

        var descriptions = [];

        descriptions.push({name:"citation", description:"This is the key for the court in internal hashtables; some of these are made up because I did not know what to use."});
        descriptions.push({name:"name", description:"Name for the court"});
        descriptions.push({name:"shortName", description:"'Short' name for the court"});

        descriptions.push({name:"courtListenerCourt", description:"structure with some additional info; "});
        descriptions.push({name:"courtListenerCourt.extraThings.judgesPic.url", description:"filename for the picture of the judges"});
        descriptions.push({name:"courtListenerCourt.extraThings.judgesPic.urlSource", description:"source for the picture of the judges"});

        descriptions.push({name:"parent", description:"Citation for the parent court of the court (if any); note that there are some 'fake' parents for display purposes in the viz; in particular, the top 'court' for the state supreme courts has citation 'statesWritBox'"});
        descriptions.push({name:"multipleParents", description:"(Primarily for bankruptcy courts); If the court can send cases up more than one way, this is array of the different parent citations"});
        descriptions.push({name:"children", description:"Array of the citation keys for the children courts for the court (if any)"});

        descriptions.push({name:"courtListenerName", description:"Name according to CourtListener (?)"});
        descriptions.push({name:"courtListenerAbbreviation", description:"abbreviation that CourtListener uses"});
        descriptions.push({name:"courtListenerURL", description:"URL to see results for the court"});

        descriptions.push({name:"jurisdiction", description:"Jurisdiction; can be 'Federal Appellate', 'Federal Bankruptcy', 'Federal District', 'Federal Special', 'State Appellate', 'State Special'"});

        descriptions.push({name:"isDistrictBankruptcyCourt", description:"Whether it is a bankruptcy court or not (true/false/null)"});

        descriptions.push({name:"scdbId", description:"ID of the court in the Supreme Court database"});


        descriptions.push({name:"myDistrictCourt", description:"Object with more details on the court, if a district court"});

        descriptions.push({name:"isStateCourt", description:"Whether it is a state court or not (true/false/null)"});
        descriptions.push({name:"state", description:"If state court, this is the full name of the state"});
        descriptions.push({name:"stateAbbrev", description:"If state court, this is two-character abbreviation for the state"});
        descriptions.push({name:"judgeTermLength", description:"If not null, the length of the term for the judges"});
        descriptions.push({name:"numberJudges", description:"If not null, how many judges are on the court"});

        descriptions.push({name:"meetingPlaces", description:"If not null, how many different places the court can meet"});

        descriptions.push({name:"established", description:"If not null, when the court was established"});
        descriptions.push({name:"chiefJudge", description:"If not null, current Chief Justice for the court"});
        descriptions.push({name:"chiefJudgeUrl", description:"If not null, wikipedia page for current Chief Justice for the court"});

        descriptions.push({name:"courtListenerCourt.jurisdiction", description:"Should be same as jurisdiction, I imagine"});


        //descriptions.push({name:"courtListenerCourt.extraThings.judgesPic.url", description:"filename for the picture of the judges"});
        //descriptions.push({name:"courtListenerCourt.extraThings.judgesPic.urlSource", description:"source for the picture of the judges"});


        descriptions.push({name:"seal", description:"filename for the court seal image"});
        descriptions.push({name:"sealSource", description:"where the seal image file was retrieved from"});

        descriptions.push({name:"url", description:"Web site for the court"});
        descriptions.push({name:"wikiUrl", description:"Wikimedia site for the court"});




        descriptions.push({name:"abbrev", description:"Abbreviation for the court"});


        descriptions.sort(function(a,b) {if (a.name < b.name) {return -1} else {return 1;}}   );

        return descriptions;

    };

    that.getStructureForExport = function() {

        var arr = theViz.getAllCourtsInArray();

        arr.forEach(function(arrEntry) { if (arrEntry.children) {
                                                arrEntry.children = 
                                                    arrEntry.children.map(function(child) {return child.citation;});
                                    }});

        arr.forEach(function(arrEntry) { 
                                        //arrEntry.parent = (arrEntry.parent ? arrEntry.parent.citation : null);
                                        arrEntry.parent = (arrEntry.parent ? arrEntry.parent.citation : null);
                                    });

        arr.forEach(function(arrEntry) { 
                        if (arrEntry.multipleParents) {
                                arrEntry.multipleParents = arrEntry.multipleParents.map(
                                                                    function(child) {
                                                                            return child.citation;
                                                                                    });
                            }
                        });


        // arr.forEach(function(arrEntry) { 
        //                 if (arrEntry.courtListenerCourt && arrEntry.courtListenerCourt.extraThings) {
        //                             arrEntry.courtListenerCourt.extraThings.judgesPic = null;}
        //                         });

        arr.forEach(function(arrEntry) { 
                                        if (arrEntry.courtListenerCourt) {arrEntry.courtListenerCourt.courtListenerCourt = null};                                        
                                    });


        arr.forEach(function(arrEntry) { if (arrEntry.courtListenerCourt) {
                                                arrEntry.courtListenerCourt.populationInfo = null;}
                                            });

        //arr.forEach(function(arrEntry) { if (arrEntry.courtListenerCourt) {
        //                                        arrEntry.courtListenerCourt.courtListenerCourt = null;
        //                                }});

        // arr.forEach(function(arrEntry) { if (arrEntry.courtListenerCourt) {arrEntry.courtListenerCourt.extraThings = null;}
        //                             });

        var citationsSeen = arr.map(function(c) { return c.citation;});


        return arr;

    };



    that.showPages = function() {

        var theCourts = that.getAllCourtsInArray();

        var bankruptcyCourts = theCourts.filter(function (c) {
            return (c.citation.indexOf("Bankr.") > -1)
        });

        bankruptcyCourts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });


        bankruptcyCourts.forEach(function (c) {
            window.open(c.url, '_blank');
        });

//        var theStartElement = d3.select("#showPages");
//
//        theStartElement.selectAll(".bankruptcyCourtFrame")
//            .data(bankruptcyCourts)
//            .enter()
//            .append("div")
//            .classed("courtPageDiv",true)
//            .html(function(d) {
//                console.log(d);
//                var s = "<div class='courtPageTitle'>";
//                s += d.name;
//                s += " <a href='" + d.url + "' target='_blank'>" + d.url + "</a>";
//                s += "</div>";
//
//                //s += "iframe style='height:600px;width:100%;' src='" + d.url + "' /iframe";
//                //s += "<iframe src='" + d.url + "'></iframe>";
//
//                return s;
//            });

    };

    $('#btnShowPages').fadeOut();

    //};



//    that.stopCheckingCourtListener = function() {
//        clearTimeout(that.theCourtListenerTimerID);
//    };

//Calling with button only now July 12, 2014 that.setTimerForNextCallToGetCourtListenerData = function(howLongToWait_ms) {
//        that.theCourtListenerTimerID = setTimeout(function() {
//            that.doNextCheckOfCourtListener();
//        }, howLongToWait_ms);
//    };
//    that.setTimerForNextCallToGetCourtListenerData(1); //just fire it off for now for initial testing...

};





function isCyclic (obj) {
  var seenObjects = [];

  function detect (obj) {
    if (obj && typeof obj === 'object') {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }
      seenObjects.push(obj);
      //onsole.log(seenObjects.length - 1);
      //onsole.log(obj)
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && detect(obj[key])) {

          console.log(seenObjects.indexOf(obj[key]) );  
          console.log(obj[key]);  

          console.log(obj, 'cycle at ' + key);
          return true;
        }
      }
    }
    return false;
  }

  return detect(obj);
}

