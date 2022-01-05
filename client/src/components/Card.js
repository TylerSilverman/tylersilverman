import React from "react";
import { Link } from 'react-router-dom';

function Card(props) {
  
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
          <form>
      <br></br>
      <div className="form-group"> 
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Property"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} console={props.value} className="btn btn-info">
          Search
        </button>
      </div>
    </form>
      <div className="card-header">
      </div>
      <div className="card-body">{props.children}
      </div>
    </div>
  );
}

export default Card;