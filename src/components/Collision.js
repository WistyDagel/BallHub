/**
 * Used to keep an object (x1-x2) within a boundary box (0-w)
 * @param {*} x1 Object left axis
 * @param {*} x2 Object right axis
 * @param {*} w Width of window
 * @returns The coordinate from left edge of window (0) the object should be
 */
export let keepInBoundsX = (x1, x2, w) => {
    if (x1 < 0) {
        return 0;
    } else if (x2 > w) {
        return w - (x2 - x1);
    } else {
        return x1;
    }
}

export let collideBlock = (ballCenterX, ballCenterY, ballRadius, blockX, blockY, blockWidth, blockHeight) => {
    if (
        Math.hypot(ballCenterX, blockX, ballCenterY, blockY) <= ballRadius ||
        Math.hypot(ballCenterX, blockX + blockWidth, ballCenterY, blockY) <= ballRadius ||
        Math.hypot(ballCenterX, blockX, ballCenterY, blockY + blockHeight) <= ballRadius ||
        Math.hypot(ballCenterX, blockX + blockWidth, ballCenterY, blockY + blockHeight) <= ballRadius
    ) {
        return true;
    }
    return false;
}