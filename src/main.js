canvas = document.getElementById("screen")
screen = canvas.getContext("2d")

x0 = 100
x1 = 100
y0 = 100
y1 = 100

t0 = Date.now()
window.requestAnimationFrame(frame)

function frame() {
  t1 = Date.now()
  dt = (t1 - t0)/1000
  t0 = t1

  newY = 2*y0 - y1 + dt**2*9.81*300
  y1 = y0
  y0 = newY

  screen.clearRect(0, 0, canvas.width, canvas.height)

  screen.fillStyle = "rgb(255,0,0)"
  screen.beginPath()
  screen.arc(x0, y0, 50, 0, 360)
  screen.fill()

  window.requestAnimationFrame(frame)
}
