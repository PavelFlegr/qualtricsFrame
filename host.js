function register(frame) {
  function handler(e) {
    if(e.origin !== "https://cuhumanities.az1.qualtrics.com") return
    frame.height = e.data
  }
  
  window.addEventHandler("message", handler)
}
