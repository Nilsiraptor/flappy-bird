canvas = document.getElementById("screen")
screen = canvas.getContext("2d")

screen.fillStyle = "rgb(255,0,0)"
screen.arc(100, 100, 50, 0, 360)
screen.fill()
