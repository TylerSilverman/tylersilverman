import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
// import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';


const Directory = props => {
  const { state} = useContext(Store);
  const directory = state.auth.directory;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);

  const onAddUserClick = e => {
    console.log("add user button click")
    e.preventDefault();

    // directory(props.children)(dispatch);
  };

  const onDeleteUserClick = e => {
    console.log("add user button click")
    e.preventDefault();

    // directoryUser(props.children)(dispatch);
  };

  return (
    <div className="card text-center">
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
      <div className="card-body">{props.children}</div>
      <div className="table thread">
        <form>
           <table class="table">
              <thead class="thread">
                <label>
                  <th scope="col"><input placeholder="First Name:"></input></th>
                  <th scope="col"><input placeholder="Last Name:"></input></th>
                  <th scope="col"><input placeholder="Email Address:"></input></th>
                  <th scope="col"><input placeholder="Phone Number:"></input></th>
                  <th scope="col"><input placeholder="Location"></input></th>
                  </label>
                  <br></br>
                  <input type="submit" onClick={onAddUserClick} value="Add User" />
                  <input type="submit" onClick={onDeleteUserClick} value="Remove User" />
              </thead>
            </table>
            <div className="table thread">
           <table class="table">
              <thead class="thread">
                <tr>
                  <th scope="col">First Name:</th>
                  <th scope="col">Last Name:</th>
                  <th scope="col">Email Address:</th>
                  <th scope="col">Phone Number:</th>
                  <th scope="col">Location:</th>
                </tr>
              </thead>
            </table>
      </div>
          </form>
      </div>
    </div>
  );
}

export default Directory;