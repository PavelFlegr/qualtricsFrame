function handler(e) {
  if(e.origin !== "https://cuhumanities.az1.qualtrics.com") return
  frame.height = e.data
}

function register(frame) {
  window.addEventHandler("message", handler)
}
