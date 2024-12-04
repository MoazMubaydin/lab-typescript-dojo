//
// Iteration 2 | Functions
//

function calcMultiplication(a:number,b:number):number{
    return a * b;
}

function isEven(n:number):boolean{
    return n%2 ===0 
}

function calcArrayAverage(numbersArr:Array<number>):string | number{
    if(numbersArr.length === 0 ){
        return "Please provide an array with at least one element"
    }
    let total = 0;

    numbersArr.forEach((num:number)=>{
        total+=num
    })
    return total/numbersArr.length
}