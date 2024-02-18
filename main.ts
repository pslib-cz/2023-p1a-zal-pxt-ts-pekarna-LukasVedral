const valueKWh: number = 6.7 //kWh
let value: number = 0
let prumernaSpotreba: number = 0
type Odber = {
    cas: number, //minuty
    prikon: number //Watt
}

let data: Array<Odber> = [
    { cas: 100, prikon: 3500 },
    { cas: 50, prikon: 400 },
    { cas: 75, prikon: 300 },
    { cas: 300, prikon: 7000 },
    { cas: 200, prikon: 3000 },
]

for (let i of data) {
    i.prikon = i.prikon / 1000
    i.cas = i.cas / 60
    let kWh: number = i.prikon * i.cas
    value += Math.round(kWh * valueKWh)
    prumernaSpotreba += kWh
}
prumernaSpotreba = Math.round(prumernaSpotreba / data.length)

console.log("Pečení stálo " + value + "Kč")
console.log("Průměrná spotřeba elektrické energie je " + prumernaSpotreba + "kWh")
