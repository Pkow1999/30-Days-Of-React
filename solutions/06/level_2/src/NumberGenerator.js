import './NumberGenerator.css'

const Header = () =>(
    <header>
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
    </header>
  )

function isPrime(number){
    if(typeof number !== 'number' || number%1 !== 0)
        return
    let prime = true
    if(number === 1)
        return false
    for(let j = 2; j <= Math.floor(number/2); ++j)
    {
        if((number%j) === 0)
        {                        
            prime = false
            break;
        }
    }   
    return prime
}

const Main = ( {number = 32} ) =>{
    const listOfNumbers = []
    for(let i = 0; i < number; ++i){
        listOfNumbers.push(i)
    }
    return listOfNumbers.map((value) => {
        let color;
        if(isPrime(value)){
            color = '#fd5e53'
        }
        else{
            color = value % 2 === 0 ? '#21bf73' : '#fddb3a'
        }
        return(
             <div className='item' style={{backgroundColor: color}}>{value}</div>
        )
    })
}

function NumberGenerator(){
    return(
        <>
          <Header></Header>
          <div className='numberGenerator'>
            <Main></Main>
          </div>
        </>
    )
}

export default NumberGenerator;