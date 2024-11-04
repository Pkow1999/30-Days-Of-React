import React from 'react'
import './RandomCountry.css'

function Header(){
    return(
        <header>
            <div className='header-text'>
                <h1>Welcome to 30 Days Of React</h1>
                <h3>Getting Started React</h3>
                <h4>JavaScript Library</h4>
                <h5>Asabeneh Yetayeh</h5>
                <p>Oct 7, 2020</p>
                <p style={{marginTop: '0px'}}>Select a country for your next holiday</p>
            </div>
        </header>
    )
}

function Main({selectCountry, countryObj}){
    try{
        if(!('languages' in countryObj))
            countryObj.languages = {non:'No Language'}
        if(!('name' in countryObj))
            countryObj.name.common = ''
        if(!('capital' in countryObj))
            countryObj.capital = ['No Capital']
        if(!('population' in countryObj))
            countryObj.population = 'no Data'
        if(!('currencies' in countryObj))
            countryObj.currencies = {NON : {name: 'No currency'}}
        if(!('flags' in countryObj))
            countryObj.flags.png = ''
    
    
        const formattedLanguage = Object.values(countryObj.languages).map((language, index) => {
            if(index < Object.values(countryObj.languages).length - 1)
                return (<span>{language}, </span>)
            return (<span>{language}</span>)
            }
        )
    
        //TODO: blad z currencies/capitals - jeden kraj tego nie ma
        const formattedCurrency = Object.values(countryObj.currencies).map((currency, index) => {
                if(index < Object.values(countryObj.currencies).length - 1)
                    return (<span>{currency.name}, </span>)
                return (<span>{currency.name}</span>)
            }
        )
        return (
            <main>
                <div className='countryBox-wrapper'>
                    <div className='countryFlag-wrapper'>
                        <img alt='Flag of country' src={countryObj.flags.png}></img>
                        <div className='countryName'>{countryObj.name.common}</div>
                    </div>
                    <div className='country-attributes-wrapper'>
                        <span className='country-attribute'>Capital:
                            <span>   {countryObj.capital.at(0)}</span>
                        </span>
                        <span className='country-attribute'>Languages:
                            <span>   {formattedLanguage}</span>
                        </span>
                        <span className='country-attribute'>Population:
                            <span>   {countryObj.population}</span>
                        </span>
                        <span className='country-attribute'>Currency:
                            <span>   {formattedCurrency}</span>
                        </span>
                    </div>
                </div>
                <button onClick={selectCountry}>Select Country</button>
            </main>
        )
    }catch(ex){
        console.log(countryObj);
        console.log(ex);
    }
    
        
}

function Footer({footerStyle}){
    return(
        <footer style={footerStyle}>
            <div>Copyright 2020</div>
        </footer>
    )
}
class RandomCountry extends React.Component{

    constructor(props){
        super(props);
        this.countryData = [
            {
                name:{
                    common:''
                },
                capital : [],
                population : '',
                currencies : {},
                languages : {},
                flags : {
                    png : ''
                }
            }
        ];
        fetch('https://restcountries.com/v3.1/all')
            .then(data => data.json())
            .then((data) => this.countryData = data)
            .then(this.randomizeCountry);
    }
    state = {
        countryNumber : 0,
    }
    randomizeCountry = () =>{
        const randomNumber = Math.floor(Math.random() * this.countryData.length);
        this.setState({countryNumber : randomNumber});
    }
    render() {
        return(
            <>
                <Header></Header>
                <Main selectCountry={this.randomizeCountry} countryObj={this.countryData.at(this.state.countryNumber)}></Main>
                <Footer></Footer>
            </>
        );
    }
}

export default RandomCountry;