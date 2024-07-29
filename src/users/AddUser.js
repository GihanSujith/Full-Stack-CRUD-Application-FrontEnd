import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddUser.css'; // Assuming you have a CSS file for custom styles

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card shadow-lg'>
            <div className='card-header bg-primary text-white d-flex justify-content-between align-items-center'>
              <h2 className='mb-0'>Register User</h2>
              <Link to="/" className='btn btn-light btn-sm'>
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                  <label htmlFor='Name' className='form-label'>
                    Name
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input
                      type={"text"}
                      className='form-control form-control-lg'
                      placeholder='Enter your name'
                      name='name'
                      value={name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='Username' className='form-label'>
                    Username
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user-tag"></i></span>
                    </div>
                    <input
                      type={"text"}
                      className='form-control form-control-lg'
                      placeholder='Enter your username'
                      name='username'
                      value={username}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='Email' className='form-label'>
                    E-mail
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                    </div>
                    <input
                      type={"email"}
                      className='form-control form-control-lg'
                      placeholder='Enter your e-mail address'
                      name='email'
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className='d-grid gap-2'>
                  <button type='submit' className='btn btn-primary btn-lg'>
                    Submit
                  </button>
                  <Link className='btn btn-danger btn-lg' to="/">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
