import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import pkowImage from './images/Pkow.png'
import { showDate } from './utils/display-date-and-time'

class App extends React.Component {
  state = {
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time to change me',
    darkMode : false,
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }
  handleTime = () => {
    let message = showDate(new Date())
    this.setState({ message })
  }
  changeBackground = () => {
      this.setState({
        darkMode : !this.state.darkMode
      })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'P',
        lastName: 'kow',
      },
      date: new Date(),
    }
    const techs = ['HTML', 'CSS', 'JavaScript', 'Java', 'C++', 'Qt']
    const user = { ...data.author, image: pkowImage }

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} darkMode={this.state.darkMode}/>
        <Main
          techs={techs}
          handleTime={this.handleTime}
          changeBackground={this.changeBackground}
          handleLogin={this.handleLogin}
          message={this.state.message}
          user={user}
          darkMode={this.state.darkMode}
        />

        <Footer date={new Date()} darkMode={this.state.darkMode} />
      </div>
    )
  }
}

export default App
