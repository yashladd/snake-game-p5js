class Snake {
  constructor() {
    this.body = [];
    this.len = 1;
    this.body[0] = createVector(0, 0);
    this.xdir = 0;
    this.ydir = 0;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }

  grow() {
    this.len++;
    this.body.push(createVector(0, 0));
  }

  eat(pos) {
    let x = this.body[0].x;
    let y = this.body[0].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }
}
