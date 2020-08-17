var cvs = document.getElementById("cvs");
var pw = document.getElementById("winner");
var ng = document.getElementById("newGame");
var ctx = cvs.getContext("2d");
var xo  = 0;
var cvsmargin = cvs.getBoundingClientRect();
var cvstop = cvsmargin.top;
var cvsleft = cvsmargin.left;
var table = [0,0,0,0,0,0,0,0,0];
var done = false;
var ready = true;
var xhttp;

ctx.font = "350px Arial";
drawGrid();
xhttp = new XMLHttpRequest();

function drawGrid() {
	ctx.beginPath();
	ctx.moveTo(0, 200);
	ctx.lineTo(600, 200);
	ctx.strokeStyle = "#000000";
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(0, 400);
	ctx.lineTo(600, 400);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(400, 0);
	ctx.lineTo(400, 600);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(200, 0);
	ctx.lineTo(200, 600);
	ctx.stroke();
}

cvs.addEventListener("click", function(ev) {
	mousex = ev.clientX-cvsleft;
	mousey = ev.clientY-cvstop;
	if(table[parseInt(mousex/200)+parseInt(mousey/200)*3]==0 && !done) {
		ctx.fillStyle = "#000000";
		ctx.fillText((xo%2==0?"x":"o"), parseInt(mousex/200)*200 + 5, (parseInt(mousey/200)+1)*200 - 10);
		table[parseInt(mousex/200)+parseInt(mousey/200)*3]=xo%2==0?1:2;
		if((table[0]==table[1]&&table[1]==table[2]&&table[0]!=0)||(table[3]==table[4]&&table[4]==table[5]&&table[4]!=0)||(table[6]==table[7]&&table[7]==table[8]&&table[8]!=0)||(table[0]==table[3]&&table[3]==table[6]&&table[0]!=0)||(table[4]==table[1]&&table[1]==table[7]&&table[4]!=0)||(table[2]==table[5]&&table[5]==table[8]&&table[8]!=0)||(table[0]==table[4]&&table[4]==table[8]&&table[4]!=0)||(table[6]==table[4]&&table[4]==table[2]&&table[4]!=0)){
			pw.innerHTML = "Player " + (xo%2==0?"1":"2") + " wins!";
			ng.style.visibility = "visible";
			done = true;
		}
		if(table[0]+table[1]+table[2]+table[3]+table[4]+table[5]+table[6]+table[7]+table[8]==13) {
			pw.innerHTML = "It's a tie";
			ng.style.visibility = "visible";
			done = true;
		}
		xo++;
	}
});

ng.addEventListener("click", function() {
	pw.innerHTML = "";
	ng.style.visibility = "hidden";
	ctx.rect(0,0,600,600);
	ctx.fillStyle = "#ffffff";
	ctx.fill();
	drawGrid();
	table = [0,0,0,0,0,0,0,0,0];
	done = false;
	xo = 0;
});


