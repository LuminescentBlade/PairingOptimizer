var kamui = "kamui";
var robin = "robin";

var ikcols = ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","camilla","elise","pieri","belka","luna","elfie","charlotte","nyx"]

var ikdata = {
	ryouma: ["kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","camilla","elise"],
	takumi: ["kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","camilla","elise"],
	saizou: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","belka","charlotte"],
	asama: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","belka","elfie"],
	hinata: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","pieri","luna"],
	tsubaki: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","luna","nyx"],
	tsukuyomi: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","nyx","elfie"],
	nishiki: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","charlotte","pieri"],
	joker: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","camilla","elise","pieri","belka","luna","elfie","charlotte","nyx"],
	silas: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","camilla","elise","pieri","belka","luna","elfie","charlotte","nyx"],
	suzukaze: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia","camilla","elise","pieri","belka","luna","elfie","charlotte","nyx"],
	marx: ["pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","hinoka","sakura"],
	leon: ["pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","hinoka","sakura"],
	lazwald: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","kazahana","orochi"],
	zero: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","setsuna","oboro"],
	odin: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","orochi","kagerou"],
	harold: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","setsuna","kagerou"],
	benoit: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","rinka","oboro"],
	flannel: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia","rinka","kazahana"],
}

var nohrcols = ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"]

var nohrdata = {
	marx: ["pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	leon: ["pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	lazwald: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	zero: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	odin: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	harold: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	benoit: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	flannel: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	joker: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	silas: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
	suzukaze: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"]
	//notpaired: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"]
}

var hoshicols = ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"]

var hoshidata = {
	ryouma: ["kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	takumi: ["kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	saizou: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	asama: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	hinata: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	tsubaki: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	tsukuyomi: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	nishiki: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	joker: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	silas: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	suzukaze: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"],
	//notpaired: ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"]
}

var awakencols = ["chrom", "frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"]
var awakendata = {
	lissa:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	sully:["chrom", "frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	miriel:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	sumia:["chrom", "frederick","gaius","henry"],
	maribelle:["chrom", "frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	panne:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	cordelia:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	nowi:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	tharja:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	olivia:["chrom", "frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"],
	cherche:["frederick", "virion", "stahl", "vaike","kellam","lonqu","donnel","ricken","gaius","gregor","libra","henry"]
}

var hoshi2cols = ["matoi","shara","mitama","kinu","sophie","midoriko","kanna"];
var hoshi2data = {
	shinonome:["matoi","shara","mitama","kinu","sophie","midoriko","kanna"],
	kisaragi:["matoi","shara","mitama","kinu","sophie","midoriko","kanna"],
	grey:["matoi","shara","mitama","kinu","sophie","midoriko","kanna"],
	hisame:["matoi","shara","mitama","kinu","sophie","midoriko","kanna"],
	dia:["matoi","shara","mitama","kinu","sophie","midoriko","kanna"],
	shigure:["matoi","shara","mitama","kinu","sophie","midoriko","kanna"],
	kanna:["matoi","shara","mitama","kinu","sophie","midoriko"]
};
var nohr2cols = ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"];
var nohr2data = {
	siegbert: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	foleo: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	ignis: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	lutz: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	dia: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	shigure: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	kanna: ["soleil","ophelia","eponine","velour","sophie","midoriko"]

};
var ik2cols = ["matoi","shara","mitama","kinu","soleil","ophelia","eponine","velour","sophie","midoriko","kanna"];
var ik2data = {
	shinonome:["matoi","shara","mitama","kinu","sophie","midoriko","kanna","ophelia","eponine"],
	kisaragi:["matoi","shara","mitama","kinu","sophie","midoriko","kanna","velour","soleil"],
	grey:["matoi","shara","mitama","kinu","sophie","midoriko","kanna","soleil","eponine"],
	hisame:["matoi","shara","mitama","kinu","sophie","midoriko","kanna","velour","ophelia"],
	siegbert: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna","mitama","matoi"],
	foleo: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna","kinu","shara"],
	ignis: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna","kinu","matoi"],
	lutz: ["soleil","ophelia","eponine","velour","sophie","midoriko","kanna","mitama","shara"],
	dia:["matoi","shara","mitama","kinu","soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	shigure: ["matoi","shara","mitama","kinu","soleil","ophelia","eponine","velour","sophie","midoriko","kanna"],
	kanna: ["matoi","shara","mitama","kinu","soleil","ophelia","eponine","velour","sophie","midoriko"]
};
var awaken2cols = ["owain","inigo","brady","laurent","yarne","gerome","morgan"];
var awaken2data = {
	lucina:["owain","inigo","brady","laurent","yarne","gerome","morgan"],
	cythia:["owain","inigo","brady","laurent","yarne","gerome","morgan"],
	kjelle:["owain","inigo","brady","laurent","yarne","gerome","morgan"],
	severa:["owain","inigo","brady","laurent","yarne","gerome","morgan"],
	noire:["owain","inigo","brady","laurent","yarne","gerome","morgan"],
	nah:["owain","inigo","brady","laurent","yarne","gerome","morgan"],
	morgan:["owain","inigo","brady","laurent","yarne","gerome"],
};


var fe4cols = ["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"];
var fe4data = {
	aideen:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
	ayra:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
	lachesis:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
	fury:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
	sylvia:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
	tiltyu:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
	briggid:["alec","noish","ardan","lex","azel","finn","midayle","dew","jamka","holyn","levin","beowulf","claude"],
};

var fe4gen2cols = ["celice","oifey","shanan","leif","johan","johalva","aless","lester","skasaher","delmud","sety","corple","arthur","faval"];
var fe4gen2data = {
	yuria:["oifey","shanan","leif","johan","johalva","aless","lester","skasaher","delmud","sety","corple","arthur","faval"],
	rana:["celice","oifey","shanan","leif","johan","johalva","aless","skasaher","delmud","sety","corple","arthur","faval"],
	lakche:["celice","oifey","shanan","leif","johan","johalva","aless","lester","delmud","sety","corple","arthur","faval"],
	nanna:["celice","oifey","shanan","leif","johan","johalva","aless","lester","skasaher","sety","corple","arthur","faval"],
	fee:["celice","oifey","shanan","leif","johan","johalva","aless","lester","skasaher","delmud","corple","arthur","faval"],
	leen:["celice","oifey","shanan","leif","johan","johalva","aless","lester","skasaher","delmud","sety","arthur","faval"],
	tinny:["celice","oifey","shanan","leif","johan","johalva","aless","lester","skasaher","delmud","sety","corple","faval"],
	patty:["celice","oifey","shanan","leif","johan","johalva","aless","lester","skasaher","delmud","sety","corple","arthur"],
};