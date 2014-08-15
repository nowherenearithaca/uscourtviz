/**
 * Created by bradflyon on 7/12/14.
 */

//The thing with circuit courts is that they are basically just for each county, with maybe some
// combined counties based on population
//
//So what's the difference with county courts?  anything?

// There are two broad types here:
//   * general jurisdiction
//   * limited jurisdiction

//The geographic jurisdiction of each court can be different, too: district/circuit, county, or statewide

//The NCSC database seems to be based on a survey they did

// There can be odd names for these courts

//Virginia might have some good data
//they have Circuits, but seems to be mostly in each county

//prefix for url is
//  http://www.courts.state.va.us

//http://www.courts.state.va.us/courts/home.html
//Circuit Courts...
//31 Circuits -
// the circuit court is the general jurisdiction trial court with authority to try all types of civil and criminal cases.
//http://www.courts.state.va.us/courts/circuit/Smyth/home.html

//*[@id="contenttext"]/form[1]/ul/li/select
//<select name="court" onchange="MM_jumpMenu('parent',this,0)">
    courts["va"]["circuit"].push({url:"/courts/circuit/accomack/home.html", name:"Accomack"});
    courts["va"]["circuit"].push({url:"/courts/circuit/albemarle/home.html", name:"Albemarle"});
    courts["va"]["circuit"].push({url:"/courts/circuit/alexandria/home.html", name:"Alexandria"});
    courts["va"]["circuit"].push({url:"/courts/circuit/alleghany/home.html", name:"Alleghany"});
    courts["va"]["circuit"].push({url:"/courts/circuit/amelia/home.html", name:"Amelia"});
    courts["va"]["circuit"].push({url:"/courts/circuit/amherst/home.html", name:"Amherst"});
    courts["va"]["circuit"].push({url:"/courts/circuit/appomattox/home.html", name:"Appomattox"});
    courts["va"]["circuit"].push({url:"/courts/circuit/arlington/home.html", name:"Arlington"});
    courts["va"]["circuit"].push({url:"/courts/circuit/augusta/home.html", name:"Augusta"});
    courts["va"]["circuit"].push({url:"/courts/circuit/bath/home.html", name:"Bath"});
    courts["va"]["circuit"].push({url:"/courts/circuit/bedford/home.html", name:"Bedford"});
    courts["va"]["circuit"].push({url:"/courts/circuit/bland/home.html", name:"Bland"});
    courts["va"]["circuit"].push({url:"/courts/circuit/botetourt/home.html", name:"Botetourt"});
    courts["va"]["circuit"].push({url:"/courts/circuit/bristol/home.html", name:"Bristol"});
    courts["va"]["circuit"].push({url:"/courts/circuit/brunswick/home.html", name:"Brunswick"});
    courts["va"]["circuit"].push({url:"/courts/circuit/buchanan/home.html", name:"Buchanan"});
    courts["va"]["circuit"].push({url:"/courts/circuit/buckingham/home.html", name:"Buckingham"});
    courts["va"]["circuit"].push({url:"/courts/circuit/buena_vista/home.html", name:"Buena Vista"});
    courts["va"]["circuit"].push({url:"/courts/circuit/campbell/home.html", name:"Campbell"});
    courts["va"]["circuit"].push({url:"/courts/circuit/caroline/home.html", name:"Caroline"});
    courts["va"]["circuit"].push({url:"/courts/circuit/carroll/home.html", name:"Carroll"});
    courts["va"]["circuit"].push({url:"/courts/circuit/charles_city/home.html", name:"Charles City"});
    courts["va"]["circuit"].push({url:"/courts/circuit/charlotte/home.html", name:"Charlotte"});
    courts["va"]["circuit"].push({url:"/courts/circuit/charlottesville/home.html", name:"Charlottesville"});
    courts["va"]["circuit"].push({url:"/courts/circuit/chesapeake/home.html", name:"Chesapeake"});
    courts["va"]["circuit"].push({url:"/courts/circuit/chesterfield/home.html", name:"Chesterfield"});
    courts["va"]["circuit"].push({url:"/courts/circuit/clarke/home.html", name:"Clarke"});
    courts["va"]["circuit"].push({url:"/courts/circuit/colonial_heights/home.html", name:"Colonial Heights"});
    courts["va"]["circuit"].push({url:"/courts/circuit/craig/home.html", name:"Craig"});
    courts["va"]["circuit"].push({url:"/courts/circuit/culpeper/home.html", name:"Culpeper"});
    courts["va"]["circuit"].push({url:"/courts/circuit/cumberland/home.html", name:"Cumberland"});
    courts["va"]["circuit"].push({url:"/courts/circuit/danville/home.html", name:"Danville"});
    courts["va"]["circuit"].push({url:"/courts/circuit/dickenson/home.html", name:"Dickenson"});
    courts["va"]["circuit"].push({url:"/courts/circuit/dinwiddie/home.html", name:"Dinwiddie"});
    courts["va"]["circuit"].push({url:"/courts/circuit/essex/home.html", name:"Essex"});
    courts["va"]["circuit"].push({url:"/courts/circuit/fairfax/home.html", name:"Fairfax"});
    courts["va"]["circuit"].push({url:"/courts/circuit/fauquier/home.html", name:"Fauquier"});
    courts["va"]["circuit"].push({url:"/courts/circuit/floyd/home.html", name:"Floyd"});
    courts["va"]["circuit"].push({url:"/courts/circuit/fluvanna/home.html", name:"Fluvanna"});
    courts["va"]["circuit"].push({url:"/courts/circuit/franklin/home.html", name:"Franklin"});
    courts["va"]["circuit"].push({url:"/courts/circuit/frederick/home.html", name:"Frederick"});
    courts["va"]["circuit"].push({url:"/courts/circuit/fredericksburg/home.html", name:"Fredericksburg"});
    courts["va"]["circuit"].push({url:"/courts/circuit/giles/home.html", name:"Giles"});
    courts["va"]["circuit"].push({url:"/courts/circuit/gloucester/home.html", name:"Gloucester"});
    courts["va"]["circuit"].push({url:"/courts/circuit/goochland/home.html", name:"Goochland"});
    courts["va"]["circuit"].push({url:"/courts/circuit/grayson/home.html", name:"Grayson"});
    courts["va"]["circuit"].push({url:"/courts/circuit/greene/home.html", name:"Greene"});
    courts["va"]["circuit"].push({url:"/courts/circuit/greensville/home.html", name:"Greensville"});
    courts["va"]["circuit"].push({url:"/courts/circuit/halifax/home.html", name:"Halifax"});
    courts["va"]["circuit"].push({url:"/courts/circuit/hampton/home.html", name:"Hampton"});
    courts["va"]["circuit"].push({url:"/courts/circuit/hanover/home.html", name:"Hanover"});
    courts["va"]["circuit"].push({url:"/courts/circuit/henrico/home.html", name:"Henrico"});
    courts["va"]["circuit"].push({url:"/courts/circuit/henry/home.html", name:"Henry"});
    courts["va"]["circuit"].push({url:"/courts/circuit/highland/home.html", name:"Highland"});
    courts["va"]["circuit"].push({url:"/courts/circuit/hopewell/home.html", name:"Hopewell"});
    courts["va"]["circuit"].push({url:"/courts/circuit/isle_of_wight/home.html", name:"Isle of Wight"});
    courts["va"]["circuit"].push({url:"/courts/circuit/James_City_County%7EWilliamsburg/home.html", name:"James City County/Williamsburg"});
    courts["va"]["circuit"].push({url:"/courts/circuit/king_george/home.html", name:"King George"});
    courts["va"]["circuit"].push({url:"/courts/circuit/king_william/home.html", name:"King William"});
    courts["va"]["circuit"].push({url:"/courts/circuit/king_and_queen/home.html", name:"King and Queen"});
    courts["va"]["circuit"].push({url:"/courts/circuit/lancaster/home.html", name:"Lancaster"});
    courts["va"]["circuit"].push({url:"/courts/circuit/lee/home.html", name:"Lee"});
    courts["va"]["circuit"].push({url:"/courts/circuit/loudoun/home.html", name:"Loudoun"});
    courts["va"]["circuit"].push({url:"/courts/circuit/louisa/home.html", name:"Louisa"});
    courts["va"]["circuit"].push({url:"/courts/circuit/lunenburg/home.html", name:"Lunenburg"});
    courts["va"]["circuit"].push({url:"/courts/circuit/lynchburg/home.html", name:"Lynchburg"});
    courts["va"]["circuit"].push({url:"/courts/circuit/madison/home.html", name:"Madison"});
    courts["va"]["circuit"].push({url:"/courts/circuit/martinsville/home.html", name:"Martinsville"});
    courts["va"]["circuit"].push({url:"/courts/circuit/mathews/home.html", name:"Mathews"});
    courts["va"]["circuit"].push({url:"/courts/circuit/mecklenburg/home.html", name:"Mecklenburg"});
    courts["va"]["circuit"].push({url:"/courts/circuit/middlesex/home.html", name:"Middlesex"});
    courts["va"]["circuit"].push({url:"/courts/circuit/montgomery/home.html", name:"Montgomery"});
    courts["va"]["circuit"].push({url:"/courts/circuit/nelson/home.html", name:"Nelson"});
    courts["va"]["circuit"].push({url:"/courts/circuit/new_kent/home.html", name:"New Kent"});
    courts["va"]["circuit"].push({url:"/courts/circuit/newport_news/home.html", name:"Newport News"});
    courts["va"]["circuit"].push({url:"/courts/circuit/norfolk/home.html", name:"Norfolk"});
    courts["va"]["circuit"].push({url:"/courts/circuit/northampton/home.html", name:"Northampton"});
    courts["va"]["circuit"].push({url:"/courts/circuit/northumberland/home.html", name:"Northumberland"});
    courts["va"]["circuit"].push({url:"/courts/circuit/nottoway/home.html", name:"Nottoway"});
    courts["va"]["circuit"].push({url:"/courts/circuit/orange/home.html", name:"Orange"});
    courts["va"]["circuit"].push({url:"/courts/circuit/page/home.html", name:"Page"});
    courts["va"]["circuit"].push({url:"/courts/circuit/patrick/home.html", name:"Patrick"});
    courts["va"]["circuit"].push({url:"/courts/circuit/petersburg/home.html", name:"Petersburg"});
    courts["va"]["circuit"].push({url:"/courts/circuit/pittsylvania/home.html", name:"Pittsylvania"});
    courts["va"]["circuit"].push({url:"/courts/circuit/portsmouth/home.html", name:"Portsmouth"});
    courts["va"]["circuit"].push({url:"/courts/circuit/powhatan/home.html", name:"Powhatan"});
    courts["va"]["circuit"].push({url:"/courts/circuit/prince_edward/home.html", name:"Prince Edward"});
    courts["va"]["circuit"].push({url:"/courts/circuit/prince_george/home.html", name:"Prince George"});
    courts["va"]["circuit"].push({url:"/courts/circuit/prince_william/home.html", name:"Prince William"});
    courts["va"]["circuit"].push({url:"/courts/circuit/pulaski/home.html", name:"Pulaski"});
    courts["va"]["circuit"].push({url:"/courts/circuit/radford/home.html", name:"Radford"});
    courts["va"]["circuit"].push({url:"/courts/circuit/rappahannock/home.html", name:"Rappahannock"});
    courts["va"]["circuit"].push({url:"/courts/circuit/richmond/home.html", name:"Richmond"});
    courts["va"]["circuit"].push({url:"/courts/circuit/richmond_county/home.html", name:"Richmond County"});
    courts["va"]["circuit"].push({url:"/courts/circuit/roanoke_city/home.html", name:"Roanoke City"});
    courts["va"]["circuit"].push({url:"/courts/circuit/roanoke_county/home.html", name:"Roanoke County"});
    courts["va"]["circuit"].push({url:"/courts/circuit/rockbridge/home.html", name:"Rockbridge"});
    courts["va"]["circuit"].push({url:"/courts/circuit/rockingham/home.html", name:"Rockingham"});
    courts["va"]["circuit"].push({url:"/courts/circuit/russell/home.html", name:"Russell"});
    courts["va"]["circuit"].push({url:"/courts/circuit/salem/home.html", name:"Salem"});
    courts["va"]["circuit"].push({url:"/courts/circuit/scott/home.html", name:"Scott"});
    courts["va"]["circuit"].push({url:"/courts/circuit/shenandoah/home.html", name:"Shenandoah"});
    courts["va"]["circuit"].push({url:"/courts/circuit/smyth/home.html", name:"Smyth"});
    courts["va"]["circuit"].push({url:"/courts/circuit/southampton/home.html", name:"Southampton"});
    courts["va"]["circuit"].push({url:"/courts/circuit/spotsylvania/home.html", name:"Spotsylvania"});
    courts["va"]["circuit"].push({url:"/courts/circuit/stafford/home.html", name:"Stafford"});
    courts["va"]["circuit"].push({url:"/courts/circuit/staunton/home.html", name:"Staunton"});
    courts["va"]["circuit"].push({url:"/courts/circuit/suffolk/home.html", name:"Suffolk"});
    courts["va"]["circuit"].push({url:"/courts/circuit/surry/home.html", name:"Surry"});
    courts["va"]["circuit"].push({url:"/courts/circuit/sussex/home.html", name:"Sussex"});
    courts["va"]["circuit"].push({url:"/courts/circuit/tazewell/home.html", name:"Tazewell"});
    courts["va"]["circuit"].push({actualurl:"http://www.vbgov.com/government/departments/courts/circuit-court-judges/Pages/default.aspx", url:"/courts/circuit/virginia_beach/home.html", name:"Virginia Beach"});
    courts["va"]["circuit"].push({url:"/courts/circuit/warren/home.html", name:"Warren"});
    courts["va"]["circuit"].push({url:"/courts/circuit/washington/home.html", name:"Washington"});
    courts["va"]["circuit"].push({url:"/courts/circuit/waynesboro/home.html", name:"Waynesboro"});
    courts["va"]["circuit"].push({url:"/courts/circuit/westmoreland/home.html", name:"Westmoreland"});
    courts["va"]["circuit"].push({url:"/courts/circuit/Williamsburg~James_City_County/home.html", name:"Williamsburg/James City County"});
    courts["va"]["circuit"].push({url:"/courts/circuit/winchester/home.html", name:"Winchester"});
    courts["va"]["circuit"].push({url:"/courts/circuit/wise/home.html", name:"Wise"});
    courts["va"]["circuit"].push({url:"/courts/circuit/wythe/home.html", name:"Wythe"});
    courts["va"]["circuit"].push({url:"/courts/circuit/york_county_poquoson/home.html", name:"York County/Poquoson"});



