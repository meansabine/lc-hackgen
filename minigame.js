

console.log("STOP LOOKING HERE PLEASE :( i already said i didnt know what i was doing")

const pIcos = ["pred", "pblue", "pgreen", "pyellow", "porange", "ppurple"];
const cIcos = ["cred", "cblue", "cgreen", "cyellow", "corange", "cpurple"];
const tIcos = ["tred", "tblue", "tgreen", "tyellow", "torange", "tpurple"];
const imgIds = ["imgone", "imgtwo", "imgthree"];
const cssColors = ["background-color:#df3c3c", "background-color:#ff4901", "background-color:#d4c732", "background-color:#b432d4", "background-color:#323ad4", "background-color:#54d432"];

const bgColorModel = ["red", "orange", "yellow", "purple", "blue", "green"];
const answerModel = ["Icon", "Background"];
const modelArrayIco = ["p", "t", "c"];


const answerOrder = []; //[0] - Identifier | [1] - image path | [2] - answer

const iColors = [];
const bgColors = [];
const imageArr = [];

let currentIndex = null;
let timeout = null;
let keyD = false;

function cycle(){
	for (let i=0; i<15; i++) {
   		task(i);
	}
	document.getElementById("srtBtn").remove();
	document.getElementById("textdisplay").innerHTML = "DECRYPTING...";
	setTimeout(setData, 200 * 16);
}

function task(i) {
  setTimeout(function() {
      const shuffled = imgIds.sort(() => 0.5 - Math.random());
	  document.getElementById(shuffled[0]).src = "images/" + pIcos[Math.floor(Math.random()*pIcos.length)] + ".png";
	  document.getElementById(shuffled[0]).style = cssColors[Math.floor(Math.random()*cssColors.length)];
	  document.getElementById(shuffled[1]).src = "images/" + cIcos[Math.floor(Math.random()*cIcos.length)] + ".png";
	  document.getElementById(shuffled[1]).style = cssColors[Math.floor(Math.random()*cssColors.length)];
	  document.getElementById(shuffled[2]).src = "images/" + tIcos[Math.floor(Math.random()*tIcos.length)] + ".png";
	  document.getElementById(shuffled[2]).style = cssColors[Math.floor(Math.random()*cssColors.length)];
  }, 200 * i);
}



function setData() {
     const shuffled = imgIds.sort(() => 0.5 - Math.random());
	 iColors[0] = pIcos[Math.floor(Math.random()*pIcos.length)];
	 document.getElementById(shuffled[0]).src = "images/" + iColors[0] + ".png";
	 imageArr[0] = "images/pwhite.png"
	 bgColors[0] = bgColorModel[Math.floor(Math.random()*bgColorModel.length)];
	 document.getElementById(shuffled[0]).style = cssColors[bgColorModel.indexOf(bgColors[0])];
	
	 iColors[1] = tIcos[Math.floor(Math.random()*tIcos.length)];
	 document.getElementById(shuffled[1]).src = "images/" + iColors[1] + ".png";
	 imageArr[1] = "images/twhite.png"
	 bgColors[1] = bgColorModel[Math.floor(Math.random()*bgColorModel.length)];
	 document.getElementById(shuffled[1]).style = cssColors[bgColorModel.indexOf(bgColors[1])];
	
	
	 iColors[2] = cIcos[Math.floor(Math.random()*cIcos.length)];
	 document.getElementById(shuffled[2]).src = "images/" + iColors[2] + ".png";
	 imageArr[2] = "images/cwhite.png"
	 bgColors[2] = bgColorModel[Math.floor(Math.random()*bgColorModel.length)];
	 document.getElementById(shuffled[2]).style = cssColors[bgColorModel.indexOf(bgColors[2])];
	
	
	 document.getElementById("textdisplay").innerHTML = "DECRYPTION COMPLETE!";
	
	let rndNames = ["pIcon", "pBackground", "tIcon", "tBackground", "cIcon", "cBackground"];
	
	for (let i=0; i<3; i++) {
		answerOrder[i] = [rndNames[Math.floor(Math.random()*rndNames.length)]];
		answerOrder[i][1] = "images/" + answerOrder[i][0].charAt(0) + "white.png";
		if (answerOrder[i][0].includes("Background"))
		{
				answerOrder[i][2] = bgColors[modelArrayIco.indexOf(answerOrder[i][0].charAt(0))];
				console.log(answerOrder[i][0] + " " +  answerOrder[i][2]);
		}
		else
		{
			answerOrder[i][2] = iColors[modelArrayIco.indexOf(answerOrder[i][0].charAt(0))].slice(1);
			console.log(answerOrder[i][0] + " " +  answerOrder[i][2]);
		}
		rndNames.splice(rndNames.indexOf(answerOrder[i][0]), 1);
	}
	setTimeout(function(){
		cycleRight(0);
	}, 2750);
}

function cycleRight(i) {
		document.getElementById("imgtwo").src = answerOrder[i][1];
		document.getElementById("imgtwo").style = "background-color:#000000"
		document.getElementById("textdisplay").innerHTML = "What is the " + answerOrder[i][0].slice(1) + " color of this symbol?";
		document.getElementById("imgone").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
		document.getElementById("imgthree").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
		document.getElementById("imgthree").style = "background-color:#000000";
		document.getElementById("imgone").style = "background-color:#000000";
		document.getElementById("inputBox").focus();
		document.getElementById("inputBox").addEventListener("keyup", function (event) {
            if (event.keyCode == 13) {
                boxEnter();
            }
		});
	    currentIndex = i;
		console.log(i);
		console.log("next answer: " + answerOrder[currentIndex][2]);
		keyD = false;
		timeout = setTimeout(function() {
			window.location.reload();
		}, 3000);
}


function boxEnter(){
	if (keyD != true) {
	if (document.getElementById("inputBox").value.toLowerCase() == answerOrder[currentIndex][2])
		{
			keyD = true;
			document.getElementById("imgtwo").src = "images/correct.png";
			document.getElementById("textdisplay").innerHTML = "CORRECT!";
			clearTimeout(timeout);
			if (currentIndex != 2)
				{
					setTimeout(function(){
						cycleRight(currentIndex + 1);
					}, 2500);
				}
			else { document.getElementById("textdisplay").innerHTML = "CORRECT! HACK COMPLETE! Restarting in 5 seconds.";
				  setTimeout(function(){
						window.location.reload();
					}, 5000);
			}
		}
	else window.location.reload();
	}
	document.getElementById("inputBox").value = "";
	
}


function arrayRemove(arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    



