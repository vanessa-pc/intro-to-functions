function lonfestInList(arr){
    let longest = arr[0]
    for (let i of arr){
        if (i.length > longest){
            longest = i
        }
    }
    return longest
}


//test cases:
/*
console.log
longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
longestInList(["the", "quick", "brown", "fox"]) should be "quick"
longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"
*/