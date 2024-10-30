//1
    const fullname = (firstName, lastName) =>{
        return firstName + ' ' + lastName;
    }
//2
    function addNumbers(a, b){
        return a + b;
    }
//3
    function _areaOfCircle(radius){
        return Math.PI * radius ** 2;
    }
//4
    function convertCelciusToFahrenheit(celciusTemp){
        return (celciusTemp * 9 / 5) + 32;
    }
//5
    const bmi = (height, weight) =>{
        const bmiValue = weight / (height ** 2);
        if(bmiValue < 18.5)
            return 'Underweight';
        else if(bmiValue >= 18.5 && bmiValue <= 24.9)
            return 'Normal weight';
        else if(bmiValue >= 25.0 && bmiValue <= 29.9)
            return 'Overweight'
        else
            return 'Obese';
    }
//6
    function checkSeason(month){
        const monthToLower = month.toLower();
        if(monthToLower === "september" || 
            monthToLower === "october" || 
            monthToLower === "november" )
            {
                console.log("Season is Autumn")
            }
        else if(monthToLower === "december" || 
            monthToLower === "january" || 
            monthToLower === "february" )
            {
                console.log("Season is Winter")
            }
        else if(monthToLower === "march" || 
            monthToLower === "april" || 
            monthToLower === "may" )
            {
                console.log("Season is Spring")
            }
        else if(monthToLower === "june" || 
            monthToLower === "july" || 
            monthToLower === "august" )
            {
                console.log("Season is Summer")
            }
        else
        {
            console.log("This is not month")
        }
    }