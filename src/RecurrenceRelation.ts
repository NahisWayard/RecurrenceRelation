type recChecker = (n: number) => number
type relationType = (t: recChecker, n: number) => number;

export class RecurrenceRelation {
    readonly relation: relationType;
    readonly init: number[];

    constructor(relation: relationType, init: number[]) {
        this.relation = relation;
        this.init = init;
    }

    get(n: number) {
        if (n <= this.init.length - 1)
            return this.init[n];

        const endRecChecker = (i: number) => {
            if (i <= this.init.length - 1)
                return this.init[i];
            return this.relation(endRecChecker, i);
        }

        return this.relation(endRecChecker, n);
    }
}