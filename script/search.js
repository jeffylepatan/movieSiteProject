function searchPage() {
    var input, filter, div1, mBoxs, mNam, i, txtValue;
		input = document.getElementById("usrInput"); 
		filter = input.value.toUpperCase(); /*change user input to uppercase*/
		div1 = document.getElementById("movLst");
		mBoxs = div1.getElementsByClassName("movbox");
		
    for (i = 0; i < mBoxs.length; i++) {
        mNam = mBoxs[i].getElementsByClassName("movname")[0];
        txtValue = mNam.textContent || mNam.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            mBoxs[i].style.display = "";
        } else {
            mBoxs[i].style.display = "none";
        }
    }
}