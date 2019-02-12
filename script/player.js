window.onload = playMovie;

function playMovie() {
	var mStore = document.cookie;
	var mData = mStore.split("--");
	var mTitle = mData[0];
	var mType = mData[1];
	var mTyp2 = mData[2];

		if (mTyp2 == "featured"){
			var fPath = mData[0];
			var fTitle = mData[1];
			var mFilen = "./mov/" + fPath + "/" + fTitle + ".mp4";
				mTitle = fTitle;
		} else if (mType == "ratedg") {
			var mFilen = "./mov/G/" + mTitle + ".mp4"; 
		} else if (mType == "pg13") {
			var mFilen = "./mov/PG13/" + mTitle + ".mp4"; 
		} else if (mType == "pg18") {
			var mFilen = "./mov/PG18/" + mTitle + ".mp4";
		} else if (mType == "asian") {
			var mFilen = "./mov/Asian/" + mTitle + ".mp4";
		} else if (mType == "asians") {
			var mFilen = "./mov/KDrama/" + mTitle + "/" + mTitle + ".mp4";
		}
			var mplay = document.createElement("VIDEO");
				mplay.setAttribute("width", "880");
				mplay.setAttribute("height", "460");
				mplay.setAttribute("controls", "controls");
			var msrc = document.createElement("SOURCE");
				msrc.setAttribute("src", mFilen);
				msrc.setAttribute("type", "video/mp4");
				mplay.appendChild(msrc);
			var par = document.createElement("P");
				par.innerHTML = mTitle;
			document.getElementById("play").appendChild(par);
			document.getElementById("play").appendChild(mplay);
				
}
