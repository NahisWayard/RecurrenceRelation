import {RecurrenceRelation} from "./RecurrenceRelation";

const r1 = new RecurrenceRelation((t, n) => -2 * t(n - 1) - t(n - 2),[3, -4]);
const r2 = new RecurrenceRelation((t, n) => -2 * t(n - 1) - t(n - 2),[2, -1]);

console.log(r1.get(4));
console.log(r2.get(4));