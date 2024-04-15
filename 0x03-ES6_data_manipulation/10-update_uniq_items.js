export default function updateUniqueItems(map) {
    // Check if the argument is a map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate over each entry in the map
    map.forEach((quantity, item) => {
        // If quantity is 1, update it to 100
        if (quantity === 1) {
            map.set(item, 100);
        }
    });
}
