// on start up set some values & init with the server
function init() {
    wave.setStateCallback(update);
    wave.setParticipantCallback(function(){});
    document.onkeyup= post;
}

// Updates the local state from the content in the browser
function post(){
    wave.getState().submitValue("content",document.getElementById("content").innerHTML);
}

// Upadates content in browser to match contents of local state
function update(){
	var el=document.getElementById('content');
	var savedSel = saveSelection(el);
	document.getElementById("content").innerHTML=''+wave.getState().get("content");
	restoreSelection(el, savedSel);
}

