// Upper half
for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 1; j <= 5 - i; j++) {
        line += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += '*';
    }
    console.log(line);
}

// Lower half
for (let i = 4; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= 5 - i; j++) {
        line += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        line += '*';
    }
    console.log(line);
}
