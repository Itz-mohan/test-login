import * as React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        // const user = {
        //     name: this.state.name,
        //     password: this.state.password
        // }
        

        axios.post('http://localhost:3000/Users/signup', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  
  render() {
      const { name, password } = this.state
    return(
        <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            {/* <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div> */}

            <div className="form-group">
                <label>Username</label>
                <input type="text" name="name" value={name} className="form-control" placeholder="Enter username" onChange={this.handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={password} className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );
  }
}