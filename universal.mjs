let subscriptions = new Map()

addEventListener("message", messageHandler)

function forEach(generator, callback) {
	for(let item of generator) {
  	callback(item)
  }
}
function* traverseFrames(frame) {
  for (let i = 0; i < frame.length;i++) {
	yield frame.frames[i]
	yield* traverseFrames(frame.frames[i])
  }
}

function emit(message, data = null, targetOrigin = "*", transfer = []) {
  forEach(traverseFrames(top).next(), f => f.postMessage({message, data}, targetOrigin, transfer))
}

function subscribe(message, callback) {
	subscriptions.set(message, callback)
}

function unsubscribe(message) {
	subscriptions.delete(message)
}

function messageHandler(e) {
	if(subscriptions.has(e.data.message)) subscriptions.get(e.data.message)({data: e.data.data, ...e})
}

export {emit, subscribe, unsubscribe}