//"combined" means general and juvenile and domestic relations
//General District Courts...
// the general district court is a limited jurisdiction trial court that hears civil cases involving amounts in controversy up to $25,000, and conducts trials for traffic infractions and misdemeanor offenses
//32 districts
//http://www.courts.state.va.us/courts/gd/Smyth/home.html
//    <select name="court1" onchange="MM_jumpMenu('parent',this,0)">
    courts["va"]["general"].push({url:"/courts/gd/accomack/home.html", name:"Accomack"});
    courts["va"]["general"].push({url:"/courts/gd/albemarle/home.html", name:"Albemarle"});
courts["va"]["general"].push({url:"/courts/gd/alexandria/home.html", name:"Alexandria"});
courts["va"]["general"].push({url:"/courts/combined/alleghany/home.html", name:"Alleghany"});
courts["va"]["general"].push({url:"/courts/combined/amelia/home.html", name:"Amelia"});
courts["va"]["general"].push({url:"/courts/gd/amherst/home.html", name:"Amherst"});
courts["va"]["general"].push({url:"/courts/gd/appomattox/home.html", name:"Appomattox"});
courts["va"]["general"].push({url:"/courts/gd/arlington/home.html", name:"Arlington"});
courts["va"]["general"].push({url:"/courts/gd/augusta/home.html", name:"Augusta"});
courts["va"]["general"].push({url:"/courts/combined/bath/home.html", name:"Bath"});
courts["va"]["general"].push({url:"/courts/gd/bedford/home.html", name:"Bedford"});
courts["va"]["general"].push({url:"/courts/combined/bland/home.html", name:"Bland"});
courts["va"]["general"].push({url:"/courts/combined/botetourt/home.html", name:"Botetourt"});
courts["va"]["general"].push({url:"/courts/gd/bristol/home.html", name:"Bristol"});
courts["va"]["general"].push({url:"/courts/combined/brunswick/home.html", name:"Brunswick"});
courts["va"]["general"].push({url:"/courts/combined/buchanan/home.html", name:"Buchanan"});
courts["va"]["general"].push({url:"/courts/combined/buckingham/home.html", name:"Buckingham"});
courts["va"]["general"].push({url:"/courts/combined/buena_vista/home.html", name:"Buena Vista"});
courts["va"]["general"].push({url:"/courts/gd/campbell/home.html", name:"Campbell"});
courts["va"]["general"].push({url:"/courts/gd/caroline/home.html", name:"Caroline"});
courts["va"]["general"].push({url:"/courts/gd/carroll/home.html", name:"Carroll"});
courts["va"]["general"].push({url:"/courts/combined/charles_city/home.html", name:"Charles City"});
courts["va"]["general"].push({url:"/courts/gd/charlotte/home.html", name:"Charlotte"});
courts["va"]["general"].push({url:"/courts/gd/charlottesville/home.html", name:"Charlottesville"});
courts["va"]["general"].push({url:"/courts/gd/chesapeake/home.html", name:"Chesapeake"});
courts["va"]["general"].push({url:"/courts/gd/chesterfield/home.html", name:"Chesterfield"});
courts["va"]["general"].push({url:"/courts/gd/clarke/home.html", name:"Clarke"});
courts["va"]["general"].push({url:"/courts/combined/colonial_heights/home.html", name:"Colonial Heights"});
courts["va"]["general"].push({url:"/courts/combined/craig/home.html", name:"Craig"});
courts["va"]["general"].push({url:"/courts/gd/culpeper/home.html", name:"Culpeper"});
courts["va"]["general"].push({url:"/courts/combined/cumberland/home.html", name:"Cumberland"});
courts["va"]["general"].push({url:"/courts/gd/danville/home.html", name:"Danville"});
courts["va"]["general"].push({url:"/courts/combined/dickenson/home.html", name:"Dickenson"});
courts["va"]["general"].push({url:"/courts/combined/dinwiddie/home.html", name:"Dinwiddie"});
courts["va"]["general"].push({url:"/courts/combined/emporia/home.html", name:"Emporia"});
courts["va"]["general"].push({url:"/courts/combined/essex/home.html", name:"Essex"});
courts["va"]["general"].push({url:"/courts/gd/fairfax_city/home.html", name:"Fairfax City"});
courts["va"]["general"].push({url:"/courts/gd/fairfax_county/home.html", name:"Fairfax County"});
courts["va"]["general"].push({url:"/courts/combined/falls_church/home.html", name:"Falls Church"});
courts["va"]["general"].push({url:"/courts/gd/fauquier/home.html", name:"Fauquier"});
courts["va"]["general"].push({url:"/courts/combined/floyd/home.html", name:"Floyd"});
courts["va"]["general"].push({url:"/courts/combined/fluvanna/home.html", name:"Fluvanna"});
courts["va"]["general"].push({url:"/courts/combined/franklin_city/home.html", name:"Franklin City"});
courts["va"]["general"].push({url:"/courts/gd/franklin_county/home.html", name:"Franklin County"});
courts["va"]["general"].push({url:"/courts/gd/Frederick~Winchester/home.html", name:"Frederick/Winchester"});
courts["va"]["general"].push({url:"/courts/gd/fredericksburg/home.html", name:"Fredericksburg"});
courts["va"]["general"].push({url:"/courts/combined/galax/home.html", name:"Galax"});
courts["va"]["general"].push({url:"/courts/combined/giles/home.html", name:"Giles"});
courts["va"]["general"].push({url:"/courts/gd/gloucester/home.html", name:"Gloucester"});
courts["va"]["general"].push({url:"/courts/combined/goochland/home.html", name:"Goochland"});
courts["va"]["general"].push({url:"/courts/combined/grayson/home.html", name:"Grayson"});
courts["va"]["general"].push({url:"/courts/combined/greene/home.html", name:"Greene"});
courts["va"]["general"].push({url:"/courts/combined/greensville/home.html", name:"Greensville"});
courts["va"]["general"].push({url:"/courts/gd/halifax/home.html", name:"Halifax"});
courts["va"]["general"].push({url:"/courts/gd/hampton/home.html", name:"Hampton"});
courts["va"]["general"].push({url:"/courts/gd/hanover/home.html", name:"Hanover"});
courts["va"]["general"].push({url:"/courts/gd/Harrisonburg~Rockingham/home.html", name:"Harrisonburg/Rockingham"});
courts["va"]["general"].push({url:"/courts/gd/henrico/home.html", name:"Henrico"});
courts["va"]["general"].push({url:"/courts/gd/henry/home.html", name:"Henry"});
courts["va"]["general"].push({url:"/courts/combined/highland/home.html", name:"Highland"});
courts["va"]["general"].push({url:"/courts/combined/hopewell/home.html", name:"Hopewell"});
courts["va"]["general"].push({url:"/courts/gd/isle_of_wight/home.html", name:"Isle of Wight"});
courts["va"]["general"].push({url:"/courts/combined/king_george/home.html", name:"King George"});
courts["va"]["general"].push({url:"/courts/gd/king_william/home.html", name:"King William"});
courts["va"]["general"].push({url:"/courts/gd/king_and_queen/home.html", name:"King and Queen"});
courts["va"]["general"].push({url:"/courts/gd/lancaster/home.html", name:"Lancaster"});
courts["va"]["general"].push({url:"/courts/combined/lee/home.html", name:"Lee"});
courts["va"]["general"].push({url:"/courts/gd/Lexington~Rockbridge/home.html", name:"Lexington/Rockbridge"});
courts["va"]["general"].push({url:"/courts/gd/loudoun/home.html", name:"Loudoun"});
courts["va"]["general"].push({url:"/courts/gd/louisa/home.html", name:"Louisa"});
courts["va"]["general"].push({url:"/courts/combined/lunenburg/home.html", name:"Lunenburg"});
courts["va"]["general"].push({url:"/courts/gd/lynchburg/home.html", name:"Lynchburg"});
courts["va"]["general"].push({url:"/courts/combined/madison/home.html", name:"Madison"});
courts["va"]["general"].push({url:"/courts/gd/martinsville/home.html", name:"Martinsville"});
courts["va"]["general"].push({url:"/courts/gd/mathews/home.html", name:"Mathews"});
courts["va"]["general"].push({url:"/courts/gd/mecklenburg/home.html", name:"Mecklenburg"});
courts["va"]["general"].push({url:"/courts/gd/middlesex/home.html", name:"Middlesex"});
courts["va"]["general"].push({url:"/courts/gd/montgomery/home.html", name:"Montgomery"});
courts["va"]["general"].push({url:"/courts/gd/nelson/home.html", name:"Nelson"});
courts["va"]["general"].push({url:"/courts/gd/new_kent/home.html", name:"New Kent"});
courts["va"]["general"].push({url:"/courts/gd/Newport_News-Civil/home.html", name:"Newport News-Civil"});
courts["va"]["general"].push({url:"/courts/gd/Newport_News-Criminal/home.html", name:"Newport News-Criminal"});
courts["va"]["general"].push({url:"/courts/gd/Newport_News-Traffic/home.html", name:"Newport News-Traffic"});
courts["va"]["general"].push({url:"/courts/gd/norfolk/home.html", name:"Norfolk"});
courts["va"]["general"].push({url:"/courts/gd/northampton/home.html", name:"Northampton"});
courts["va"]["general"].push({url:"/courts/gd/northumberland/home.html", name:"Northumberland"});
courts["va"]["general"].push({url:"/courts/combined/nottoway/home.html", name:"Nottoway"});
courts["va"]["general"].push({url:"/courts/combined/orange/home.html", name:"Orange"});
courts["va"]["general"].push({url:"/courts/gd/page/home.html", name:"Page"});
courts["va"]["general"].push({url:"/courts/gd/patrick/home.html", name:"Patrick"});
courts["va"]["general"].push({url:"/courts/gd/petersburg/home.html", name:"Petersburg"});
courts["va"]["general"].push({url:"/courts/gd/pittsylvania/home.html", name:"Pittsylvania"});
courts["va"]["general"].push({url:"/courts/gd/portsmouth/home.html", name:"Portsmouth"});
courts["va"]["general"].push({url:"/courts/combined/powhatan/home.html", name:"Powhatan"});
courts["va"]["general"].push({url:"/courts/combined/prince_edward/home.html", name:"Prince Edward"});
courts["va"]["general"].push({url:"/courts/combined/prince_george/home.html", name:"Prince George"});
courts["va"]["general"].push({url:"/courts/gd/prince_william/home.html", name:"Prince William"});
courts["va"]["general"].push({url:"/courts/gd/pulaski/home.html", name:"Pulaski"});
courts["va"]["general"].push({url:"/courts/combined/radford/home.html", name:"Radford"});
courts["va"]["general"].push({url:"/courts/combined/rappahannock/home.html", name:"Rappahannock"});
courts["va"]["general"].push({url:"/courts/combined/richmond_county/home.html", name:"Richmond County"});
courts["va"]["general"].push({url:"/courts/gd/richmond_manchester/home.html", name:"Richmond Manchester"});
courts["va"]["general"].push({url:"/courts/gd/Richmond-Civil/home.html", name:"Richmond-Civil"});
courts["va"]["general"].push({url:"/courts/gd/Richmond-Criminal/home.html", name:"Richmond-Criminal"});
courts["va"]["general"].push({url:"/courts/gd/Richmond-Traffic/home.html", name:"Richmond-Traffic"});
courts["va"]["general"].push({url:"/courts/gd/roanoke_city/home.html", name:"Roanoke City"});
courts["va"]["general"].push({url:"/courts/gd/roanoke_county/home.html", name:"Roanoke County"});
courts["va"]["general"].push({url:"/courts/combined/russell/home.html", name:"Russell"});
courts["va"]["general"].push({url:"/courts/combined/salem/home.html", name:"Salem"});
courts["va"]["general"].push({url:"/courts/combined/scott/home.html", name:"Scott"});
courts["va"]["general"].push({url:"/courts/gd/shenandoah/home.html", name:"Shenandoah"});
courts["va"]["general"].push({url:"/courts/gd/smyth/home.html", name:"Smyth"});
courts["va"]["general"].push({url:"/courts/combined/southampton/home.html", name:"Southampton"});
courts["va"]["general"].push({url:"/courts/gd/spotsylvania/home.html", name:"Spotsylvania"});
courts["va"]["general"].push({url:"/courts/gd/stafford/home.html", name:"Stafford"});
courts["va"]["general"].push({url:"/courts/gd/staunton/home.html", name:"Staunton"});
courts["va"]["general"].push({url:"/courts/gd/suffolk/home.html", name:"Suffolk"});
courts["va"]["general"].push({url:"/courts/combined/surry/home.html", name:"Surry"});
courts["va"]["general"].push({url:"/courts/combined/sussex/home.html", name:"Sussex"});
courts["va"]["general"].push({url:"/courts/gd/tazewell/home.html", name:"Tazewell"});
courts["va"]["general"].push({actualurl:"http://www.vbgov.com/government/departments/courts/general-district-court/Pages/default.aspx", url:"/courts/gd/virginia_beach/home.html", name:"Virginia Beach"});
courts["va"]["general"].push({url:"/courts/gd/warren/home.html", name:"Warren"});
courts["va"]["general"].push({url:"/courts/gd/washington/home.html", name:"Washington"});
courts["va"]["general"].push({url:"/courts/gd/waynesboro/home.html", name:"Waynesboro"});
courts["va"]["general"].push({url:"/courts/gd/westmoreland/home.html", name:"Westmoreland"});
courts["va"]["general"].push({url:"/courts/gd/Williamsburg~James_City_County/home.html", name:"Williamsburg/James City County"});
courts["va"]["general"].push({url:"/courts/gd/Winchester~Frederick/home.html", name:"Winchester/Frederick"});
courts["va"]["general"].push({url:"/courts/gd/Wise~Norton/home.html", name:"Wise/Norton"});
courts["va"]["general"].push({url:"/courts/gd/wythe/home.html", name:"Wythe"});
courts["va"]["general"].push({url:"/courts/gd/york/home.html", name:"York"});


