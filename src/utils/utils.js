export function stopAtEdgeOfMap(prev, { left, top, right, bottom }) {
    if (prev.x < left) return { ...prev, x: prev.x + 2 }
    if (prev.x > right) return { ...prev, x: prev.x - 2 }
    if (prev.y > bottom) return { ...prev, y: prev.y - 2 }
    if (prev.y < top) return { ...prev, y: prev.y + 2 }
    return
}
