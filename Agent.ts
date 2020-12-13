import Point from './Point';

class Agent {
    private costHistory: number;
    private startingPoint: number;
    private endPoint: number;
    private points: Point[];
    private tracking: number[];

    constructor(start: number, end: number) {
        this.startingPoint = start;
        this.endPoint = end;
        this.costHistory = 0;
        this.tracking = [];

        this.tracking.push(start);

        this.points = [];
        this.points.push(new Point('p1', { p2: 1 }));
        this.points.push(new Point('p2', { p1: 1, p3: 1, p10: 7 }));
        this.points.push(new Point('p3', { p2: 1, p4: 0.8, p5: 0.8, p8: 3.5 }));
        this.points.push(new Point('p4', { p3: 0.8 }));
        this.points.push(new Point('p5', { p3: 0.8, p6: 5 }));
        this.points.push(new Point('p6', { p5: 5, p7: 2, p8: 2.5 }));
        this.points.push(new Point('p7', { p6: 2 }));
        this.points.push(new Point('p8', { p3: 3.5, p6: 2.5, p9: 2, p10: 3 }));
        this.points.push(new Point('p9', { p8: 2 }));
        this.points.push(new Point('p10', { p8: 3, p11: 1.5, p12: 5 }));
        this.points.push(new Point('p11', { p10: 1.5 }));
        this.points.push(new Point('p12', { p10: 5 }));

        this.calcRoute();
    }

    calcRoute = (remake?: string) => {
        const { history, bestCost, point } = this.points[this.startingPoint -1].calc(this.costHistory, this.endPoint, remake);

        if (this.backing(point)) {
            const remove = this.tracking.pop();
            this.startingPoint = point;
            return this.calcRoute('p' + remove);
        }

        this.costHistory = history;
        this.startingPoint = point;
        this.tracking.push(point);

        if (point !== this.endPoint) return this.calcRoute();

        console.log("melhor rota: ", this.tracking.join(' -> '));
        console.log("custo da melhor rota: " + this.costHistory + "km");
    }

    backing = (point: number) => {
        return this.tracking[this.tracking.length -2] === point;
    }
}

export default Agent;