const input = `
Time:        40     81     77     72
Distance:   219   1012   1365   1089
`;
const [line1, line2] = input.trim().split("\n");
const time = parseInt(line1.match(/\d+/g).join(""));
const distance = parseInt(line2.match(/\d+/g).join(""));

let wins = 0;
for(let i = 0; i <= time; i++){
    if(((time - i) * i) > distance)
        wins++;
}
console.log(wins);