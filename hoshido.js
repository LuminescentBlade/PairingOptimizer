var cols = ["hinoka","sakura","kagerou","setsuna","oboro","kazahana","rinka","orochi","aqua","mozume","felicia"]

var data = {
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
	ryouma:{
		weights: [-1, -1, 40, 65, 25, 45, 0, 90, 60, 55, 35, 100],
		otp: "rinka",
		notp: ["unpaired"]
	},
	takumi:{
		weights:[-1, -1, 43, 63, 0, 30, 35, 100, 62, 50, 80, 100],
		otp: "oboro",
		notp: ["orochi"]
	},
	saizou:{
		weights:[80, 15, 0, 85, 70, 45, 10, 90, 40, 47, 75, 100],
		otp: null,
		notp: []
	},
	asama:{
		weights:[90, 90, 100, 10, 90, 25, 90, 90, 65, 90, 90, 100],
		otp: null,
		notp: ["kagerou"]
	},
	hinata:{
		weights:[0, 20, 90, 90, 90, 90, 30, 90, 35, 90, 33, 100],
		otp: null,
		notp: []
	},
	tsubaki:{
		weights:[5, 5, 90, 90, 30, 5, 40, 90, 42, 44, 90, 100],
		otp: null,
		notp: []
	},
	tsukuyomi:{
		weights:[30, 40, 90, 90, 90, 90, 90, 0, 55, 15, 45, 100],
		otp: null,
		notp: []
	},
	nishiki:{
		weights:[15, 55, 25, 58, 90, 35, 68, 80, 50, 65, 0, 100],
		otp: null,
		notp: []
	},
	joker:{
		weights:[40, 45, 50, 90, 75, 120, 120, 90, 0, 60, 60, 100],
		otp: null,
		notp: ["rinka"]
	},
	silas:{
		weights:[45, 50, 90, 90, 85, 120, 70, 90, 90, 0, 90, 100],
		otp: "mozume",
		notp: ["kazahana"]
	},
	suzukaze:{
		weights:[50, 35, 20, 90, 46, 10, 45, 55, 52, 56, 47, 100],
		otp: null,
		notp: []
	},

}
