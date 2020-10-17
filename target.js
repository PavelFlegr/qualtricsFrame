addEventListener("resize", () => {
	parent.postMessage(document.documentElement.scrollHeight, "*")
})

parent.postMessage(document.documentElement.scrollHeight, "*")
