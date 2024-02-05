/* eslint-disable comma-dangle */
/* eslint-disable lines-between-class-members */
// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

class Brick extends Sprite {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  status: number;

  constructor(
    x: number,
    y: number,
    width: number = 75,
    height: number = 20,
    color: string = '#0095DD',
    status: number = 1
  ) {
    super(x, y, width, height, color);
    this.status = status;
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

export default Brick;
