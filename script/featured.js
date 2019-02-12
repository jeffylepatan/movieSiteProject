window.onload = getFeatured;

/*collect list from text file*/
function getFeatured() {
	var tfile = "./txt/featured.txt";
	var rFile = "./txt/movies.txt";
	
	var ins = document.getElementById("frmFile");
		ins.setAttribute("src", tfile);	
	
	var inr = document.getElementById("forRnd");
		inr.setAttribute("src", rFile);
		
	setTimeout(function() { generateList(); }, 1000);
}
/*generate list on webpage*/
function generateList() {
	var oFrame = document.getElementById("frmFile");
	var o2Rnd = document.getElementById("forRnd");
	var rawContent = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
	var rndContent = o2Rnd.contentWindow.document.body.childNodes[0].innerHTML;
	
	var lst = document.getElementById("carouselExampleControls");
	var cInner = document.createElement("DIV");
		cInner.setAttribute("class", "carousel-inner w-50");
		cInner.setAttribute("style", "cursor: pointer");
	var cAct = "carousel-item active";
	
	while (rawContent.indexOf("\r") >= 0)
        rawContent = rawContent.replace("\r", "");
		var arrLines = rawContent.split("\n");
	
		for (var i = 0; i < arrLines.length; i++) {
			var lin0 = arrLines[i];
			var lin1 = lin0.split("\\");
			var lin2 = lin1[lin1.length - 1].split(".m");
			var lin3 = lin1[lin1.length - 2]
			var mNam = lin2[0];
						
			var imgPath = "./img/" + mNam + ".jpg";
									
			if (mNam != "") {
					var mBox = document.createElement("DIV");
						mBox.setAttribute("class", cAct);					
						mBox.setAttribute("onclick", "storeData(" + '"' + lin3 + '--' + mNam + '"' + ")");
						var iPic = document.createElement("IMG");
							iPic.setAttribute("class", "d-block w-100");
							iPic.setAttribute("height", "600px");
							iPic.setAttribute("src", imgPath);
							iPic.setAttribute("alt", mNam);
							
					mBox.appendChild(iPic);
					cInner.appendChild(mBox);
					lst.appendChild(cInner);
					cAct = "carousel-item";
			}
		}
	
	while (rndContent.indexOf("\r") >=0)
		rndContent = rndContent.replace("\r", "");
		var rndLines = rndContent.split("\n");
		var rr = [];
						
		for (var vv = 0; vv < 6; vv++) {
			l1 = Math.floor(Math.random() * rndLines.length);
			var rrl = rndLines[l1].split("\\");
			var rln2 = rrl[rrl.length - 1].split(".m");
			var rln3 = rrl[rrl.length - 2];
			var rNam = rln2[0];
			var rImg = "./img/" + rNam + ".jpg";
			var lst = document.getElementById("rndFeat");

			if (rr.indexOf(rNam) > 0) {
				rNam = "";
			}
			
			if (rNam != "" && rln3 != "PG18" && rln2.length > 1) {
				var mBox = document.createElement("DIV");
					mBox.setAttribute("class", "movbox");
					mBox.setAttribute("onclick", "storeData2(" + "'" + rln3 + "--" + rNam + "'" + ")");
					var mPic = document.createElement("DIV");
						mPic.setAttribute("class", "movpic");
						var iPic = document.createElement("IMG");
							iPic.setAttribute("class", "imgPic");
							iPic.setAttribute("src", rImg);
						mPic.appendChild(iPic);
					var mLbl = document.createElement("DIV");
						mLbl.setAttribute("class", "movname");
						mLbl.innerHTML = rNam;
						
				mBox.appendChild(mPic);
				mBox.appendChild(mLbl);
				lst.appendChild(mBox);
				rr.push(rNam);
			} else {
				vv--;
			}
		}
}

function storeData(mTitle) {
	document.cookie = mTitle + "--featured";
	PopupCenter('player.html','xtf','900','500');
	/*window.open("player.html","_blank","width=800,height=600");*/
}

function storeData2(mTitle) {
	var wit = mTitle.split("--");
	var lex = "--pg13";
	if (wit[0] == "G") {
		lex = "--ratedg";
	} 
	if (wit[0] == "Asian") {
		lex = "--asian";
	}
	document.cookie = wit[1] + lex;
	PopupCenter('player.html','xtf','900','500');
	/*window.open("player.html","_blank","width=800,height=600");*/
}

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var systemZoom = width / window.screen.availWidth;
	var left = (width - w) / 2 / systemZoom + dualScreenLeft
	var top = (height - h) / 2 / systemZoom + dualScreenTop
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) newWindow.focus();
}