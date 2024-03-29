/* eslint-disable comma-dangle */
class Background {
  constructor(
    canvas,
    colorOne = '#fee08b',
    colorTwo = '#ffffbf',
    colorThree = '#e6f598'
  ) {
    this.canvas = canvas;
    this.colorOne = colorOne;
    this.colorTwo = colorTwo;
    this.colorThree = colorThree;
  }

  render(ctx) {
    // overload
    const gradient = ctx.createLinearGradient(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    // Add three color stops
    gradient.addColorStop(0, this.colorOne);
    gradient.addColorStop(0.5, this.colorTwo);
    gradient.addColorStop(1, this.colorThree);
    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Background;
