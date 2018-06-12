const Numpy = require('./numpy');
const np = new Numpy();

async function init() {
    try {
        let startTime = new Date().getTime();
        let arr = await np.arange(10, 10240, 2);
        let max = await np.max(arr);
        let sum = await np.sum(arr);
        let std = await np.std(arr);
        let min = await np.min(arr);
        let mean = await np.mean(arr);
        console.log(`max -> ${max}`);
        console.log(`min -> ${min}`);
        console.log(`sum -> ${sum}`);
        console.log(`std -> ${std}`);
        console.log(`mean -> ${mean}`);
        console.log(`arange array length -> ${arr.length}`);
        let endTime = new Date().getTime();
        console.log(`It took ${(endTime - startTime) / 1000}s to finnish`);
    } catch(e) {
        console.error(e.error);
    }
}
init();
