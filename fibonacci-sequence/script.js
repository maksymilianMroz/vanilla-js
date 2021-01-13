let n1 = 1;
let n2 = 1;
let n3;

const fibonacci = (n) => {
    for (let i = 2; i < n; i++) {
        n3 = n2 + n1;
        n1 = n2;
        n2 = n3;
    }
    console.log(n3);
}

const fibb = (number) => {
    if (number <= 0) return console.log('Let\'s start from 1+');
    number <= 2 ? console.log(1) : console.log('nope');
};

fibb(0);