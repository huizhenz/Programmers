const solution = (cipher, code) => {
    const string = [...cipher].map((str, idx) => (idx + 1) % code === 0 ? str : '');
    return string.join('');
}