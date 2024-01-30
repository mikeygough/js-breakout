// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Score extends Sprite {
  constructor(
    x = 0,
    y = 0,
    width = 8,
    height = 20,
    color = '#1a1a1a',
    value = 0,
    font = '16px Arial'
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
    ctx.fillText(`Score: ${this.value}`, this.width, this.height);
  }

  reset() {
    this.value = 0;
  }
}

export default Score;
