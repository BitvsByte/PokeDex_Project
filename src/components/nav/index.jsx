import React from "react";
import './style.css';
import pokeletra from '../../assets/fonts/Pokemonsolid.ttf'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logopoke.png';


function Navi(props) {


    return (
        <React.Fragment>
            <header className='container'>
                <div className='pokedex__title'>

                    <Link to="/"><img className='pokemon___header__on' src={logo}></img></Link>

                </div>
                <form>
                    <div className='input__container'>
                        <input className="input__search" placeholder="Search" onChange={props.change}></input>
                    </div>
                </form>

                <nav>
                    <Link to="/contacto"><p className='letters__suscribete'>Suscribete</p></Link>
                </nav>
                <nav>
                    <Link to="/landingpage"><p className='letters__suscribete'>logueate</p></Link>
                </nav>

            </header>

        </React.Fragment>
    )
}

export default Navi;
