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

  fb.update(dt)

  screen.clearRect(0, 0, canvas.width, canvas.height)

  fb.draw(screen)

  window.requestAnimationFrame(frame)
}
