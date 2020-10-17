addEventListener("resize", () => {
	postMessage(document.documentElement.scrollHeight, "*")
})

postMessage(document.documentElement.scrollHeight, "*")
