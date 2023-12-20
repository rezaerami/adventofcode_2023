const input = `
broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output
`

const parseInput = (input) => (
    input.trim().split("\n").map(line => {
        const module = line.split(" -> ");
        let name = module[0];
        let type = name;
        if(name.startsWith("%")){
            type = "%";
            name = name.replace("%", "")
        }
        else if(name.startsWith("&")){
            type = "&";
            name = name.replace("&", "")
        }
        return {name, type, outputs: module[1].split(",").map(item => item.trim())}
    })
)


parsedInput = parseInput(input);
let highPulse = 0;
let lowPulse = 0;
const queue = [];

class Module {
    name = "";
    outputs = [];

    constructor(name) {
        this.name = name
    }

    connectOutputs(outputs) {
        outputs.forEach(output => {
            if(!modules?.[output])
                modules[output] = new Module(output); // initialize empty module

            this.outputs.push(modules[output]);
            if (modules[output] instanceof Conjunction)
                modules[output].connectInput({ name: this.name });
        });
    }

    capturePulse(pulse){
        if(pulse > 0)
            highPulse++;
        else
            lowPulse++;
    }

    receive({ pulse }) {
        this.capturePulse(pulse);
    }

    send(pulse) {
        this.outputs.forEach(output => {
            queue.push(() => output.receive({name: this.name, pulse}))
        });
    }
}

class BroadCaster extends Module {
    receive({ pulse }) {
        this.capturePulse(pulse);
        this.send(pulse);
    }
}

class FlipFlop extends Module {
    state = 0;

    receive({pulse}) {
        this.capturePulse(pulse);
        if (pulse === 1)
            return;

        this.state = this.state === 0 ? 1 : 0;
        this.send(this.state ? 1 : -1);
    }
}

class Conjunction extends Module {
    memory = {};

    connectInput({name}) {
        this.memory[name] = -1;
    }

    receive({name, pulse }) {
        this.capturePulse(pulse);
        this.memory[name] = pulse;
        if (Object.values(this.memory).every(item => item === 1))
            this.send(-1);
        else
            this.send(1);
    }
}

// initialize modules
const modules = parsedInput.reduce((result, module) => {
    const {name, type} = module;

    if(type === "broadcaster")
        result[name] = new BroadCaster(name);
    else if(type === "%")
        result[name] = new FlipFlop(name);
    else if(type === "&")
        result[name] = new Conjunction(name);

    return result
}, {});

parsedInput.map(module => {
    const {name, outputs} = module;
    modules[name].connectOutputs(outputs)
});

let buttonPush = 0;
while(buttonPush < 1000){
    buttonPush++
    queue.push(() => modules.broadcaster.receive({ pulse: -1 }))
    while(queue.length){
        queue.shift()()
    }
}

console.log(highPulse * lowPulse)