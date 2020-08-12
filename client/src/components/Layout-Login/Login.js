import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('SUCCESS')
  }

  return (
    <div className="card col-lg-4 mx-auto">
      <div className="card-body px-5 py-5">
        <h3 className="card-title text-left mb-3">Login</h3>
        <form  onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Username or email *</label>
            <input type="text" className="form-control p_input" name="email" value={email} onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" className="form-control p_input" name="password" value={password} onChange={e => onChange(e)} />
          </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" /> Remember me </label>
            </div>
            <a href="!#" className="forgot-pass">Forgot password</a>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
          </div>
          <div className="d-flex">
            <button className="btn btn-facebook mr-2 col">
              <i className="mdi mdi-facebook" /> Facebook </button>
            <button className="btn btn-google col">
              <i className="mdi mdi-google-plus" /> Google plus </button>
          </div>
          <p className="sign-up">Don't have an Account?<Link to="/register"> Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
