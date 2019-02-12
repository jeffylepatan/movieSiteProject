window.onload = getmov;

function getmov(mov) {	
	document.getElementById("play").innerHTML = "";
	document.getElementById("play").style.display = "none";
	document.getElementById("loadr").style.display = "block"; /*initialize buffer*/
	var tfile = "";
	var store = "";
	var agree = "By clicking \"OK\" you confirm\r that you are over 18 years of age\r and that there are no minors watching with you.";
		
	if (mov == "g") {
		tfile = "./stx/movies.txt";
		store = "G";
	} else if (mov == "13") {
		tfile = "./stx/movies.txt";
		store = "PG13";		
	} else if (mov == "18") {
		var age = prompt("How old are you?");
		
		if (age >= 17) {
			var rr = confirm(agree);
			
			if (rr == true) {
				tfile = "./stx/movies.txt";
				store = "PG18";
			}
			
		} else {
			alert("Please contact admin.");
			tfile = "./stx/movies.txt";
			store = "PG13";		
		}
	} else if (mov == "as") {
		tfile = "./stx/movies.txt";
		store = "Asian";
	} else if (mov == "an") {
		tfile = "./stx/series.txt";
		store = "Anime";
	} else if (mov == "kd") {
		tfile = "./stx/series.txt";
		store = "KDrama";
	} else if (mov == "we") {
		tfile = "./stx/series.txt";
		store = "Western";
	} else {
		tfile = "./stx/movies.txt";
		store = "G";
	}
	
	var ins = document.getElementById("frmFile");
		ins.setAttribute("src", tfile);	
	document.getElementById("main").innerHTML = "";
	document.getElementById("list").innerHTML = "";
	setTimeout(function() { genlist(store); }, 3000);	
}

function genlist(store) {	
	var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
	
	while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
		var arrLines = strRawContents.split("\n");
			
			var cul = document.createElement("UL");
			var cmm = document.getElementById("main");
				
		for (var i = 0; i < arrLines.length; i++) {
			var curli = arrLines[i];
			var fnamm = curli.split("\\");
			var mm = fnamm[fnamm.length - 1];			
			var cm = fnamm[fnamm.length - 2];
			var mn = mm.split(".");
			var nn = "." + mn[mn.length - 1];
			
				var fname = mm.split(nn);
				
			if (cm == store) {	
				var imgpath = "./img/" + fname[0] + ".jpg";
				var movpath = "#";
			var carry = "sol('" + "./mov/" + cm + "/" + mm + "','" + fname[0] + "')";
				var movnm = fname[0];
				var eli = document.createElement("LI");
					var eimg = document.createElement("IMG");
						eimg.setAttribute("src", imgpath);
					var ea = document.createElement("A");
						ea.setAttribute("href", movpath);
						ea.setAttribute("target", "_self");
						ea.setAttribute("onclick", carry);
						ea.appendChild(eimg);
					var ep = document.createElement("P");
						tn = document.createTextNode(movnm);
						ep.appendChild(tn);
				eli.appendChild(ep);
				eli.appendChild(ea);
				cul.appendChild(eli);
				cmm.appendChild(cul);
			}
		}
		document.getElementById("loadr").style.display = "none";
	
}

/*Series Functions*/

function getser(mov) {	
	document.getElementById("play").innerHTML = "";
	document.getElementById("play").style.display = "none";
	document.getElementById("loadr").style.display = "block"; /*initialize buffer*/
	var tfile = "";
	var store = "";
		
	if (mov == "an") {
		tfile = "./stx/series.txt";
		store = "Anime";
	} else if (mov == "kd") {
		tfile = "./stx/series.txt";
		store = "KDrama";
	} else if (mov == "we") {
		tfile = "./stx/series.txt";
		store = "Western";
	} else {
		
	}
	
	var ins = document.getElementById("frmFile");
		ins.setAttribute("src", tfile);	
	document.getElementById("main").innerHTML = "";
	document.getElementById("list").innerHTML = "";
	setTimeout(function() { genser(store); }, 3000);	
}

