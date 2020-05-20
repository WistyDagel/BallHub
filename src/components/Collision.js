export let keepInBoundsX = (x1, x2, w) => {
    // x1 -> left edge axis
    // x2 -> right edge axis
    // w -> right boundary (0 is left boundary)
    if (x1 < 0) {
        return 0;
        console.log("out of bounds left");
    } else if (x2 > w) {
        return w - (x2 - x1);
        console.log("out of bounds right");
    } else {
        return x1;
        console.log("in bounds");
    }
}