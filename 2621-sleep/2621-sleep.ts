async function sleep(millis: number): Promise<void> {
    const promise = new Promise(resolve => setTimeout(() => resolve(millis), millis));

    return await promise.then(val => console.log(val));
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */