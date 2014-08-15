/**
 * Created by bradflyon on 5/6/14.
 */

//these all appeal to the Supreme Court
"use strict";

var stateHighestCourts = [
{name: 'Supreme Court of Alabama', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Alabama', state: 'Alabama', stateWikiUrl: 'http://en.wikipedia.org/wiki/Alabama', stateAbbrev: 'AL', judgeTermLength_years: '6', numberJudges: '9' } ,
{name: 'Alaska Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Alaska_Supreme_Court', state: 'Alaska', stateWikiUrl: 'http://en.wikipedia.org/wiki/Alaska', stateAbbrev: 'AK', judgeTermLength_years: '10', numberJudges: '5' } ,
{name: 'Arizona Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Arizona_Supreme_Court', state: 'Arizona', stateWikiUrl: 'http://en.wikipedia.org/wiki/Arizona', stateAbbrev: 'AZ', judgeTermLength_years: '6', numberJudges: '5' } ,
{name: 'Arkansas Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Arkansas_Supreme_Court', state: 'Arkansas', stateWikiUrl: 'http://en.wikipedia.org/wiki/Arkansas', stateAbbrev: 'AR', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Supreme Court of California', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_California', state: 'California', stateWikiUrl: 'http://en.wikipedia.org/wiki/California', stateAbbrev: 'CA', judgeTermLength_years: '12', numberJudges: '7' } ,
{name: 'Colorado Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Colorado_Supreme_Court', state: 'Colorado', stateWikiUrl: 'http://en.wikipedia.org/wiki/Colorado', stateAbbrev: 'CO', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Connecticut Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Connecticut_Supreme_Court', state: 'Connecticut', stateWikiUrl: 'http://en.wikipedia.org/wiki/Connecticut', stateAbbrev: 'CT', judgeTermLength_years: '8', numberJudges: '7' } ,
{name: 'District of Columbia Court of Appeals',
            info:'The District of Columbia Court of Appeals is the highest court of the District of Columbia. Established in 1970, it is equivalent to a state supreme court, except that its authority is derived from the United States Congress rather than from the inherent sovereignty of the states',
            infoSource:'http://en.wikipedia.org/wiki/District_of_Columbia_Court_of_Appeals',
            courtWikiUrl:'http://en.wikipedia.org/wiki/District_of_Columbia_Court_of_Appeals', state:"District of Columbia", stateAbbrev:'DC'},
{name: 'Delaware Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Delaware_Supreme_Court', state: 'Delaware', stateWikiUrl: 'http://en.wikipedia.org/wiki/Delaware', stateAbbrev: 'DE', judgeTermLength_years: '12', numberJudges: '5' } ,
{name: 'Florida Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Florida_Supreme_Court', state: 'Florida', stateWikiUrl: 'http://en.wikipedia.org/wiki/Florida', stateAbbrev: 'FL', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Supreme Court of Georgia', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Georgia_(U.S._state)', state: 'Georgia', stateWikiUrl: 'http://en.wikipedia.org/wiki/Georgia_(U.S._state)', stateAbbrev: 'GA', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Supreme Court of Hawaii', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Hawaii', state: 'Hawaii', stateWikiUrl: 'http://en.wikipedia.org/wiki/Hawaii', stateAbbrev: 'HI', judgeTermLength_years: '10', numberJudges: '5' } ,
{name: 'Idaho Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Idaho_Supreme_Court', state: 'Idaho', stateWikiUrl: 'http://en.wikipedia.org/wiki/Idaho', stateAbbrev: 'ID', judgeTermLength_years: '6', numberJudges: '5' } ,
{name: 'Supreme Court of Illinois', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Illinois', state: 'Illinois', stateWikiUrl: 'http://en.wikipedia.org/wiki/Illinois', stateAbbrev: 'IL', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Supreme Court of Indiana', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Indiana', state: 'Indiana', stateWikiUrl: 'http://en.wikipedia.org/wiki/Indiana', stateAbbrev: 'IN', judgeTermLength_years: '10', numberJudges: '5' } ,
{name: 'Iowa Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Iowa_Supreme_Court', state: 'Iowa', stateWikiUrl: 'http://en.wikipedia.org/wiki/Iowa', stateAbbrev: 'IA', judgeTermLength_years: '8', numberJudges: '7' } ,
{name: 'Kansas Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Kansas_Supreme_Court', state: 'Kansas', stateWikiUrl: 'http://en.wikipedia.org/wiki/Kansas', stateAbbrev: 'KS', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Kentucky Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Kentucky_Supreme_Court', state: 'Kentucky', stateWikiUrl: 'http://en.wikipedia.org/wiki/Kentucky', stateAbbrev: 'KY', judgeTermLength_years: '8', numberJudges: '7' } ,
{name: 'Louisiana Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Louisiana_Supreme_Court', state: 'Louisiana', stateWikiUrl: 'http://en.wikipedia.org/wiki/Louisiana', stateAbbrev: 'LA', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Maine Supreme Judicial Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Maine_Supreme_Judicial_Court', state: 'Maine', stateWikiUrl: 'http://en.wikipedia.org/wiki/Maine', stateAbbrev: 'ME', judgeTermLength_years: '7', numberJudges: '7' } ,
{name: 'Maryland Court of Appeals', courtWikiUrl: 'http://en.wikipedia.org/wiki/Maryland_Court_of_Appeals', state: 'Maryland', stateWikiUrl: 'http://en.wikipedia.org/wiki/Maryland', stateAbbrev: 'MD', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Massachusetts Supreme Judicial Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Massachusetts_Supreme_Judicial_Court', state: 'Massachusetts', stateWikiUrl: 'http://en.wikipedia.org/wiki/Massachusetts', stateAbbrev: 'MA', judgeTermLength_years: 'Life', numberJudges: '7' } ,
{name: 'Michigan Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Michigan_Supreme_Court', state: 'Michigan', stateWikiUrl: 'http://en.wikipedia.org/wiki/Michigan', stateAbbrev: 'MI', judgeTermLength_years: '8', numberJudges: '7' } ,
{name: 'Minnesota Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Minnesota_Supreme_Court', state: 'Minnesota', stateWikiUrl: 'http://en.wikipedia.org/wiki/Minnesota', stateAbbrev: 'MN', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Supreme Court of Mississippi', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Mississippi', state: 'Mississippi', stateWikiUrl: 'http://en.wikipedia.org/wiki/Mississippi', stateAbbrev: 'MS', judgeTermLength_years: '8', numberJudges: '9' } ,
{name: 'Supreme Court of Missouri', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Missouri', state: 'Missouri', stateWikiUrl: 'http://en.wikipedia.org/wiki/Missouri', stateAbbrev: 'MO', judgeTermLength_years: '12', numberJudges: '7' } ,
{name: 'Montana Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Montana_Supreme_Court', state: 'Montana', stateWikiUrl: 'http://en.wikipedia.org/wiki/Montana', stateAbbrev: 'MT', judgeTermLength_years: '8', numberJudges: '7' } ,
{name: 'Nebraska Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Nebraska_Supreme_Court', state: 'Nebraska', stateWikiUrl: 'http://en.wikipedia.org/wiki/Nebraska', stateAbbrev: 'NE', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Supreme Court of Nevada', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Nevada', state: 'Nevada', stateWikiUrl: 'http://en.wikipedia.org/wiki/Nevada', stateAbbrev: 'NV', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'New Hampshire Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/New_Hampshire_Supreme_Court', state: 'New Hampshire', stateWikiUrl: 'http://en.wikipedia.org/wiki/New_Hampshire', stateAbbrev: 'NH', judgeTermLength_years: 'Life', numberJudges: '7' } ,
{name: 'New Jersey Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/New_Jersey_Supreme_Court', state: 'New Jersey', stateWikiUrl: 'http://en.wikipedia.org/wiki/New_Jersey', stateAbbrev: 'NJ', judgeTermLength_years: 'Life', numberJudges: '7' } ,
{name: 'New Mexico Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/New_Mexico_Supreme_Court', state: 'New Mexico', stateWikiUrl: 'http://en.wikipedia.org/wiki/New_Mexico', stateAbbrev: 'NM', judgeTermLength_years: '8', numberJudges: '5' } ,
{name: 'New York Court of Appeals', courtWikiUrl: 'http://en.wikipedia.org/wiki/New_York_Court_of_Appeals', state: 'New York', stateWikiUrl: 'http://en.wikipedia.org/wiki/New_York', stateAbbrev: 'NY', judgeTermLength_years: '14', numberJudges: '7' } ,
{name: "Supreme Court of North Carolina", wikiname: 'North Carolina Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/North_Carolina_Supreme_Court', state: 'North Carolina', stateWikiUrl: 'http://en.wikipedia.org/wiki/North_Carolina', stateAbbrev: 'NC', judgeTermLength_years: '8', numberJudges: '7' } ,
{name: 'North Dakota Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/North_Dakota_Supreme_Court', state: 'North Dakota', stateWikiUrl: 'http://en.wikipedia.org/wiki/North_Dakota', stateAbbrev: 'ND', judgeTermLength_years: '10', numberJudges: '5' } ,
{name: 'Ohio Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Ohio_Supreme_Court', state: 'Ohio', stateWikiUrl: 'http://en.wikipedia.org/wiki/Ohio', stateAbbrev: 'OH', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Supreme Court of Oklahoma', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Oklahoma', state: 'Oklahoma', stateWikiUrl: 'http://en.wikipedia.org/wiki/Oklahoma', stateAbbrev: 'OK', judgeTermLength_years: '6', numberJudges: '9' } ,
{name: 'Oklahoma Court of Criminal Appeals', courtWikiUrl: 'http://en.wikipedia.org/wiki/Oklahoma_Court_of_Criminal_Appeals', state: 'Oklahoma', stateWikiUrl: 'http://en.wikipedia.org/wiki/Oklahoma', stateAbbrev: 'OK', judgeTermLength_years: '6', numberJudges: '5' } ,
{name: 'Oregon Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Oregon_Supreme_Court', state: 'Oregon', stateWikiUrl: 'http://en.wikipedia.org/wiki/Oregon', stateAbbrev: 'OR', judgeTermLength_years: '6', numberJudges: '7' } ,
{name: 'Supreme Court of Pennsylvania', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Pennsylvania', state: 'Pennsylvania', stateWikiUrl: 'http://en.wikipedia.org/wiki/Pennsylvania', stateAbbrev: 'PA', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Supreme Court of Puerto Rico', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Puerto_Rico', state: 'Puerto Rico', stateWikiUrl: 'http://en.wikipedia.org/wiki/Puerto_Rico', stateAbbrev: 'PR', judgeTermLength_years: 'Mandatory retirement at age 70', numberJudges: '9' } ,
{name: 'Rhode Island Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Rhode_Island_Supreme_Court', state: 'Rhode Island', stateWikiUrl: 'http://en.wikipedia.org/wiki/Rhode_Island', stateAbbrev: 'RI', judgeTermLength_years: 'Life', numberJudges: '5' } ,
{name: 'South Carolina Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/South_Carolina_Supreme_Court', state: 'South Carolina', stateWikiUrl: 'http://en.wikipedia.org/wiki/South_Carolina', stateAbbrev: 'SC', judgeTermLength_years: '10', numberJudges: '5' } ,
{name: 'South Dakota Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/South_Dakota_Supreme_Court', state: 'South Dakota', stateWikiUrl: 'http://en.wikipedia.org/wiki/South_Dakota', stateAbbrev: 'SD', judgeTermLength_years: '8', numberJudges: '5' } ,
{name: 'Tennessee Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Tennessee_Supreme_Court', state: 'Tennessee', stateWikiUrl: 'http://en.wikipedia.org/wiki/Tennessee', stateAbbrev: 'TN', judgeTermLength_years: '8', numberJudges: '5' } ,
{name: 'Supreme Court of Texas', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Texas', state: 'Texas', stateWikiUrl: 'http://en.wikipedia.org/wiki/Texas', stateAbbrev: 'TX', judgeTermLength_years: '6', numberJudges: '9' } ,
{name: 'Texas Court of Criminal Appeals', courtWikiUrl: 'http://en.wikipedia.org/wiki/Texas_Court_of_Criminal_Appeals', state: 'Texas', stateWikiUrl: 'http://en.wikipedia.org/wiki/Texas', stateAbbrev: 'TX', judgeTermLength_years: '6', numberJudges: '9' } ,
{name: 'Utah Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Utah_Supreme_Court', state: 'Utah', stateWikiUrl: 'http://en.wikipedia.org/wiki/Utah', stateAbbrev: 'UT', judgeTermLength_years: '10', numberJudges: '5' } ,
{name: 'Vermont Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Vermont_Supreme_Court', state: 'Vermont', stateWikiUrl: 'http://en.wikipedia.org/wiki/Vermont', stateAbbrev: 'VT', judgeTermLength_years: '6', numberJudges: '5' } ,
{name: 'Supreme Court of Virginia', courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Virginia', state: 'Virginia', stateWikiUrl: 'http://en.wikipedia.org/wiki/Virginia', stateAbbrev: 'VA', judgeTermLength_years: '12', numberJudges: '7' } ,
{name: 'Washington Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Washington_Supreme_Court', state: 'Washington', stateWikiUrl: 'http://en.wikipedia.org/wiki/Washington_(state)', stateAbbrev: 'WA', judgeTermLength_years: '6', numberJudges: '9' } ,
{name: 'Supreme Court of Appeals of West Virginia',courtWikiUrl: 'http://en.wikipedia.org/wiki/Supreme_Court_of_Appeals_of_West_Virginia', state: 'West Virginia', stateWikiUrl: 'http://en.wikipedia.org/wiki/West_Virginia', stateAbbrev: 'WV', judgeTermLength_years: '12', numberJudges: '5' } ,
{name: 'Wisconsin Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Wisconsin_Supreme_Court', state: 'Wisconsin', stateWikiUrl: 'http://en.wikipedia.org/wiki/Wisconsin', stateAbbrev: 'WI', judgeTermLength_years: '10', numberJudges: '7' } ,
{name: 'Wyoming Supreme Court', courtWikiUrl: 'http://en.wikipedia.org/wiki/Wyoming_Supreme_Court', state: 'Wyoming', stateWikiUrl: 'http://en.wikipedia.org/wiki/Wyoming', stateAbbrev: 'WY', judgeTermLength_years: '8', numberJudges: '5' }
];

var getURLForCourtStructureImageURLForStateCourt = function(stateName) {
    if (isDefined(stateName) && stateName.trim().length > 0) {
        return "http://www.courtstatistics.org/~/media/Microsites/Images/CSP/State_Structure_Charts/" + stateName.toLowerCase() + ".ashx?w=715&h=965&as=1";
    }
    else {
        return "";
    }
};

//for the weird ones
var stateToStateAbbrevForStructure = {};
stateToStateAbbrevForStructure["alabama"] = "AL";
stateToStateAbbrevForStructure["District of Columbia".toLowerCase()]="DC";
//AK ok
//ar ok
//hi ok
//puerto rico ok
//wa ok
//or ok