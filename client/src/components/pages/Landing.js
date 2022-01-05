// import React, { useContext } from 'react';
// import { Store } from '../../store';
// import { Link } from 'react-router-dom';

// const Landing = props => {
//   const { state } = useContext(Store);

//   console.log({ state, props });

//   return (
//     <div className="container valign-wrapper" style={{ height: '75vh' }}>
//       <div className="row">
//         <div className="col s12 center-align">
//           <h4>
//             <b>Welcome</b>{' '} 
//           </h4>
//           <p className="flow-text grey-text text-darken-1">
//             Please Register or Login to begin
//           </p>
//           <br />
//           <div className="col s6">
//             <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Register
//             </Link>
//           </div>
//           <div className="col s6">
//             <Link to="/login" className="btn btn-large btn-flat waves-effect yellow black-text" style={{
//               width: '140px',
//               borderRadius: '3px',
//               letterSpacing: '1.5px',
//             }}>
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;
import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container valign-wrapper" style={{ height: '75vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b></b>{' '} 
          </h4>
          <p className="flow-text grey-text text-darken-1">
      
          </p>
          <br />
          <div className="col s6">
            <Link to="/register" className="btn btn-red waves-effect waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn btn-green waves-effect waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
        <br></br>
        <Link to="/application" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Enjoy Viewing my latest projects"),
               console.info("View projects");
        }}>View Projects</Link>
        <br></br>
        <a href="https://github.com/TylerSilverman" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to my Github Profile"),
              console.info("github");
        }}>GitHub</a>
        <br></br>
        <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6657776/TylerSilverman-Resume.pdf" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("You now downloaded my resume, Thank you !"),
              console.info("resume");
        }}>Tech - Resume</a>
        <br></br>
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
        {/* <a href="https://www.silvermanallaround.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to silvermanallaround"),
               console.info("silverman all around site");
        }}>Silverman All Around</a>
        <br></br>
        <a href="https://www.silvermanllc.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Silverman Site"),
               console.info("silverman llc site");
        }}>Silverman LLC</a> */}
        <br></br> <br></br> 
        
        <br></br> <br></br>
        <a href="https://www.silvermanallaround.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to silvermanallaround"),
               console.info("silverman all around site");
        }}>Silverman All Around</a>
        <br></br>
        <a href="https://www.silvermanllc.com" target="_blank" className="grey-text text-darken-1" class="card-title center" target="_blank" onClick={() => {
               alert ("Now directing you to Silverman Site"),
               console.info("silverman llc site");
        }}>Silverman LLC</a>
        <br></br>
      </div>
    </div>
  );
};

export default Landing;
