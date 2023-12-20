const input = `
%nd -> fs
%ql -> qz
%gz -> vv
%lg -> zx, lx
%tr -> sd
%vn -> ql, qz
%kg -> xz
%sj -> gs
&bq -> rx
%hf -> xm
%vv -> mq, db
%gf -> fn, lx
%zt -> sk
%bm -> lx, cp
%cp -> lx, gb
%gs -> gq, qz
%sp -> db, jh
%bh -> kr, db
%xb -> qz, vn
%fx -> qf
%gq -> qz, xb
%xp -> zn, sd
%hl -> tr, sd
%sk -> nd
%mh -> xs, sd
&qz -> nd, sj, sk, gp, gc, vh, zt
&vg -> bq
%sh -> pz
%jh -> kg
&kp -> bq
%gp -> zt
&gc -> bq
%xf -> xp
%cv -> sd, hl
&db -> kg, sp, kp, fx, jh, gz
%kr -> db
%xz -> zs, db
%fs -> qz, sj
%xm -> kh, lx
%qf -> db, gz
%fn -> bm
%kh -> lx, gf
%vh -> qz, gp
%mq -> bh, db
%zn -> cv
%sv -> xf, sd
%lh -> lx
%dl -> lh, lx
%zx -> lx, hf
%pz -> sd, cn
%cn -> sd, sv
%xs -> sh
%gb -> lx, dl
&tx -> bq
&sd -> mh, tx, sh, xf, zn, xs
&lx -> fn, hf, vg, lg
%zs -> db, fx
broadcaster -> vh, sp, lg, mh
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
const buttonPushCount = JSON.parse(JSON.stringify(modules.bq.memory));

while(true){
    if(!Object.values(buttonPushCount).includes(-1))
        break;

    buttonPush++
    queue.push(() => modules.broadcaster.receive({ pulse: -1 }))
    while(queue.length){
        queue.shift()();

        if(Object.values(modules.bq.memory).includes(1)) {
            Object.keys(modules.bq.memory).forEach(key => {
                if(modules.bq.memory[key] === 1 && buttonPushCount[key] === -1)
                    buttonPushCount[key] = buttonPush;
            })
        }
    }
}

const gcd = (a, b) => a ? gcd(b % a, a) : b;

const lcm = (a, b) => a * b / gcd(a, b);

console.log(Object.values(buttonPushCount).reduce(lcm))