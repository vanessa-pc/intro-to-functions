function isEqual(a,b){
    if (a===b){
        return true
    } else {
        return false
    }
}

// test cases 

console.log ("isEqual(4, 4):", isEqual(4,4), "should be true")
console.log ("isEqual(0, 0):", isEqual(0,0), "should be true")
console.log ("isEqual(-4, -4):", isEqual(-4,-4), "should be true")
console.log ("isEqual(4, -4):", isEqual(4,-4), "should be false")
console.log ("isEqual(0, 1):", isEqual(0,1), "should be false")

// my test cases
console.log ("isEqual(33.3, 1):", isEqual(0,1), "should be false")
console.log ("isEqual(-6, -6.0):", isEqual(0,1), "should be false")
console.log ("isEqual(2, 9):", isEqual(0,1), "should be false")