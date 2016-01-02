
/*
*/
var cols = nohrcols;
var data = nohrdata;

var preferences = null;

function loadprefdata(str){
	var p = JSON.parse(str);
	preferences = p;
	return true;
}
function openprefloader(){
	$("#prefloader").removeClass("hidden");
	$("#loadbox").removeClass("hidden");
}

function openprefsaver(){
	var txt = exportprefs();
	$("#getprefdata").val(txt);
	$("#prefloader").removeClass("hidden");
	$("#exportbox").removeClass("hidden");

}

function closeprefbox(box){
	box.find(".jsonbox").val("");
	box.addClass("hidden");
	box.parent().addClass("hidden");
}

$("#loadprefs").click(openprefloader);
$("#saveprefs").click(openprefsaver);

$("#submitpref").click(function(){
	var txt = $("#prefdatahere").val();
	var success = loadprefdata(txt);
	if(success) {
		loadprefs();
		closeprefbox($(this).closest(".showbox"));
	}
})

$(".closebtn").click(function(){
	closeprefbox($(this).closest(".showbox"));
})