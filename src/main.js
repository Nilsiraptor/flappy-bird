import "/src/bird.js"

var canvas = document.getElementById("screen")
var screen = canvas.getContext("2d")

document.addEventListener("keypress", keyPressed)
canvas.addEventListener("touchstart", touched)
var flap = false

var fb = new Bird(100, 100)

var t0 = Date.now()
window.requestAnimationFrame(frame)

function frame() {
  let t1 = Date.now()
  let dt = (t1 - t0)/1000
  t0 = t1

  if (flap) {
    fb.flap(dt)
    flap = false
  }

  fb.update(dt)

  screen.clearRect(0, 0, canvas.width, canvas.height)

  fb.draw(screen)

  window.requestAnimationFrame(frame)
}

function keyPressed(k) {
  if (k.code == "Space") {
    flap = true
  }
}

function touched(e) {
  flap = true
}
