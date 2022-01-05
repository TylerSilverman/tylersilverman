import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

import API from '../../utils/apiHelper';

const Calendar = props => {
  const { state } = useContext(Store);
  const user = state.auth.user;
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);


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
            <b>Calendar {'  '}</b> {user.name.split(' ')[0]}
            <p> {year} </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
