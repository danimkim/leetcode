type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {        
        let val = x;             
        functions.reverse().forEach((func, i) => {            
            val = func(val);                           
        })
        return val;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */