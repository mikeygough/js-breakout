// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

class Paddle extends Sprite {
  x: number;

  y: number;

  width: number;

  height: number;

  color: string;

  constructor(
    x: number,
    y: number,
    width: number = 75,
    height: number = 10,
    color: string = '#3B86F7',
  ) {
    super(x, y, width, height, color);
  }

  render(ctx: CanvasRenderingContext2D): void {
    // overload
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
