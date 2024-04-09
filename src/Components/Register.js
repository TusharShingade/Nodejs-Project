import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

export default function Register() {

    const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    bdate: "",
    email: "",
    password: ""
  });

  const toChangeValue = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const registerUser = () => {
    const { name, bdate, email, password } = user;
    if (name && bdate && email && password) {
      axios.post("http://localhost:9000/register", user)
        .then(res => {
          alert(res.data.message);
          localStorage.setItem('userInfo', JSON.stringify({ ...user, active: true }));
          navigate("/login");
        })
        .catch(error => {
          alert("Registration failed. Please try again later.");
          console.error("Error:", error);
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh' }}>
      <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" ,backgroundImage:`url(https://c8.alamy.com/comp/2A53NPG/mans-hand-holding-social-network-userpics-connected-by-dotted-lines-2A53NPG.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registration
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-column mb-4">
                          <label htmlFor="name" className="form-label" style={{fontSize:'25px',color:'Red',fontStyle:'italic'}}>Enter Name:</label>
                          <input type="text"  name="name" value={user.name} onChange={toChangeValue} required/>
                        </div>

                        <div className="d-flex flex-column mb-4">
                          <label htmlFor="bdate" className="form-label" style={{fontSize:'25px',color:'Red',fontStyle:'italic'}}>Enter Birth Date:</label>
                          <input type="date"  name="bdate" value={user.bdate} onChange={toChangeValue} required/>
                        </div>

                        <div className="d-flex flex-column mb-4">
                          <label htmlFor="email" className="form-label" style={{fontSize:'25px',color:'Red',fontStyle:'italic'}}>Enter Email:</label>
                          <input type="email"  name="email" value={user.email} onChange={toChangeValue} required/>
                        </div>

                        <div className="d-flex flex-column mb-4">
                          <label htmlFor="password" className="form-label" style={{fontSize:'25px',color:'Red',fontStyle:'italic'}}>Enter Password:</label>
                          <input type="password"  name="password" value={user.password} onChange={toChangeValue} required/>
                        </div>

                        <button type="button" className="btn btn-primary mb-3" onClick={registerUser}> REGISTER </button>
                      </form>
                    </div>
                  </div>
                  <p>If you have login details</p> <Link to="/login" className='nav-link px-3 text-primary'>Login Here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
