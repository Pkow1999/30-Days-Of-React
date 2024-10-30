//1
    function userIdGeneratedByUser() {
        const numberOfCharacters = Number(prompt('Number of characters:'))
        const numberOfIds = Number(prompt('Number of ids:'))

        const arr = []
        for(let i = 0; i < numberOfIds; ++i)
        {
            let id = ''
            for(let j = 0; j < numberOfCharacters; ++j){
                let randomChar
                if(Math.floor(Math.random() * 2) == 0)
                    randomChar = String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48))
                else 
                    randomChar = String.fromCharCode(Math.floor(Math.random() * (123 - 97)) + 97)
                id += randomChar
            }
            arr.push(id);
        }
        return arr;
    }
//2
    function generateColors(type = 'rgb', size = 1){
        const arr = []
        if(type === 'rgb'){
            for(let i = 0; i < size; ++i)
            {
                const r = Math.floor(Math.random() * 256)
                const g = Math.floor(Math.random() * 256)
                const b = Math.floor(Math.random() * 256)
                arr.push(`rgb(${r}, ${g}, ${b})`)
            }
        }
        else if(type === 'hexa')
        {
            for(i = 0; i < size; ++i){
                const decNr = Math.floor(Math.random() * 16777216 )
                let hexNr = decNr.toString(16)
                if(hexNr.length < 6)
                    hexNr = '0'.repeat(6 - hexNr.length) + hexNr 
                arr.push(`#${hexNr}`)
            }
        }
        if(size === 1)
            return arr.at(0);
        return arr;
    }
//3
    function shuffleArray(arr = [1, 2, 3]){
        const returnArray = []
        const indexes = []
        while(indexes.length < arr.length){
            let randomIndex = Math.floor(Math.random() * arr.length)
            if(!indexes.includes(randomIndex))
                indexes.push(randomIndex)
        }
        for(index of indexes){
            returnArray.push(arr[index])
        }
        return returnArray
    }
//4
    function factorial(number){
        if(number % 1 !== 0 && number > 0)
            return
        let fact = 1
        for(i = number; i > 0; i--){
            fact *= i
        }
        return fact
    }
//5
    const isEmpty = parametr => {
        switch(typeof parametr){
            case('undefined'):
            case('null'):
                return true
            case 'string':
            case 'object':
                return parametr.length ? false : true
            default:
                return false 
        }
    }
//6
    function average(arr){
        let sum = 0
        if(!Array.isArray(arr))
            return 'Argument not array'
        for(value of arr){
            if(typeof value != 'number')
                return 'Item in array is not a number'
            sum += value
        }
        return sum / arr.length
    }
