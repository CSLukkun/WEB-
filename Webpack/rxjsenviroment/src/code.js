import { filter, map} from 'rxjs/operators';
import { of,pipe} from 'rxjs';

const nums = of(1, 2, 3, 4, 5);



const squareOddVals = pipe(
  filter((n) => n % 2 !== 0),
  map((n) => n * n)
);
// const squareOdd = squareOddVals(nums);
nums.subscribe((x) => console.log(x));

// const nums1 = of(1,2,3,4,5)
//                   .filter((n)=>n%2!==0)
//                   .map((n)=>n*n)
