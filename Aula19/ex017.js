let num = [10,6,5]
num[3] = 9
num.push(8)
num.sort((a,b) => a-b)

console.log(num)
let pos = num.indexOf(6)
console.log (`O valor está na posição ${pos}`)

/*

---------- FORMA 1 ----------

    for(let pos=0 ; pos<N.length ; pos++ ) {
        console.log (N[pos])
    } 

------------------------------    
*/
/*

    for(let pos in num){
        console.log(num[pos])
    }
 */   

