import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import { Link } from 'react-router-dom';

import API from '../../utils/apiHelper';

const Application = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="container valign-wrapper" style={{ height: 'auto' }}>
      <div className="row">
        <div className="col s12 center-align">
          <div className="col s6">
          <br></br>
            <Link to="/dashboard" className="btn btn-large waves-effect waves-light hoverable green black-text accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Dashboard
            </Link>
          </div>
          <br></br>
          <br></br>
          <br></br><br></br>
          <h4>
            <b>Welcome to your application, {'  '}</b> {user.name.split(' ')[0]}
            <p>Below Click on the link and will download your application</p>
          </h4>        
          <div class="card mr-5 shadow p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title text-info">Right now its My resume, but need to change to application</h5>
          <p class="card-text">Click to Download Resume</p>
          <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/5815941/Resume.pdf"
            class="btn btn-link">Click Here</a>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Application;