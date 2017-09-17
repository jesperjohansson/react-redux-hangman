import React from 'react';
import PropTypes from 'prop-types';
import { CANVAS, RULES } from '../../constants';

class Canvas extends React.Component {
  static propTypes = {
    wrong: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  componentDidMount() {
    this.getContext();
    this.drawGround();
    this.drawGallow(CANVAS.GALLOW);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.wrong.length === this.props.wrong.length) return false;
    if (nextProps.wrong.length > RULES.CHANCES) return false;
    return true;
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  getContext() {
    this.ctx = this.node.getContext('2d');
    this.ctx.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT);
    this.ctx.scale(2, 2);
    this.ctx.strokeStyle = CANVAS.STROKE_COLOR;
  }

  drawGround(width = 80) {
    this.ctx.beginPath();
    this.ctx.arc(
      width,
      CANVAS.CTX_HEIGHT + (width / 2),
      width,
      0,
      Math.PI,
      true,
    );
    this.ctx.stroke();
  }

  drawGallow({ LEFT, BOTTOM, WIDTH, HEIGHT, ROPE_LENGTH }) {
    this.ctx.beginPath();
    this.ctx.moveTo(LEFT, BOTTOM);
    this.ctx.lineTo(LEFT, BOTTOM - HEIGHT);
    this.ctx.lineTo(LEFT + WIDTH, BOTTOM - HEIGHT);
    this.ctx.lineTo(LEFT + WIDTH, (BOTTOM - HEIGHT) + ROPE_LENGTH);
    this.ctx.stroke();
  }

  drawHead = ({ TOP, LEFT, WIDTH }, ctx) => {
    ctx.beginPath();
    ctx.moveTo(LEFT + WIDTH, TOP + WIDTH);
    ctx.arc(
      LEFT,
      TOP + WIDTH,
      WIDTH,
      0,
      2 * Math.PI,
    );
    ctx.stroke();
  }

  drawBody = ({ TOP, LEFT, HEIGHT }, ctx) => {
    ctx.beginPath();
    ctx.moveTo(LEFT, TOP);
    ctx.lineTo(LEFT, TOP + HEIGHT);
    ctx.stroke();
  }

  drawLeftArm = ({ TOP, LEFT, WIDTH }, ctx) => {
    ctx.beginPath();
    ctx.moveTo(LEFT, TOP);
    ctx.lineTo(LEFT - WIDTH, TOP + (WIDTH / 2));
    ctx.stroke();
  }

  drawRightArm = ({ TOP, LEFT, WIDTH }, ctx) => {
    ctx.beginPath();
    ctx.moveTo(LEFT, TOP);
    ctx.lineTo(LEFT + WIDTH, TOP + (WIDTH / 2));
    ctx.stroke();
  }

  drawLeftLeg = ({ TOP, LEFT, WIDTH }, ctx) => {
    ctx.beginPath();
    ctx.moveTo(LEFT, TOP);
    ctx.lineTo(LEFT - WIDTH, TOP + (WIDTH));
    ctx.stroke();
  }

  drawRightLeg = ({ TOP, LEFT, WIDTH }, ctx) => {
    ctx.beginPath();
    ctx.moveTo(LEFT, TOP);
    ctx.lineTo(LEFT + WIDTH, TOP + (WIDTH));
    ctx.stroke();
  }

  drawings = [
    ctx => this.drawHead(CANVAS.HEAD, ctx),
    ctx => this.drawBody(CANVAS.BODY, ctx),
    ctx => this.drawLeftArm(CANVAS.LEFT_ARM, ctx),
    ctx => this.drawRightArm(CANVAS.RIGHT_ARM, ctx),
    ctx => this.drawLeftLeg(CANVAS.LEFT_LEG, ctx),
    ctx => this.drawRightLeg(CANVAS.RIGHT_LEG, ctx),
  ];

  updateCanvas() {
    this.lives = RULES.CHANCES - this.props.wrong.length;
    const nextDrawingIndex = (this.drawings.length - this.lives) - 1;
    this.drawings[nextDrawingIndex](this.ctx);
  }

  render() {
    return (
      <canvas
        ref={(node) => { this.node = node; }}
        width={CANVAS.WIDTH}
        height={CANVAS.HEIGHT}
        style={{ width: CANVAS.WIDTH / 2, height: CANVAS.HEIGHT / 2 }}
      />
    );
  }
}

export default Canvas;
