let frame

function handler(e) {
  if(e.origin !== "https://cuhumanities.az1.qualtrics.com") return
  frame.height = e.data
}

function register(f) {
  frame = f
}
window.addEventHandler("message", handler)
