import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log(formData);
    // Reset the form
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };
  const register =async()=>{
        try{

        }catch(error){
            
        }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="username" 
                      name="username" 
                      placeholder="Enter username" 
                      value={formData.username} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      placeholder="Enter email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password" 
                      placeholder="Enter password" 
                      value={formData.password} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" onClick={register} className="btn btn-primary btn-block">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
