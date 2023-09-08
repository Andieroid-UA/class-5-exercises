console.groupCollapsed('Exercise 3');

const mint = plant('Mint');
const basil = plant('Basil');

function plant(plant) {
    
    return function () {
        return `${plant}`;
    };
}

console.log(mint('Plant type:'));
console.log(basil('Plant type:'));

console.groupEnd();
