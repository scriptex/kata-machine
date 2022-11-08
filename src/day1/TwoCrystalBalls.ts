export default function two_crystal_balls(breaks: boolean[]): number {
    const amount = Math.floor(Math.sqrt(breaks.length));

    let i = amount;

    for (; i < breaks.length; i += amount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= amount;

    for (let j = 0; j < amount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
