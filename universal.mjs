let subscriptions = new Map()

addEventListener("message", messageHandler)

function forEach(generator, callback) {
	for(let item of generator) {
  	callback(item)
  }
}
function* traverseFrames(frame) {
  for (let i = 0; i < frame.length;i++) {
		yield* traverseFrames(frame.frames[i])
    yield top.frames[i]
  }
}

function emit(message, data = null, targetOrigin = "*", transfer = []) {
  forEach(traverseFrames(top), f => f.postMessage({message, data}, targetOrigin, transfer))
}

function subscribe(message, callback) {
	subscriptions.set(message, callback)
}

function unsubscribe(message) {
	subscriptions.delete(message)
}

function messageHandler(e) {
	if(subscriptions.has(e.data.message)) subscriptions[e.data.message]({data: e.data, ...e})
}

export {emit, subscribe, unsubscribe}
