import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  })

  const { name, username, email } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card shadow-lg border-primary'>
            <div className='card-header bg-primary text-white d-flex justify-content-between align-items-center'>
              <h2 className='mb-0'>Edit User</h2>
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
                  <input
                    type={"text"}
                    className='form-control form-control-lg'
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='Username' className='form-label'>
                    Username
                  </label>
                  <input
                    type={"text"}
                    className='form-control form-control-lg'
                    placeholder='Enter your username'
                    name='username'
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='Email' className='form-label'>
                    E-mail
                  </label>
                  <input
                    type={"text"}
                    className='form-control form-control-lg'
                    placeholder='Enter your e-mail address'
                    name='email'
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
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
