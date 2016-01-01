goog.require('goog.structs');
goog.require('goog.structs.PriorityQueue');

cols.push("unpaired");
var rows = Object.keys(data);
//rows.push("unpaired");
console.log(rows);
var twid = 65;
var cells = [];

var tablewrapper = $("#detailtable");
var table = $("#pairchart");
var thead = table.find("thead tr");
var tbody = table.find("tbody");

table.css("width",(cols.length+1)*twid);
thead.parent().css("width",(cols.length+1)*twid-2);
tbody.css("width",(cols.length+1)*twid);

function makeinputs(char1, char2, defaultval,check){
	var input = '<input type="text" class="fieldbox" min="0" max="100"'
	if(defaultval) input += ' value ="'+defaultval+'"'
	input += '>';
	var radios = '<input type="radio" name="'+char1+'_'+char2+'" value="normal"';
	if(check === 0) radios += ' checked '
	radios+='> Reg<br>'+
	'<input type="radio" name="'+char1+'_'+char2+'" value="otp"';
	if(check === 1) radios += ' checked '
	radios+='> OTP<br>'+
	'<input type="radio" name="'+char1+'_'+char2+'" value="notp"';
	if(check === 2) radios += ' checked '
	radios+='> NoTP'

	return input + '<br>' + radios;	
}

function otpval(pref, char1, char2){
	if(pref[char1].otp === char2) return 1;
	else return(pref[char1].notp.indexOf(char2) > -1)?2:0
}

for(var i = 0; i < rows.length; i++){
	var row = $('<tr id="'+rows[i]+'"></tr>');
	var rowh = $('<td class="rowhead tabcell"></td>');
	rowh.html(rows[i]);
	row.append($(rowh));
	cells.push([]);
	for(var j = 0; j < cols.length; j++){
		if(i === 0){
			var colh = $('<th class="tabcell"></th>')
			colh.html(cols[j]);
			thead.append(colh);
		}
		var cell = $('<td class="tabcell"></td>');
		if(j === 0) cell.addClass("col1")
		cell.data("char1",row[i]);
		cell.data("char2",cols[j]);
		if(data[rows[i]].indexOf(cols[j]) > -1 || cols[j]==="unpaired"){
			var value = (cols[j]==="unpaired")?100:90;
			value = (preferences)?""+preferences[rows[i]].weights[j]:value;
			var check = (preferences)?otpval(preferences,rows[i],cols[j]):0;
			cell.html(makeinputs(rows[i],cols[j],value,check));
		}
		else{
			cell.html("N/A");	
		}
		cells[i].push(cell);
		row.append(cell);
	}

	tbody.append($(row));
	setscroll();
}

function setscroll(){
	var lastop = tablewrapper.scrollTop();
	var lastdir = "down";
	var changdir = false;
	var hitbottom = false;
	tablewrapper.scroll(function(){
		var st = tablewrapper.scrollTop();
		var totsc = $(this).prop('scrollHeight') - $(this).innerHeight();
		var dir = (lastop - st > 0)?"up":"down";
		changedir = (lastdir != dir);
		if(dir === "down") hitbottom = false;

		$(".rowhead").each(function(i){
			if(dir === "up")$(this).css("top",-(st-(80*i))+((st <= 5 || !hitbottom)?30:28))
				else $(this).css("top",-(st-(80*i))+((totsc <= st+5)?28:30))
			
		})
		if(dir==="down")hitbottom = (totsc <= st+2);
		lastop = st;
		thead.parent().css("left",-($(this).scrollLeft()))
	})
}


function loaddata(obj,cell){

}
function loadprefs(prefs){
	for(var i = 0; i< rows.length; i++){
		for(var j = 0; j < cols.length; j++){

		}
	}
}

function gensetup(len){
	var genthis = [];
	for(var i = 0; i < len; i++){
		genthis.push(90);
	}
	genthis.push(100);

	var i1 = Math.floor((Math.random() * len));
	var i2 = Math.floor((Math.random() * len));
	while (i2 === i1) i2 = Math.floor((Math.random() * len));
	var i3 = Math.floor((Math.random() * len));
	while (i3 === i1 || i3 === i2) i3 = Math.floor((Math.random() * len));

	genthis[i1] = 1;
	genthis[i2] = 2;
	genthis[i3] = 3;
	console.log(i1)
	console.log(genthis);
}