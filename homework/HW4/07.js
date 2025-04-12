class Vector {
  constructor(components) {
    this.components = components;
  }

  add(vector) {
    const result = this.components.map((val, i) => val + vector.components[i]);
    return new Vector(result);
  }

  sub(vector) {
    const result = this.components.map((val, i) => val - vector.components[i]);
    return new Vector(result);
  }

  dot(vector) {
    return this.components.reduce((sum, val, i) => sum + val * vector.components[i], 0);
  }let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b).sub(b).dot(b));  
}
