class Bird {
  constructor(x0, y0, x1=x0, y1=y0) {
    this.x0 = x0
    this.y0 = y0
    this.x1 = x1
    this.y1 = y1
  }

  draw(screen) {
    screen.fillStyle = "rgb(255,0,0)"
    screen.beginPath()
    screen.arc(this.x0, this.y0, 50, 0, 360)
    screen.fill()
  }

  update(dt) {
    let newY = 2*this.y0 - this.y1 + dt**2*9.81*300
    this.y1 = this.y0
    this.y0 = newY
  }

  flap(dt) {
    this.y1 = this.y0 + dt*1000
  }
}
