// import React, { useEffect, useContext } from 'react';
// import { Store } from '../../store';
// import { logoutUser } from '../../store/actions/authActions';
// import { Link } from 'react-router-dom';

// import API from '../../utils/apiHelper';

// const Dashboard = props => {
//   const { state, dispatch } = useContext(Store);
//   const user = state.auth.user;

//   useEffect(() => {
//     if (!state.auth.isAuthenticated)
//       props.history.push('/login');

//     API.getUser()
//       .then(res => console.log({ res }))
//       .catch(err => console.log({ err }));
//   }, [state, props]);

//   const onLogoutClick = e => {
//     e.preventDefault();

//     logoutUser(props.history)(dispatch);
//   };

//   return (
//     <div className="container valign-wrapper" style={{ height: 'auto' }}>
//         <div className="row">
//           <div className="col s4">
//           <br></br>
//             <Link to="/dashboard" className="btn btn-large waves-effect waves-light hoverable green accent-3 " style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Dashboard
//             </Link>
//           </div>
//         <div className="col s12 center-align">
//           <h4>
//             <b>Welcome to my personal Site,{'  '}</b> {user.name.split(' ')[0]}
//             <p className="flow-text grey-text text-darken-1">
//               You are now logged in to the dashboard !!{' '}
//             </p>
//           </h4>
//           <div className="col s3">
//             <Link to="/search" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               PropertyAPI
//             </Link>
//           </div>
//           <div className="col s3">
//             <Link to="/notes" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Notes
//             </Link>
//           </div>
//           <div className="col s3">
//             <Link to="/application" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Application
//             </Link>
//           </div>
//           <div className="col s3">
//             <Link to="/directory" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Directory
//             </Link>
//           </div>
//           <div className="col s3">
//             <br></br><br></br>
//             <Link to="/admin" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Admin
//             </Link>
//           </div>
//           <div className="col s3">
//           <br></br><br></br>
//             <Link to="/email" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Email
//             </Link>
//           </div>
//           <div className="col s3">
//           <br></br><br></br>
//             <Link to="/calendar" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Calendar
//             </Link>
//           </div>
//           <div className="col s3">
//           <br></br><br></br>
//             <Link to="/" className="btn btn-large waves-effect waves-light hoverable yellow accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               TBD
//             </Link>
//           </div>
//           <div className="col s3">
//             <br></br><br></br>
//             <Link to="/helpdesk" className="btn btn-large waves-effect waves-light hoverable red accent-3 black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               HelpDesk
//             </Link>
//           </div>
//         </div>
//         <br></br>
//         <button
//             className="btn btn-large waves-effect waves-light hoverable red accent-3"
//             style={
//               {
//                 width: '150px',
//                 borderRadius: '2px',
//                 letterSpacing: '1.5px',
//               }
//             }
//             onClick={onLogoutClick}>
//             Logout
//           </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

import API from '../../utils/apiHelper';

const Dashboard = props => {
  const { state } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

 
  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
               <span style={{ fontFamily: 'monospace' }}>{' '}</span> 
            </p>
            <p className="flow-text grey-text text-darken-1">
               <span style={{ fontFamily: 'monospace' }}> My name is Tyler Silverman. Please feel free to click around the site and see some of the work I have done. {' '}</span> 
            </p>
          </h4>
          <br></br>
          <Link to="/Project" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Enjoy Viewing my latest projects"),
               console.info("View projects");
        }}>View Projects</Link>
        <br></br>
        <a href="https://github.com/TylerSilverman" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to my Github Profile"),
              console.info("github");
        }}>GitHub</a>
          <a href="mailto:silverman.tyler@gmail.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Microsoft Email"),
              console.info("Button Directs to Microsoft Email");
        }}>Email</a>
        <br></br>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/7325176/TylerSilverman-Resume2021.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Successfully downloaded my resume"),
              console.info("resume");
        }}>Resume</a>
        <br></br>
        <a href="https://www.linkedin.com/in/tylersilverman101/" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to my LinkedIn Profile"),
               console.info("linkedin");
        }}>LinkedIn</a>
        <br></br>
        <a href="https://www.silvermanallaround.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to silvermanallaround"),
               console.info("silverman all around site");
        }}>Silverman All Around</a>
        <br></br>
        <a href="https://www.silvermanllc.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Silverman Site"),
               console.info("silverman llc site");
        }}>Silverman LLC</a>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
