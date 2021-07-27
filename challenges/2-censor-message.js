function censorMessage(message, banList){
    let rawWords = message.split(" ")
    let scrubbedWords = []
    for (let i of rawWords){
        let lowercaseWord = i.toLowerCase()
        if (banList.includes(lowercaseWord)){
            scrubbedWords.push("*****")
        } else {
            scrubbedWords.push(i)
        }
    }
    let scrubbedMessage = scrubbedWords.join(" ")
    return scrubbedMessage
}

// test cases:

console.log(`censorMessage("don't mess with cats", ["mess"]):`,censorMessage("don't mess with cats", ["mess"]), `should be "don't ***** with cats"`)
console.log(`censorMessage("Are you sure that this is safe", ["are", "is"]):`,censorMessage("Are you sure that this is safe", ["are", "is"]),`should be "***** you sure that this ***** safe"`)
console.log(`censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]):`,censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]),`should be "I CANNOT ***** *****"`)


// my test cases
console.log(`censorMessage("Message in a bottle", ["bottle"]):`,censorMessage("Message in a bottle", ["bottle"]),`should be "Message in a *****"`)
console.log(`censorMessage("The secret is kindness", ["kindness"]):`,censorMessage("The secret is kindness", ["kindness"]),`should be "The secret is *****"`)
console.log(`censorMessage("Someone did it!", ["someone"]):`,censorMessage("Someone did it!", ["someone"]),`should be "***** did it!"`)
