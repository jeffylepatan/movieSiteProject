window.onload = playMovie;

function playMovie() {
	var mStore = document.cookie;
	var mDat1 = "mData1=";
	var mDat2 = "mData2=";
	var cs = document.cookie.split(";");
	
	for (var ii = 0; ii < cs.length; ii++) {
		var cl = cs[ii];
		while (cl.charAt(0) == " ") {
			cl = cl.substring(1);
		}
		
		if (cl.indexOf(mDat1) == 0) {
			var ddDat1 = cl.substring(mDat1.length, cl.length);
		} else if (cl.indexOf(mDat2) == 0) {
			var sData = cl.substring(mDat2.length, cl.length);
		}
	}
	
	var mData = sData.split("--");
	var sTitle = mData[0];
	var mTitle = mData[1];
	var mType = mData[2];
	var ddDat = ddDat1.split("-i-");

		if (mType == "asians"){
			var mFilen = "./mov/KDrama/" + sTitle + "/" + mTitle + ".mp4";
		} else if (mType == "western") {
			var mFilen = "./mov/Western/" + sTitle + "/" + mTitle + ".mp4";
		} else if (mType == "anime") {
			var mFilen = "./mov/Anime/" + sTitle + "/" + mTitle + ".mp4";
		} 
			var mplay = document.createElement("VIDEO");
				mplay.setAttribute("controls", "controls");
			var msrc = document.createElement("SOURCE");
				msrc.setAttribute("id", "vid");
				msrc.setAttribute("src", mFilen);
				msrc.setAttribute("type", "video/mp4");
				mplay.appendChild(msrc);
			var ddDiv = document.createElement("DIV");
				ddDiv.setAttribute("class", "dropdown");
				var epLbl = document.createElement("LABEL");
					epLbl.innerHTML = sTitle + " Episodes : ";
				var sel = document.createElement("button");
					sel.setAttribute("class", "btn btn-secondary dropdown-toggle");
					sel.setAttribute("type", "button");
					sel.setAttribute("id", "dropdownMenu2");
					sel.setAttribute("data-toggle", "dropdown");
					sel.setAttribute("aria-haspopup", "true");
					sel.setAttribute("aria-expanded", "false");
					sel.innerHTML = mTitle;
				var ddmen = document.createElement("DIV");
					ddmen.setAttribute("class", "dropdown-menu sp2");
					ddmen.setAttribute("aria-labelledby", "dropdownMenu2");
					
					for (var i = 1; i < ddDat.length; i++) {
						var selOp = document.createElement("button");
							selOp.setAttribute("class", "dropdown-item");
							selOp.setAttribute("type", "button");
							selOp.setAttribute("onclick", "changeVid(" + "'" + sTitle + "--" + ddDat[i] + "--" + mType + "'" + ")");
							selOp.innerHTML = ddDat[i];
							
							if (ddDat[i] == mTitle) {
								sel.innerHTML = ddDat[i];
							}
						ddmen.appendChild(selOp);
					}
				
				ddDiv.appendChild(epLbl);
				ddDiv.appendChild(sel);
				ddDiv.appendChild(ddmen);
			document.getElementById("play").appendChild(ddDiv);	
			document.getElementById("play").appendChild(mplay);
				
}

function changeVid(sPath) {
	document.cookie = "mData2" + "=" + sPath;
	window.open("splayer.html","_self");
}