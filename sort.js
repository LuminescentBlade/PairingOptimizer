var exclusion = [];
var weights = [];
var exportw = {};
var results = {};
charprefweight = 5;

function populate(){
	//clear everything
	exclusion = [];
	exportw = {};
	weights = [];
	results = {};

	if(avatarfield.val() != ""){
		results[avatar] = avatarfield.val().toLowerCase();
		exclusion.push(avatarfield.val().toLowerCase());
	}
	
	for(var i = 0; i < rows.length; i++){
		weights.push([]);
		exportw[rows[i]] = {
			weights:[],
			otp: null,
			notp: []
		};
		for(var j = 0; j < cols.length; j++){
			//console.log(cells[i][j])
			//console.log($(cells[i][j]).html())
			if($(cells[i][j]).html() != "N/A"){
				var cbox = $('input[name="'+rows[i]+'_'+cols[j]+'"]:checked');
				var cval = cbox.val();
				var weight = $(cells[i][j]).children().eq(0).val();	
				exportw[rows[i]].weights.push(+weight);
				if(cval === "normal"){
					weights[i].push(+weight);
				}
				else if(cval === "otp"){
					weights[i].push(-2);
					exportw[rows[i]].otp = cols[j];
					results[rows[i]] = cols[j];
					exclusion.push(rows[i]);
					exclusion.push(cols[j]);
				}
				else{
					weights[i].push(-3);
					exportw[rows[i]].notp.push(cols[j]);
				}
			}
			else{
				weights[i].push(-1);
				exportw[rows[i]].weights.push(-1);
			}
		}
	}
	savechar1char2prefs();
	//console.log(exportw);
	for(var i = 0; i < exclusion.length; i++){
		rowind = rows.indexOf(exclusion[i]);
		if(rowind > -1){
			for(var j = 0; j < weights[rowind].length; j++){
				weights[rowind][j] = -2;
			}
		}
		colind = cols.indexOf(exclusion[i]);
		if(colind > -1){
			for(var j = 0; j < weights.length; j++){
				weights[j][colind] = -2;
			}
		}
	}
}

function search(){
	populate();
	var pq = new goog.structs.PriorityQueue();
	rowind = 0;
	run = false;
	while(rowind < rows.length){
		if(rows[rowind] in results || ("kamui" in results && results.kamui === rows[rowind])){
			rowind++;
		} 
		else{
			for(var i = 0; i < weights[rowind].length; i++){
				if(weights[rowind][i] < 0) continue;
				var obj = {};
				obj[rows[rowind]] = cols[i];
				pq.enqueue(weights[rowind][i]+charprefweight*Math.min(char1_prefs[rowind],char2_prefs[i]),obj);
			}
			run = true;
			break;
		}
	}
	var counter = 0;
	while(run){
		var currentobj = pq.dequeue();
		//console.log(currentval);
		//console.log(currentobj);
		var unavail = [];
		var beento = Object.keys(currentobj);
		var currentval = 0;
		for(var i = 0; i < beento.length; i++){
			var ri = rows.indexOf(beento[i]);
			var ci = cols.indexOf(currentobj[beento[i]]);
			unavail.push(currentobj[beento[i]]);
			currentval += weights[ri][ci];
		}
		//console.log(unavail);
		//console.log(currentval);
		next = rows.indexOf(beento[beento.length-1])+1;
		while(rows[next] in results || ("kamui" in results && results.kamui === rows[next])) next++;
		if(next === rows.length){
			//console.log(currentobj);
			for (var attrname in currentobj) { 
				results[attrname] = currentobj[attrname]; 
			}
			break;
		}
		for(var i = 0; i < cols.length; i++){
			if(weights[next][i] < 0 || 
				unavail.indexOf(cols[i]) > -1) continue;
			//console.log(cols[i]);
			var newobj=JSON.parse(JSON.stringify(currentobj))
			newobj[rows[next]] = cols[i];
			pq.enqueue(currentval+weights[next][i]+charprefweight*Math.min(char1_prefs[next]-char2_prefs[i]),newobj);
		}
		counter++;
		//if(counter === 3)break;	
	}
	//console.log(results);
	//return results;
}

function generateResults(){
	resultss.removeClass("hidden");
	resultss.children("table").addClass("hidden");
	resblock.empty();
	loading.removeClass("hidden");
	
	setTimeout(function(){
		search();
		var keys = Object.keys(results);
		for(var i = 0; i < keys.length; i++){
			var tr = $('<tr></tr>')
			var char1 = $('<td></td>')
			var char2 = $('<td></td>')
			char1.html(keys[i]);
			char2.html(results[keys[i]]);
			tr.append($(char1))
			tr.append($(char2))
			resblock.append($(tr));
		}
		resultss.children("table").removeClass("hidden");
		resultss.children("div").addClass("hidden");
		//console.log(results);
		menu.val(0);
		switchweightoptions();
	},100);

	

	

}
function exportprefs(){
	populate();
	return JSON.stringify(exportw);	
}