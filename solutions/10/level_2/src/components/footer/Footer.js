import React from 'react'
const Footer = ({ date, darkMode }) => {
  let style;
  if(darkMode)
  {
    style = {backgroundColor: '#1f1f1f'}
  }
  return (
    <footer style={style}>
      <div className='footer-wrapper'>
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
  )
}
export default Footer
