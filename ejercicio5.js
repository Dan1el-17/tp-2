let numbers = []

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    numbers.push(randomNumber);
}

console.log(numbers)