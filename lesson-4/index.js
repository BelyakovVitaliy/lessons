const arr = [
    {
        name: 'Base knowledge',
        levelNum: 1,
        cost:100,
        tags: [
            '#jsBase',
            '#JSForBeginners'
        ]
    },
    {
        name: 'CSS for JS developer',
        levelNum: 2,
        cost: 300,
        tags: [
            '#CSS'
        ]
    }
];

//REDUCE
const myReduce = (arr, callbackfn, initValue) => {
    let res = initValue;
    arr.forEach(element => {
        res = callbackfn(res, element);
    });
    return res;
}

//MAP 
const myMap = (arr, callbackfn) => {
    let res = []
    arr.forEach((element, i, arr) => {
        res.push(callbackfn(element, i ,arr))
    })
    return res
}

// SIMPLE TESTS

//REDUCE
// 1. Сложить все стоимости уровней
const constCounterFunc = (prevV, currentV)  => {
    debugger
    return prevV + currentV.cost;
}
console.log("Reduce - constCounterFunc:", arr.reduce(constCounterFunc, 0));

console.log("MyReduce - constCounterFunc:", myReduce(arr, constCounterFunc, 0));

// 2. Сцепить все названия в строку
const nameCommaCollector = (prevV, currentV) => {
    return !prevV ?  currentV.name : prevV + ', ' + currentV.name
}

console.log("Reduce - nameCommaCollector:", arr.reduce(nameCommaCollector, ''));

console.log("MyReduce - nameCommaCollector:", myReduce(arr, nameCommaCollector, ''));

//MAP 
// 1. Извлечь массивы с тегами из объекта
const tagExtractorFunc = (currentV) => {
    return currentV.tags;
}
console.log("Map:", arr.map(tagExtractorFunc));

console.log("MyMap:", myMap(arr, tagExtractorFunc));
