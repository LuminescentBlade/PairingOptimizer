
/*
*/
var cols = null;
var data = null;
var rows = null;

var preferences = null;

var char1_prefs = [];
var char2_prefs = [];

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

function openinstr(){
	$("#prefloader").removeClass("hidden");
	$("#helpbox").removeClass("hidden");

}

function closeprefbox(box){
	box.find(".jsonbox").val("");
	box.addClass("hidden");
	box.parent().addClass("hidden");
}

$("#loadprefs").click(openprefloader);
$("#saveprefs").click(openprefsaver);
$(".helpbutton").click(openinstr);

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