/* eslint-disable comma-dangle */
// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Lives extends Sprite {
  constructor(
    x = 0,
    y = 0,
    width = 345,
    height = 20,
    color = '#CCCCCC',
    value = 3,
    font = "16px 'Press Start 2P', system-ui"
  ) {
    // we need to pass width=0 and height=0
    super(x, y, width, height, color);
    this.value = value;
    this.font = font;
  }

  render(ctx) {
    // overload
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.value}`, this.width, this.height);
  }

  reset() {
    this.value = 3;
  }
}

export default Lives;
