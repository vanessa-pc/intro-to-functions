function longestInList(arr){
    let longest = arr[0]
    for (let i of arr){
        if (i.length > longest.length){
            longest = i
        }
    }
    return longest
}


//test cases:

console.log(`longestInList(["England", "Wales", "Scotland", "Northern Ireland"]):`, longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),"should be Northern Ireland")
console.log(`longestInList(["the", "quick", "brown", "fox"]):`, longestInList(["the", "quick", "brown", "fox"]),"should be quick")
console.log(`longestInList(["hello", "hi", "greetings", "hey"]):`, longestInList(["hello", "hi", "greetings", "hey"]),"should be greetings")