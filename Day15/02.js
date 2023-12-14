const input = `
.O..........O.....O.#................#..O#.#......O...O.O...#....#...O.#...#O.O....#.#.........O....
...##OO.#O#......#.#..OO.O....###..#..O..#.O.OO...O.........O......O.O##.O..O.O..#O.#..O...#.OOO.O.O
#.O..OO.O..O.#.#..#.O.O..#..O...........O.OOOO...#..O.......O...O#......O.O..##O...O........#.......
...O...#..O.OO##.O#..O.#O..#....O....#...O.......O.O....#..##.....O.##.#.OOO.......OO......O....O.O.
....O...#..###..O.....O.#O.###..#O..O.....O.#.##OO..OO.O#.OO.#.....O....#.#O##.O.O.O...#O..O.#O.OOOO
#O.........OO....#.....O#..#.##........O..O#........#........O#O.O.O..#..OO.#O.#......O.#O..........
..OOO.O.#.#.O.#...O.#...O..O.O...#O.#O#O.#......OOO.O.#.....OOO.###.....OO#.#OO...##.....#O#....#...
.O...O#.....O..O...#.#.....O.O......#.....O....#.#OOO..#O........O.O...O..O##.O.....#..#.O..#O.#....
#.OO..#.O.......O.O.O##.O.O...................##.......#.........OO#.O....##..O.O..O.#.....O#..#.#..
#OOO..OOO.OO.#....#.O.....##.....O..#.OO#O.#..#..O..#..O.O...O....#..#...O.####..#O#.O....#.O.O.#...
OO..O.#O..O.O#O..#......O.#O...#....O........O....#..O.#O....#....O..#....O..OO##O#......#O.O.O..#O#
..O..##.......O.....##....O#..........#.#.O.##.......#.OO.#.#..O.#...O.....#OO.....O.O.O#........O.O
#..O....#.#..#O...#...#.....OO#..#.#.O..OO....#.#.O...O...O....O..#.#..O.#O.....O..##.O.O..O....#.##
O##.......##.OO..O.#.O..O.O#......O..OOO.....O...OO...O...#.O.O#..O..O.##O.#.....O..O.#O.#...O..O.OO
#O..O....OO.#..#.O...O.O.....O##......O.......O...#.#.....#..O........O.O...O....#O#..O.....#.O....O
O.......#...O...O.O...O....O.......O..#.#.O.##.......O#..O#....O###.O....#...OO...#.#......#........
....O.#.O##...#O..#OO.........O...O#O..O.....#..#...#........#....#..O.##......#.....O.O..OOOO..#...
....#....O#..#..O..........O....OO...O....O.....O.O#..OOO..O.O#..#...O#..#OO.O.O.O.O##.#...##....#..
.#..OO..OO.O#......#OO.O.O.#..O...##.#.....O......#....#..O#OO.#.....#..OO.O#O...#....#...O###O..OO#
#OO..#.O.O##.O......O..O......O.O.....O..O...#.O..O#..OOO.#O#O.#.#.#...##.#.O.O.......O....#..O..#O.
#.#...#....#.#..#.O.####.O...#O#.#....#O..........O.OO...#...........#.#.#..OO.#O..#..#O.O.O..#.O...
.O.##..#...OOO#O#..##.#O....O..#.O.#.#.OO.#..#...O.##...#......O#O#OOO.OO.#...O.O.......#O.O.OOOO##.
......O.........#..O...#...O.#O...#O.O#....#.O..O.OO...OO.O..O#.##...#...#......#.#.O...O#..##.OO.O.
O........O#.O#......O#...#..O#..OO....#.....OOO..O.O...#.O##..#...O..O.....................OOO......
OO...#O....OOO.O.O....#.O..O##OO..O.....#..O#.....#....O.....O..#...OO..#....OO#.#.O.....OOO#..O.OOO
.....#.##..O#O....O#...#.......##.#..O..............#..#...O.OO......#.......O#....#..O.#..#.O..#..#
.#.O.....O##O.#.#.#O.#.....#.......O...O.......#O.O.....O#O#O..#O..#O......OO...O#.O..O....##..O....
.......#.O.O#O#..##..#.OOOO.OO.##.#OO.#O#..O...O..OO.O.#.O#..O#O#O.O....#O.......OO..O...#...O.#....
#O.#...OO#.OO......O.O.O....#O....#O#O....O#..#O#.#....O#.##.#..O.......OO..O..O#OO#O....O#....##..#
..O.OO.O......O.OO....O#...O#O#.O##.....#OO...O....O.##..##..O.O.#..O##O.#O##.#.OOO.#.###..#OO...#O.
O....O..OO#O#...##.....OO....#..O...O.##.......O..#..##OO......#..O.....#..O.#...#.#..O..##O.......O
##.#..#..#..O.....O.#.##.......#.##........#....#.....O.....O.O#O..O.#O.#..#.#O.....O..O..#.O....OOO
.O.#O.#...O..#.......#..#O..#.O.OO...O..O...O.O..O...#..##OO..#......###O#.O..O..#.##........#....#O
..O....##...O#OOO.#O...#..O.O.#.O....##..#.#.O.OO..O#OO....O..OO.OO#......O.O........O.#O.....O#.O..
.OO#...#.OO.OO#.#...OO#.OOOO.O..O.#.OOO....#.OO...O.##..OO#OO.......#O.....O..##....O#.#.OO...O...#.
..#O.OO.O.#O.#...#.....O.#.#..##..O..##...OO#....#.#....O....##..O.........#...OOO..O..#O.....#...#.
#.O.....#..O...OO#....OO....##.....#.........O.O#.O.##.#OO..#.....#O..O............#.....#.......OO.
O..O.#.....O#.O..#O.........##O##..#........#..OO.....#.#...O....O..#.O......#O....OO.........#..OOO
O....#...O...#..........O..O#OO..#O..OO.#OOO....#..####OO#........#O...##.O...#.......OO.O#.....#..#
.#............#.#OOO..O##O...OO..O.#.O...O#O..#.##O..OO.#.O..OOO...#O.#.#O.....#..O...###O..#..#....
.....O.OOOOO..#.#OO...O.O.......#OO...#....OOO#......O...O.....O.#.........OOOO.......O......#.OO...
...#..O...O..O.#O.#O....##OO.O...O....O#....O...O....O#.O..#OO#.......#.O.............#.#O..........
..#.###...O#..O.#.O..#OO.O.OO...#.......O..#...OOO#O.....OO.###...O.#O.OO.O..O#O....O#.#...#...O..O.
..O.#...#...O#.O..#....#.O..O...#O....O.O..#..OO.........O#O.O.#..#O.#..O.O##..O..O......O#...O..#.#
O.O..O..O##.#O##O.#.O..OOO.......#..OO.O.##.#O.OOO.....O.O.O....O..#OO..O.....#O.....#....O..O..O#.O
.#...O.O..O....O...#O#.#O.##...#...#..O.OO#.....#O.O#....O#.##.O.O.O..#OO####......O#O....O......O#O
##.O..#...O....#....#.##.O.........O.##.O..#...#O..#.....O...#.O#........#.O#..OO...#.#OO...#....#..
.O...#O.O...O..#O.O#OO.#.....O.....##O..#.#..OO.O#.##.#.###O...OO....O....#.O.#...O...O....O.#..#..#
.O#....O.#......O...##.O...O.#.O#OO.....O#O.#.O..O.#O..#..#.....O..O.#.O..O..#....O..O#OO...##O.O...
.O.....#O#.......##O.......#O.O........OOO.......#.O#..#.......O....##....#.#O.......O.....O#....#OO
..#.#.OO.#.O.....O#.....#..O...OO.....OO.......O.O##..#.........#........O.O#O.....##...##..........
#O...............O.O.#.....O#O.....O..#.O....OO#O.O...##.....#.O#....O#..OOO.O.#.OO.#..#O#.O.####.#.
O#O.#.O#O...O.....#.O........#..O.....#..O.O..#.#.O.O#....O........O.O...O....O#...#OO#..O.###.O#.O.
..OO......#......#..O...O#O#..#O.#.#.#......#.....#.#..#...O.....#.O#O.OO...#O...#..#..OO.#...O.O#..
..#....O.............O#.#O.....##......O#O.O#.#O##..OO..##O.#O......O#O.O.#O#.#.#.#.#..#....OO.....O
...........#..O.O#.......O...#..O.O#..O.#....#...O...O.#.OO.....#....#..#...#..O...O.#......O#O.O.#.
.O#..O..O#..O.....O.#..#.#...O...O..O.OO.#...O.O......O.......OOO..#.#O..#....O..#O#...#.OO.O...#OO.
O.OO..O.....#.OOO...........O..#...........O........OO.#...O..#.O..O..O....#..##....O#.OO.OOO..##O##
..OOO.#...O#O###.OO...O..#.#.OO..O....O...#..#.#.#...O...##..O..OO##..OO...#....#...#.O.O.O..#......
..O..O.##O#.O..##.O..OO..O....#.#.O..#OO...O..O#.#.........O.......O#.OO........##....O..O#...#...#.
..#...O#O....OO.#...O#......#.O.O#O...#.O.#O.......O....#..O.#.....#...OO.O.#O..#....O..#..O.O#.#..O
.O.......#.OO....O.OO..##.#O#.O.O.#OOO.##.O.O...#.O....O#O#O..#..O.O......O#..O...#....#...#.#.O#...
....O.....O..O...O.#OOO.OO...O...O.O.#.....O#......OOO.OOO.#..##..#..OO............O.O.....O...O....
O#O..O.OOO......O...O...OO.O.....O#.O..#...O##.OOO.#...O.#.O#O....#O.#..#....O.O#....O.O...O.O.O...O
....#.O#.....O.#.#O.........#...#O...O.O#OO...#.......#O...#...........O..O.....O...O#.#O...#..O..O.
.#....#.......#..O#O..O.......O#O....O.O..##.O..O....O#..O.O..O....O#..OOO.O..O.#.#....##.##O.O.O.O.
...O##.OO........OO#.O..O....O.#.O............#....#O#.O#...#..O#####..##.......#.......#...##.O....
#..O...#...O....O.O.##O.#O..O#...O...#..#O.#.O.O.O###...O.....O......#....O#...OO.O...#...#.O...OO..
#.....#.OOO..O....#O##...OO....O.#OO.O..#.#..OO.#.O..##O.###O..##..O...##.....#.OO..O.#.OO.O..#...O.
.#O#...O...OO.O.....#........O##.#.O#O...O..#OO.#.....O....O.O.O..O.#..O..O..O..#..#...#.#OO...O..#O
..#...#......O....OO.O.#..O....O..O...#.......##O#.#OOO..#.##...O..O...O..#......#.O....OO..O.O..O#O
..##.O.........O........O#.#..O.O...O.O##O.....O.OO......O#.....#O.....##OO#O#..O#.O......O....#...O
.O.#...#..........#..##...#.O...#..........#O.#.#....#..O..##..#.O..O.......O......O.#O.#O...#...#..
..O.OO.....O.O.O.OO..O.O#O.OO.........OOO.O..O..OOOO...O....O#...#..O.#.O.O..O..OO...O..OO.O.##..OO#
..O#..#..O..#..OOOO......##.#..#....#...OO.O.O#.#.....O...#OO....O..##..#.#...##.#...O.##O...O......
.....O.O..O....#.O#....#..O.......#......#..##...#...#.....#O..O..OOO.....O.........OO.#O..O..O.#O.#
##.#OO......##..O#..#.OOO..OO.#....OO.#.OO..#..#.......O#...OO.#.O........O.#.O...#O....#....O...O.O
OO.O...#..O..O.O#.#O..........#....O....O.#.....#.O......#....O...O#..OO.#...OO....OO.O...#...OO..##
..O...O...O##..O...O.....##..OO....OO..O.......O.O.#..#.O.O..O..OO#....O..#..#.O......#O#O.O#.O#OO..
...O.OO.....O....#..#....O...#..O.....#OO#O#.#.###...#.O.O.O#.#....#..O...O.....OO..#....OO#...#....
.O.OO....O#.....OO.O#O..#...#....#..O..O....#....O....O.O.#O.##....O........O#.O....O#.O.O#...#O#...
...O.#.#.....OO.OO#.O......#......##...#.#..#O.....#O...O#..#O#O..#..O.....OO##.......O.#.O#....O.#.
..#....O.....##.....O#.O...O.#..#......O....#......OO.O.#....#..............#.....O.......#O.....#.O
..O#...#.O..#.OO..#..O...OOOOOOO.OO#..O........#....O....OO.#OO.......#..O.O...OO.....O.OOOO#O...O..
.O#.#O.#O...#...O#..........O.....O.O.#.....#....O..OO.OOOO......#..O#..#..#....O....O.OO.#....#O.O#
..#OO....O#....O..#....#....O.#...OO#O....OO#.........O..O.O.....#OO....#O##..OOO.#..#O..O..O...O...
.O...#O#..O....OO...O.#...O....#....O...#....#O.#O.O.#O#.O.O#......O............#....#...O.O.#......
#OOO..##....#O.O..OO..O##.......O#.##O..#....#.##.#.#OO........#....#....O...#........O...O..O.O#...
...#.#..#...O...OO.O..#O...O.O......#...OO...OO.#O.....O..O##.##..O.....O......O.OO..#.O....O.#OOO.O
...O.....#........#O.#.OO.#.......O...O....O.#....#.#......O.O..#.#.O.......##......OO.O..O..#OO.O#.
##.O..O#..#...#.#O...O.......#O.OO.....OO...O.OO.....O.......O.....O#....O...O#.O...O..##....#O.O.#.
O.O.#OO.O.#.....#O.O..#O.O...##...#.O......OO.#...#..O.OO.O..........#..OO.....OO..O#.#...#.O..O#O..
.O.#O#O....O...##....O.O.##..........#O.#O#.#..O.#..#O....O..OO......O...#...##O.O.O#.####.OO.O#.O#.
.....OO.#.O..#O###OO#O.O.O.#.......#.#...#.#O....O.O..........#O....O..##.#.....OOO##..O.....#.....#
#....O..O.O.O...O#OO.O...O......O....O#..#....#.O..#..#.O..##O#..OO..O.#.O#..OO.....O.....OO#O....#O
.....OOO...#...#..#.#...O#.O..#.O#O.O##...O.....O...O.#.O..OO......O...O.........#O..#O.#O.....O...O
O........##..O..OO#....#.#O#.O.O..#..OO........OOO..O.OO.#..OO.#..O..##.O...OO.OO....O##.O......O.O.
#O.#.#.O#..O.O........#...O...O.#...##.#..O.#..#..O..#O..O.......O....O.O#O...........O#...#...O#...
...#O..#...#..O###....#O#..O..O...#OO...OO.OO#OO.#...O....O.........#..#O......#..#.......#O#O#..#O.
..O#.....#..##.O#.........#O...#.#.....O..#..#.#OO.#.O.....#O.....O.#.......O....#O..O#..O..O.O...OO
`

