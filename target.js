addEventListener("resize", () => {
	console.log("resize")
	parent.postMessage(document.documentElement.scrollHeight, "*")
})

parent.postMessage(document.documentElement.scrollHeight, "*")
