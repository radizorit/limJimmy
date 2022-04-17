function binaryGap(n) {
    //Switch to binary
    //Will need to split it into an array
    const binaryArray = n.toString(2).split('');
    //Need a starter to compare rest of loop (local count)
    //Max count
    let globalMax = 0
    let placementSaver = []
    //Will need to iterate through the binary
    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] == 1) {
            placementSaver.push(i)
        }
    }

    for (let i = 0; i < placementSaver.length - 1; i++) {
        globalMax = Math.max(placementSaver[i + 1] - placementSaver[i], globalMax)
    }
    return globalMax
    //Return max count
};