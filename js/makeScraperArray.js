

var scraperNames = [];
//this created by running this script in the juriscraper/opinions/united_states directory:
// find ./ | grep py | grep -v pyc | grep -v init | awk '{print "scraperNames.push(\"" $0 "\"\);" }' > foo.js
//and put the foo.js here


scraperNames.push(".//administrative_agency/asbca.py");
scraperNames.push(".//administrative_agency/bva.py");
scraperNames.push(".//administrative_agency/mspb_p.py");
scraperNames.push(".//administrative_agency/mspb_u.py");
scraperNames.push(".//federal_appellate/ca1.py");
scraperNames.push(".//federal_appellate/ca10.py");
scraperNames.push(".//federal_appellate/ca11_p.py");
scraperNames.push(".//federal_appellate/ca11_u.py");
scraperNames.push(".//federal_appellate/ca2_p.py");
scraperNames.push(".//federal_appellate/ca2_u.py");
scraperNames.push(".//federal_appellate/ca3_p.py");
scraperNames.push(".//federal_appellate/ca3_u.py");
scraperNames.push(".//federal_appellate/ca4.py");
scraperNames.push(".//federal_appellate/ca5.py");
scraperNames.push(".//federal_appellate/ca6.py");
scraperNames.push(".//federal_appellate/ca7.py");
scraperNames.push(".//federal_appellate/ca8.py");
scraperNames.push(".//federal_appellate/ca9_p.py");
scraperNames.push(".//federal_appellate/ca9_u.py");
scraperNames.push(".//federal_appellate/cadc.py");
scraperNames.push(".//federal_appellate/cafc.py");
scraperNames.push(".//federal_appellate/scotus_chambers.py");
scraperNames.push(".//federal_appellate/scotus_relating.py");
scraperNames.push(".//federal_appellate/scotus_slip.py");
scraperNames.push(".//federal_bankruptcy/bap10.py");
scraperNames.push(".//federal_bankruptcy/bap9.py");
scraperNames.push(".//federal_district/dcd.py");
scraperNames.push(".//federal_special/afcca.py");
scraperNames.push(".//federal_special/armfor.py");
scraperNames.push(".//federal_special/cavc.py");
scraperNames.push(".//federal_special/cit.py");
scraperNames.push(".//federal_special/nmcca.py");
scraperNames.push(".//federal_special/tax.py");
scraperNames.push(".//federal_special/uscfc.py");
scraperNames.push(".//federal_special/uscfc_u.py");
scraperNames.push(".//federal_special/uscfc_vaccine.py");
scraperNames.push(".//federal_special/uscfc_vaccine_u.py");
scraperNames.push(".//state/ala.py");
scraperNames.push(".//state/alaska.py");
scraperNames.push(".//state/alaskactapp.py");
scraperNames.push(".//state/ariz.py");
scraperNames.push(".//state/arizctapp_div_1.py");
scraperNames.push(".//state/arizctapp_div_2.py");
scraperNames.push(".//state/ark.py");
scraperNames.push(".//state/arkctapp.py");
scraperNames.push(".//state/cal.py");
scraperNames.push(".//state/calctapp_1st.py");
scraperNames.push(".//state/calctapp_2nd.py");
scraperNames.push(".//state/calctapp_3rd.py");
scraperNames.push(".//state/calctapp_4th_div1.py");
scraperNames.push(".//state/calctapp_4th_div2.py");
scraperNames.push(".//state/calctapp_4th_div3.py");
scraperNames.push(".//state/calctapp_5th.py");
scraperNames.push(".//state/calctapp_6th.py");
scraperNames.push(".//state/calctapp_app_div.py");
scraperNames.push(".//state/calctapp_u.py");
scraperNames.push(".//state/colo.py");
scraperNames.push(".//state/coloctapp.py");
scraperNames.push(".//state/conn.py");
scraperNames.push(".//state/connappct.py");
scraperNames.push(".//state/dc.py");
scraperNames.push(".//state/de.py");
scraperNames.push(".//state/delaware.py");
scraperNames.push(".//state/delch.py");
scraperNames.push(".//state/delctcompl.py");
scraperNames.push(".//state/delsuperct.py");
scraperNames.push(".//state/fla.py");
scraperNames.push(".//state/fladistctapp_1_per_curiam.py");
scraperNames.push(".//state/fladistctapp_1_written.py");
scraperNames.push(".//state/fladistctapp_2.py");
scraperNames.push(".//state/fladistctapp_3.py");
scraperNames.push(".//state/fladistctapp_4.py");
scraperNames.push(".//state/fladistctapp_5.py");
scraperNames.push(".//state/ga.py");
scraperNames.push(".//state/gactapp.py");
scraperNames.push(".//state/haw.py");
scraperNames.push(".//state/haw_beginningofyear.py");
scraperNames.push(".//state/hawapp.py");
scraperNames.push(".//state/hawapp_beginningofyear.py");
scraperNames.push(".//state/idaho_civil.py");
scraperNames.push(".//state/idaho_criminal.py");
scraperNames.push(".//state/idahoctapp_civil.py");
scraperNames.push(".//state/idahoctapp_criminal.py");
scraperNames.push(".//state/idahoctapp_u.py");
scraperNames.push(".//state/ill.py");
scraperNames.push(".//state/illappct.py");
scraperNames.push(".//state/ind.py");
scraperNames.push(".//state/indctapp.py");
scraperNames.push(".//state/indtc.py");
scraperNames.push(".//state/iowa.py");
scraperNames.push(".//state/iowactapp.py");
scraperNames.push(".//state/kan.py");
scraperNames.push(".//state/kanctapp.py");
scraperNames.push(".//state/ky.py");
scraperNames.push(".//state/la.py");
scraperNames.push(".//state/mass.py");
scraperNames.push(".//state/massappct.py");
scraperNames.push(".//state/md.py");
scraperNames.push(".//state/mdctspecapp.py");
scraperNames.push(".//state/me.py");
scraperNames.push(".//state/mich.py");
scraperNames.push(".//state/minn.py");
scraperNames.push(".//state/minnctapp_p.py");
scraperNames.push(".//state/minnctapp_u.py");
scraperNames.push(".//state/miss.py");
scraperNames.push(".//state/miss_beginningofyear.py");
scraperNames.push(".//state/mo.py");
scraperNames.push(".//state/moctapp_eastern.py");
scraperNames.push(".//state/moctapp_southern.py");
scraperNames.push(".//state/moctapp_western.py");
scraperNames.push(".//state/mont.py");
scraperNames.push(".//state/nc.py");
scraperNames.push(".//state/ncctapp.py");
scraperNames.push(".//state/nd.py");
scraperNames.push(".//state/ndctapp.py");
scraperNames.push(".//state/neb.py");
scraperNames.push(".//state/nebctapp.py");
scraperNames.push(".//state/nev_p.py");
scraperNames.push(".//state/nev_u.py");
scraperNames.push(".//state/nh.py");
scraperNames.push(".//state/nj.py");
scraperNames.push(".//state/njsuperctappdiv.py");
scraperNames.push(".//state/nm_p.py");
scraperNames.push(".//state/nm_slip.py");
scraperNames.push(".//state/nm_u.py");
scraperNames.push(".//state/nmctapp_p.py");
scraperNames.push(".//state/nmctapp_slip.py");
scraperNames.push(".//state/nmctapp_u.py");
scraperNames.push(".//state/ny.py");
scraperNames.push(".//state/nyappdiv_1st.py");
scraperNames.push(".//state/nyappdiv_2nd.py");
scraperNames.push(".//state/nyappdiv_2nd_example.py");
scraperNames.push(".//state/nyappdiv_3rd.py");
scraperNames.push(".//state/nyappdiv_4th.py");
scraperNames.push(".//state/ohio.py");
scraperNames.push(".//state/ohioctapp_1.py");
scraperNames.push(".//state/ohioctapp_10.py");
scraperNames.push(".//state/ohioctapp_11.py");
scraperNames.push(".//state/ohioctapp_12.py");
scraperNames.push(".//state/ohioctapp_2.py");
scraperNames.push(".//state/ohioctapp_3.py");
scraperNames.push(".//state/ohioctapp_4.py");
scraperNames.push(".//state/ohioctapp_5.py");
scraperNames.push(".//state/ohioctapp_6.py");
scraperNames.push(".//state/ohioctapp_7.py");
scraperNames.push(".//state/ohioctapp_8.py");
scraperNames.push(".//state/ohioctapp_9.py");
scraperNames.push(".//state/ohioctcl.py");
scraperNames.push(".//state/okla.py");
scraperNames.push(".//state/oklaag.py");
scraperNames.push(".//state/oklacivapp.py");
scraperNames.push(".//state/oklacrimapp.py");
scraperNames.push(".//state/or.py");
scraperNames.push(".//state/pa.py");
scraperNames.push(".//state/pacommwct.py");
scraperNames.push(".//state/pasuperct.py");
scraperNames.push(".//state/ri_p.py");
scraperNames.push(".//state/ri_u.py");
scraperNames.push(".//state/sc.py");
scraperNames.push(".//state/sd.py");
scraperNames.push(".//state/tenn.py");
scraperNames.push(".//state/tenncrimapp.py");
scraperNames.push(".//state/tennctapp.py");
scraperNames.push(".//state/tex.py");
scraperNames.push(".//state/texapp_1.py");
scraperNames.push(".//state/texapp_10.py");
scraperNames.push(".//state/texapp_11.py");
scraperNames.push(".//state/texapp_12.py");
scraperNames.push(".//state/texapp_13.py");
scraperNames.push(".//state/texapp_14.py");
scraperNames.push(".//state/texapp_2.py");
scraperNames.push(".//state/texapp_3.py");
scraperNames.push(".//state/texapp_4.py");
scraperNames.push(".//state/texapp_5.py");
scraperNames.push(".//state/texapp_6.py");
scraperNames.push(".//state/texapp_7.py");
scraperNames.push(".//state/texapp_8.py");
scraperNames.push(".//state/texapp_9.py");
scraperNames.push(".//state/utah.py");
scraperNames.push(".//state/va.py");
scraperNames.push(".//state/vactapp_p.py");
scraperNames.push(".//state/vactapp_u.py");
scraperNames.push(".//state/vt.py");
scraperNames.push(".//state/wash.py");
scraperNames.push(".//state/washctapp_p.py");
scraperNames.push(".//state/washctapp_u.py");
scraperNames.push(".//state/wis.py");
scraperNames.push(".//state/wva.py");
scraperNames.push(".//state/wyo.py");
scraperNames.push(".//territories/as.py");
scraperNames.push(".//territories/guam.py");
scraperNames.push(".//territories/mp.py");
scraperNames.push(".//territories/pr.py");
scraperNames.push(".//territories/vi.py");


var hasScraperByCourtListenerCourtName = {};

var numberHasScrapers = 0;
scraperNames.forEach(function(scraperName) {

    var pieces = scraperName.split("/");

    var lastPiece = pieces[pieces.length-1];

    var courtName = lastPiece.split(".")[0];
    //u=unpublished, p=published, other things... doesn't seem to ever have an underscore in the name
    courtName = courtName.split("_")[0];

    console.log("Has scraper: " + courtName);
    if (isUndefined(hasScraperByCourtListenerCourtName[courtName])) {
        numberHasScrapers++;
    }

    hasScraperByCourtListenerCourtName[courtName] = 1;


});

console.log("numberHasScrapers: " + numberHasScrapers);
