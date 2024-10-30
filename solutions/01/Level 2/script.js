//1
    function solveQuadratic(a,b,c){
        if(typeof a !== `number` || typeof b !== `number` || typeof c !== `number`)
            return 0;
        if(a === 0){
            return `INVALID`;
        }
        let delta = b ** 2 - 4 * a * c
        if(delta > 0){
            return `{${((-b + Math.sqrt(delta)) / (2 * a))}, ${((-b - Math.sqrt(delta)) / (2 * a))}}`;
        }
        else if(delta === 0){
            return `{${(-b) / (2 * a)}}`
        }
    }
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//2
    function printArray(arr = [1, 2, 3]){
        arr.forEach((element) => console.log(element))
    }
//3
    function showDateTime(){
        const date = new Date()
        
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString() 
        const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString() 
        const year = date.getFullYear() 
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString() 
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString() 

        console.log(`${day}/${month}/${year} ${hour}:${minute}`);
    }
//4
    function swapValues(x, y){
        const tmp = x
        x = y
        y = x
    }
//5
    const reverseArray = (arr = [1, 2, 3]) =>{
        const returnArray = [];
        for(let i =arr.length - 1; i >= 0; --i)
            returnArray.push(arr[i]);
        return returnArray;
    }
    console.log(reverseArray());
//6
    function capitalizeArray(arr = ['a', 'b']){
        return arr.map((value) => value.toUpperCase());
    }
//7
    function addItem(arr =[1, 2, 3], item=4){
        arr.push(item);
        return arr;
    }
//8
    function removeItem(arr =[1, 2, 3], item=2){
        const index = arr.indexOf(item);
        if(index < 0)
            return arr;
        arr.splice(index, 1);
        return arr
    }
//9
    const evensAndOdds = value =>{
        let counterOdds = 0
        let counterEvens = 0
        for(i = 0; i <= value; ++i)
            if(i % 2 !== 0)
                ++counterOdds
            else
                ++counterEvens
        console.log(`The number of odds are ${counterOdds}.\nThe number of evens are ${counterEvens}.`)
    }
    evensAndOdds(100)
//13???
    function sum(...args){
        let sum = 0;
        for(const number of args){
            sum += number;
        }
        return sum
    }
//1???
    function userIdGenerator() {
        const numberOfCharacters = 6
        let id = ''
        for(i = 0; i < numberOfCharacters; ++i){
            let randomChar
            if(Math.floor(Math.random() * 2) == 0)
                randomChar = String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48))
            else 
                randomChar = String.fromCharCode(Math.floor(Math.random() * (123 - 97)) + 97)
            id += randomChar
        }
        return id
    }
    console.log(userIdGenerator());