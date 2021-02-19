import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import { Link } from 'react-router-dom';

import API from '../../utils/apiHelper';

const Comment = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="container valign-wrapper" style={{ height: '50vh' }}>
      <div className="row">
      <Link to="/dashboard" className="btn btn-large waves-effect waves-light hoverable green accent-3" style={{
              width: '150px',
              borderRadius: '5px',
              letterSpacing: '1.5px',
            }}>
              Dashboard
        </Link>
      <button
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            style={
              {
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }
            }
            onClick={onLogoutClick}>
            Logout
          </button>
          <br></br>
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              Welcome to the Comment Section, please leave a comment below. 
            </p>
          </h4>
          <input></input>
          
        </div>
      </div>
      
    </div>
  );
};

export default Comment;
