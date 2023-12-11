const input = `
......................................#.....................................#......#.......#.....................#.................#........
............................................................................................................................................
.............................................#............................................................................................#.
..........................#..................................#........#............................#........................................
...#...........................#.................#............................................#...............................#.............
....................#.................................#..................................................#.........#........................
......................................#...............................................................................................#.....
...................................................................................#.............#..........................................
.......................#.........................................#......................#..................................#.....#..........
...............#................#...................#.........................#.................................#...........................
.......#..............................................................#.....................................................................
........................................#...................#.............................................#.................................
...........................#.....................#..................................................#..................#....................
.................#........................................................................#.......................#.........................
............#..................................................#...............................#........................................#...
.#................................#.........................................................................#...............................
.....................................................#...............#....................................................#.................
..........................#...................#....................................#.................#.........................#............
........#..............................#............................................................................#.......................
........................................................#................#..................................................................
...................#.............#...............................#.........................................#................................
........................#...........................#.........................#......#.....................................................#
..#........#.................#....................................................................................................#.........
.............................................#.............#.........................................#............#.........................
...............#......................................................#......................#..........................................#...
............................................................................................................................................
..................................................................................#........................................#................
..........................#........#......#..............#.....#................................................................#...........
.........................................................................................#.....#..............#.............................
....................#..........#.....................#................................................................................#.....
.#....................................................................#........#...........................................................#
..........#..............................................................................................................#..................
............................................................#......................................#........................................
...............#..........#................................................................................#................................
........................................................#..................................#.....................................#..........
......................#................#...............................................................................................#....
........#.......................................#.........................................................................#.................
.........................................................................#........#..................................#......................
#..................................#......#............................................................#...........................#........
............................................................................................................................................
......#.................................................#..............................#....................................................
.........................#....................................................#..............................................#..........#...
.................................#.............................................................................#............................
.................#..................................#................#...........................#..........................................
..............................................................#......................#......#...............................................
.............#..........................#.................................................................................................#.
...............................#........................#...................................................................................
....................................#.................................................................#..............#......................
.......#....................................................................#.................#................................#............
..........................#.................#.....#.................#....................................................#.............#....
............................................................................................................................................
............#.............................................................................................#......#................#.........
...#..........................#..........................#......................................#...........................................
............................................................................................................................................
........#.............#...................................................#.................................................................
...........................................#....................#.................#...........................#......#.........#............
............................................................................................................................................
............#....................#.............................................................#......#.....................................
.....................................................................#..................#...................................................
.....................#..............................#........#...............#........................................................#.....
....................................#...................................................................................#...................
..................................................................................................................#.........................
.....#.......#...............#..................................................................#..............................#............
.............................................#.........#....................................................................................
..................................................................#.......#................................#................................
.........................#.................................................................#.......#.................#......................
#...............................................#.........................................................................#.......#.........
...........................................#.................#................#...........................................................#.
......................#...............#............................................#........................................................
...............#..............#....................#....................................#.........................#.........................
..#..........................................................................................................#..............................
..........#...................................................................................#........#....................................
...........................#.......#.........#.........#..................#.................................................................
................................................................#......................................................#....................
............................................................................................................................................
...............................................................................................................................#............
........#...............................#............#...................................................#........#....................#....
....................#.......................................................................................................................
............#...................................#....................................#................................#.....#...............
.............................#....................................#...............................#.........................................
...#....................................................#..................#...........................#....................................
.......................#..............#..................................................#...............................#........#.........
..............#.................#............................................................................#..............................
........#..........................................#......................................................................................#.
..........................#............................................#.....#.......................................#......................
...................................#.....................#........#...............#.........#...............................................
...........................................................................................................................#................
.........................................#.............................................................#...........................#........
......#.........................#...........................#............#.....#............................................................
...............#.....#.................................#.......................................................................#............
..................................................................................................#..............#........................#.
...................................#.......#................................................................................................
..............................................................#......................#..................#.........................#.........
..............................#.................#.........................................#.................................................
..#.........................................................................................................................................
..................#..................................................#......#......................#........................#...............
...........#...........................................................................................................#..............#.....
.....................................#......................................................................................................
........................................................#.........................................................#.........................
..........................#....................................#............................................................................
............................................................................................#...............#............................#..
#..............................................#...................................#..................#.....................................
.........#.............#..................#.....................................................................#...........................
.............................................................................................................................#..............
.....................................#...........................#............#..................#.....................................#....
.................#..........#............................#..............................................................#........#..........
.........................................................................#...................#..............................................
.................................#...........................................................................#.....#........................
........................................#..........................#........................................................................
...#.....#.................................................#......................................#......#..........................#.....#.
....................................#.............................................#.........................................................
....................#.......#................#..............................#...............................................................
.....................................................................#....................#....................#............................
.................................................#................................................................................#.........
...........#...........#...................................................................................................................#
................#.......................#.........................#...................................................#.....................
...#.......................#...............................#.........................................#.........................#............
....................................................................................#.......................................................
.............................................................................................#...........................................#..
..............#...............................#................................................................#..........#.................
.......................................................#.............#.....#................................................................
............................#...................................................................#...........................................
.....#..............................#...........................................................................................#..........#
..................................................#...............#................#........................................................
..........#..........#.......................................................................................#.........#.............#......
........................................................#....................................................................#..............
.............................#...................................................................................#.......................#..
.#.........................................#...................#...........#..........................#.....................................
....................................................................#......................#................................................
...........#......................................................................#.................................#.......................
.....#.................................................................................#.......................................#............
...............................#.....#..................................................................#...................................
....................#.........................#......................................................................................#......
..................................................................................................#...........#........#....................
...............#.........................................#............#.....................................................................
..................................#......#....................................#.............................................................
...........................#........................#.....................................#..............#...............................#..
....#..............#..............................................................................................#.........................
.............#...................................................................................#..........................................
...................................................................................#..................#..................#............#.....
`;

