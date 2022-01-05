import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import { Link } from 'react-router-dom';

import API from '../../utils/apiHelper';

const Admin = props => {
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
          <br></br><br></br>
          <br></br>
          <h4>
          <br></br><br></br>
          <br></br><br></br>
            <b>Admin ONLY {'  '}</b> {user.name.split(' ')[0]}
            <p>Exit or Not Be able to Do anything</p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Admin;