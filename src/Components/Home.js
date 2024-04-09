import { Link, BrowserRouter as Routes, Route } from "react-router-dom";
import { Login } from './Login';

export function Home()
{
    return(
        

        
        <div style={{backgroundImage: "url('https://storage.googleapis.com/cdn.media.bluedot.so/bluedot.koreaexpose/wordpress/2017/05/emart.jpg')",backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', }}>
           
           
            <div style={{ width: '100%', height:"50px", fontSize:'30px', backgroundColor: "black", padding:"5px"}}>
           
              <nav style={{display:"flex", justifyContent:'flex-end', marginRight:'100px', color:'red', }} >
              <h1 style={{color:'gold', paddingRight:'950px'}}>Welcome</h1>
                <Link to="/login" style={{paddingRight:'50px',color:'gold',textDecoration:'none'}}>Sign-In</Link>
                <Link to="/register" style={{color:'gold',textDecoration:'none'}}>Sign-UP</Link>

              </nav>
            </div>
            
            
            
        </div>

       
    )
}