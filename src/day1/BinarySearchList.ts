export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2);
        const value = haystack[middle];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = middle;
        } else {
            low = middle + 1;
        }
    } while (low < high);

    return false;
}
