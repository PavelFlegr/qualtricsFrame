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
	window.addEventListener("message", handler)
	targetwindow = e.source
	sendUpdate()
	
}

function handler(e) {
	sendUpdate()
}

function sendUpdate() {
	targetwindow.postMessage(document.documentElement.scrollHeight, origin)
}

register(origin)
