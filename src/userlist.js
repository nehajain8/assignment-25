import React, { Component } from 'react';
import PropTypes from 'prop-types';


const singleuser={name:"Naina",age:20};

class User extends Component {
  state = {
    singleuser:singleuser,
  }
  makeMeOlder = () => {
   const newState= singleuser;
   singleuser.age += 10;
   this.setState(
     {
        newState
     }
    )
  }
  greetings = () => {
   alert("Hello " + this.state.singleuser.name + " your age is " + this.state.singleuser.age);
  }
  render(){
    return (
      <div>
       <h1>{this.props.title}</h1>
       <div>
        <p> Your name is {this.state.singleuser.name} and age is {this.state.singleuser.age}</p>
       </div>
       <h1>Skills</h1>
       <ul>
       <li>{this.props.skill1}</li>
       <li>{this.props.skill2 }</li>
       </ul>
       <button onClick={this.makeMeOlder}>Make me older</button>
        <button onClick={this.greetings}>Greet</button>
      </div>
    );
  }
}


User.propTypes= {
  title: PropTypes.string,
  skill1: PropTypes.string,
  skill2: PropTypes.string
}
User.defaultProps ={
  title: "Hello",
  skill1: "listening music",
  skill2: "Writing code"
}




export default User;
