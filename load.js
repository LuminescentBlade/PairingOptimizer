goog.require('goog.structs');
goog.require('goog.structs.PriorityQueue');

//rows.push("unpaired");
var twid = 65;
var cells = [];

var isOpera = !!!!window.opr && opr.addons;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFF = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isIE = /*@cc_on!@*/false || !!document.documentMode;

console.log("isOpera"+isOpera);
console.log("isFF"+isFF);
console.log("isSafari"+isSafari);
console.log("isChrome"+isChrome);
console.log("isIE"+isIE);


//cache html elements to speed up selection

var tablewrapper = $("#detailtable");
var table = $("#pairchart");
var thead = table.find("thead tr");
var tbody = table.find("tbody");
var setsel = $("#setselect")
var menu = $("#menuoptions");
var avatarname = $("#avatarname");
var avatarfield = $("#avatarpair")

var weightsort = $("#weightsorter");
var char1sel = $("#char1select");
var char2ord = $("#char2order");

var prefsort = $("#prefsorter");
var char1prefs = $("#char1prefs");
var char2prefs = $("#char2prefs");

var resultss = $("#results");
var resblock = $("#results table tbody");
var loading = $("#loading");

var rowhasotp = [];
var colhasotp = [];
var avatar = null;


char2ord.sortable(
	{
		update: function() {
			var br = false;
			var rowind = rows.indexOf(char1sel.val());
			var i = 0;
			$('#char2order li').each(function(){
				if($(this).hasClass("sortbreak")){
					br = true;
				}
				else if(!br){
					var c = $(this).html()
					var colind = cols.indexOf(c);
					cells[rowind][colind].children().eq(0).val(i*10+"");
					i++;
				}
				else{
					var c = $(this).html();
					var colind = cols.indexOf(c);
					cells[rowind][colind].find('input[type="text"]').val((i)*10+"");
				}

			})	

            }
	});
char1prefs.sortable({
	update: function(){
		getcharprefval(1);
	}
});
char2prefs.sortable({
	update: function(){
		getcharprefval(2);
	}
});

function switchweightoptions(){
	var mv = +menu.val();
	//console.log(mv);
	switch(mv){
		case 1:
			console.log(1);
			weightsort.addClass("hidden");
			prefsort.removeClass("hidden");
			resultss.addClass("hidden");
		break;
		case 2:
			console.log(2);
			weightsort.removeClass("hidden");
			prefsort.addClass("hidden");
			resultss.addClass("hidden");
		break;
		default:
			weightsort.addClass("hidden");
			prefsort.addClass("hidden");
		break;
	}
}

function getcharprefval(char){
	var charid = (char === 1)?"#char1prefs":"#char2prefs"
	var charweights = (char === 1)?char1_prefs:char2_prefs;

	var enter = false;
	var exit = false;
	var constval = -1;
	var j = 1;
	$(charid+' li').each(function(i){
		var _val = +$(this).attr("value");
				if(_val < 0){
					if(!enter){
						enter = true;
						constval = i;
					}
					else exit = true;
				}
				else{
					if(!enter && !exit){
						charweights[_val] = i;
					}
					else if(enter && !exit){
						charweights[_val] = constval;
					}
					else{
						charweights[_val] = constval+j;
						j++;
					}
				}
		})
}


function changeset(){
	setdata(setsel.val());
}

function changechar1prefs(){
	if(char1sel.val() != "no_char"){
		char2ord.html('<li class="sortbreak divider">Sort Divider</li>');
		setchar1sels(char1sel.val());
	}
	else{
		char2ord.html('');
	}
	
}

