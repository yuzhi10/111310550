function uniqueSorted(arr)
{
    const uniqueArray = [...new Set(arr)]
    
    uniqueArray.sort((a,b)=>a-b)
    return uniqueArray
}

const inputarry = prompt("please enter a array:").split(',').map(Number)
const result = uniqueSorted(inputarry)
console.log(result)
