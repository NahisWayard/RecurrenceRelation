import {RecurrenceRelation} from "./RecurrenceRelation";

const r1 = new RecurrenceRelation((t, n) => -2 * t(n - 1) - t(n - 2));
const r2 = new RecurrenceRelation((t, n) => 3 * t(n - 2),[2, -1]);

console.log(r1.hasSolution(2, [3,-4,5,7,-8,9,-10]))
console.log(r2.hasSolution(2, [2,-1,6,-3,18,-9,54,-27,162]))