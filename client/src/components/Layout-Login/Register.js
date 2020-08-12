import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
import Alert from './Alert';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Nhập lại mật khẩu chưa đúng', 'danger');
    } else {
      register({ name, email, password });
    }
  }

  return (
    <div className="card col-lg-4 mx-auto">
      <div className="card-body px-5 py-5">
        <h3 className="card-title text-left mb-3">Register</h3>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control p_input" name="name" value={name} onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control p_input" name="email" value={email} onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control p_input" autoComplete="on" name="password" value={password} onChange={e => onChange(e)} />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control p_input" autoComplete="on" name="password2" value={password2} onChange={e => onChange(e)} />
            <Alert />
          </div>
          <div className="form-group d-flex align-items-center justify-content-between">
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" /> Remember me </label>
            </div>
            <a href="!#" className="forgot-pass">Forgot password</a>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block enter-btn">Register</button>
          </div>
          <div className="d-flex">
            <button className="btn btn-facebook col mr-2">
              <i className="mdi mdi-facebook" /> Facebook </button>
            <button className="btn btn-google col">
              <i className="mdi mdi-google-plus" /> Google plus </button>
          </div>
          <p className="sign-up text-center">Already have an Account?<Link to="/login"> Sign In</Link></p>
          <p className="terms">By creating an account you are accepting our<a href="!#"> Terms &amp; Conditions</a></p>
        </form>
      </div>
    </div>
  )
}

Register.propsTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert, register })(Register);
