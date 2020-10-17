let origin = "https://fiddle.jshell.net"
let targetwindow
let w = window
let i
function register() {
	i = setInterval(discover, 0)
	window.addEventListener("message", handshake)
}

function discover() {
	w.postMessage("ping", origin)
	if(w === w.parent) clearInterval(i)
	w = w.parent
}

function handshake(e) {
	if(!(e.origin === origin && e.data === "pong")) return
	window.removeEventListener(handshake, false)
	targetwindow = e.source
	sendUpdate()
	
}

function sendUpdate() {
	targetwindow.postMessage("hello", origin)
}

register(origin)
