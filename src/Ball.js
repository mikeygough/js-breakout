// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(x = 0, y = 0, radius = 10, color = '#999999') {
    // we need to pass width=0 and height=0
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx) {
    // overload
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
