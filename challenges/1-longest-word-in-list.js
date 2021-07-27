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


// my test cases
console.log(`longestInList(["salutations", "goodbye", "hi", "world"]):`, longestInList(["salutations", "goodbye", "hi", "world"]),"should be salutations")
console.log(`longestInList(["car", "bike", "aeroplane", "boat", "roller-coaster"]):`, longestInList(["car", "bike", "aeroplane", "boat", "roller-coaster"]),"should be roller-coaster")
console.log(`longestInList(["dog", "horse", "cat", "eagle", "hyena"]):`, longestInList(["dog", "horse", "cat", "eagle", "hyena"]),"should be horse")