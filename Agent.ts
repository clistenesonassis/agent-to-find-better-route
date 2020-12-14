import Point from './Point';
import LoadPoints from './LoadPoints';

class Agent {
    private costHistory: number;
    private startingPoint: number;
    private endPoint: number;
    private tracking: number[];
    private points: Point[];

    constructor(start: number, end: number) {
        this.startingPoint = start;
        this.endPoint = end;
        this.costHistory = 0;
        this.tracking = [];
        this.tracking.push(start);
        this.points = LoadPoints.get();

        this.calcRoute();
    }

    calcRoute = (remake?: string) => {
        const { history, bestCost, point } = this.points[this.startingPoint -1].calc(this.costHistory, this.endPoint, remake);

        const analyze = this.analyze(point);

        if (analyze) {
            return this.calcRoute('p' + analyze);
        }

        this.costHistory = history;
        this.startingPoint = point;
        this.tracking.push(point);

        if (point !== this.endPoint) return this.calcRoute();

        this.result();
    }

    analyze = (point: number) => {
        if (this.tracking[this.tracking.length -2] === point) {
            const remove = this.tracking.pop();
            this.startingPoint = point;
            return remove;
        }

        return 0;
    }

    result = () => {
        console.log("melhor rota: ", this.tracking.join(' -> '));
        console.log("custo da melhor rota: " + this.costHistory + "km");
    }
}

export default Agent;