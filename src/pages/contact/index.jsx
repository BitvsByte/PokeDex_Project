import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navi from "../../components/nav";
import './style.css';
import logo from '../../assets/img/logopoke.png';







function Contact() {

    const [msgOk, updateResponse] = useState(false);
    const navigate =useNavigate();

    const handleSubmit = e => {
        // e.target === el formulario
        e.preventDefault(); // evitamos el refresco por defecto de pantalla
        fetch(`https://formsubmit.co/ajax/pepembesalduch@gmail.com`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.name.value,
                message: e.target.message.value
            })
        })
        .then(r => r.json())
        .then(() => updateResponse(true))

        // setTimeout(()=>{
        //     navigate('/')

        // },4000);

        
        .catch(error => console.log(error));
    }

    return (
        <React.Fragment>
           
            <div><Link to="/"></Link></div>

            <header className='container'>
                <div className='pokedex__title'>

                <Link to="/"><img className='pokemon___header__on' src={logo}></img></Link>

                </div>

            </header>

            <section className='contact__container'>
                <h1 className='titules__pokemon'>Bienvenido, escriba sus PokeDatos</h1>
                {
                    msgOk ? <p>Su Poke-solicitud ha sido recibida...</p>
                        : ''
                }
                <form className='formulario' onSubmit={handleSubmit}>
                    <label className='label' for="html">Introduce tu PokeMail</label><br></br>
                        <input className="input__mode" type='email' name="email" placeholder="Introduzca su email"></input>
                        <label  className='label'for="html">Introduce tu PokeNombre</label><br></br>
                        <input className="input__mode" type='text' name="name" placeholder="introduzca su nombre"></input>
                        <label  className='label'for="html">Cuentanos</label><br></br>
                        <textarea className='text__area' name="message" placeholder="introduzca su mensaje"></textarea>
                        <button className='btn__contact' type="submit">Contactar</button>
                </form>

                {/* <a href="https://www.facebook.com/profile.php?id=100078188305102"><img src='../../social_facebook_box_blue_256_30649.png' alt="Muestra esta página en tu red social" /></a> */}
            </section>
        </React.Fragment>
    )
}
export default Contact;