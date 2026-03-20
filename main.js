const readline = require("readline");

console.log("IFSCL Legacy Launcher")
console.log("\nAppuez sur Entrée pour fermer ce programme...");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', () => {

    rl.close()
    process.exit(0)

})