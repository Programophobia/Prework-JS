function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function displayResult(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function printResult(gameResult) {
    var div = document.createElement("div");
    div.innerHTML = gameResult;
    document.getElementById("result").appendChild(div);
}
