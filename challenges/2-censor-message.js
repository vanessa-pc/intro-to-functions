function censorMessage(message, banList){
    let rawWords = message.split(" ")
    let scrubbedWords = []
    for (let i of rawWords){
        let lowercaseWord = i.toLowerCase()
        if (banList.contains(lowercaseWord)){
            scrubbedWords.push("*****")
        } else {
            scrubbedWords.push(i)
        }
    }
    let scrubbedMessage = scrubbedWords.join(" ")
    return scrubbedMessage
}