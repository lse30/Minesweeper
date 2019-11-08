
function mapInit(size) {
    let map = [];

    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push('_');
        }
        map.push(row);
    }
    return map;
}

function MineMap(size, mines) {
    let mineLocations = new Set([]);
    let trueSize = size ** 2;

    while (mineLocations.size < mines) {
        mineLocations.add(Math.floor((Math.random() * trueSize)))
    }

    let map = mapInit(size);
    //console.log(map);

    mineLocations = Array.from(mineLocations);

    for (let i = 0; i < mineLocations.length; i++) {
        let x = Math.floor(mineLocations[i] / size);
        let y = mineLocations[i] % size;
        map[x][y] = 'M';
    }
    console.log(map)

}

function main()
{
    MineMap(10, 30);
}

main();