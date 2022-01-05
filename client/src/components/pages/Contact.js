import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { registerUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';


const Contact = props => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();

  useEffect(() => {
    if (state.auth.isAuthenticated)
      props.history.push('/dashboard');
  }, [ state, props ]);

  const onSubmit = e => {
    e.preventDefault();
    alert("Sorry for the inconvenience, as I am continually updating my site, please use the email tab on the main page to connect with me or please visit silvermanallaround.com Thank you!")
    dispatch(setErrors({ response: { data: {} } }));

    const contactData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
    };

    registerUser(contactData, props.history)(dispatch);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
                  <br></br>
          <div class="card">
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input ref={nameRef} error={errors.name} name="name" type="text"
                     className={classnames('', { invalid: errors.name })} />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input ref={emailRef} error={errors.email} name="email" type="email"
                     className={classnames('', { invalid: errors.email })} />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input ref={subjectRef} error={errors.subject} name="subject" type="text"
                     className={classnames('', { invalid: errors.subject })} />
              <label htmlFor="subject">Subject</label>
              <span className="red-text">{errors.subject}</span>
            </div>
            <div className="col s6" style={{ paddingLeft: '400.250px' }}>
              <button className="btn btn waves-effect waves-light blue hoverable accent-4" alert="Information Sent Successfully" onClick={() => {
              console.info("Submit Button Clicked");
            }}
                style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }} type="submit">
                Submit
              </button>
              <br></br>
            </div>
          </form>
          <br></br> <br></br>
          </div>
          <br></br> <br></br>
          <div class="card">
            <a href="mailto:silverman.tyler@gmail.com" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Redirecting to Microsoft Email"),
              console.info("Button Directs to Microsoft Email");
            }}>E-mail</a>
          </div>
          <div class="card">
            <a href="https://www.linkedin.com/in/tylersilverman101/" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Redirecting to Tyler Silverman LinkedIN"),
              console.info("linkedin");
            }}>LinkedIn</a>
          </div>
          <div class="card">
            <a href="https://github.com/TylerSilverman" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Redirecting to Tyler Silverman Github"),
              console.info("github");
            }}>GitHub</a>
          </div>
          <div class="card">
            <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6657776/TylerSilverman-Resume.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Successfully downloaded my Tech - Resume"),
              console.info("Techresume");
            }}>Tech - Resume</a>
          </div>
          <div class="card">
            <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/7325176/TylerSilverman-Resume2021.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Successfully downloaded my resume"),
              console.info("resume");
            }}>Resume</a>
          </div>
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to Portfolio
          </Link>  
        </div>
      </div>
    </div>
  );
};



export default Contact;
