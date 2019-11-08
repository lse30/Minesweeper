
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



function addNums(map) {
    //adds numbers to the board based on surrounding mines
    let size = map.length;
    let count;

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            count = 0;
            if (map[x][y] !== 'M') {


                if (y > 0 && map[x][y - 1] === 'M') {
                    count++;
                }
                if (y < size - 1 && map[x][y + 1] === 'M') {
                    count++;
                }
                if (x > 0 && map[x - 1][y] === 'M') {
                    count++;
                }
                if (x < size - 1 && map[x + 1][y] === 'M') {
                    count++;
                }


                if (y > 0 && x > 0 && map[x - 1][y - 1] === 'M') {
                    count++;
                }
                if (y < size - 1 && x > 0  && map[x - 1][y + 1] === 'M') {
                    count++;
                }
                if (y > 0 && x < size - 1 &&  map[x + 1][y - 1] === 'M') {
                    count++;
                }
                if (y < size - 1 && x < size - 1 && map[x + 1][y + 1] === 'M') {
                    count++;
                }







                if (count !== 0) {
                    map[x][y] = count.toString();
                }

            }


        }
    }
    return map
}

function MineMap(size, mines) {
    //builds minesweeper map based on the size and number of mines
    let mineLocations = new Set([]);
    let trueSize = size ** 2;

    //randomly assign positions to mines
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
    //console.log(map)


    let finalmap = addNums(map);
    console.log(finalmap)
}

function main()
{
    MineMap(15, 40);
}

main();