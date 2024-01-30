/* eslint-disable comma-dangle */
/* eslint-disable lines-between-class-members */
// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(
    x,
    y,
    width = 75,
    height = 20,
    color = '#0095DD',
    status = 1
  ) {
    super(x, y, width, height, color);
    this.status = status;
  }

  render(ctx) {
    // overload
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
