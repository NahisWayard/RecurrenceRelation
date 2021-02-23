const world = 'world';

type recChecker = (n: number) => number
type relationType = (t: recChecker, n: number) => number;

function getN(r: relationType, n: number, init: number[]) {
  if (n <= init.length - 1)
    return init[n];

  const endRecChecker = (i: number) => {
    if (i <= init.length - 1)
      return init[i];
    return r(endRecChecker, i);
  }
  
  return r(endRecChecker, n);
}

const t1: relationType = (t: recChecker, n: number): number => -2 * t(n - 1) - t(n - 2);
const t2: relationType = (t: recChecker, n: number): number => 3 * t(n - 2);

console.log(getN(t1, 3, [3, -4]));
console.log(getN(t2, 3, [2, -1]));