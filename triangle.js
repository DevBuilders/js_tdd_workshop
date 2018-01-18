class Triangle {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  isValid() {
    return this.x + this.y > this.z;
  }
}

export default Triangle;
