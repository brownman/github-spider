/*
 * not working right now
 *
 */


exports.makeNode =  
	function(nodes,user) { 
		nodes[user] = {
			"id": user,
			"name": user,
			"data": {
			},
			children: []
		};
	};


exports.addAdjacency =
	function(nodes,user, u) {

		console.log(user+"     "+u);
		if(!nodes[u]) {
			nodes[u] = this.makeNode(u);
		};

		nodes[user]
		.children
		.push( nodes[u] );
	};



exports.finalFormat =
	function(nodes) {
			var r = [];
			for(i in nodes) {
				r.push(nodes[i]);
			}; 
			debugger;
			return JSON.stringify(nodes[0]);
	}
