const solution = (s) => {
    let pCount = 0;
    let yCount = 0;
    s.toLowerCase().split('').forEach((i) => {
        if (i === 'p') pCount++;
        if (i === 'y') yCount++;
    })
    return pCount === yCount ? true : false;
}