/*
 * not working right now
 *
 */


exports.makeNode =  
	function(nodes,user) { 
		return;
	};


exports.addAdjacency =
	function(nodes,user, u) {

		if(!nodes[user]) {
			var narray = new Array();
			nodes[user] = {
				"id": user,
				"name": user,
				"data": {
				},
				children: narray
			};
		};

		if(!nodes[u]) {
			var narray = new Array();
			nodes[u] = {
				"id": u,
				"name": u,
				"data": {
				},
				children: narray
			};
		};

		if(user == u) return;


		var i = 0;
		for(i = 0; i < nodes[user].children.length ; i++){

			if(nodes[user].children[i].id == u){
				return;
			};

		};

		//console.log(user+ "         " + u);

		nodes[user].children.push( nodes[u] );
	};



exports.finalFormat =
	function(nodes) {
			var r = [];
			for(i in nodes) {
				r.push(nodes[i]);
			}; 
			return JSON.stringify(nodes["wsdookadr"]);
	}
