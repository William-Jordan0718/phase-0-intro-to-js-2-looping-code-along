const names = ["Joe", "Nina", "Eric"]

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name} for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))