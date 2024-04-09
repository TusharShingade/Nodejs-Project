import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";



export default function Login()
{

    const navigate = useNavigate();
    const [user, setUser]= useState({
        email:"",
        password:""
    })

   

    const toChangeValue = e => {
        const { name, value } = e.target; // Fix typo: 'valve' to 'value'
        setUser({
            ...user,
            [name]: value
        });
      }
const userLogin = () =>{
    axios.post("http://localhost:9000/login", user)
    .then( res => alert(res.data.message))
    localStorage.setItem('userInfo', JSON.stringify({ ...user, active: true }));
    navigate("/userhome");
}


    return(

        <div style={{backgroundImage:`url(https://storage.googleapis.com/cdn.media.bluedot.so/bluedot.koreaexpose/wordpress/2017/05/emart.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh' }}>
            
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col-lg-8 col-xl-9">
                            <div className="card text-black" style={{ borderRadius: "25px" , backgroundImage:`url(https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}>
                                <div className="card-body p-md-5" >
                                    <div className="row justify-content-center" >
                                        <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Login
                                            </p>
                                            {console.log(user)}
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Enter Email:</label>
                                                    <input type="email" className="form-control"  name="email" placeholder="Email" value={user.email} onChange={toChangeValue} required></input>
                                                      
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Enter Password:</label>
                                                    <input type="password" className="form-control" name="password" placeholder="password" value={user.password} onChange={toChangeValue} required></input>
                                                       
                                                </div>

                                                <button type="submit" className="btn btn-primary mb-3"  onClick={userLogin}>LOGIN</button>
                                                {/* <button type="reset" className="btn btn-primary mb-3" >CLEAR</button> */}
                                            </form>
                                            
                                        </div>
                                    </div>
                                </div>
                               
                               <p>New Users <Link to="/register" className='nav-link px-3 text-primary'>Register Here</Link></p>
                           
                            </div>
                        </div>
                    </div>
                </div>
              <div>
            </div>
         </div>
        
    )
}