class Sprite {
  x: number;

  y: number;

  width: number;

  height: number;

  color: string;

  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 100,
    height: number = 100,
    color: string = '#f00',
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
