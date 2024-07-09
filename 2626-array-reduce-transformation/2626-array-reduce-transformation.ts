type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {  
    if(!nums.length){
        return init;
    }

    let calculatedVal = 0;
    nums.forEach((el, i) => {
        let val = i === 0 ? init : calculatedVal;
        calculatedVal = fn(val, el);
    })

    return calculatedVal;
};