// Ad contents or bootstrap
  var html = "<!-- \nTHIS IS EMBEDDED AS scripted content .\nSource here is provided as a mechanism to make the ad more readable.\nActual source is translated into Javascript string and placed in \"pushdownAdBootstrap.js\" file.\n-->\n<style>\n#collapsedAd{\n display: none;\n cursor: pointer;\n width:970px;\n height: 90px;\n}\n\n\n#expandedAd{\n display: none;\n cursor: pointer;\n width:970px;\n height: 415px;\n}\n\n#adTeaser{\n  height : 70px;\n font-weight:bold;\n font-size:0.7em;\n}\n\n#adButton{\n  float : right;\n color: #888;\n font-weight:bold;\n font-size:0.8em;\n font-family: Verdana;\n text-align: right;\n cursor: pointer;\n text-decoration: underline;\n}\n\n\n#adLogo{\n max-width: 239;\n  width: 239;\n  height : 68px;\n}\n\n#primaryApp{\n  float : left;\n  width : 543px;\n  height : 307px;\n}\n\n#secondaryApp{\n  float : right;\n  width : 367px;\n  height : 307px;\n}\n\n.mockContent{\n  position : relative;\n  background-color : #A6240F;\n  padding : 10px;\n font-family: Verdana;\n}\n\n.mockContent > div, .mockContent > h1, .mockContent > p {\n}\n</style>\n\n<scr"+"ipt>\nfunction preCollapse(){\n collapseAd();\n}\n\nwindow.adExpandedDim = {l:0, r:970, t:0, b:415, h:415, w:970, push:true};\nwindow.adCollapsedDim = {h:90,w:970};\n</scr"+"ipt>\n\n<div id=\"collapsedAd\" onclick=\"expandAd()\" style=\"display: none;\">\n <!-- Pushdown Teaser -->\n <div id=\"adTeaser\" class=\"mockContent\">\n   <h1>Teaser</h1>\n  <span id=\"adButton\">Expand\n   <img src=\"https://s3-us-west-2.amazonaws.com/safeframe/examples/IAB_RisingStars/AdFiles/downarrow.png\">\n  </span>\n </div>\n</div>\n\n<div id=\"expandedAd\" onclick=\"collapseAd()\" style=\"display: block;\">\n <!-- Expanded View -->\n <!-- Divs\n <div id=\"adLogo\" class=\"mockContent\" style=\"max-width: 239px;\">\n  Logo\n </div>\n\n <div>\n  <div id=\"primaryApp\" class=\"mockContent\">\n  Primary App\n  </div>\n\n  <div id=\"secondaryApp\" class=\"mockContent\">\n  Secondary App\n  </div>\n </div>-->\n <img src=\"https://s3-us-west-2.amazonaws.com/safeframe/examples/IAB_RisingStars/AdFiles/pushdown_expanded_ad.png\">\n</div>\n\n<scr"+"ipt src=\"https://s3-us-west-2.amazonaws.com/safeframe/examples/IAB_RisingStars/AdFiles/adScriptBehavior.js\"></scr"+"ipt>\n"

  document.write(html);
