/* eslint-disable comma-dangle */
// eslint-disable-next-line import/extensions
import Sprite from './Sprite';

class Lives extends Sprite {
  x: number;

  y: number;

  width: number;

  height: number;

  color: string;

  value: number;

  font: string;

  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 345,
    height: number = 20,
    color: string = '#CCCCCC',
    value: number = 3,
    font: string = "16px 'Press Start 2P', system-ui"
  ) {
    // we need to pass width=0 and height=0
    super(x, y, width, height, color);
    this.value = value;
    this.font = font;
  }

  render(ctx: CanvasRenderingContext2D): void {
    // overload
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.value}`, this.width, this.height);
  }

  reset(): void {
    this.value = 3;
  }
}

export default Lives;
