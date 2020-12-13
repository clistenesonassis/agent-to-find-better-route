import Point from './Point';

let points = [];

points.push(new Point('p1', { p2: 1 }));
points.push(new Point('p2', { p1: 1, p3: 1, p10: 7 }));
points.push(new Point('p3', { p2: 1, p4: 0.8, p5: 0.8, p8: 3.5 }));
points.push(new Point('p4', { p3: 0.8 }));
points.push(new Point('p5', { p3: 0.8, p6: 5 }));
points.push(new Point('p6', { p5: 5, p7: 2, p8: 2.5 }));
points.push(new Point('p7', { p6: 2 }));
points.push(new Point('p8', { p3: 3.5, p6: 2.5, p9: 2, p10: 3 }));
points.push(new Point('p9', { p8: 2 }));
points.push(new Point('p10', { p8: 3, p11: 1.5, p12: 5 }));
points.push(new Point('p11', { p10: 1.5 }));
points.push(new Point('p12', { p10: 5 }));

console.log(points[0].point);
console.log(points[0].distances);