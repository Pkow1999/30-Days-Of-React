import React from 'react'
import Button from '../shared/Button'
import UserCard from '../user/UserCard'
import { buttonStyles } from '../../styles/button-styles'


// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

const Message = ({ message }) => (
  <div
    style={{
      border: '2px solid #1f1f1f',
      margin: 25,
      padding: 10,
    }}
  >
    <h3>{message}</h3>
  </div>
)

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    const {
      changeBackground,
      handleTime,
      message,
      user,
      techs,
      darkMode
    } = this.props

    let mainStyle;
    let butStyles = {};
    for(let key of Object.keys(buttonStyles))
      butStyles[key] = buttonStyles[key]
    if(darkMode)
    {
      mainStyle = {backgroundColor: 'rgb(85,85,85)', color: 'white'}
      butStyles.backgroundColor = '#1f1f1f'
    }
    return (
      <main style={mainStyle}>
        <div className='main-wrapper'>
          <UserCard user={user} />

          <p>Tech i am familliar with:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={butStyles}
            />{' '}
            <Button
              text='Change Background'
              onClick={changeBackground}
              style={butStyles}
            />
          </div>
          <div style={{ margin: 30 }}>
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

export default Main
