function a(a, ...rest) {
    console.log(rest);
}

a(1, { a: 1, s: 2 }, { a: 1, s: 2 });