const platform = input.trim().split("\n").map(line => line.trim().split(""));

const roundRock = "O"
const space = "."

const canSwap = (from, to) => from === roundRock && to === space

const swap = (platform, [fromY, fromX], [toY, toX]) => {
    let clonedPlatform = [...platform];
    const from = clonedPlatform[fromY][fromX];
    const to = clonedPlatform[toY][toX];

    clonedPlatform[fromY][fromX] = to;
    clonedPlatform[toY][toX] = from

    return clonedPlatform;
}


const tiltNorth = (platform) => {
    let clonedPlatform = [...platform];
    for (let i = 1; i < clonedPlatform.length; i++){
        for (let j = 0; j < clonedPlatform[i].length; j++){
            let index = i;
            while (index) {
                if(!canSwap(clonedPlatform[index][j], clonedPlatform[index-1][j]))
                    break;

                clonedPlatform = swap(clonedPlatform, [index, j], [index-1, j]);
                index--
            }
        }
    }

    return clonedPlatform;
}

const tiltSouth = (platform) => {
    let clonedPlatform = [...platform];
    for (let i = clonedPlatform.length-2; i >= 0; i--){
        for (let j = 0; j < clonedPlatform[i].length; j++){
            let index = i;
            while (index < clonedPlatform.length-1) {
                if(!canSwap(clonedPlatform[index][j], clonedPlatform[index+1][j]))
                    break;

                clonedPlatform = swap(clonedPlatform, [index, j], [index+1, j]);
                index++
            }
        }
    }

    return clonedPlatform;
}
const tiltEast = (platform) => {
    let clonedPlatform = [...platform];
    for (let i = 0; i < clonedPlatform.length; i++){
        for (let j = clonedPlatform[i].length-2; j >= 0; j--){
            let index = j;
            while (index < clonedPlatform[i].length-1) {
                if(!canSwap(clonedPlatform[i][index], clonedPlatform[i][index+1]))
                    break;

                clonedPlatform = swap(clonedPlatform, [i, index], [i, index+1]);
                index++
            }
        }
    }

    return clonedPlatform;
}
const tiltWest = (platform) => {
    let clonedPlatform = [...platform];
    for (let i = 0; i < clonedPlatform.length; i++){
        for (let j = 1; j < clonedPlatform[i].length; j++){
            let index = j;
            while (index) {
                if(!canSwap(clonedPlatform[i][index], clonedPlatform[i][index-1]))
                    break;

                clonedPlatform = swap(clonedPlatform, [i, index], [i, index-1]);
                index--
            }
        }
    }

    return clonedPlatform;
}

