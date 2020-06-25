import "/src/bird.js"

var canvas = document.getElementById("screen")
var screen = canvas.getContext("2d")

var fb = new Bird(100, 100)

var t0 = Date.now()
window.requestAnimationFrame(frame)

function frame() {
  let t1 = Date.now()
  let dt = (t1 - t0)/1000
  t0 = t1

  let newY = 2*fb.y0 - fb.y1 + dt**2*9.81*300
  fb.y1 = fb.y0
  fb.y0 = newY

  screen.clearRect(0, 0, canvas.width, canvas.height)

  screen.fillStyle = "rgb(255,0,0)"
  screen.beginPath()
  screen.arc(fb.x0, fb.y0, 50, 0, 360)
  screen.fill()

  window.requestAnimationFrame(frame)
}