const rows = input.trim().split('\n');

const getGalaxies = (rows) => {
    const galaxies = []
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < rows[i].length; j++) {
            if(rows[i][j] === "#")
                galaxies.push([i, j])
        }
    }

    return galaxies;
}

const getShortestPath = (start, end) => Math.abs(start[1] - end[1]) + Math.abs(start[0] - end[0])

const getEmptyRows = (grid, startIndex, endIndex, expansionFactor = 1) => {
    const emptyRows = grid.slice(startIndex+1, endIndex).filter(item => !/#/gm.test(item));
    return emptyRows.length*expansionFactor
};
const getEmptyCols = (grid, startIndex, endIndex, expansionFactor = 1) => {
    const columns = [];
    for(let i = startIndex+1; i < endIndex; i++){
        const column = grid.map(row => row[i]);
        if(!column.includes("#"))
            columns.push(column);
    }
    return columns.length * expansionFactor;
};

const getActualLocation = (grid, galaxy, expansionFactor = 1) => {
    const emptyRowsBefore = getEmptyRows(grid, 0, galaxy[0], expansionFactor);
    const emptyColsBefore = getEmptyCols(grid, 0, galaxy[1], expansionFactor);
    return [emptyRowsBefore+galaxy[0], emptyColsBefore+galaxy[1]];
}

const galaxies = getGalaxies(rows);

const pairs = [];
for(let i = 0; i < galaxies.length; i++){
    for(let j = i+1; j < galaxies.length; j++){
        pairs.push([galaxies[i], galaxies[j]]);
    }
}


const expansionFactor = 2-1;
const distances = pairs.map(([start, end], index) => {
    result = getShortestPath (
            getActualLocation(rows, start, expansionFactor),
            getActualLocation(rows, end, expansionFactor),
        )
    return result;

})

console.log(distances.reduce((result, distance) => result+distance, 0));

