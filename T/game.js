var Game = {

	bucketData : [[]],
	bucketWidth: 10,
	bucketHeight: 22,

	fps: 30,
	intervalID: 0,

	minoI: 1,
	minoO: 2,
	minoT: 3,
	minoS: 4,
	minoZ: 5,
	minoJ: 6,
	minoL: 7,

	posX: 0,
	posY: 0,

	initialize: function() {

		var initBucket = function(length) {

		    var arr = new Array(length || 0),
		        i = length;

		    if (arguments.length > 1) {
		        var args = Array.prototype.slice.call(arguments, 1);
		        while(i--) arr[length-1 - i] = initBucket.apply(this, args);
		    }

		    return arr;

		}

		this.bucketData = initBucket(Game.bucketHeight, Game.bucketWidth);

		for (var i = 0; i < Game.bucketHeight; i++)
			for (var j = 0; j < Game.bucketWidth; j++)
				this.bucketData[i][j] = 0;

	},

	run: function() {

		Game.update();
		Game.render();

	},

	update: function() {

		this.posX = (this.posX + this.bucketWidth) % this.bucketWidth;
		this.posY = (this.posY + this.bucketHeight) % this.bucketHeight;

	},

	render: function() {

		var bucketRoot = document.getElementById("bucket");
		bucketRoot.innerHTML = "";

		for (var i = 0; i < Game.bucketHeight; i++) {

			for (var j = 0; j < Game.bucketWidth; j++) {

				var node = document.createElement("div");
				node.className = "cell";
				var innerNode = document.createElement("div");

				if (i == this.posY && j == this.posX) {
					innerNode.className = "mino cyan";
				} else {

					switch (this.bucketData[i][j]) {

						case Game.minoI:
							innerNode.className = "mino cyan";
							break;

						case Game.minoO:
							innerNode.className = "mino yellow";
							break;

						case Game.minoT:
							innerNode.className = "mino purple";
							break;

						case Game.minoS:
							innerNode.className = "mino green";
							break;

						case Game.minoZ:
							innerNode.className = "mino red";
							break;

						case Game.minoJ:
							innerNode.className = "mino blue";
							break;

						case Game.minoL:
							innerNode.className = "mino orange";
							break;

						default:
							innerNode.className = "mino";
							break;
					}

				}

				node.appendChild(innerNode);
				bucketRoot.appendChild(node);
			}

		}

		/* Update score */

	}

};

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            Game.posX -= 1;
            break;
        case 38:
            Game.posY -= 1;
            break;
        case 39:
            Game.posX += 1;
            break;
        case 40:
            Game.posY += 1;
            break;
    }
};

Game.initialize();
Game.intervalID = setInterval(Game.run, 1000 / Game.fps);