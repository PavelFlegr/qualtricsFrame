let subscriptions = new Map()
let _scope = ""
addEventListener("message", messageHandler)

function forEach(generator, callback) {
	for(let item of generator) {
  	callback(item)
  }
}
function* traverseFrames(frame) {
  for (let i = 0; i < frame.length;i++) {
	yield frame[i]
	yield* traverseFrames(frame[i])
  }
}

function emit(message, data = null, targetOrigin = "*", transfer = []) {
	let gen = traverseFrames(top)
	gen.next()
  forEach(gen, f => f.postMessage({message, data, scope:_scope}, targetOrigin, transfer))
}

function subscribe(message, callback) {
	subscriptions.set(message, callback)
}

function unsubscribe(message) {
	subscriptions.delete(message)
}

function messageHandler(e) {
	console.debug(`message received: ${e}`)
	if(subscriptions.has(e.data.message) && e.data.scope === _scope) subscriptions.get(e.data.message)(e)
}

function setScope(scope) {
	_scope = scope
}

export {emit, subscribe, unsubscribe, setScope}
