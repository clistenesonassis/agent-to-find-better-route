import CostTable from './CostTable';

interface iDistance {
    p1?: number,
    p2?: number,
    p3?: number,
    p4?: number,
    p5?: number,
    p6?: number,
    p7?: number,
    p8?: number,
    p9?: number,
    p10?: number,
    p11?: number,
    p12?: number,
}

class Point {
    public point: string;
    public distances: iDistance;

    constructor(point: string, distances: iDistance) {
        this.point = point;
        this.distances = distances;
    }

    public calc = (costHistoryProp: number, end: number, remake?: string) => {
        let bestTotalCost: number;
        let history: number;
        let pointTmp: number;
        let costHistory: number = costHistoryProp;

        if (remake) {
            costHistory += -this.distances[remake];
            delete this.distances[remake];
        }

        for (const [key, value] of Object.entries(this.distances)) {
            if(!value) continue;

            const destinationPoint = Number(key.split('p')[1]);

            let cost = costHistory + value + CostTable[destinationPoint -1][end -1];

            if (bestTotalCost === undefined) {
                pointTmp = destinationPoint;
                bestTotalCost = cost;
                history = costHistory + value;
            }
            else if (bestTotalCost > cost) {
                pointTmp = destinationPoint;
                bestTotalCost = cost;
                history = costHistory + value;
            }
        }

        return { history: history, bestCost: bestTotalCost, point: pointTmp }
    }
}

export default Point;