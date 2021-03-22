import * as React from 'react';

export default class Login extends React.Component {
  render() {
    return(
      <form>
        <h3>Sign In</h3>
        <div className='form-group'>
            <label>Username</label>
            <input type='text' className='form-control' placeholder='Enter Username' />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='Enter Password' />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input type='checkbox' className='custom-control-input' id='customCheck1' />
            <label className='custom-control-label' htmlFor='customCheck1'>Remember me</label>
          </div>
        </div>

        <button type='submit' className='btn btn-primary btn-block'>Submit</button>
        <p className='forgot-password text-right'>
          Forgot <a href='#'>Password?</a>
        </p>
      </form>
    )
  }
}