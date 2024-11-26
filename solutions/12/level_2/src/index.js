// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option value={value} key={value}> {label}</option>
))

class App extends Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '#000000',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      country: false,
      tel: false,
      dateOfBirth: false,
      favoriteColor: false,
      weight: false,
      gender: false,
      file: false,
      bio: false,
      skills: false,
    },
  }
  handleChange = (e) => {
    /*
    // we can get the name and value like this but we can also destructure it from e.target
    const name = e.target.name
    const value = e.target.value
    */
    let { name, value, type, checked } = e.target
    // [variablename] this we can make a value stored in a certain variable could be a key for an object, in this case a key for the state

    if (name === 'weight'){
      if(value < 0)
        value = 0;
    } 
    if (name === 'country'){
      if(!value.length)
        this.setState({ touched: { ...this.state.touched, [name]: true } })
    }

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name, value } = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true } })
  }
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      dateOfBirth: '',
      country: '',
      gender: '',
      skills: '',
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    }
    if (this.state.touched.lastName && this.state.lastName.length < 2) {
      errors.lastName = 'Last name must have at least 2 characters'
    }
    if(this.state.touched.email){
      if(this.state.email.length < 1)
        {
          errors.email = 'Email cannot be empty'
        }
        else if(!this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
          errors.email = 'Please enter correct email address'
        }
    }
    if(this.state.touched.tel){
      if(this.state.tel.length < 9){
        errors.tel = 'Please enter phone number'
      }
      else{
        const found = this.state.tel.match(/(\+[\d]{2}[\s]?)?[(]?[\d]{3}[)|-]?[\s]?[\d]{3}[-|\s]?[\d]{3,4}/gi)
        if(found === null || (found.at(0).length !== this.state.tel.length))
        {
          errors.tel = 'Please enter correct phone number'
        }
      }
    }
    if(this.state.touched.dateOfBirth && this.state.dateOfBirth.length === 0){
      errors.dateOfBirth = 'Please enter date of Birth'
    }
    if((this.state.touched.weight && this.state.weight.length === 0) || parseInt(this.state.weight) === 0)
    {
      errors.weight = 'Please input weight'
    }
    if(this.state.touched.country && this.state.country.length === 0){
      errors.country = 'Please select valid country'
    }
    if(this.state.touched.gender && this.state.gender.length === 0){
      errors.gender = "Please select gender";
    }
    let counter = 0;
    for(const key of Object.keys(this.state.skills))
      if(this.state.skills[key] === true){
        ++counter;
      }
    
    if(counter === 0)
      errors.skills = "Please select atleast 1 valid skill"
    return errors
  }


  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state
    let valid = true;

    //we have to feed all states at once, otherwise it wouldnt work cuz states does not change in the already executiung code
    const touchedCopy = this.state.touched;
    const errors = this.validate();
    for(const key of Object.keys(touchedCopy))
    {
      if(touchedCopy[key] === false){
        touchedCopy[key] = true;
        valid = false;
      }
    }
    this.setState({ touched: touchedCopy});
    if(!valid || Object.values(errors).filter((value) => value.length > 0).length > 0){
      return;
    }
    const formattedSkills = []
    for (const key in skills) {
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    console.log(data)
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation
    // console.log(this.state.touched);
    const 
    { 
      firstName, 
      lastName, 
      email,
      tel, 
      dateOfBirth,
      weight,
      country,
      gender,
      skills
   } = this.validate()
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              />{' '}
              <br />
              <small>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Last Name'
              />
              <br />
              <small>{lastName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Email'
              />
              <br />
              <small>{email}</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Tel'
            />
            <br />
            <small>{tel}</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
            <br />
            <small>{dateOfBirth}</small>
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder='Weight in Kg'
            />
            <br />
            <small>{weight}</small>
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select
              name='country'
              onChange={this.handleChange} 
              onBlur={this.handleBlur} 
              id='country'
              >
              {selectOptions} 
            </select>
            <br />
            <small>{country}</small>
          </div>

          <div onBlur={this.handleBlur}>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
          <small>{gender}</small>
          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <small>{skills}</small>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button onAbort={this.validate}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
