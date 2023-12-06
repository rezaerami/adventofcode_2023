const input = `
Time:        40     81     77     72
Distance:   219   1012   1365   1089
`;
const [line1, line2] = input.trim().split("\n");
const times = line1.match(/\d+/g);
const distances = line2.match(/\d+/g);
const matches = times.map((time, index) => ({
    time: parseInt(time, 10),
    distance: parseInt(distances[index], 10)
}));

const wins = []
matches.forEach(({time, distance}) => {
    let winCount = 0;
    for(let i = 0; i <= time; i++){

        if(((time - i) * i) > distance)
            winCount++;
    }
    wins.push(winCount);
});

console.log(wins.reduce((result, item)=> result*item, 1));