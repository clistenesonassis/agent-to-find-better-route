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

    calc = () => {
        
    }
}

export default Point;