function makeinputs(i, j, defaultval,check){
	var char1 = rows[i];
	var char2 = cols[j];
	var disable = (rowhasotp[i] != 0 || colhasotp[j] != 0)?"disabled":"";
	var input = '<input type="text" class="fieldbox" '
	if(defaultval) input += ' value ="'+defaultval+'"'
	input += '>';
	var radios = '<input type="radio" name="'+char1+'_'+char2+'" value="normal"';
	if(check === 0) radios += ' checked '
	radios+='> Reg<br>'+
	'<input type="radio" name="'+char1+'_'+char2+'" value="otp" ' + disable;
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

function setchar1sels(char1){
	var char2s = data[char1];
	for(var i = 0; i < char2s.length; i++){
		char2ord.append('<li class="char2s" value="'+char2s[i]+'">'+char2s[i]+'</li>');
	}
}

function setdata(set){
	switch(set){
		case "hoshido":
		load(hoshicols, hoshidata, kamui, null);
		break;
		case "nohr":
		load(nohrcols, nohrdata,  kamui,null);
		break;
		case "ik":
		load(ikcols, ikdata,  kamui, null);
		break;
		case "hoshidogen2":
		load(hoshi2cols, hoshi2data,  kamui,null);
		break;
		case "nohrgen2":
		load(nohr2cols, nohr2data, kamui, null);
		break;
		case "ikgen2":
		load(ik2cols, ik2data,  kamui,null);
		break;
		case "awakening":
		load(awakencols, awakendata, robin, null);
		break;
		case "awakeninggen2":
		load(awaken2cols, awaken2data, robin, null);
		break;
		case "fe4":
		load(fe4cols, fe4data, null, null);
		break;
		case "fe4gen2":
		load(fe4gen2cols, fe4gen2data, null, null);
		break;
		default:
		break;
	}
}

function load(c, d, a, p){
	avatar = a;
	
	avatarfield.val("");

	rowhasotp = [];
	colhasotp = [];

	preferences = p;


	if(!avatar){
		avatarname.addClass("hidden");
		avatarname.next().addClass("hidden");
	}else{
		avatarname.removeClass("hidden");
		avatarname.next().removeClass("hidden");
	}

	cols = c;
	data = d;

	avatarname.html(a+" pairing");
	if(cols.indexOf("unpaired") <= -1) cols.push("unpaired");	
	rows = Object.keys(data);

	cells = [];
	thead.html('<th class="tabcell"></th>');
	tbody.html('');
	char1sel.html('<option id="char1def" value="no_char" selected>Select a Character</option>');

	table.css("width",(cols.length+1)*twid);
	thead.parent().css("width",(cols.length+1)*twid-2);
	tbody.css("width",(cols.length+1)*twid);

	char1prefs.html("");
	char2prefs.html("");

	loadchar1char2prefs();
	var char1div1 = $('<li class="divider" value="-1">Positive-Neutral</li>')
	var char2div1 = $('<li class="divider" value="-1">Positive-Neutral</li>')
	char1prefs.append($(char1div1));
	char2prefs.append($(char2div1));

	for(var i = 0; i < rows.length; i++){
		rowhasotp.push(0);
		char1sel.append('<option value="'+rows[i]+'">'+(rows[i].charAt(0).toUpperCase() + rows[i].slice(1)	)+'</option>')
		var row = $('<tr id="'+rows[i]+'"></tr>');
		var rowh = $('<td class="rowhead tabcell"></td>');
		var char1li = $('<li value="'+i+'">'+rows[i]+'</li>')
		char1prefs.append($(char1li));
		if (i === rows.length-1) rowh.addClass("last")
		rowh.html(rows[i]);
		row.append($(rowh));
		cells.push([]);
		for(var j = 0; j < cols.length; j++){
			if(i === 0){
				colhasotp.push(0);
				var colh = $('<th class="tabcell"></th>')
				colh.html(cols[j]);
				thead.append(colh);
				if(cols[j] != "unpaired"){
					var char2li = $('<li value="'+j+'">'+cols[j]+'</li>')
					char2prefs.append($(char2li));
				}
			}
			var cell = $('<td class="tabcell"></td>');
			if(j === 0) cell.addClass("col1")
			cell.data("char1",row[i]);
			cell.data("char2",cols[j]);
			if(data[rows[i]].indexOf(cols[j]) > -1 || cols[j]==="unpaired"){
				var value = (cols[j]==="unpaired")?((cols.length)*10):((rows.length-2)*10);
				value = (preferences)?""+preferences[rows[i]].weights[j]:value;
				var check = (preferences)?otpval(preferences,rows[i],cols[j]):0;
				cell.html(makeinputs(i,j,value,check));
				if(check === 1){
					colhasotp[j] ++;
					rowhasotp[i] ++;
					cell.addClass("otp");
				}else{
					if (rowhasotp[i] != 0 || colhasotp[j] != 0){
						cell.addClass("otpblock");
					}
					if (check === 2) cell.addClass("notp");
				}
			}
			else{
				cell.html("N/A");	
				cell.addClass("disabledbox")
			}
			cells[i].push(cell);
			row.append(cell);
		}
		tbody.append($(row));
	}
	setscroll();
	changechar1prefs();
	var char1div2 = $('<li class="divider" value="-2">Neutral-Negative</li>')
	var char2div2 = $('<li class="divider" value="-2">Neutral-Negative</li>')
	char1prefs.append($(char1div2));
	char2prefs.append($(char2div2));
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
			if(isChrome || isOpera){
				if(dir === "up")$(this).css("top",-(st-(80*i))+((st <= 5 || !hitbottom)?30:28))
				else $(this).css("top",-(st-(80*i))+((totsc <= st+5)?28:30))
			}
			else if(isFF){
				if(dir === "up")$(this).css("top",-(st-(80*i))+((st <= 5 || !hitbottom)?29:29))
				else $(this).css("top",-(st-(80*i))+((totsc <= st+5)?29:29))
			}else{
				if(dir === "up")$(this).css("top",-(st-(80*i))+((st <= 5 || !hitbottom)?28:28))
				else $(this).css("top",-(st-(80*i))+((totsc <= st+5)?28:28))
			}
			 //all 28 for safari, 29? for ff
			
		})
		if(dir==="down")hitbottom = (totsc <= st+2);
		lastop = st;
		if(isFF){
			thead.parent().css("left",-($(this).scrollLeft()+1)) //+1 for ff
		}else{
			thead.parent().css("left",-($(this).scrollLeft())) //+1 for ff
		}
		
	})
}

