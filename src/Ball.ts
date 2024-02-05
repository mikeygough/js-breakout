// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

class Ball extends Sprite {
  x: number;

  y: number;

  radius: number;

  color: string;

  dx: number;

  dy: number;

  constructor(
    x: number = 0,
    y: number = 0,
    radius: number = 10,
    color: string = '#999999',
  ) {
    // we need to pass width=0 and height=0
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  move(): void {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx: CanvasRenderingContext2D): void {
    // overload
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