const spin = (platform) => {
    let clonedPlatform = [...platform];
    clonedPlatform = tiltNorth(clonedPlatform);
    clonedPlatform = tiltWest(clonedPlatform);
    clonedPlatform = tiltSouth(clonedPlatform);
    clonedPlatform = tiltEast(clonedPlatform);
    return clonedPlatform;
}


const calculateLoad = platform => {
    let load = 0
    platform.forEach((row, index) => {
        load += row.filter(cell => cell === roundRock).length*(platform.length-index)
    });

    return load;
}


const getCache = (platform) => {
    const cache = [];
    let index = -1;
    let spinPlatform = JSON.parse(JSON.stringify(platform));
    while(true){
        spinPlatform = spin(spinPlatform)
        const cacheKey = spinPlatform.map(line => line.join("")).join("");
        index = cache.findIndex(item => item.cacheKey === cacheKey);
        if(index >= 0){
            break;
        }

        cache.push({ cacheKey, value: calculateLoad(spinPlatform) });
    }

    return {
        total: cache,
        repetitive: cache.slice(index)
    };
}


const cache = getCache(platform);
const count = 1000000000;
const cacheGroup = count <= cache.total.length ? "total" : "repetitive";

let index = count-1;
if(count > cache.total.length){
    index = (count%(cache.repetitive.length)) - (cache.total.length - cache.repetitive.length)-1;
    if(index < 0)
        index = cache.repetitive.length+index
}
console.log("actual", cache[cacheGroup][index]?.value)