function loadchar1char2prefs(){
	char1_prefs = [];
	char2_prefs = [];
	var c1p = (preferences && "char1p" in preferences);
	var c2p = (preferences && "char2p" in preferences);
	for(var i = 0; i < rows.length; i++){
		if(c1p) char1_prefs.push(preferences.char1p[i]);
		else char1_prefs.push(0);
	}
	for(var i = 0; i < cols.length; i++){
		if(c2p) char2_prefs.push(preferences.char2p[i]);
		else if (cols[i] === "unpaired") char2_prefs.push(cols.length-1);
		else char2_prefs.push(0);
	}
	//console.log(char1_prefs);
	//console.log(char2_prefs);
}

function savechar1char2prefs(){
	exportw.char1p = char1_prefs;
	exportw.char2p = char2_prefs;
}

function loaddata(weight,shipstatus,cell){
	cell.find("input[type='text']").val(""+weight);
	var rad = cell.find("input[type='radio']");
	var t = rad.eq(shipstatus);
	t.prop("checked",true);

	if(shipstatus === 1){
		blockotp(t,true);
		cell.removeClass("notp");
		cell.addClass("otp");
	}
	else{
		if(cell.hasClass("otp")){
			blockotp(t,false);
			cell.removeClass("otp");
		}
		if(shipstatus === 2){
			cell.addClass("notp");
		}
		else{
			cell.removeClass("notp");
		}
	}

}
function loadprefs(){
	for(var i = 0; i< rows.length; i++){
		var obj = preferences[rows[i]];
		for(var j = 0; j < cols.length; j++){
			var weight = obj.weights[j];
			var shipstatus = 0;
			if(obj.otp === cols[j]) shipstatus = 1;
			else if(obj.notp.indexOf(cols[j]) > -1) shipstatus = 2;
			loaddata(weight,shipstatus,cells[i][j]);
		}
	}
	loadchar1char2prefs();
	reordercharprefs(1);
	reordercharprefs(2);
}

function reordercharprefs(char){
	var charprefs = (char === 1)? char1prefs:char2prefs;
	var charweights = (char === 1)? char1_prefs:char2_prefs;
	var li1s = charprefs.children("li");
	var weight_exist = [];
	var repeatw = -1;
	for(var i = 0; i < charweights.length; i++){
		if(weight_exist.indexOf(charweights[i]) < 0)weight_exist.push(charweights[i]);
		else{
			repeatw = charweights[i];
			break;
		}
	}
	//console.log(repeatw);
	li1s.each(function(){
		var _val = +$(this).attr("value")
		if(_val === -1){
			$(this).data("sortval",repeatw);
		}
		else if (_val === -2){
			$(this).data("sortval",repeatw+2);
		}
		else{
			if(charweights[_val] < repeatw) $(this).data("sortval",charweights[_val]);
			else if(charweights[_val] === repeatw) $(this).data("sortval",repeatw+1);
			else $(this).data("sortval",charweights[_val]+2);
		}
		//console.log($(this));
		//console.log($(this).data("sortval"));

		
	});
	li1s.detach().sort(function(a,b){
		var aval = $(a).data('sortval');
		var bval = $(b).data('sortval');

		if(aval===bval) return 1;
		return aval - bval;
	});
	charprefs.append(li1s);
}

function gensetup(len){
	var genthis = [];
	for(var i = 0; i < len; i++){
		genthis.push((rows.length-2)*10);
	}
	genthis.push((cols.length-1)*10);

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
function blockcell(cell, block,i,j){
	if(block){
		cell.addClass("otpblock");
		cell.children().eq(4).attr("disabled",true);
	}
	else if(rowhasotp[i] === 0 && colhasotp[j] === 0){
		cell.removeClass("otpblock");
		cell.children().eq(4).attr("disabled",false);
	}
}
function blockotp(t,block){
	var tname = t.attr("name");
	tname = tname.split("_");
	var char1i = rows.indexOf(tname[0]);
	var char2i = cols.indexOf(tname[1]);
	if(block){
		rowhasotp[char1i]++;
		colhasotp[char2i]++;
	}
	else{
		rowhasotp[char1i]--;
		colhasotp[char2i]--;
	}

	for(var i = 0; i < cols.length; i++){
		var cell = cells[char1i][i];
		if (i === char2i) continue;
		blockcell(cell,block,char1i,i);
	}

	for(var i = 0; i < rows.length; i++){
		var cell = cells[i][char2i];
		if (i === char1i) continue;
		blockcell(cell,block,i,char2i);
	}

}

tbody.on("click","input[type='radio']",function(e){
	var t = $(e.target);
	var tpar = t.parent();
	var tval = t.val();

	if(tval === "otp"){
		tpar.addClass("otp");
		blockotp(t,true);
		if(tpar.hasClass("notp")) tpar.removeClass("notp");
	}
	else{
		if(tpar.hasClass("otp")){
			tpar.removeClass("otp")
			blockotp(t,false);
		}
		if(tval === "notp"){
			tpar.addClass("notp");
		}
		else{
			tpar.removeClass("notp");
		}
		
	}

})

load(hoshicols,hoshidata,kamui	,preferences);

tablewrapper.scroll();