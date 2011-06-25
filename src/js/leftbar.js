
function enclose(tag) {
	var sel, range;
	sel = window.getSelection();
	html="<"+tag+">"+sel+"</"+tag+">";
	range = sel.getRangeAt(0);
	range.deleteContents();
	range.insertNode(range.createContextualFragment(html));
}

function leftbarInit() {
	document.getElementById("leftbar").innerHTML ='<button onclick="enclose(\'b\')">B</button>'
}

function rightbarInit() {
	document.getElementById("rightbar").innerHTML ='<button onclick="enclose(\'span\')">Span</button>'
}

function barInit() {
	leftbarInit();
	rightbarInit();
}
