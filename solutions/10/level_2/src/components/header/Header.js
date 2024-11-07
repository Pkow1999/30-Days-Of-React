import React from 'react'
import { showDate } from '../../utils/display-date-and-time'

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
  darkMode,
}) => {
  let style;
  if(darkMode)
  {
    style = {backgroundColor: '#1f1f1f'}
  }
  return (
    <header style={style}>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName}{lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

export default Header