function genser(store) {	
	var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
	
	while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
		var arrLines = strRawContents.split("\n");
			
			var cul = document.createElement("UL");
			var cmm = document.getElementById("main");
				
		for (var i = 0; i < arrLines.length; i++) {
			var curli = arrLines[i];
			var fnamm = curli.split("\\");
			var mm = fnamm[fnamm.length - 1];			
			var cm = fnamm[fnamm.length - 2];
			var mn = mm.split(".");
			var nn = "." + mn[mn.length - 1];
			
				var fname = mm.split(nn);
				
			if (cm == store) {	
				var imgpath = "./img/" + fname[0] + ".jpg";
				var movpath = "ser('" + fname[0] + "')";
				var movnm = fname[0];
				var eli = document.createElement("LI");
					eli.setAttribute("onclick", movpath);
					var eimg = document.createElement("IMG");
						eimg.setAttribute("src", imgpath);
					var ep = document.createElement("P");
						tn = document.createTextNode(movnm);
						ep.appendChild(tn);
				eli.appendChild(ep);
				eli.appendChild(eimg);
				cul.appendChild(eli);
				cmm.appendChild(cul);
			}
		}
		document.getElementById("loadr").style.display = "none";
}

/* Series Sub Category */

function ser(store) {	
	document.getElementById("main").innerHTML = "";
	document.getElementById("list").innerHTML = "";
	var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
	
	while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
		var arrLines = strRawContents.split("\n");
			
			var cul = document.createElement("UL");
			var cmm = document.getElementById("list");
				
		for (var i = 0; i < arrLines.length; i++) {
			var curli = arrLines[i];
			var fnamm = curli.split("\\");
			var mm = fnamm[fnamm.length - 1];			
			var cm = fnamm[fnamm.length - 2];
			var cc = fnamm[fnamm.length - 3];
			var mn = mm.split(".");
			var nn = "." + mn[mn.length - 1];

				var fname = mm.split(nn);
				
			if (cm == store) {
				var movpath = "#";
				var carry = "sul('" + "./mov/"+ cc + "/" + cm + "/" + mm + "','" + fname[0] + "')";
				var movnm = fname[0];
				var eli = document.createElement("LI");
					var ep = document.createElement("P");
						tn = document.createTextNode(movnm);
						ep.appendChild(tn);
					var ea = document.createElement("A");
						ea.setAttribute("href", movpath);
						ea.setAttribute("target", "_self");
						ea.setAttribute("onclick", carry);
						ea.appendChild(ep);
				eli.appendChild(ea);
				cul.appendChild(eli);
				cmm.appendChild(cul);
			}
		}
		document.getElementById("loadr").style.display = "none";	
}

/*Set Video Attributes*/

function sol(peps,titl) {
	document.getElementById("main").innerHTML = "";
	document.getElementById("list").innerHTML = "";
	document.getElementById("play").style.display = "block";
	
	var mplay = document.createElement("VIDEO");
		mplay.setAttribute("controls", "controls");
	var msrc = document.createElement("SOURCE");
		msrc.setAttribute("src", peps);
		msrc.setAttribute("type", "video/mp4");
		mplay.appendChild(msrc);
	var par = document.createElement("P");
		par.innerHTML = titl;
	document.getElementById("play").appendChild(par);
	document.getElementById("play").appendChild(mplay);
}

/*Set Series Attributes*/

function sul(peps,titl) {
	document.getElementById("main").innerHTML = "";
	document.getElementById("list").innerHTML = "";
	document.getElementById("play").style.display = "block";
	
	var mplay = document.createElement("VIDEO");
		mplay.setAttribute("controls", "controls");
	var msrc = document.createElement("SOURCE");
		msrc.setAttribute("src", peps);
		msrc.setAttribute("type", "video/mp4");
		mplay.appendChild(msrc);
	var par = document.createElement("P");
		par.innerHTML = titl;
	document.getElementById("play").appendChild(par);
	document.getElementById("play").appendChild(mplay);
}

/* Upper Control */

function upupper() {	
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}