//Juvenile and Domestic Relations District Court
//32 districts
//the juvenile and domestic relations district court is a limited jurisdiction trial court that hears cases involving children and families.
//    <select name="court2" onchange="MM_jumpMenu('parent',this,0)">
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/accomack/home.html", name:"Accomack"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/albemarle/home.html", name:"Albemarle"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/alexandria/home.html", name:"Alexandria"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/alleghany/home.html", name:"Alleghany"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/amelia/home.html", name:"Amelia"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/amherst/home.html", name:"Amherst"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/appomattox/home.html", name:"Appomattox"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/arlington/home.html", name:"Arlington"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/augusta/home.html", name:"Augusta"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/bath/home.html", name:"Bath"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/bedford/home.html", name:"Bedford"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/bland/home.html", name:"Bland"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/botetourt/home.html", name:"Botetourt"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/bristol/home.html", name:"Bristol"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/brunswick/home.html", name:"Brunswick"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/buchanan/home.html", name:"Buchanan"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/buckingham/home.html", name:"Buckingham"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/buena_vista/home.html", name:"Buena Vista"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/campbell/home.html", name:"Campbell"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/caroline/home.html", name:"Caroline"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/carroll/home.html", name:"Carroll"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/charles_city/home.html", name:"Charles City"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/charlotte/home.html", name:"Charlotte"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/charlottesville/home.html", name:"Charlottesville"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/chesapeake/home.html", name:"Chesapeake"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/chesterfield/home.html", name:"Chesterfield"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/clarke/home.html", name:"Clarke"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/colonial_heights/home.html", name:"Colonial Heights"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/craig/home.html", name:"Craig"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/culpeper/home.html", name:"Culpeper"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/cumberland/home.html", name:"Cumberland"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/danville/home.html", name:"Danville"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/dickenson/home.html", name:"Dickenson"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/dinwiddie/home.html", name:"Dinwiddie"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/emporia/home.html", name:"Emporia"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/essex/home.html", name:"Essex"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/fairfax_county/home.html", name:"Fairfax County"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/falls_church/home.html", name:"Falls Church"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/fauquier/home.html", name:"Fauquier"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/floyd/home.html", name:"Floyd"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/fluvanna/home.html", name:"Fluvanna"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/franklin_city/home.html", name:"Franklin City"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/franklin_county/home.html", name:"Franklin County"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/Frederick~Winchester/home.html", name:"Frederick/Winchester"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/fredericksburg/home.html", name:"Fredericksburg"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/galax/home.html", name:"Galax"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/giles/home.html", name:"Giles"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/gloucester/home.html", name:"Gloucester"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/goochland/home.html", name:"Goochland"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/grayson/home.html", name:"Grayson"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/greene/home.html", name:"Greene"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/greensville/home.html", name:"Greensville"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/halifax/home.html", name:"Halifax"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/hampton/home.html", name:"Hampton"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/hanover/home.html", name:"Hanover"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/Harrisonburg~Rockingham/home.html", name:"Harrisonburg/Rockingham"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/henrico/home.html", name:"Henrico"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/henry/home.html", name:"Henry"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/highland/home.html", name:"Highland"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/hopewell/home.html", name:"Hopewell"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/isle_of_wight/home.html", name:"Isle of Wight"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/king_george/home.html", name:"King George"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/king_william/home.html", name:"King William"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/king_and_queen/home.html", name:"King and Queen"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/lancaster/home.html", name:"Lancaster"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/lee/home.html", name:"Lee"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/Lexington~Rockbridge/home.html", name:"Lexington/Rockbridge"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/loudoun/home.html", name:"Loudoun"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/louisa/home.html", name:"Louisa"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/lunenburg/home.html", name:"Lunenburg"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/lynchburg/home.html", name:"Lynchburg"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/madison/home.html", name:"Madison"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/martinsville/home.html", name:"Martinsville"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/mathews/home.html", name:"Mathews"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/mecklenburg/home.html", name:"Mecklenburg"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/middlesex/home.html", name:"Middlesex"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/montgomery/home.html", name:"Montgomery"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/nelson/home.html", name:"Nelson"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/new_kent/home.html", name:"New Kent"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/newport_news/home.html", name:"Newport News"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/norfolk/home.html", name:"Norfolk"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/northampton/home.html", name:"Northampton"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/northumberland/home.html", name:"Northumberland"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/nottoway/home.html", name:"Nottoway"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/orange/home.html", name:"Orange"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/page/home.html", name:"Page"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/patrick/home.html", name:"Patrick"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/petersburg/home.html", name:"Petersburg"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/pittsylvania/home.html", name:"Pittsylvania"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/portsmouth/home.html", name:"Portsmouth"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/powhatan/home.html", name:"Powhatan"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/prince_edward/home.html", name:"Prince Edward"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/prince_george/home.html", name:"Prince George"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/prince_william/home.html", name:"Prince William"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/pulaski/home.html", name:"Pulaski"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/radford/home.html", name:"Radford"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/rappahannock/home.html", name:"Rappahannock"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/richmond/home.html", name:"Richmond"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/richmond_county/home.html", name:"Richmond County"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/roanoke_city/home.html", name:"Roanoke City"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/roanoke_county/home.html", name:"Roanoke County"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/russell/home.html", name:"Russell"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/salem/home.html", name:"Salem"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/scott/home.html", name:"Scott"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/shenandoah/home.html", name:"Shenandoah"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/smyth/home.html", name:"Smyth"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/southampton/home.html", name:"Southampton"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/spotsylvania/home.html", name:"Spotsylvania"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/stafford/home.html", name:"Stafford"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/staunton/home.html", name:"Staunton"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/suffolk/home.html", name:"Suffolk"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/surry/home.html", name:"Surry"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/combined/sussex/home.html", name:"Sussex"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/tazewell/home.html", name:"Tazewell"});
        courts["va"]["juvenile-domesticrelations"].push({actualurl:"http://www.vbgov.com/government/departments/courts/juvenile-domestic-relations-court/Pages/default.aspx", url:"/courts/jdr/virginia_beach/home.html", name:"Virginia Beach"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/warren/home.html", name:"Warren"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/washington/home.html", name:"Washington"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/waynesboro/home.html", name:"Waynesboro"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/westmoreland/home.html", name:"Westmoreland"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/Williamsburg%7EJames_City_County/home.html", name:"Williamsburg/James City County"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/Winchester~Frederick/home.html", name:"Winchester/Frederick"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/wise/home.html", name:"Wise"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/wythe/home.html", name:"Wythe"});
        courts["va"]["juvenile-domesticrelations"].push({url:"/courts/jdr/york/home.html", name:"York"});
