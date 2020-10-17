let origin = "https://fiddle.jshell.net"
let targetwindow
let w = window
let i
function register() {
	window.addEventListener("message", handshake)
	i = setInterval(discover, 0)
}

function discover() {
	w.postMessage("ping", origin)
	if(w === w.parent) clearInterval(i)
	w = w.parent
}

function handshake(e) {
	if(!(e.origin === origin && e.data === "pong")) return
	window.removeEventListener("message", handshake)
	targetwindow = e.source
	sendUpdate()
	
}

function sendUpdate() {
	console.log(window.documentElement.clientHeight)
	console.log(window.innerHeight)
	targetwindow.postMessage(window.documentElement.clientHeight, origin)
}

register(origin)
