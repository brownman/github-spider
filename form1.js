
/*
 *  A way of serializing output
 *
 *
 *
 *
 */





exports.makeNode =  
	function(nodes,user) { 
		nodes[user] = {
			"id": user,
			"name": user,
			"data": {
				"$type": "square",
				"some key":"some value"
			},
			adjacencies: []
		};
	};


exports.addAdjacency =
	function(nodes,user, u) {
		
		nodes[user].adjacencies.push(
			{
				"nodeTo": u,
				"data": {
					"weight": 1
				}
			}
		);

	};



	exports.finalFormat =
		function(nodes) {
				var r = [];
				for(i in nodes) {
					console.log(i);
					r.push(nodes[i]);
				}; 
				return JSON.stringify(r);
		};
