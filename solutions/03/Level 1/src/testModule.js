export function debugPrint(...args){
    args.forEach((argument)=>{
        console.log(`${typeof argument} : ${argument}`)
    })
}

export function addMultiple(...args){

    const numbers = args.join(' + ')
    return `${numbers} = ${args.reduce((prev, cur) => prev + cur)}`
}

export default (function debugingModule(){
    return {
        debugPrint,
        addMultiple,
    }
})()