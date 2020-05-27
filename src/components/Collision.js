/**
 * Used to keep an object (x1-x2) within a boundary box (w1-w2)
 * @param {*} x1 Object left axis
 * @param {*} x2 Object right axis
 * @param {*} w1 Window left axis
 * @param {*} w2 Window right axis
 * @returns The distance from left edge of the window (w1) the left edge of the object (x1) should be
 */
export let keepInBoundsX = (x1, x2, w1, w2) => {
    if (x1 < w1) {
        return w1;
    } else if (x2 > w2) {
        return w2 - (x2 - x1);
    } else {
        return x1;
    }
}

export let collideBlock = (ballCenterX, ballCenterY, ballRadius, blockX, blockY, blockWidth, blockHeight) => {
    // x1 = ballCenterX
    // y1 = ballCenterY
    // x2 = blockX
    // y2 = blockY
    
    // x1 = ballCenterX
    // y1 = ballCenterY
    // x2 = blockX + blockWidth
    // y2 = blockY
    
    // x1 = ballCenterX
    // y1 = ballCenterY
    // x2 = blockX
    // y2 = blockY + blockHeight
    
    // x1 = ballCenterX
    // y1 = ballCenterY
    // x2 = blockX + blockWidth
    // y2 = blockY + blockHeight
    
    // x1 = 7
    // y1 = 2
    // x2 = 5
    // y2 = -3
    if (
        Math.hypot(blockX - ballCenterX, blockY - ballCenterY) <= ballRadius ||
        Math.hypot((blockX + blockWidth) - ballCenterX, blockY - ballCenterY) <= ballRadius ||
        Math.hypot(blockX - ballCenterX, (blockY + blockHeight) - ballCenterY) <= ballRadius ||
        Math.hypot((blockX + blockWidth) - ballCenterX, (blockY + blockHeight) - ballCenterY) <= ballRadius
    ) {
        return true;
    }
    return false;
}