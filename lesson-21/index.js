class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radiusCircle() {
        return `${this.radius}`;
    }
    set radiusCircle(radius) {
        return `${this.radius = radius}`;
    }
    get diameter() {
        return `${this.radius * 2}`;
    }
    getAreaOfCircle() {
        return `${Math.PI *  this.radius ** 2}`;
    }
    geLengthOfCircle() {
        return `${2 * Math.PI * this.radius}`;
    }
}
const myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.radiusCircle);
console.log(myCircle.diameter);
console.log(myCircle.getAreaOfCircle());
console.log(myCircle.geLengthOfCircle());