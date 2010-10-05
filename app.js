/*
 *  Github followers spider
 *   
 *  Author: Stefan Petrea
 *  http://github.com/wsdookadr
 *
 *  credentials.js of the form
 *
 *  exports.user = "username";
 *  exports.token = "token";
 *
 *
 */



var sys = require("sys");
var creds = require("./credentials.js");
var events = require('events');

var GitHubApi = require("github").GitHubApi;
var github = new GitHubApi(true);



//====================================================================================

function spider() {
	this.visited = {};

	this.structure = [];

	this.maxVisited = 60;
	this.maxDepth = 1;

	this.maxConn = 4;//maximum simoultaneous

	this.crtConn = 0;

	this.delay1 = 2000;

	this.nodes = {};


	//=================================================================
	//=================================================================


	this.newFollowers = function(user,depth,followers) {

		if(!followers || followers.length == 0) {
				return;
		};

		var context = this;

		while(followers.length > 0) {
			var crt = followers[followers.length-1];
			//console.log(followers.length);

			if(this.visited[crt]){
				followers.pop();
				continue;
			};


			if(this.crtConn >= this.maxConn) {
				setTimeout(function(){context.newFollowers(user,depth,followers);},1000);//recall when it's not so crowded
				return;
			} else {
				var u = followers.pop();

				if(!this.nodes[user]) {

					this.nodes[user] = {
						"id": user,
						"name": user,
						"data": {
							"$type": "square",
							"some key":"some value"
						},
						adjacencies: []
					};

				};

				this.nodes[user].adjacencies.push({
					"nodeTo": u,
					"data": {
						"weight": 1
					}
				});

				this.limitedRun(u,depth+1);
			};

		};

	};

	this.limitedRun = function(u,d) {
		var context = this;

		if(this.crtConn >= this.maxConn) {
			setTimeout(function(){context.limitedRun(u,d);},1000);//recall when it's not so crowded
			return;
		};
		this.crtConn++;
		context.run(u,d);
	};


	this.run = function(user,depth) {
		if(depth > this.maxDepth) {
			this.crtConn--;
			return;
		};

		var context = this;
		github.getUserApi().getFollowers(user, function(err, followers) {
			context.crtConn--;

            /*
			 *if(context.visited[user]) {
			 *    return;
			 *};
             */


			context.visited[user] = "visited";

            /*
			 *console.log("to visit:" + context.maxVisited);
			 *if(context.maxVisited-- < 0){
			 *    process.exit(0);
			 *};
			 */



			if(followers) {
				//console.log("followers of [" + user +"]:"+ followers);
				context.emit("gotNewFollowers",user,depth,followers);
			} else {
				//console.log("user ["+user+"] has no followers");
			};
		});
	};

	this.on("gotNewFollowers",this.newFollowers);
};  

//spider now has .emit and .on
spider.prototype = new events.EventEmitter();


//====================================================================================








github.authenticate(creds.user, creds.token);

github.getUserApi().show(creds.user, function(err, user) {
	//console.log(user);

	if(user) {
		//if user is authenticated act
		var s = new spider();
		this.crtConn++;
		s.run(creds.user,0);
		setTimeout(function(){

			var r = [];
			for(i in s.nodes) {
				r.push(s.nodes[i]);
			};	
			console.log(JSON.stringify(r));
	
		},8000);
		//console.log("followers:"+s.followerOf);
	};
});




