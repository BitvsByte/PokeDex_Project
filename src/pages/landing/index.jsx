import {Navigate, useNavigate} from 'react-router-dom'
import Navi from "../../components/nav";
import React from "react";

import './style.css';




function LandingPage() {
  const navigate = useNavigate();


  const loginSubmit = e =>{
    e.preventDefault();

    if(e.target.user.value ===''){
      console.log('te has colado')
    }else{
      localStorage.setItem('user', e.target.user.value);
      navigate('/pokelist')
      
    }
    

  }

{/* <form onSubmit={loginSubmit}></form> */}

  return (
    <React.Fragment>
      <Navi></Navi>
      <div className="forma__container">
        <h1>Escribe tu usuario y contraseña</h1>
        <form onSubmit={loginSubmit}>
          <div>
            <label className="label__style" htmlFor="user">
              User:
            </label>
            <input
              className="input__style"
              id="user"
              name="user"
              placeholder="introduzca su usuario"
            ></input>
          </div>
          <div>
            <label className="label__style" htmlFor="pass">
              Password:
            </label>
            <input
              className="input__style"
              id="pass"
              name="pass"
              type="password"
              placeholder="introduzca su contraseña"
            ></input>
          </div>
          <button className="btn__style" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default LandingPage;