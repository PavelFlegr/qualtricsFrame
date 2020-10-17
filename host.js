function register(frame) {
  function handler(e) {
    console.log(e)
    if(e.origin !== "https://cuhumanities.az1.qualtrics.com") return
    this.height = e.data
  }

  window.addEventListener("message", handler.bind(frame))
}
