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
	suzukaze: ["camilla","elise","pieri","belka","luna","elfie","charlotte","nyx","aqua","mozume","felicia"],
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

var preferences = {
	ryouma: {
		weights:[-1, -1, 40, 65, 25, 45, 0, 90, 60, 55, 35, 20, 35, -1, -1, -1, -1, -1, -1, 100],
		otp: "rinka",
		notp: ["unpaired"]
	},
	takumi: {
		weights:[-1, -1, 43, 63, 0, 30, 35, 100, 62, 50, 80, 60, 55, -1, -1, -1, -1, -1, -1, 100],
		otp: "oboro",
		notp: ["unpaired","orochi"]
	},
	saizou: {
		weights:[80, 15, 0, 85, 70, 45, 10, 90, 40, 47, 75, -1, -1, -1, 20, -1, -1, 30, -1, 100],
		otp:"kagerou",
		notp: ["orochi"]
	},
	asama: {
		weights:[90, 90, 100, 10, 90, 25, 90, 90, 65, 90, 90, -1, -1, -1, 90, -1, 0, -1, -1, 100],
		otp:null,
		notp: ["kagerou"]
	},
	hinata:{
		weights:[0, 20, 60, 90, 65, 25, 30, 90, 35, 90, 33, -1, -1, 40, -1, 50, -1, -1, -1, 100],
		otp:null,
		notp: []
	}, 
	tsubaki: {
		weights:[5, 5, 90, 90, 30, 5, 40, 90, 42, 44, 90, -1, -1, -1, -1, 43, -1, -1, 90, 100],
		otp:null,
		notp: []
	},
	tsukuyomi: {
		weights:[30, 40, 90, 90, 90, 90, 90, 0, 55, 15, 45, -1, -1, -1, -1, -1, 35, -1, 5, 100],
		otp:null,
		notp: []
	},
	nishiki: {
		weights:[15, 55, 25, 58, 90, 35, 68, 80, 50, 65, 0, -1, -1, 55, -1, -1, -1, 18, -1, 100],
		otp:null,
		notp: []
	},
	joker: {
		weights:[40, 45, 50, 90, 75, 120, 120, 90, 0, 60, 70, 90, 56, 68, 40, 66, 40, 70, 57,100],
		otp:null,
		notp: ["rinka"]
	},
	silas: {
		weights:[45, 50, 90, 90, 85, 120, 70, 90, 90, 0, 90, 90, 90, 55, 45, 35, 90, 65, 90, 100],
		otp: "mozume",
		notp: ["kazahana"]
	},
	suzukaze: {
		weights:[50, 35, 20, 90, 46, 10, 45, 55, 52, 56, 47, 15, 55, 48, 20, 25, 90, 50, 0,100],
		otp:null,
		notp: []
	},
	marx: {
		weights:[5, 40, -1, -1, -1, -1, -1, -1, 45, 70, 35, -1, -1,60, 15, 50, 55, 0, 25,100],
		otp: null,
		notp: []
	},
	leon: {
		weights:[20, 0, -1, -1, -1, -1, -1, -1, 45, 60, 50, -1, -1, 70, 15, 30, 27, 25, 15,100],
		otp: null,
		notp: []
	},
	lazwald:{
		weights:[-1, -1, -1, -1, -1, 50, -1, 21, 5, 20, 40, 58, 55, 30, 12, 0, 60, 15, 50, 100],
		otp: "luna",
		notp: []
	}, 
	zero: {
		weights:[-1, -1, -1, 65, 60, -1, -1, -1, 60, 45, 65, 0, 120, 130, 20, 70, 55, 50, 120,  100],
		otp:null,
		notp: ["elise", "nyx", "pieri"]
	},
	odin: {
		weights:[-1, -1, 30, -1, -1, -1, -1, 61, 5, 90, 26, 65, 55, 10, 45, 22, 50, 68, 60, 100],
		otp:null,
		notp: []
	},
	harold: {
		weights:[-1, -1, 63, 5, -1, -1, -1, -1, 10, 42, 35, 80, 40, 65, 27, 60, 25, 30, 55, 100],
		otp:null,
		notp: []
	},
	benoit: {
		weights:[-1, -1, -1, -1, 35, -1, 55, -1, 45, 90, 55, 15, 18, 75, 30, 90, 10, 12, 48, 100],
		otp:null,
		notp: []
	},
	flannel: {
		weights:[-1, -1, -1, -1, -1, 55, 66, -1, 36, 40, 55, 35, 70, 50, 56, 33, 45, 65, 58, 100],
		otp:null,
		notp: []
	}
}
