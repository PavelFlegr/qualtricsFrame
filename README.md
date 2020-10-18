# qualtricsFrame
universal.mjs is a lightweight hierarchy-independent window.postMessage wrapper. It is a subscribe-emit style API. It sends all messages to every available iframe, while still allowing usage of targetOrigin to ensure security. received messages are the same as postMessage ones. The other files are kinda pointless

exported methods:
setScope(scope) - to avoid conflicts with other sytems using postMessage
scope - sufficiently unqiue name

subscribe(message, callback) - subscribe to a message
message - message type
callback - passes 1 parametr: EventMessage from message event listener

emit(message, data, targetOrigin, [transfer]) - send a message
message - message type
data
targetOrigin - only send to iframes with this origin, default('*') means send to everyone

transfer - an array of Transferable, if you have a use for it (I don't)

# usage
```
import * as messaging from "https://pavelflegr.github.io/qualtricsFrame/universal.mjs"

messaging.setScope("a")
window.onload = send

messaging.subscribe("newData", (e) => console.log(e.data.data))

function send() {
	messaging.emit("hello", "fukc", "*")
}
```
