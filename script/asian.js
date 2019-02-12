window.onload = getFeatured;

/*collect list from text file*/
function getFeatured() {
	var tfile = "./txt/movies.txt";
	var ins = document.getElementById("frmFile");
		ins.setAttribute("src", tfile);	
	setTimeout(function() { generateList(); }, 1000);
}
/*generate list on webpage*/
function generateList() {
	var oFrame = document.getElementById("frmFile");
	var rawContent = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
	while (rawContent.indexOf("\r") >= 0)
        rawContent = rawContent.replace("\r", "");
		var arrLines = rawContent.split("\n");
	
		for (var i = 0; i < arrLines.length; i++) {
			var lin0 = arrLines[i];
			var lin1 = lin0.split("\\");
			var lin2 = lin1[lin1.length - 1].split(".m");
			var lin3 = lin1[lin1.length - 2];
			var mNam = lin2[0];
			
			var imgPath = "./img/" + mNam + ".jpg";
			var lst = document.getElementById("movLst");
			
			if (lin3 == "Asian") {
				if (mNam != "") {
						var mBox = document.createElement("DIV");
							mBox.setAttribute("class", "movbox");
							mBox.setAttribute("onclick", "storeData(" + "'" + mNam + "'" + ")");
							var mPic = document.createElement("DIV");
								mPic.setAttribute("class", "movpic");
								var iPic = document.createElement("IMG");
									iPic.setAttribute("class", "imgPic");
									iPic.setAttribute("src", imgPath);
								mPic.appendChild(iPic);
							var mLbl = document.createElement("DIV");
								mLbl.setAttribute("class", "movname");
								mLbl.innerHTML = mNam;
								
						mBox.appendChild(mPic);
						mBox.appendChild(mLbl);
						lst.appendChild(mBox);
				}
			}
		}
	
}

function storeData(mTitle) {
	document.cookie = mTitle + "--asian";
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