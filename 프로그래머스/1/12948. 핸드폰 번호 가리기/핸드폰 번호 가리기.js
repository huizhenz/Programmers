const solution = (phone_number) => {
    return [...phone_number].map((num, i) => phone_number.length - 4 > i ? '*' : num).join('');
}