type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {  
    // Store `init` in a new variable
    let val = init;

    // If `nums` array's length is 0, forEach loop will not execute any iteration.
    // If the length of the `nums` array is greater than 0, in the first iteration of the loop, `val` will use the value of `init`
    nums.forEach(el => fn(val, el));    
    
    return val;
};