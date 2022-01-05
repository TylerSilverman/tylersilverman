import React from "react";
import { Link } from 'react-router-dom';

import API from '../../utils/apiHelper';


class Search extends React.Component {
 
  handleClick = () => {
    console.log("handleClick function ")
    this.setState({skip: this.data.skip + 1})
  }


  render() {
    const {users, onSortByAge} = this.props;

    return (
      
      
      <div className="table thread">
        
           <table class="table">
              <thead class="thread">
                <tr>
                  <th scope="col">Images:</th>
                  <th scope="col" onClick={this.handleClick}>First Name:</th>
                  <th scope="col">Last Name:</th>
                  <th scope="col">Gender:</th>
                  <th scope="col">Email Address:</th>
                  <th scope="col">Phone Number:</th>
                  <th scope="col" onClick={onSortByAge}>Years Old</th>
                </tr>
              </thead>

              <tbody>
                {users && users.map ((user) => {
                  return (
                  <tr>
                  <td><img src={user.picture.medium}></img></td>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.dob.age}</td>
                  </tr>
                  )

                })}
              </tbody>
            </table>
      </div>
    )
  }
}
export default Search;