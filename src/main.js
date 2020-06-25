canvas = document.getElementById("screen")
screen = canvas.getContext("2d")

window.requestAnimationFrame(frame)

function frame() {
  screen.clearRect(0, 0, canvas.width, canvas.height)

  screen.fillStyle = "rgb(255,0,0)"
  screen.arc(100, 100, 50, 0, 360)
  screen.fill()

  window.requestAnimationFrame(frame)
}
