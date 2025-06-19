for(let i=1;i<=8;i++){
    console.log('* '.repeat(8));
}

const n = 8; 
for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(spaces + stars);
}
for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(spaces + stars);
}
for (let i = n; i >= 1; i--) {
    let spaces = ' '.repeat(n - i);
    let stars = '* '.repeat(i);
    console.log(spaces + stars);
}